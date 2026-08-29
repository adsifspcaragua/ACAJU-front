"use client";

import React from "react";
import SideBarAdmin from "../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';
import AdminEditor from "@/components/AdminEditor";
import GaleriaUpload from "@/components/GaleriaUpload"; 

export default function MiniMuseu() {
  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>

        <div style={styles.headerContainer}>
          <div style={styles.header}>
            <h1 style={styles.pageTitle}>Mini-Museu</h1>
            <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
          </div>
        </div>

        <div style={styles.card}>
          
          <GaleriaUpload 
            label="ARQUIVOS"
            titulo="CLIQUE PARA SELECIONAR FOTOS"
            destinationUrl="https://meu-servidor.com/upload"
          />

          <div style={styles.inputGroupFull}>
            <label style={styles.label}>DESCRIÇÃO</label>
            <AdminEditor />
          </div>

          <button type="submit" className="admin-submit-btn">Publicar</button>

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