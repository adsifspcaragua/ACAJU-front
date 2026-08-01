"use client";

import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import SideBarAdmin from "../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';

export default function GerenciarMultiroes() {
  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>

        <div style={styles.headerContainer}>
          <div style={styles.header}>
            <h1 style={styles.pageTitle}>Gerenciar Mutirões</h1>
            <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
          </div>
        </div>

        <form style={styles.card} onSubmit={(e) => e.preventDefault()}>
          
          <div style={styles.inputGroupFull}>
            <label style={styles.label}>NOME DO MUTIRÃO</label>
            <input 
              type="text" 
              placeholder="Ex: Limpeza da Foz do Rio Juqueriquerê 2026" 
              style={styles.input}
            />
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>TIPO DE MUTIRÃO</label>
              <select style={styles.select}>
                <option value="">Selecione uma opção...</option>
                <option value="limpeza">Limpeza</option>
                <option value="plantio">Plantio</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>DATA</label>
              <input type="date" style={styles.input} />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>HORÁRIO</label>
              <input 
                type="time" 
                defaultValue="08:00" 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>LOCAL</label>
              <input 
                type="text" 
                placeholder="Ex: Praia das Palmeiras ou Sede..." 
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>AMBIENTE DO LOCAL</label>
            <select style={styles.select}>
              <option value="">Selecione uma opção...</option>
              <option value="praia">Praia</option>
              <option value="rio">Rio</option>
              <option value="urbano">Urbano</option>
            </select>
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>IMAGEM DE CAPA DO MUTIRÃO</label>
            <Uploady destination={{ url: "https://meu-servidor.com/upload" }}>
              <div style={styles.uploadContainer}>
                <UploadButton style={styles.uploadButton}>Escolher arquivo</UploadButton>
                <span style={styles.uploadText}>Nenhum arquivo escolhido</span>
              </div>
            </Uploady>
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>DESCRIÇÃO CURTA</label>
            <textarea 
              placeholder="Descreva os objetivos, ponto de encontro e recomendações do mutirão..." 
              style={styles.textarea}
            />
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
    borderRadius: "20px",
    padding: "50px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    width: "100%",
    maxWidth: "950px",
    boxSizing: "border-box",
  },
  row: {
    display: "flex",
    gap: "28px",
    width: "100%",
    boxSizing: "border-box",
  },
  inputGroupFull: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    boxSizing: "border-box",
  },
  inputGroupHalf: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
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
  select: {
    width: "100%",
    height: "52px",
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "15px",
    color: "#374151",
    backgroundColor: "#ffffff",
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
    padding: "14px 36px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "flex-start",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "inherit",
  },
};