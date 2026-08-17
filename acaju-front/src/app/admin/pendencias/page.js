"use client";

import React from "react";
import SideBarAdmin from "../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';

const pendencias = [
  {
    id: 1,
    tipo: "NOTÍCIA",
    status: "AGUARDANDO",
    titulo: "Mutirão de Limpeza no Rio Juqueriquerê",
    autor: "Editor João",
    data: "10/10/2026"
  },
  {
    id: 2,
    tipo: "MUTIRÃO",
    status: "AGUARDANDO",
    titulo: "Reflorestamento de Restinga",
    autor: "Editora Maria",
    data: "11/10/2026"
  }
];

export default function Pendencias() {
  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>

        <div style={styles.headerContainer}>
          <div style={styles.header}>
            <h1 style={styles.pageTitle}>Pendências</h1>
            <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
          </div>
        </div>

        <div style={styles.listContainer}>
          {pendencias.map((item) => (
            <div key={item.id} style={styles.card}>
              
              <div style={styles.infoContainer}>
                <span style={styles.categoryBadge}>
                  {item.tipo} ({item.status})
                </span>
                <h2 style={styles.itemTitle}>{item.titulo}</h2>
                <span style={styles.metaText}>
                  Enviado por: {item.autor} em {item.data}
                </span>
              </div>

              <button type="button" style={styles.actionButton}>
                Analisar publicação
              </button>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    margin: 0
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
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
    maxWidth: "950px",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "24px 32px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    border: "2px solid #facc15", // Borda amarela conforme a imagem
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  categoryBadge: {
    fontSize: "11px",
    fontWeight: "bold",
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  itemTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1f2937",
    margin: 0,
  },
  metaText: {
    fontSize: "13px",
    color: "#9ca3af",
  },
  actionButton: {
    backgroundColor: "#085747",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "13px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "inherit",
    whiteSpace: "nowrap",
  },
};