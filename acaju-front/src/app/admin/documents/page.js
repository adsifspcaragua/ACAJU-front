"use client";

import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import SideBarAdmin from "../../../components/SideBarAdmin";

export default function RepositorioDocumentos() {
  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>
        
        <div style={styles.header}>
          <h1 style={styles.pageTitle}>Repositório de Documentos</h1>
          <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
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

          <button type="submit" style={styles.submitButton}>
            Subir Documento
          </button>

        </form>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#199a8a",
    backgroundImage: "linear-gradient(135deg, #0e4409 0%, #199a8a 100%)",
    fontFamily: "sans-serif",
    margin: 0,
  },
  mainContent: {
    flexGrow: 1,
    padding: "40px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  pageTitle: {
    color: "#ffffff",
    fontSize: "32px",
    fontWeight: "bold",
    margin: 0,
  },
  welcomeBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
    maxWidth: "1000px",
    boxSizing: "border-box",
  },
  inputGroupFull: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "100%",
  },
  label: {
    color: "#0c3110",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#374151",
    boxSizing: "border-box",
    outline: "none",
  },
  textarea: {
    width: "100%",
    height: "140px",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#374151",
    boxSizing: "border-box",
    resize: "none",
    outline: "none",
  },
  uploadContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "6px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    boxSizing: "border-box",
  },
  uploadButton: {
    backgroundColor: "#f3f4f6",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    padding: "8px 14px",
    fontSize: "13px",
    color: "#374151",
    cursor: "pointer",
  },
  uploadText: {
    color: "#9ca3af",
    fontSize: "13px",
  },
  submitButton: {
    backgroundColor: "#085747", 
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "14px 28px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "flex-start",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};