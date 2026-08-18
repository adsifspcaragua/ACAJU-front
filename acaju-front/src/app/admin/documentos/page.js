"use client";

import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import SideBarAdmin from "../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';

export default function RepositorioDocumentos() {
  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>

        <div style={styles.headerContainer}>
          <div style={styles.header}>
            <h1 style={styles.pageTitle}>Repositório de Documentos</h1>
            <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
          </div>
        </div>

        <form style={styles.card} onSubmit={(e) => e.preventDefault()}>
          
          <div style={styles.inputGroupFull}>
            <label style={styles.label}>NOME DO DOCUMENTO</label>
            <input 
              type="text" 
              placeholder="Ex: Estatuto da Associação 2026" 
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>DESCRIÇÃO DO DOCUMENTO</label>
            <textarea 
              placeholder="Escreva um breve resumo sobre o que trata este documento..." 
              style={styles.textarea}
            />
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>FICHEIRO (PDF)</label>
            <Uploady destination={{ url: "https://meu-servidor.com/upload" }}>
              <div style={styles.uploadContainer}>
                <UploadButton style={styles.uploadButton}>Escolher arquivo</UploadButton>
                <span style={styles.uploadText}>Nenhum arquivo escolhido</span>
              </div>
            </Uploady>
          </div>

          <button type="submit" style={styles.submitButton}>Publicar</button>

        </form>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    margin: 0,
  },
  mainContent: {
    flexGrow: 1,
    padding: "50px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    maxWidth: "950px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
    marginBottom: "40px",
    paddingBottom: "15px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  pageTitle: {
    color: "#ffffff",
    fontSize: "36px",
    fontWeight: "bold",
    margin: 0,
  },
  welcomeBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "50px",
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    width: "100%",
    maxWidth: "950px",
    boxSizing: "border-box",
  },
  inputGroupFull: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    boxSizing: "border-box",
  },
  label: {
    color: "#0c3110",
    fontSize: "13px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  input: {
    width: "100%",
    height: "52px",
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "15px",
    color: "#374151",
    boxSizing: "border-box",
    outline: "none",
    fontFamily: "inherit",
  },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "15px",
    color: "#374151",
    boxSizing: "border-box",
    resize: "none",
    outline: "none",
    fontFamily: "inherit",
  },
  uploadContainer: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    width: "100%",
    height: "52px",
    padding: "0 14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
  },
  uploadText: {
    color: "#9ca3af",
    fontSize: "14px",
    fontFamily: "inherit",
  },
  submitButton: {
    backgroundColor: "#085747",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "11px 36px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "inherit",
  },
};