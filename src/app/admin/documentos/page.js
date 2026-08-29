"use client";

import React, { useState, useEffect } from "react";
import SideBarAdmin from "../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';
import AdminEditor from "@/components/AdminEditor";

export default function RepositorioDocumentos() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
  };

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
            <AdminEditor/>
          </div>

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>FICHEIRO (PDF)</label>
            <div style={styles.uploadBox}>
              {isMounted ? (
                selectedFile ? (
                  <div style={styles.previewContainer}>
                    <span style={styles.fileName}>{selectedFile.name}</span>
                    <button 
                      type="button" 
                      onClick={handleRemoveFile} 
                      style={styles.removeButton}
                      title="Remover arquivo"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <label style={styles.uploadArea}>
                    <input 
                      type="file" 
                      accept=".pdf,application/pdf" 
                      onChange={handleFileChange} 
                      style={{ display: "none" }} 
                    />
                    <span style={styles.uploadButton}>Escolher arquivo</span>
                    <span style={styles.uploadText}>Nenhum arquivo escolhido</span>
                  </label>
                )
              ) : (
                <span style={styles.uploadText}>Carregando...</span>
              )}
            </div>
          </div>

          <button type="submit" className="admin-submit-btn">Publicar</button>

        </form>
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
  uploadBox: {
    width: "100%",
    height: "52px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: "0 14px",
    boxSizing: "border-box",
  },
  uploadArea: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    width: "100%",
    cursor: "pointer",
  },
  uploadButton: {
    backgroundColor: "#f3f4f6",
    color: "#111827",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "13.33px",
    border: "1px solid #767676",
    fontWeight: "normal",
    userSelect: "none",
  },
  uploadText: {
    color: "#6b7280",
    fontSize: "15px",
    fontFamily: "inherit",
  },
  previewContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100%",
  },
  fileName: {
    fontSize: "14px",
    color: "#374151",
    fontWeight: "500",
    flex: 1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  removeButton: {
    backgroundColor: "#ef4444",
    color: "#ffffff",
    border: "none",
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: 1,
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