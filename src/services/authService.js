// src/services/authService.js
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function autenticarAdmin(email, pass) {
  const admin = await prisma.aDM.findUnique({
    where: { email },
  });

  if (!admin) {
    return null;
  }

  const senhaValida = await bcrypt.compare(pass, admin.pass);
  if (!senhaValida) {
    return null;
  }

  const { pass: _, ...adminSemSenha } = admin;
  return adminSemSenha;
}

export async function cadastrarAdmin({ name, email, pass }) {

  const adminExiste = await prisma.aDM.findUnique({
    where: { email },
  });

  if (adminExiste) {
    throw new Error('EMAIL_DUPLICADO');
  }

  const hash = await bcrypt.hash(pass, 10);

  const novoAdmin = await prisma.aDM.create({
    data: {
      name,
      email,
      pass: hash,
    },
  });

  const { pass: _, ...adminSemSenha } = novoAdmin;
  return adminSemSenha;
}

export async function atualizarDadosAdmin({ id, name, email }) {
  const emailEmUso = await prisma.aDM.findFirst({
    where: {
      email,
      NOT: { id },
    },
  });

  if (emailEmUso) {
    throw new Error('EMAIL_DUPLICADO');
  }

  const adminAtualizado = await prisma.aDM.update({
    where: { id },
    data: { name, email },
  });

  const { pass: _, ...adminSemSenha } = adminAtualizado;
  return adminSemSenha;
}

export async function alterarSenhaAdmin({ id, currentPass, newPass }) {
  const admin = await prisma.aDM.findUnique({
    where: { id },
  });

  if (!admin) {
    throw new Error('USUARIO_NAO_ENCONTRADO');
  }

  const senhaAtualValida = await bcrypt.compare(currentPass, admin.pass);
  if (!senhaAtualValida) {
    throw new Error('SENHA_INCORRETA');
  }

  const novoHash = await bcrypt.hash(newPass, 10);

  await prisma.aDM.update({
    where: { id },
    data: { pass: novoHash },
  });

  return true;
}