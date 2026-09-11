import React from "react";
import { Text, View } from "@react-pdf/renderer";

// Parser mínimo e propositalmente simples: só entende o subconjunto de markdown
// usado nas cláusulas dos templates (negrito **texto**, itens de lista "- ",
// tabelas "| a | b |" e parágrafos separados por linha em branco).
// Isso é suficiente porque o conteúdo é 100% autoral (nosso próprio clausulado),
// não markdown arbitrário vindo de fora.

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <Text key={`${keyPrefix}-${i}`} style={{ fontFamily: "Helvetica-Bold" }}>
          {part.slice(2, -2)}
        </Text>
      );
    }
    return <Text key={`${keyPrefix}-${i}`}>{part}</Text>;
  });
}

function isTableRow(line: string): boolean {
  return line.trim().startsWith("|") && line.trim().endsWith("|");
}

function renderTable(lines: string[], keyPrefix: string): React.ReactNode {
  const rows = lines
    .filter((l) => !/^\|[\s-|]+\|$/.test(l.trim())) // remove linha separadora ---|---
    .map((l) =>
      l
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((c) => c.trim())
    );

  return (
    <View key={keyPrefix} style={{ marginVertical: 6, borderWidth: 0.5, borderColor: "#999" }}>
      {rows.map((cells, rIdx) => (
        <View
          key={`${keyPrefix}-row-${rIdx}`}
          style={{
            flexDirection: "row",
            borderBottomWidth: rIdx < rows.length - 1 ? 0.5 : 0,
            borderColor: "#999",
            backgroundColor: rIdx === 0 ? "#eeeeee" : undefined,
          }}
        >
          {cells.map((cell, cIdx) => (
            <View
              key={`${keyPrefix}-cell-${rIdx}-${cIdx}`}
              style={{ flex: 1, padding: 4, borderRightWidth: cIdx < cells.length - 1 ? 0.5 : 0, borderColor: "#999" }}
            >
              <Text style={{ fontSize: 8, fontFamily: rIdx === 0 ? "Helvetica-Bold" : "Helvetica" }}>{cell}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

/** Converte um bloco de texto (corpo de cláusula) em elementos react-pdf. */
export function renderMarkdownLite(body: string, keyPrefix: string): React.ReactNode {
  const blocks = body.split(/\n\n+/);
  const nodes: React.ReactNode[] = [];

  blocks.forEach((block, bIdx) => {
    const lines = block.split("\n").filter((l) => l.trim() !== "");
    if (lines.length === 0) return;

    if (lines.every(isTableRow)) {
      nodes.push(renderTable(lines, `${keyPrefix}-tbl-${bIdx}`));
      return;
    }

    if (lines.every((l) => l.trim().startsWith("- "))) {
      nodes.push(
        <View key={`${keyPrefix}-ul-${bIdx}`} style={{ marginBottom: 6 }}>
          {lines.map((l, lIdx) => (
            <View key={`${keyPrefix}-li-${bIdx}-${lIdx}`} style={{ flexDirection: "row", marginBottom: 2 }}>
              <Text style={{ width: 10 }}>•</Text>
              <Text style={{ flex: 1, lineHeight: 1.4 }}>{renderInline(l.trim().slice(2), `${keyPrefix}-li-${bIdx}-${lIdx}`)}</Text>
            </View>
          ))}
        </View>
      );
      return;
    }

    nodes.push(
      <Text key={`${keyPrefix}-p-${bIdx}`} style={{ marginBottom: 6, lineHeight: 1.4, textAlign: "justify" }}>
        {renderInline(lines.join(" "), `${keyPrefix}-p-${bIdx}`)}
      </Text>
    );
  });

  return <>{nodes}</>;
}
