'use server';

import { loginSchema, registerSchema, updateProfileSchema, changePasswordSchema } from '@/schemas/authSchema';
import { autenticarAdmin, cadastrarAdmin, atualizarDadosAdmin, alterarSenhaAdmin } from '@/services/authService';
import { createSession, deleteSession  } from '../lib/session'
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers'

export async function loginAction(prevState, formData) {
  const rawData = {
    email: formData.get('email'),
    pass: formData.get('pass'),
  };

  const validation = loginSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: 'Preencha os campos corretamente.',
    };
  }

  const { email, pass } = validation.data;

  const admin = await autenticarAdmin(email, pass);

  if (!admin) {
    return {
      message: 'E-mail ou senha incorretos.',
    };
  }

  // 3. (Futura criação do cookie de sessão/JWT aqui)
  await createSession(admin.id);
  // 4. Redireciona para a área administrativa
  redirect('/admin/meuPerfil');
}


export async function registerAction(prevState, formData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    pass: formData.get('pass'),
  };

  const validation = registerSchema.safeParse(rawData);
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: 'Preencha todos os campos corretamente.',
    };
  }

  try {
    await cadastrarAdmin(validation.data);
    revalidatePath('/admin');
    return { success: true, message: 'Administrador cadastrado com sucesso!' };
  } catch (error) {
    if (error.message === 'EMAIL_DUPLICADO') {
      return { message: 'Este e-mail já está cadastrado no sistema.' };
    }
    return { message: 'Erro interno ao cadastrar administrador.' };
  }
}

export async function updateProfileAction(prevState, formData) {
  console.log('--- [DEBUG UPDATE] ---');
  const rawData = {
    id: formData.get('id'),
    name: formData.get('name'),
    email: formData.get('email'),
  };
  console.log('1. Dados brutos recebidos:', rawData);

  const validation = updateProfileSchema.safeParse(rawData);

  if (!validation.success) {
    console.log('❌ Erro no Zod:', validation.error.flatten().fieldErrors);
    return {
      errors: validation.error.flatten().fieldErrors,
      message: 'Preencha os campos corretamente.',
    };
  }

  console.log('2. Dados validados pelo Zod:', validation.data);

  try {
    const res = await atualizarDadosAdmin(validation.data);
    console.log('3. Retorno do Prisma:', res);
    revalidatePath('/admin/meuPerfil');
    return { success: true, message: 'Dados atualizados com sucesso!' };
  } catch (error) {
    console.error('❌ Erro no Service/Prisma:', error);
    if (error.message === 'EMAIL_DUPLICADO') {
      return { message: 'Este e-mail já está em uso por outro administrador.' };
    }
    return { message: 'Erro ao atualizar informações.' };
  }
}

export async function changePasswordAction(prevState, formData) {
  const rawData = {
    id: formData.get('id'),
    currentPass: formData.get('currentPass'),
    newPass: formData.get('newPass'),
    confirmPass: formData.get('confirmPass'),
  };

  const validation = changePasswordSchema.safeParse(rawData);
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: 'Verifique os requisitos da nova senha.',
    };
  }

  try {
    await alterarSenhaAdmin(validation.data);
    return { success: true, message: 'Senha alterada com sucesso!' };
  } catch (error) {
    if (error.message === 'SENHA_INCORRETA') {
      return { message: 'A senha atual está incorreta.' };
    }
    return { message: 'Erro ao alterar a senha.' };
  }
}