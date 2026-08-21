"use client";

import React, { useState } from "react";
import SideBarAdmin from "../../../components/SideBarAdmin";
import '@/app/admin/page.admin.css';

import { useActionState } from 'react';
import { registerAction } from '@/actions/auth';

export default function GestaoUsuarios() {
  const [state, formAction, isPending] = useActionState(registerAction, null);
  const [perfil, setPerfil] = useState("Administrador");

  return (
    <div style={styles.container}>
      <SideBarAdmin />

      <main style={styles.mainContent}>

        <div style={styles.headerContainer}>
          <div style={styles.header}>
            <h1 style={styles.pageTitle}>Gestão de Usuários</h1>
            <div style={styles.welcomeBadge}>BEM-VINDO, ADMINISTRADOR</div>
          </div>
        </div>

        <form action={formAction} style={styles.card}>

          <h2 style={styles.cardTitle}>Novo Usuário</h2>

          {/* Mensagens de Feedback */}
          {state?.message && (
            <p className={`text-sm text-center ${state.success ? 'text-green-600' : 'text-red-500'}`}>
              {state.message}
            </p>
          )}

          <div style={styles.row}>
            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>NOME COMPLETO</label>
              <input
                type="text"
                name="name"
                placeholder="Ex: Ana Julia Santana"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>E-MAIL</label>
              <input
                type="email"
                name="email"
                placeholder="Ex: anajulia@email.com"
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>TIPO DE PERFIL</label>
              <select
                value={perfil}
                onChange={(e) => setPerfil(e.target.value)}
                style={styles.select}
              >
                <option value="Administrador">Administrador</option>
                <option value="Editor">Editor</option>
              </select>
            </div>

            <div style={styles.inputGroupHalf}>
              <label style={styles.label}>SENHA PROVISÓRIA</label>
              <input
                type="password"
                name="pass"
                placeholder="Digite uma senha inicial..."
                style={styles.input}
                required
              />
              {state?.errors?.pass && (
                <span className="text-red-500 text-xs">{state.errors.pass[0]}</span>
              )}
            </div>
          </div>

          <button type="submit" disabled={isPending} style={styles.submitButton}>{isPending ? 'Cadastrando...' : 'Cadastrar'}</button>

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
  cardTitle: {
    margin: "0 0 10px 0",
    color: "#0c3110",
    fontSize: "18px",
    fontWeight: "bold",
    alignSelf: "center",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: "28px",
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
  select: {
    width: "100%",
    height: "52px",
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "15px",
    color: "#374151",
    boxSizing: "border-box",
    outline: "none",
    backgroundColor: "#ffffff",
    fontFamily: "inherit",
    cursor: "pointer",
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
    width: "fit-content",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "inherit",
  },
};