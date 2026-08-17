"use client";

import React, { useCallback, useEffect, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { 
  FORMAT_TEXT_COMMAND, 
  FORMAT_ELEMENT_COMMAND, 
  $getSelection, 
  $isRangeSelection,
  REDO_COMMAND,
  UNDO_COMMAND
} from "lexical";
import { TOGGLE_LINK_COMMAND, LinkNode } from "@lexical/link";
import { $patchStyleText, $getSelectionStyleValueForProperty } from "@lexical/selection";

const FONT_FAMILY_OPTIONS = [
  "Arial",
  "Courier New",
  "Georgia",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana"
];

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("16");
  const [isInsertOpen, setIsInsertOpen] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      
      const currentFont = $getSelectionStyleValueForProperty(selection, "font-family", "Arial");
      const currentSize = $getSelectionStyleValueForProperty(selection, "font-size", "16px");
      
      setFontFamily(currentFont.replace(/['"]/g, ""));
      setFontSize(currentSize.replace("px", ""));
    }
  }, []);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    });
  }, [editor, updateToolbar]);

  // Aplica alterações de estilo CSS no texto selecionado
  const applyStyleText = (styles) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, styles);
      }
    });
  };

  const handleFontFamilyChange = (e) => {
    const val = e.target.value;
    setFontFamily(val);
    applyStyleText({ "font-family": val });
  };

  const handleFontSizeChange = (newSize) => {
    const numSize = Math.max(8, Math.min(72, Number(newSize) || 16));
    setFontSize(String(numSize));
    applyStyleText({ "font-size": `${numSize}px` });
  };

  const insertLink = () => {
    const url = prompt("Digite a URL do link:");
    if (url) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
    }
  };

  return (
    <div style={styles.toolbar}>
      {/* Histórico */}
      <button type="button" onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)} style={styles.toolbarButton} title="Desfazer">↺</button>
      <button type="button" onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)} style={styles.toolbarButton} title="Refazer">↻</button>

      <span style={styles.separator} />

      {/* Tipo de Fonte */}
      <div style={styles.selectWrapper}>
        <span style={styles.fontIcon}>T</span>
        <select value={fontFamily} onChange={handleFontFamilyChange} style={styles.select}>
          {FONT_FAMILY_OPTIONS.map((font) => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
      </div>

      <span style={styles.separator} />

      {/* Tamanho da Fonte (- 16 +) */}
      <div style={styles.sizeContainer}>
        <button 
          type="button" 
          onClick={() => handleFontSizeChange(Number(fontSize) - 1)} 
          style={styles.sizeBtn}
        >
          -
        </button>
        <input 
          type="text" 
          value={fontSize} 
          onChange={(e) => handleFontSizeChange(e.target.value)} 
          style={styles.sizeInput} 
        />
        <button 
          type="button" 
          onClick={() => handleFontSizeChange(Number(fontSize) + 1)} 
          style={styles.sizeBtn}
        >
          +
        </button>
      </div>

      <span style={styles.separator} />

      {/* Formatação Básica */}
      <button
        type="button"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        style={{ ...styles.toolbarButton, fontWeight: "bold", backgroundColor: isBold ? "#e2e8f0" : "transparent" }}
        title="Negrito"
      >
        B
      </button>
      <button
        type="button"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        style={{ ...styles.toolbarButton, fontStyle: "italic", backgroundColor: isItalic ? "#e2e8f0" : "transparent" }}
        title="Itálico"
      >
        I
      </button>
      <button
        type="button"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
        style={{ ...styles.toolbarButton, textDecoration: "underline", backgroundColor: isUnderline ? "#e2e8f0" : "transparent" }}
        title="Sublinhado"
      >
        U
      </button>

      <span style={styles.separator} />

      {/* Link */}
      <button type="button" onClick={insertLink} style={styles.toolbarButton} title="Inserir Link">
        🔗
      </button>

      <span style={styles.separator} />

      {/* Alinhamentos */}
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")} style={styles.toolbarButton} title="Esquerda">⬅</button>
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")} style={styles.toolbarButton} title="Centralizar">⬌</button>
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")} style={styles.toolbarButton} title="Direita">➡</button>
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify")} style={styles.toolbarButton} title="Justificado">≡</button>

      <span style={styles.separator} />

      {/* Menu Insert */}
      <div style={{ position: "relative" }}>
        <button 
          type="button" 
          onClick={() => setIsInsertOpen(!isInsertOpen)} 
          style={styles.insertDropdownBtn}
        >
          + Insert ▼
        </button>
        {isInsertOpen && (
          <div style={styles.dropdownMenu}>
            <div style={styles.dropdownItem} onClick={() => { alert("Recurso de Imagem"); setIsInsertOpen(false); }}>Image</div>
            <div style={styles.dropdownItem} onClick={() => { alert("Recurso de Tabela"); setIsInsertOpen(false); }}>Table</div>
            <div style={styles.dropdownItem} onClick={() => { alert("Recurso de Vídeo Youtube"); setIsInsertOpen(false); }}>Youtube Video</div>
            <div style={styles.dropdownItem} onClick={() => { alert("Linha Horizontal"); setIsInsertOpen(false); }}>Horizontal Rule</div>
          </div>
        )}
      </div>
    </div>
  );
}

