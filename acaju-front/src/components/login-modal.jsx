'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { loginAction } from '@/actions/auth';

export default function LoginModal() {
  // Conecta a Server Action ao estado do formulário
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>ACAJU</h2>
        <p style={styles.subtitle}>Painel Administrativo</p>
      </div>

      {/* Formulário usando diretamente a Server Action */}
      <form style={styles.form} action={formAction}>
        {/* Mensagem geral de erro vinda da Action */}
        {state?.message && (
          <p style={{ color: '#ef4444', fontSize: '14px', margin: 0, textAlign: 'center' }}>
            {state.message}
          </p>
        )}

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="admin@acaju.org"
            style={styles.input}
            required
          />
          {state?.errors?.email && (
            <span style={{ color: '#ef4444', fontSize: '12px' }}>
              {state.errors.email[0]}
            </span>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="pass">Senha</label>
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="••••••••"
            style={styles.input}
            required
          />
          {state?.errors?.password && (
            <span style={{ color: '#ef4444', fontSize: '12px' }}>
              {state.errors.password[0]}
            </span>
          )}
        </div>

        {/* Botão real de submit do formulário */}
        <button type="submit" disabled={isPending} style={styles.button}>
          {isPending ? 'Entrando...' : 'Entrar no Sistema'}
        </button>
      </form>

      <div style={styles.footer}>
        <Link href="/admin/register" style={styles.primaryLink}>
          Criar conta na plataforma
        </Link>
        <Link href="/admin/forgotPassword/" style={styles.secondaryLink}>
          Esqueci minha senha
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '440px',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  title: {
    color: '#1e4620',
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    margin: '0 0 4px 0',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '14px',
    margin: '0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    color: '#374151',
    fontSize: '14px',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#1f2937',
    boxSizing: 'border-box',
    outline: 'none',
  },
  button: {
    backgroundColor: '#023b36',
    color: '#ffffff',
    textAlign: 'center',
    border: 'none',
    borderRadius: '8px',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  primaryLink: {
    color: '#2e5c31',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'none',
  },
  secondaryLink: {
    color: '#6b7280',
    fontSize: '14px',
    textDecoration: 'none',
  },
};