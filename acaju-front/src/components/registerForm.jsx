'useclient';
import Link from 'next/link';

export default function RegisterForm() {
  return (
    <div style={styles.card}>
      
      <div style={styles.header}>
        <h2 style={styles.title}>Criar Conta</h2>
      </div>

      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nome Completo</label>
          <input
            type="text"
            placeholder="Seu nome"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>E-mail</label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Senha</label>
          <input
            type="password"
            placeholder="Mínimo 8 caracteres"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Solicitar Acesso</button>
      </form>

      <div style={styles.footer}>
        <Link href="../login/page.js" style={styles.link}>Voltar ao Login</Link>
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
    color: "#244d28", // Verde escuro idêntico ao título da imagem
    fontSize: "28px",
    fontWeight: "bold",
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
    color: "#475569", // Tom de azul/cinza para os labels da imagem
    fontSize: "14px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #e2e8f0",
    borderRadius: "6px",
    fontSize: "15px",
    color: "#1e293b",
    boxSizing: "border-box",
    outline: "none",
  },
  button: {
    backgroundColor: "#2e5c31", // Verde exato do botão "Solicitar Acesso"
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
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
    color: "#64748b", // Cor cinza discreta para o "Voltar ao Login"
    fontSize: "14px",
    textDecoration: "none",
  },
};