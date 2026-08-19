"use client";

import React, { useState, useEffect } from "react";
import Uploady, { useBatchAddListener } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import { FiPlus, FiTrash2, FiX } from "react-icons/fi";

function GaleriaConteudo({ titulo, label }) {
  const [arquivos, setArquivos] = useState([]);

  useBatchAddListener((batch) => {
    const novosArquivos = batch.items.map((item) => ({
      id: item.id,
      name: item.file.name,
      url: URL.createObjectURL(item.file),
    }));

    setArquivos((prev) => [...prev, ...novosArquivos]);
  });

  const removerFoto = (idParaRemover) => {
    setArquivos((prev) => prev.filter((item) => item.id !== idParaRemover));
  };

  const limparTudo = () => {
    setArquivos([]);
  };

  return (
    <div style={styles.inputGroupFull}>
      {label && <label style={styles.label}>{label}</label>}

      <div style={styles.selectBox}>
        {arquivos.length === 0 ? (

          <UploadButton className="galeria-upload-btn">
            <div style={styles.placeholderContent}>
              <span style={{ fontSize: "28px" }}>📸</span>
              <p style={styles.selectBoxTitle}>
                {titulo ? titulo.toUpperCase() : "CLIQUE PARA SELECIONAR FOTOS"}
              </p>
              <span style={styles.selectBoxSubtitle}>
                OU ARRASTE OS FICHEIROS PARA CÁ
              </span>
            </div>
          </UploadButton>
        ) : (

          <div style={styles.innerContainer}>
            <div style={styles.previewContainer}>
              {arquivos.map((item) => (
                <div key={item.id} style={styles.previewCard}>
                  <button
                    type="button"
                    onClick={() => removerFoto(item.id)}
                    style={styles.removeSingleBtn}
                    title="Remover foto"
                  >
                    <FiX size={14} color="#ffffff" />
                  </button>
                  <img src={item.url} alt={item.name} style={styles.previewImage} />
                  <span style={styles.previewName}>{item.name}</span>
                </div>
              ))}
            </div>

            <div style={styles.actionsBar}>
              <UploadButton className="btn-adicionar-mais">
                <FiPlus size={18} color="#085747" />
                <span>Adicionar mais fotos</span>
              </UploadButton>

              <button
                type="button"
                onClick={limparTudo}
                style={styles.btnClearAll}
              >
                <FiTrash2 size={16} color="#dc2626" />
                <span>Apagar todas</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GaleriaUpload({
  label = "FOTOS DO PROJETO",
  titulo = "CLIQUE PARA SELECIONAR FOTOS DO PROJETO",
  destinationUrl = "https://meu-servidor.com/upload",
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div style={styles.inputGroupFull}>
        {label && <label style={styles.label}>{label}</label>}
        <div style={styles.selectBox}>
          <p style={styles.selectBoxTitle}>Carregando módulo de upload...</p>
        </div>
      </div>
    );
  }

  return (
    <Uploady destination={{ url: destinationUrl }} multiple>
      <GaleriaConteudo titulo={titulo} label={label} />
    </Uploady>
  );
}

const styles = {
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
  selectBox: {
    width: "100%",
    minHeight: "160px",
    border: "2px dashed #d1d5db",
    borderRadius: "12px",
    backgroundColor: "#f8fafc",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  placeholderContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    width: "100%",
    pointerEvents: "none",
  },
  selectBoxTitle: {
    fontSize: "13px",
    fontWeight: "bold",
    color: "#1f2937",
    margin: "4px 0 0 0",
    textAlign: "center",
  },
  selectBoxSubtitle: {
    fontSize: "11px",
    color: "#4b5563",
    fontWeight: "500",
    textAlign: "center",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
  previewContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    justifyContent: "center",
    width: "100%",
  },
  previewCard: {
    position: "relative",
    width: "110px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "6px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  removeSingleBtn: {
    position: "absolute",
    top: "-6px",
    right: "-6px",
    backgroundColor: "#ef4444",
    border: "none",
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    zIndex: 10,
  },
  previewImage: {
    width: "100%",
    height: "85px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  previewName: {
    fontSize: "11px",
    color: "#374151",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    textAlign: "center",
  },
  actionsBar: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btnClearAll: {
    backgroundColor: "#ffffff",
    border: "1px solid #fca5a5",
    borderRadius: "6px",
    padding: "0 16px",
    height: "42px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#dc2626",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    boxSizing: "border-box",
  },
};