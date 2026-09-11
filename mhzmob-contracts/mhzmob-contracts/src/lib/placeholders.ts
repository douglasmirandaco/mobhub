import { Clause, ContractData, FieldDef } from "@/types/template";

function formatValue(value: unknown): string {
  if (value === undefined || value === null || value === "") return "_____________";
  if (typeof value === "number") return value.toLocaleString("pt-BR");
  return String(value);
}

/** Renderiza um campo tipo "group" (ex: lista de Carregadores) como tabela em markdown-lite. */
function renderGroupAsTable(field: FieldDef, items: Array<Record<string, string | number>>): string {
  if (!items || items.length === 0) return "_Nenhum item cadastrado._";
  const cols = field.itemFields ?? [];
  const header = "| Nº | " + cols.map((c) => c.label).join(" | ") + " |";
  const separator = "|---|" + cols.map(() => "---").join("|") + "|";
  const rows = items.map((item, idx) => {
    const cells = cols.map((c) => formatValue(item[c.id]));
    return `| ${idx + 1} | ${cells.join(" | ")} |`;
  });
  return [header, separator, ...rows].join("\n");
}

/**
 * Substitui placeholders {{campo}} pelo valor preenchido, resolve blocos condicionais
 * {{#campo}}...{{/campo}} (renderizados só se o campo tiver valor) e transforma campos
 * "group" em tabelas automaticamente.
 */
export function fillPlaceholders(body: string, fields: FieldDef[], data: ContractData): string {
  let out = body;

  // Blocos condicionais simples: {{#campo}}texto{{/campo}}
  out = out.replace(/\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_match, fieldId: string, inner: string) => {
    const value = data[fieldId];
    return value ? inner : "";
  });

  const fieldMap = new Map(fields.map((f) => [f.id, f]));

  out = out.replace(/\{\{(\w+)\}\}/g, (_match, fieldId: string) => {
    const field = fieldMap.get(fieldId);
    const value = data[fieldId];

    if (field?.type === "group") {
      return renderGroupAsTable(field, (value as Array<Record<string, string | number>>) ?? []);
    }
    if (field?.type === "currency" && value !== undefined && value !== "") {
      const num = typeof value === "number" ? value : parseFloat(String(value).replace(",", "."));
      return isNaN(num) ? formatValue(value) : num.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    }
    return formatValue(value as string | number | undefined);
  });

  return out;
}

/** Resolve todas as cláusulas de um template com os dados de um contrato preenchido. */
export function resolveClauses(clauses: Clause[], fields: FieldDef[], data: ContractData): Clause[] {
  return clauses.map((clause) => ({
    ...clause,
    title: fillPlaceholders(clause.title, fields, data),
    body: fillPlaceholders(clause.body, fields, data),
  }));
}
