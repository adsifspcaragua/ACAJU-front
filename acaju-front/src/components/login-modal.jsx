'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginModal() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3300/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password: pass })
      });

      const data = await response.json(); 

      if (response.ok) {
        console.log(data);
        alert(data.message || "Login realizado com sucesso!");

      } else {
        console.error('Erro no login', data);
        alert(data.error || data.message || "Ocorreu um erro ao fazer login.");

      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Não foi possível conectar ao servidor.");
      
    }
  }

  return (

    <div style={styles.card}>

      <div style={styles.header}>
        <h2 style={styles.title}>ACAJU</h2>
        <p style={styles.subtitle}>Painel Administrativo</p>
      </div>

      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor='email'>E-mail</label>
          <input
            type="email"
            id='email'
            name='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@acaju.org"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor='pass'>Senha</label>
          <input
            type="password"
            id='pass'
            name='pass'
            value={pass}
            onChange={(event) => setPass(event.target.value)}
            placeholder="••••••••"
            style={styles.input}
          />
        </div>

        <Link href="/admin/painelAdmin" style={styles.button}>Entrar no Sistema</Link>
      </form>

      <div style={styles.footer}>
        <Link href="/admin/register" style={styles.primaryLink}>Criar conta na plataforma</Link>
        <Link href="/admin/forgotPassword/" style={styles.secondaryLink}>Esqueci minha senha</Link>
      </div>
    </div>
  );
}
  
const styles = {
  card: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "440px",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  title: {
    color: "#1e4620",
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "1px",
    margin: "0 0 4px 0",
  },
  subtitle: {
    color: "#6b7280",
    fontSize: "14px",
    margin: "0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    color: "#374151",
    fontSize: "14px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#1f2937",
    boxSizing: "border-box",
    outline: "none",
  },
  button: {
    backgroundColor: "#023b36",
    color: "#ffffff",
    textAlign: "center",
    border: "none",
    borderRadius: "8px",
    padding: "14px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  footer: {
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  primaryLink: {
    color: "#2e5c31",
    fontSize: "14px",
    fontWeight: "500",
    textDecoration: "none",
  },
  secondaryLink: {
    color: "#6b7280",
    fontSize: "14px",
    textDecoration: "none",
  },
};