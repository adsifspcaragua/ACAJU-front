"use client";

import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import SideBarAdmin from "../../../components/SideBarAdmin";

export default function GerenciarMutiroes() {
  return (
    <div style={styles.container}>
      {/* 1. Barra Lateral Reutilizada */}
      <SideBarAdmin />

      {/* 2. Conteúdo Principal da Página */}
      <main style={styles.mainContent}>
        
        {/* Cabeçalho superior */}
        <div style={styles.header}>
          <h1 style={styles.pageTitle}>Gerenciar Mutirões</h1>
          <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
        </div>

        {/* Formulário Branco */}
        <form style={styles.card} onSubmit={(e) => e.preventDefault()}>
          
          {/* Nome do Mutirão */}
          <div style={styles.inputGroupFull}>
            <label style={styles.label}>NOME DO MUTIRÃO</label>
            <input 
              type="text" 
              placeholder="Ex: Limpeza da Foz do Rio Juqueriquerê 2026" 
              style={styles.input}
            />
          </div>

          {/* Tipo de Mutirão e Data (Lado a lado) */}
          <div style={styles.row}>
            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>TIPO DE MUTIRÃO</label>
              <select style={styles.select}>
                <option value="">Selecione uma opção...</option>
                <option value="limpeza">Limpeza</option>
                <option value="plantio">Plantio</option>
              </select>
            </div>

            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>DATA</label>
              <input type="date" style={styles.input} />
            </div>
          </div>

          {/* Local e Ambiente do Local (Lado a lado) */}
          <div style={styles.row}>
            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>LOCAL</label>
              <input 
                type="text" 
                placeholder="Ex: Praia das Palmeiras ou Sede..." 
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>AMBIENTE DO LOCAL</label>
              <select style={styles.select}>
                <option value="">Selecione uma opção...</option>
                <option value="praia">Praia</option>
                <option value="restinga">Restinga</option>
                <option value="mangue">Mangue</option>
                <option value="rio">Rio</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>

          {/* Imagem de Capa usando React Uploady */}
          <div style={styles.inputGroupFull}>
            <label style={styles.label}>IMAGEM DE CAPA DO MUTIRÃO</label>
            <Uploady destination={{ url: "https://meu-servidor.com/upload" }}>
              <div style={styles.uploadContainer}>
                <UploadButton style={styles.uploadButton}>Escolher arquivo</UploadButton>
                <span style={styles.uploadText}>Nenhum arquivo escolhido</span>
              </div>
            </Uploady>
          </div>

          {/* Descrição Curta */}
          <div style={styles.inputGroupFull}>
            <label style={styles.label}>DESCRIÇÃO CURTA</label>
            <textarea 
              placeholder="Descreva os objetivos, ponto de encontro e recomendações do mutirão..." 
              style={styles.textarea}
            />
          </div>

          {/* Botão de Envio */}
          <button type="submit" style={styles.submitButton}>
            Criar Mutirão
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
    backgroundColor: "#199a8a", // Gradiente/tom esverdeado do fundo da sua imagem
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
  row: {
    display: "flex",
    gap: "20px",
    width: "100%",
  },
  inputGroupFull: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "100%",
  },
  inputGroupHalf: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "50%",
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
  select: {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#374151",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
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
  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#374151",
    boxSizing: "border-box",
    resize: "none",
    outline: "none",
  },
  submitButton: {
    backgroundColor: "#085747", // O verde escuro exato do botão "Criar Mutirão"
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "14px 28px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "flex-start", // Mantém o botão alinhado na esquerda
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};