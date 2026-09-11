import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Clause } from "@/types/template";
import { renderMarkdownLite } from "./markdownLite";

const styles = StyleSheet.create({
  page: { padding: "60 50", fontSize: 10, fontFamily: "Helvetica", color: "#111" },
  header: { marginBottom: 16, borderBottomWidth: 1, borderColor: "#333", paddingBottom: 8 },
  headerTitle: { fontSize: 9, color: "#555" },
  mainTitle: { fontSize: 13, fontFamily: "Helvetica-Bold", textAlign: "center", marginBottom: 4 },
  clauseTitle: { fontSize: 10.5, fontFamily: "Helvetica-Bold", marginTop: 12, marginBottom: 6 },
  footer: { position: "absolute", bottom: 24, left: 50, right: 50, fontSize: 8, color: "#888", flexDirection: "row", justifyContent: "space-between" },
});

interface ContractDocumentProps {
  documentTitle: string; // ex: "Contrato de Compra, Venda e Instalação"
  contractLabel: string; // ex: "Contrato nº 014/2026"
  clauses: Clause[];
  generatedAt: Date;
}

export function ContractDocument({ documentTitle, contractLabel, clauses, generatedAt }: ContractDocumentProps) {
  return (
    <Document title={documentTitle}>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header} fixed>
          <Text style={styles.headerTitle}>MHZ MOB — {documentTitle}</Text>
        </View>

        {clauses.map((clause, idx) => (
          <View key={clause.id} wrap>
            {idx === 0 ? (
              <Text style={styles.mainTitle}>{clause.title}</Text>
            ) : (
              <Text style={styles.clauseTitle}>{clause.title}</Text>
            )}
            {renderMarkdownLite(clause.body, clause.id)}
          </View>
        ))}

        <View style={styles.footer} fixed>
          <Text>{contractLabel}</Text>
          <Text render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} />
          <Text>Gerado em {generatedAt.toLocaleString("pt-BR")}</Text>
        </View>
      </Page>
    </Document>
  );
}
