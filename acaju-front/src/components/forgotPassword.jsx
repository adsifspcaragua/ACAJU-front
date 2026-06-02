'use client';
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div style={styles.screenBackground}>
      <div style={styles.card}>
        
        <div style={styles.header}>
          <h2 style={styles.title}>Recuperar Senha</h2>
          <p style={styles.subtitle}>
            Insira seu e-mail para receber as instruções de redefinição.
          </p>
        </div>

        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail cadastrado</label>
            <input
              type="email"
              placeholder="seu-email@acaju.org"
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Enviar Link de Recuperação
          </button>
        </form>

        <div style={styles.footer}>
          <Link href="/admin/login" style={styles.link}>
            Voltar ao Login
          </Link>
        </div>

      </div>
    </div>
  );
}

const styles = {
  screenBackground: {
    backgroundColor: "#023b36",
    width: "100vw",
    minHeight: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    margin: 0,
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "460px",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  title: {
    color: "#023b36",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 0 10px 0",
  },
  subtitle: {
    color: "#4a5568",
    fontSize: "14px",
    lineHeight: "1.5",
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
    color: "#2d3748",
    fontSize: "14px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "15px",
    color: "#1a202c",
    boxSizing: "border-box",
    outline: "none",
  },
  button: {
    backgroundColor: "#011d1b",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "14px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  footer: {
    marginTop: "24px",
    textAlign: "center",
  },
  link: {
    color: "#718096",
    fontSize: "14px",
    textDecoration: "none",
  },
};