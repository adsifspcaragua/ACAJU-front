"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SideBarAdmin from "../../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';

export default function AnalisePublicacao() {
  const router = useRouter();
  const [mostrarRejeicao, setMostrarRejeicao] = useState(false);
  const [justificativa, setJustificativa] = useState("");

  const handleAprovar = () => {
    // Aqui entrará o código do Prisma para aprovar
    router.push("/admin/pendencias");
  };

  const handleConfirmarRejeicao = () => {
    if (!justificativa.trim()) {
      alert("A justificativa é obrigatória.");
      return;
    }
    // Aqui entrará o código do Prisma para rejeitar com a justificativa
    router.push("/admin/pendencias");
  };

  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>
        <div style={styles.card}>
          
          <Link href="/admin/pendencias" style={styles.voltarLink}>
            ← Voltar para Pendências
          </Link>

          <div style={{ marginTop: "20px" }}>
            <span style={styles.tag}>MUTIRÃO (AGUARDANDO ANÁLISE)</span>
            <h1 style={styles.title}>Reflorestamento de Restinga</h1>
            <p style={styles.meta}>
              Enviado por: <strong style={{ color: "#374151" }}>Editora Maria</strong> em 11/10/2026
            </p>
          </div>

          <div style={styles.imagePlaceholder}>
            <span style={{ fontSize: "48px", color: "#9ca3af" }}>🖼️</span>
          </div>

          <p style={styles.description}>Plantio de mudas nativas na orla.</p>
          
          <hr style={styles.divider} />

          <div style={styles.buttonGroup}>
            <button onClick={handleAprovar} style={styles.btnAprovar}>
              Aprovar
            </button>
            <button onClick={() => setMostrarRejeicao(true)} style={styles.btnRejeitar}>
              Rejeitar
            </button>
          </div>

          {mostrarRejeicao && (
            <div style={styles.rejeicaoBox}>
              <label style={styles.label}>JUSTIFICATIVA DA REJEIÇÃO (OBRIGATÓRIO)</label>
              <textarea 
                value={justificativa}
                onChange={(e) => setJustificativa(e.target.value)}
                placeholder="Explique ao editor o motivo..."
                style={styles.textarea}
              />
              <button onClick={handleConfirmarRejeicao} style={styles.btnConfirmar}>
                Confirmar Envio do Feedback
              </button>
            </div>
          )}

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
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "40px",
    width: "100%",
    maxWidth: "800px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  voltarLink: {
    color: "#6b7280",
    textDecoration: "none",
    fontSize: "14px",
    display: "inline-block",
  },
  tag: {
    backgroundColor: "#fef08a",
    color: "#854d0e",
    padding: "4px 10px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  title: {
    fontSize: "28px",
    color: "#111827",
    margin: "15px 0 5px 0",
    fontWeight: "bold",
  },
  meta: {
    color: "#6b7280",
    fontSize: "14px",
    margin: 0,
  },
  imagePlaceholder: {
    height: "300px",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
    margin: "25px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #e5e7eb",
  },
  description: {
    color: "#374151",
    lineHeight: "1.6",
  },
  divider: {
    margin: "40px 0 30px 0",
    border: "none",
    borderTop: "1px solid #e5e7eb",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },
  btnAprovar: {
    backgroundColor: "#22c55e",
    color: "white",
    padding: "12px 35px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },
  btnRejeitar: {
    backgroundColor: "#ef4444",
    color: "white",
    padding: "12px 35px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },
  rejeicaoBox: {
    marginTop: "30px",
    padding: "25px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    backgroundColor: "#f8fafc",
    width: "80%",
    margin: "30px auto 0 auto",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    fontSize: "12px",
    marginBottom: "10px",
    color: "#1e293b",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    resize: "vertical",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  btnConfirmar: {
    backgroundColor: "#1e293b",
    color: "white",
    padding: "12px 30px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    width: "100%",
    marginTop: "15px",
  }
};