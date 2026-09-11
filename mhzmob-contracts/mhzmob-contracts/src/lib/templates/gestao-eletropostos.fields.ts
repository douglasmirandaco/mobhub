import { FieldDef } from "@/types/template";

// Campos extraídos de CONTRATO_GESTAO_ELETROPOSTOS_MHZMOB.docx.
export const gestaoEletropostosFields: FieldDef[] = [
  // ---------- Identificação ----------
  { id: "numeroContrato", label: "Número do contrato", type: "text", section: "Identificação", required: true, placeholder: "014/2026" },
  { id: "dataAssinaturaDia", label: "Dia da assinatura", type: "text", section: "Identificação", required: true },
  { id: "dataAssinaturaMes", label: "Mês da assinatura", type: "text", section: "Identificação", required: true },
  { id: "dataAssinaturaAno", label: "Ano da assinatura", type: "text", section: "Identificação", defaultValue: "2026" },
  { id: "cidadeAssinatura", label: "Cidade/UF da assinatura", type: "text", section: "Identificação", defaultValue: "Goiânia/GO" },
  {
    id: "modalidade", label: "Modalidade contratada", type: "select", section: "Identificação", required: true,
    options: [
      { label: "A — Rede MHZ MOB (vinculado a contrato de compra e venda)", value: "A" },
      { label: "B — Eletroposto de terceiro (autônomo)", value: "B" },
      { label: "Ambas", value: "Ambas" },
    ],
  },
  { id: "contratoVinculadoNumero", label: "Nº do contrato de compra e venda vinculado (se Modalidade A)", type: "text", section: "Identificação", showIf: { field: "modalidade", equals: "A" } },

  // ---------- Gestora (fixo) ----------
  { id: "gestoraRazaoSocial", label: "Razão social da Gestora", type: "text", section: "Gestora (MHZ MOB)", defaultValue: "MHZ ENERGIA SOLAR LTDA" },
  { id: "gestoraCnpj", label: "CNPJ da Gestora", type: "text", section: "Gestora (MHZ MOB)", defaultValue: "28.664.003/0001-49" },
  { id: "gestoraEndereco", label: "Endereço da sede", type: "text", section: "Gestora (MHZ MOB)", defaultValue: "Rua Aulina Luiz, nº 76 (Quadra 5, Lote 6), Setor Santa Rita, 5ª Etapa, Goiânia/GO" },

  // ---------- Investidor ----------
  { id: "investidorNomeRazaoSocial", label: "Nome / Razão social do Investidor", type: "text", section: "Investidor", required: true },
  { id: "investidorQualificacao", label: "Qualificação completa (estado civil, profissão, ou dados societários)", type: "textarea", section: "Investidor" },
  { id: "investidorCpfCnpj", label: "CPF/CNPJ do Investidor", type: "cpf_cnpj", section: "Investidor", required: true, sensitive: true },
  { id: "investidorEndereco", label: "Endereço do Investidor", type: "textarea", section: "Investidor", required: true },

  // ---------- Carregadores (lista repetível — Apêndice A.2) ----------
  {
    id: "carregadores",
    label: "Carregadores abrangidos",
    type: "group",
    section: "Carregadores",
    helpText: "Cada linha é uma unidade autônoma de cobrança (Cláusula 11.1). Adicione um item por Carregador.",
    itemFields: [
      { id: "modalidade", label: "Modalidade (A/B)", type: "select", section: "", options: [{ label: "A", value: "A" }, { label: "B", value: "B" }] },
      { id: "modeloSerie", label: "Modelo / Nº de série", type: "text", section: "" },
      { id: "endereco", label: "Endereço", type: "text", section: "" },
      { id: "potenciaKw", label: "Potência (kW)", type: "number", section: "" },
      { id: "conectores", label: "Conectores", type: "text", section: "" },
    ],
  },

  // ---------- Tarifa ao usuário (Apêndice A.3) ----------
  { id: "tarifaEnergiaKwh", label: "Tarifa por energia (R$/kWh)", type: "currency", section: "Tarifa ao Usuário Final" },
  { id: "tarifaTempoMinuto", label: "Tarifa por tempo (R$/min)", type: "currency", section: "Tarifa ao Usuário Final" },
  { id: "taxaAtivacao", label: "Taxa de ativação por sessão (R$)", type: "currency", section: "Tarifa ao Usuário Final" },
  { id: "idleFeeValor", label: "Idle fee (R$/min após término da recarga)", type: "currency", section: "Tarifa ao Usuário Final" },
  { id: "idleFeeMinutosCarencia", label: "Minutos de carência antes do idle fee", type: "number", section: "Tarifa ao Usuário Final" },
  { id: "horarioExibidoApp", label: "Horário de funcionamento exibido no Aplicativo", type: "text", section: "Tarifa ao Usuário Final", defaultValue: "24 horas, todos os dias" },

  // ---------- Remuneração da Gestora (Cláusula 11.3 / Apêndice A.4) ----------
  { id: "percentualGateway", label: "Taxa de gateway de pagamento (% sobre Receita Bruta)", type: "number", section: "Remuneração da Gestora", defaultValue: 3 },
  { id: "percentualGestaoPlataforma", label: "Gestão da plataforma — Atlas e Aplicativo (% sobre Receita Bruta)", type: "number", section: "Remuneração da Gestora", defaultValue: 15 },
  {
    id: "omModeloRemuneracao", label: "Modelo de remuneração do O&M", type: "select", section: "Remuneração da Gestora",
    options: [
      { label: "Não contratado nesta data", value: "nao_contratado" },
      { label: "Percentual sobre a Receita Bruta", value: "percentual" },
      { label: "Valor fixo por Carregador/mês", value: "fixo_mensal" },
      { label: "Por chamado", value: "por_chamado" },
    ],
    defaultValue: "nao_contratado",
  },
  { id: "omValor", label: "Valor/percentual do O&M (conforme modelo escolhido)", type: "text", section: "Remuneração da Gestora", showIf: { field: "omModeloRemuneracao", equals: "percentual" } },
  { id: "mensalidadeFixaCarregador", label: "Mensalidade fixa por Carregador (R$/mês)", type: "currency", section: "Remuneração da Gestora" },
  { id: "taxaOnboarding", label: "Taxa de onboarding — só Modalidade B (R$, única)", type: "currency", section: "Remuneração da Gestora" },
  { id: "percentuaisFixosMeses", label: "Prazo de fixação dos percentuais (meses)", type: "number", section: "Remuneração da Gestora", defaultValue: 12 },

  // ---------- Dados para repasse (sensível — bancário) ----------
  { id: "repasseTitular", label: "Titular da conta de repasse", type: "text", section: "Dados Bancários para Repasse", sensitive: true },
  { id: "repasseCpfCnpj", label: "CPF/CNPJ do titular", type: "cpf_cnpj", section: "Dados Bancários para Repasse", sensitive: true },
  { id: "repasseBanco", label: "Banco", type: "text", section: "Dados Bancários para Repasse", sensitive: true },
  { id: "repasseAgencia", label: "Agência", type: "text", section: "Dados Bancários para Repasse", sensitive: true },
  { id: "repasseConta", label: "Conta", type: "text", section: "Dados Bancários para Repasse", sensitive: true },
  { id: "repassePix", label: "Chave PIX", type: "text", section: "Dados Bancários para Repasse", sensitive: true },

  // ---------- Contatos ----------
  { id: "investidorContatoNome", label: "Investidor — A/C (nome)", type: "text", section: "Contatos" },
  { id: "investidorContatoEmail", label: "Investidor — e-mail", type: "email", section: "Contatos", sensitive: true },
  { id: "investidorContatoTelefone", label: "Investidor — telefone", type: "text", section: "Contatos", sensitive: true },
  { id: "gestoraContatoNome", label: "Gestora — A/C (nome)", type: "text", section: "Contatos" },
  { id: "gestoraContatoEmail", label: "Gestora — e-mail", type: "email", section: "Contatos", defaultValue: "suporte@mhzmob.com.br" },
  { id: "gestoraContatoTelefone", label: "Gestora — telefone", type: "text", section: "Contatos", defaultValue: "62 98263-0672" },

  // ---------- SLA (Apêndice B) ----------
  { id: "disponibilidadeMinimaPercentual", label: "Disponibilidade mensal mínima da plataforma (%)", type: "number", section: "SLA", defaultValue: 99 },
  { id: "slaCriticaRespostaHoras", label: "Severidade Crítica — tempo de resposta (h)", type: "number", section: "SLA" },
  { id: "slaCriticaSolucaoHoras", label: "Severidade Crítica — tempo de solução (h)", type: "number", section: "SLA" },
  { id: "slaAltaRespostaHoras", label: "Severidade Alta — tempo de resposta (h)", type: "number", section: "SLA" },
  { id: "slaAltaSolucaoHorasUteis", label: "Severidade Alta — solução (horas úteis)", type: "number", section: "SLA" },
  { id: "slaMediaRespostaDiasUteis", label: "Severidade Média — resposta (dias úteis)", type: "number", section: "SLA" },
  { id: "slaMediaSolucaoDiasUteis", label: "Severidade Média — solução (dias úteis)", type: "number", section: "SLA" },
  { id: "slaBaixaRespostaDiasUteis", label: "Severidade Baixa — resposta (dias úteis)", type: "number", section: "SLA" },
  { id: "creditoMaximoPercentual", label: "Crédito máximo por indisponibilidade (% sobre remuneração de gestão)", type: "number", section: "SLA", defaultValue: 30 },

  // ---------- Canais ----------
  { id: "canalUsuarioFinal", label: "Canal — Usuário Final (1º nível)", type: "text", section: "Canais de Atendimento" },
  { id: "horarioUsuarioFinal", label: "Horário — Usuário Final", type: "text", section: "Canais de Atendimento" },
  { id: "canalInvestidor", label: "Canal — Investidor (2º nível)", type: "text", section: "Canais de Atendimento" },
  { id: "horarioInvestidor", label: "Horário — Investidor", type: "text", section: "Canais de Atendimento" },
  { id: "plantaoCritico", label: "Plantão para severidade crítica", type: "text", section: "Canais de Atendimento" },

  // ---------- Vigência ----------
  { id: "vigenciaMeses", label: "Vigência inicial (meses)", type: "number", section: "Vigência", defaultValue: 24 },

  // ---------- Testemunhas ----------
  { id: "testemunha1Nome", label: "Testemunha 1 — nome", type: "text", section: "Testemunhas" },
  { id: "testemunha1Cpf", label: "Testemunha 1 — CPF", type: "cpf_cnpj", section: "Testemunhas", sensitive: true },
  { id: "testemunha2Nome", label: "Testemunha 2 — nome", type: "text", section: "Testemunhas" },
  { id: "testemunha2Cpf", label: "Testemunha 2 — CPF", type: "cpf_cnpj", section: "Testemunhas", sensitive: true },
];
