"use client";

import React from "react";
import Uploady from "@rpldy/uploady";
import SideBarAdmin from "../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';

export default function GaleriaDeFotos() {
  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>

        <div style={styles.headerContainer}>
          <div style={styles.header}>
            <h1 style={styles.pageTitle}>Galeria de Fotos</h1>
            <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
          </div>
        </div>

        <div style={styles.card}>
          
          <Uploady destination={{ url: "https://meu-servidor.com/upload" }}>
            <label style={styles.dropzone}>
              <input 
                type="file" 
                multiple 
                style={{ display: "none" }} 
              />
              <span style={{fontSize: "24px"}}>📸</span>
              <p style={styles.dropzoneText}>
                <strong>CLIQUE PARA SELECIONAR FOTOS</strong><br/>
                OU ARRASTE OS FICHEIROS PARA CÁ
              </p>
            </label>
          </Uploady>

          {/* Placeholder de "Sem imagens" alinhado à esquerda como na imagem */}
          <div style={styles.imagePlaceholder}>
            <span style={styles.placeholderText}>Sem imagens</span>
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>DESCRIÇÃO</label>
            <textarea style={styles.textarea} />
          </div>

          <button type="button" style={styles.submitButton}>
            Publicar
          </button>

        </div>
      </main>
    </div>
  );
}

const styles = {
   container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden", 
    margin: 0,
    backgroundColor: "transparent", 
  },
  mainContent: {
    flexGrow: 1,
    overflowY: "auto", 
    padding: "50px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "300px",
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
  imagePlaceholder: {
    width: "200px",
    height: "200px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "#f9fafb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#9ca3af",
    fontSize: "13px",
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
    textTransform: "uppercase",
  },
  textarea: {
    width: "100%",
    minHeight: "100px",
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "15px",
    color: "#374151",
    boxSizing: "border-box",
    resize: "vertical",
    outline: "none",
    fontFamily: "inherit",
  },
  submitButton: {
    backgroundColor: "#085747",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 34px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "inherit",
  },
};