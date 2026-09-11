import { FieldDef } from "@/types/template";

// Campos extraídos de CONTRATO_MHZ_MOB_REVISADO.docx.
// Tudo que no documento original aparecia como [PREENCHER] virou um campo aqui.
// Dados fixos da MHZ MOB (CNPJ, endereço-sede) vêm como defaultValue, mas continuam editáveis
// pelo time caso a matriz mude no futuro.
export const vendaEletropostoFields: FieldDef[] = [
  // ---------- Identificação do contrato ----------
  { id: "numeroContrato", label: "Número do contrato", type: "text", section: "Identificação", required: true, placeholder: "014/2026" },
  { id: "dataAssinaturaDia", label: "Dia da assinatura", type: "text", section: "Identificação", required: true, placeholder: "11" },
  { id: "dataAssinaturaMes", label: "Mês da assinatura", type: "text", section: "Identificação", required: true, placeholder: "setembro" },
  { id: "dataAssinaturaAno", label: "Ano da assinatura", type: "text", section: "Identificação", required: true, defaultValue: "2026" },
  { id: "cidadeAssinatura", label: "Cidade/UF da assinatura", type: "text", section: "Identificação", defaultValue: "Goiânia/GO" },

  // ---------- Vendedor (MHZ MOB) ----------
  { id: "vendedorRazaoSocial", label: "Razão social do Vendedor", type: "text", section: "Vendedor (MHZ MOB)", defaultValue: "MHZ ENERGIA SOLAR LTDA" },
  { id: "vendedorCnpj", label: "CNPJ do Vendedor", type: "text", section: "Vendedor (MHZ MOB)", defaultValue: "28.664.003/0001-49" },
  { id: "vendedorEndereco", label: "Endereço da sede", type: "text", section: "Vendedor (MHZ MOB)", defaultValue: "Rua Aulina Luiz, nº 76 (Quadra 5, Lote 6), Setor Santa Rita, 5ª Etapa, Goiânia/GO" },
  { id: "vendedorCep", label: "CEP da sede", type: "text", section: "Vendedor (MHZ MOB)", required: true },
  { id: "representanteNome", label: "Nome do representante legal", type: "text", section: "Vendedor (MHZ MOB)", required: true },
  { id: "representanteNacionalidade", label: "Nacionalidade", type: "text", section: "Vendedor (MHZ MOB)", defaultValue: "brasileiro(a)" },
  { id: "representanteEstadoCivil", label: "Estado civil", type: "text", section: "Vendedor (MHZ MOB)" },
  { id: "representanteProfissao", label: "Profissão", type: "text", section: "Vendedor (MHZ MOB)" },
  { id: "representanteRg", label: "RG do representante", type: "text", section: "Vendedor (MHZ MOB)", sensitive: true },
  { id: "representanteCpf", label: "CPF do representante", type: "cpf_cnpj", section: "Vendedor (MHZ MOB)", sensitive: true },

  // ---------- Comprador ----------
  { id: "compradorNome", label: "Nome / Razão social do Comprador", type: "text", section: "Comprador", required: true },
  { id: "compradorRg", label: "RG do Comprador", type: "text", section: "Comprador", sensitive: true },
  { id: "compradorRgUf", label: "UF emissor do RG", type: "text", section: "Comprador" },
  { id: "compradorCpfCnpj", label: "CPF/CNPJ do Comprador", type: "cpf_cnpj", section: "Comprador", required: true, sensitive: true },
  { id: "compradorEndereco", label: "Endereço residencial/comercial do Comprador", type: "textarea", section: "Comprador", required: true },
  { id: "compradorCep", label: "CEP do Comprador", type: "text", section: "Comprador" },
  { id: "compradorEmail", label: "E-mail para notificações", type: "email", section: "Comprador", sensitive: true },
  { id: "compradorTelefone", label: "Telefone/WhatsApp", type: "text", section: "Comprador", sensitive: true },

  // ---------- Eletroposto (equipamento) ----------
  { id: "eletropostoDescricao", label: "Descrição do eletroposto/estrutura", type: "text", section: "Eletroposto", required: true, placeholder: "Estação de recarga rápida DC dupla" },
  { id: "eletropostoModelo", label: "Modelo do carregador", type: "text", section: "Eletroposto", defaultValue: "MOB-DC40-CCS2" },
  { id: "potenciaNominalKw", label: "Potência nominal (kW)", type: "number", section: "Eletroposto", required: true },
  { id: "tensaoEntrada", label: "Tensão de entrada", type: "text", section: "Eletroposto", defaultValue: "380 V" },
  { id: "correnteMaximaA", label: "Corrente máxima (A)", type: "number", section: "Eletroposto" },
  { id: "conectores", label: "Conectores", type: "text", section: "Eletroposto", defaultValue: "2× CCS2" },
  { id: "saidasSimultaneas", label: "Nº de saídas simultâneas", type: "number", section: "Eletroposto", defaultValue: 2 },
  { id: "faixaTemperatura", label: "Faixa de temperatura de operação", type: "text", section: "Eletroposto", defaultValue: "-20°C a 55°C" },
  { id: "meiosPagamento", label: "Meios de autenticação e pagamento", type: "text", section: "Eletroposto", defaultValue: "Cartão de crédito ou Pix" },

  // ---------- Estrutura ----------
  { id: "estruturaTipo", label: "Tipo de estrutura", type: "text", section: "Estrutura", defaultValue: "Estrutura para Estação de Recarga de Veículos Elétricos" },
  { id: "estruturaVagasQtd", label: "Quantidade de vagas para recarga", type: "number", section: "Estrutura", required: true },
  { id: "estruturaCarregadoresQtd", label: "Quantidade de carregadores", type: "number", section: "Estrutura", required: true, defaultValue: 1 },
  {
    id: "estruturaCobertura", label: "Cobertura", type: "select", section: "Estrutura",
    options: [{ label: "Com cobertura", value: "com cobertura" }, { label: "Sem cobertura", value: "sem cobertura" }],
    defaultValue: "sem cobertura",
  },

  // ---------- Local de instalação ----------
  { id: "localEnderecoCompleto", label: "Endereço completo do local de instalação", type: "textarea", section: "Local de Instalação", required: true },
  { id: "localCep", label: "CEP do local de instalação", type: "text", section: "Local de Instalação" },
  { id: "localMunicipioUf", label: "Município/UF do local de instalação", type: "text", section: "Local de Instalação" },
  { id: "unidadeConsumidoraNumero", label: "Nº da unidade consumidora", type: "text", section: "Local de Instalação" },
  { id: "distribuidoraNome", label: "Distribuidora de energia", type: "text", section: "Local de Instalação", placeholder: "Equatorial Goiás" },
  {
    id: "titularidadeImovel", label: "Titularidade do imóvel pelo Comprador", type: "select", section: "Local de Instalação",
    options: [
      { label: "Proprietário", value: "proprietário" },
      { label: "Locatário", value: "locatário" },
      { label: "Possuidor a outro título", value: "possuidor a outro título" },
    ],
  },

  // ---------- Preço e pagamento ----------
  { id: "precoTotal", label: "Preço total (R$)", type: "currency", section: "Preço e Pagamento", required: true },
  { id: "precoExtenso", label: "Preço por extenso", type: "text", section: "Preço e Pagamento", required: true, placeholder: "cento e seis mil reais" },
  { id: "condicoesPagamento", label: "Condições de pagamento (entrada, parcelas, forma)", type: "textarea", section: "Preço e Pagamento", required: true },

  // ---------- Prazo ----------
  { id: "prazoExecucaoDias", label: "Prazo de execução (dias corridos)", type: "number", section: "Prazo", defaultValue: 60 },

  // ---------- Garantia e seguro ----------
  { id: "garantiaMeses", label: "Prazo de garantia (meses)", type: "number", section: "Garantia e Seguro", defaultValue: 12 },
  { id: "garantiaRaioKm", label: "Raio de atendimento gratuito de garantia (km)", type: "number", section: "Garantia e Seguro", defaultValue: 50 },
  { id: "seguroRcValorMinimo", label: "Cobertura mínima do seguro RC de obras (R$)", type: "currency", section: "Garantia e Seguro" },

  // ---------- Testemunhas ----------
  { id: "testemunha1Nome", label: "Testemunha 1 — nome", type: "text", section: "Testemunhas" },
  { id: "testemunha1Cpf", label: "Testemunha 1 — CPF", type: "cpf_cnpj", section: "Testemunhas", sensitive: true },
  { id: "testemunha2Nome", label: "Testemunha 2 — nome", type: "text", section: "Testemunhas" },
  { id: "testemunha2Cpf", label: "Testemunha 2 — CPF", type: "cpf_cnpj", section: "Testemunhas", sensitive: true },
];