const editorConfig = {
  namespace: "AcajuAdminEditor",
  nodes: [LinkNode],
  theme: {
    paragraph: "editor-paragraph",
    link: "editor-link",
  },
  onError(error) {
    console.error("Erro no Lexical:", error);
  },
};

export default function AdminEditor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div style={styles.editorContainer}>
        <ToolbarPlugin />
        <div style={styles.editorInner}>
          <RichTextPlugin
            contentEditable={<ContentEditable style={styles.contentEditable} />}
            placeholder={<div style={styles.placeholder}>Escreva o conteúdo aqui...</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
const styles = {
  editorContainer: {
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    color: "#374151",
    fontFamily: "sans-serif",
    width: "100%",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    gap: "3px",
    padding: "6px 8px",
    borderBottom: "1px solid #d1d5db",
    backgroundColor: "#f9fafb",
    flexWrap: "nowrap", // Impede a quebra para a segunda linha
    overflowX: "auto",  // Garante usabilidade em telas menores sem quebrar o layout
    whiteSpace: "nowrap",
    position: "relative",
  },
  toolbarButton: {
    backgroundColor: "transparent",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    minWidth: "32px",
    height: "32px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  selectWrapper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    padding: "0 4px",
    height: "32px",
    backgroundColor: "#ffffff",
    flexShrink: 0,
  },
  fontIcon: {
    fontSize: "13px",
    fontWeight: "bold",
    marginRight: "2px",
    color: "#6b7280",
  },
  select: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: "12px",
    color: "#374151",
    cursor: "pointer",
    maxWidth: "110px", // Limita o tamanho do select para economizar espaço
  },
  sizeContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1px",
    flexShrink: 0,
  },
  sizeBtn: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "4px",
    width: "26px",
    height: "32px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
  },
  sizeInput: {
    width: "32px",
    height: "32px",
    textAlign: "center",
    border: "1px solid #e5e7eb",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "600",
    outline: "none",
  },
  insertDropdownBtn: {
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    height: "32px",
    padding: "0 8px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
    color: "#374151",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    flexShrink: 0,
  },
  dropdownMenu: {
    position: "absolute",
    top: "38px",
    left: "0",
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    zIndex: 10,
    width: "180px",
    display: "flex",
    flexDirection: "column",
  },
  dropdownItem: {
    padding: "10px 14px",
    fontSize: "13px",
    color: "#374151",
    cursor: "pointer",
    borderBottom: "1px solid #f3f4f6",
  },
  separator: {
    width: "1px",
    height: "20px",
    backgroundColor: "#d1d5db",
    margin: "0 2px",
    flexShrink: 0,
  },
  editorInner: {
    padding: "16px",
    position: "relative",
  },
  contentEditable: {
    minHeight: "180px",
    outline: "none",
    resize: "none",
    fontSize: "15px",
    color: "#374151",
  },
  placeholder: {
    position: "absolute",
    top: "16px",
    left: "16px",
    color: "#9ca3af",
    pointerEvents: "none",
    fontSize: "15px",
  },
};