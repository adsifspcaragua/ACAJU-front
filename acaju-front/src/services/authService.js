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