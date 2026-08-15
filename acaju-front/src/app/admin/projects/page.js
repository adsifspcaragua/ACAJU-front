"use client";

import React, { useState, useEffect } from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import SideBarAdmin from "../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';

export default function GerenciarProjetos() {
  const [solicitarAnalise, setSolicitarAnalise] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>
        <div style={styles.headerContainer}>
          <div style={styles.header}>
            <h1 style={styles.pageTitle}>Gerenciar Projeto</h1>
            <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
          </div>
        </div>

        <form style={styles.card} onSubmit={(e) => e.preventDefault()}>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>TÍTULO DO PROJETO</label>
            <input 
              type="text" 
              placeholder="Ex: Preservação do Rio Juqueriquerê" 
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>OBJETIVO</label>
            <textarea 
              placeholder="Descreva de forma breve o objetivo..." 
              style={{...styles.textarea, height: "80px"}} 
            />
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>CORPO DO PROJETO (TEXTO DETALHADO)</label>
            <textarea 
              placeholder="Aprofunde o texto do projeto aqui..." 
              style={{...styles.textarea, height: "200px"}} 
            />
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>IMAGEM DE CAPA</label>

              {isMounted && (
                <Uploady destination={{ url: "https://meu-servidor.com/upload" }}>
                  <div style={styles.uploadContainer}>
                    <UploadButton style={styles.uploadButton}>Escolher arquivo</UploadButton>
                    <span style={styles.uploadText}>Nenhum arquivo escolhido</span>
                  </div>
                </Uploady>
              )}
            </div>

            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>VÍDEO</label>
              <input 
                type="text" 
                placeholder="insira aqui seu link do youtube" 
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>FOTOS DO PROJETO</label>
            <div style={styles.dropzone}>
                <span style={{fontSize: "24px"}}>📸</span>
                <p style={styles.dropzoneText}>
                    <strong>CLIQUE PARA SELECIONAR FOTOS DO PROJETO</strong><br/>
                    OU ARRASTE OS FICHEIROS PARA CÁ
                </p>
            </div>
          </div>

          <div style={styles.switchContainer}>
            <div 
                onClick={() => setSolicitarAnalise(!solicitarAnalise)}
                style={{
                    ...styles.switchTrack,
                    backgroundColor: solicitarAnalise ? "#085747" : "#e5e7eb"
                }}
            >
                <div style={{
                    ...styles.switchThumb,
                    transform: solicitarAnalise ? "translateX(20px)" : "translateX(0px)"
                }} />
            </div>
            <span style={styles.switchLabel}>Solicitar análise para aprovação</span>
          </div>

          <button type="submit" style={styles.submitButton}>
            Publicar
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
    textTransform: "uppercase",
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
  },
  uploadButton: {
    background: "none",
    border: "none",
    color: "#085747",
    fontWeight: "bold",
    cursor: "pointer",
  },
  dropzone: {
    width: "100%",
    height: "150px",
    border: "2px dashed #d1d5db",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
    cursor: "pointer",
    textAlign: "center",
    gap: "10px",
  },
  dropzoneText: {
    fontSize: "13px",
    color: "#374151",
    margin: 0,
    lineHeight: "1.5",
  },
  switchContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  switchTrack: {
    width: "44px",
    height: "24px",
    borderRadius: "12px",
    padding: "2px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    display: "flex",
    alignItems: "center",
  },
  switchThumb: {
    width: "20px",
    height: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    alignSelf: "center",
    transition: "transform 0.2s",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  switchLabel: {
    fontSize: "14px",
    color: "#374151",
    fontWeight: "500",
    alignSelf: "center",
  },
  submitButton: {
    backgroundColor: "#085747",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "16px 36px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "inherit",
  },
};