// src/schemas/authSchema.js
import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "O email deve ser uma string.",
      required_error: "O email é obrigatório."
    })
    .trim()
    .email({ message: 'Insira um e-mail válido.' }),

  pass: z
    .string({
      invalid_type_error: "A senha deve ser uma string.",
      required_error: "A senha é obrigatória."
    })
    .trim()
    .min(1, { message: 'A senha não pode estar vazia!' }),
});