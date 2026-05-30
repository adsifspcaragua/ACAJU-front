

import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviar link para:", email);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <h2 style={{ color: '#2a5028', fontSize: '24px', fontWeight: 'bold', margin: '0 0 10px 0' }}>
          Recuperar Senha
        </h2>
        
        <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 24px 0' }}>
          Insira seu e-mail para receber as instruções de redefinição.
        </p>

        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={styles.label}>
              E-mail cadastrado
            </label>
            <input
              type="email"
              id="email"
              placeholder="seu-email@acaju.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Enviar Link de Recuperação
          </button>
        </form>

        <Link href="/login" style={{ display: 'block', fontSize: '12px', color: '#6b7280', textDecoration: 'none', marginTop: '15px' }}>
          Voltar ao Login
        </Link>

      </div>
    </div>
  );
}


const styles = {
  container: {
    backgroundColor: '#2a5028',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    padding: '30px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  label: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#2a5028',
    textTransform: 'uppercase',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    backgroundColor: '#2a5028',
    color: '#ffffff',
    fontWeight: '600',
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },
};