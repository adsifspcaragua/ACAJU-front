'use server';

import { loginSchema } from '@/schemas/authSchema';
import { autenticarAdmin } from '@/services/authService';
import { redirect } from 'next/navigation';

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

  // 4. Redireciona para a área administrativa
  redirect('/admin/painelAdmin');
}