"use client";

import React, { useState } from "react";
import SideBarAdmin from "../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';

export default function GerenciarUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [perfil, setPerfil] = useState("");
  const [dataCadastro, setDataCadastro] = useState("");

  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>

        <div style={styles.headerContainer}>
          <div style={styles.header}>
            <h1 style={styles.pageTitle}>Meu Perfil</h1>
            <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
          </div>
        </div>

        <div style={styles.cardsWrapper}>
          
          <form style={styles.card} onSubmit={(e) => e.preventDefault()}>
            <h2 style={styles.cardTitle}>Informações do Usuário</h2>

            <div style={styles.row}>
              <div style={styles.inputGroupHalf}>
                <label style={styles.label}>NOME COMPLETO</label>
                <input 
                  type="text" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Ana Julia Santana"
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroupHalf}>
                <label style={styles.label}>E-MAIL</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: admin@acaju.org"
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroupHalf}>
                <label style={styles.label}>PERFIL DE ACESSO</label>
                <input 
                  type="text" 
                  value={perfil}
                  onChange={(e) => setPerfil(e.target.value)}
                  placeholder="Ex: Administrador"
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroupHalf}>
                <label style={styles.label}>DATA DE CADASTRO</label>
                <input 
                  type="text" 
                  value={dataCadastro}
                  onChange={(e) => setDataCadastro(e.target.value)}
                  placeholder="Ex: 15/01/2024"
                  style={styles.input}
                />
              </div>
            </div>

            <button type="submit" style={styles.submitButtonCenter}>
              Salvar Alterações
            </button>
          </form>

          <form style={styles.card} onSubmit={(e) => e.preventDefault()}>
            <h2 style={styles.cardTitle}>Alterar senha</h2>

            <div style={styles.row3Cols}>
              <div style={styles.inputGroupThird}>
                <label style={styles.label}>SENHA ATUAL</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroupThird}>
                <label style={styles.label}>NOVA SENHA</label>
                <input 
                  type="password" 
                  placeholder="Mínimo 8 caracteres" 
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroupThird}>
                <label style={styles.label}>CONFIRMAR NOVA SENHA</label>
                <input 
                  type="password" 
                  placeholder="Mínimo 8 caracteres" 
                  style={styles.input}
                />
              </div>
            </div>

            <button type="submit" style={styles.submitButtonCenter}>
              Alterar Senha
            </button>
          </form>

          <div style={styles.card}>
            <p style={styles.deleteNoticeText}>
              Ao excluir sua conta, você perderá permanentemente o acesso ao painel administrativo da ACAJU. Esta ação não poderá ser desfita.
            </p>

            <button type="button" style={styles.deleteButtonCenter}>
              Excluir Conta
            </button>
          </div>

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
  cardsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    width: "100%",
    maxWidth: "950px",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "40px 50px",
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
    boxSizing: "border-box",
  },
  cardTitle: {
    margin: 0,
    color: "#111827",
    fontSize: "18px",
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    gap: "28px",
    width: "100%",
    boxSizing: "border-box",
  },
  row3Cols: {
    display: "flex",
    gap: "20px",
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
  inputGroupThird: {
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
  deleteNoticeText: {
    color: "#4b5563",
    fontSize: "14px",
    lineHeight: "1.6",
    textAlign: "center",
    margin: "10px 0 0 0",
  },
  submitButtonCenter: {
    backgroundColor: "#085747",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "14px 32px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "center",
    width: "fit-content",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "inherit",
    marginTop: "8px",
  },
  deleteButtonCenter: {
    backgroundColor: "#d92d20 !important",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "14px 32px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "center",
    width: "fit-content",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "inherit",
  },
};