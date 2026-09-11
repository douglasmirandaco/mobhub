// Tipos que descrevem um MODELO de contrato: quais campos o time preenche
// e qual o texto (clausulado) que recebe esses campos via {{placeholder}}.
//
// Isso é o que torna o sistema "aberto para o time alterar": tanto fieldSchema
// quanto clauses são dados (JSON), editáveis pela UI de administração (/templates/[id]/edit)
// ou diretamente no banco — nunca é necessário mexer em código para:
//   - mudar o texto de uma cláusula
//   - adicionar/remover um campo do formulário
//   - ajustar um valor padrão (ex: percentual de gestão)

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "currency"
  | "date"
  | "select"
  | "email"
  | "cpf_cnpj"
  | "group" // repetível — lista de sub-registros (ex: lista de Carregadores)

export interface FieldOption {
  label: string;
  value: string;
}

export interface FieldDef {
  id: string; // chave usada no placeholder {{id}} e como nome do campo
  label: string;
  type: FieldType;
  section: string; // agrupamento visual no formulário (ex: "Comprador", "Eletroposto")
  required?: boolean;
  defaultValue?: string | number;
  options?: FieldOption[]; // para "select"
  helpText?: string;
  placeholder?: string;
  // Campos sensíveis (dados pessoais/bancários) — usados para:
  //  - mascarar em logs/telas de listagem
  //  - sinalizar na UI que o dado é protegido por LGPD
  sensitive?: boolean;
  // Para type "group": definição dos sub-campos de cada item da lista
  itemFields?: FieldDef[];
  // Para exibir/ocultar condicionalmente com base em outro campo (ex: mostrar "omValor" só se omModelo != "nao_contratado")
  showIf?: { field: string; equals: string };
}

export interface Clause {
  id: string; // ex: "clausula-8"
  title: string; // ex: "CLÁUSULA 8 — DO PREÇO E DAS CONDIÇÕES DE PAGAMENTO"
  // Corpo em texto simples com marcação leve:
  //   **negrito**    -> negrito
  //   \n\n           -> novo parágrafo
  //   linhas iniciando com "- " -> item de lista
  // e placeholders {{idDoCampo}} substituídos pelos valores preenchidos.
  body: string;
}

export interface ContractData {
  [fieldId: string]: string | number | Array<Record<string, string | number>> | undefined;
}
