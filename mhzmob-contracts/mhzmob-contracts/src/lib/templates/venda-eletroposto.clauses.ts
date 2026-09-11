import { Clause } from "@/types/template";

// Clausulado extraído/adaptado de CONTRATO_MHZ_MOB_REVISADO.docx.
// Cada cláusula é texto puro com placeholders {{campo}} — o time pode editar
// esse conteúdo pela tela de administração de templates sem precisar mexer em código.
// IMPORTANTE: este texto é um ponto de partida operacional. A validade jurídica final
// de cada cláusula deve ser revisada pelo time jurídico da MHZ MOB antes do uso em produção.
export const vendaEletropostoClauses: Clause[] = [
  {
    id: "preambulo",
    title: "CONTRATO DE COMPRA, VENDA E INSTALAÇÃO DE ESTAÇÃO DE RECARGA PARA VEÍCULOS ELÉTRICOS (ELETROPOSTO)",
    body:
      "Contrato nº {{numeroContrato}}/{{dataAssinaturaAno}}\n\n" +
      "Pelo presente instrumento particular e na melhor forma de direito, as partes abaixo qualificadas:\n\n" +
      "**VENDEDOR**\n\n" +
      "**{{vendedorRazaoSocial}}**, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº **{{vendedorCnpj}}**, com sede em {{vendedorEndereco}}, CEP {{vendedorCep}}, neste ato representada na forma de seu Contrato Social por {{representanteNome}}, {{representanteNacionalidade}}, {{representanteEstadoCivil}}, {{representanteProfissao}}, portador do RG nº {{representanteRg}} e inscrito no CPF sob o nº {{representanteCpf}}, doravante denominada simplesmente **VENDEDOR**; e\n\n" +
      "**COMPRADOR**\n\n" +
      "**{{compradorNome}}**, portador do RG nº {{compradorRg}} {{compradorRgUf}} e inscrito no CPF/CNPJ sob o nº **{{compradorCpfCnpj}}**, residente e domiciliado em {{compradorEndereco}}, CEP {{compradorCep}}, doravante denominado simplesmente **COMPRADOR**;\n\n" +
      "VENDEDOR e COMPRADOR são referidos, em conjunto, como **Partes** e, isoladamente, como **Parte**.",
  },
  {
    id: "considerandos",
    title: "CONSIDERANDO QUE",
    body:
      "(i) o VENDEDOR atua no fornecimento, integração e instalação de sistemas de recarga para veículos elétricos e híbridos plug-in, dispondo de capacidade técnica, corpo funcional e responsáveis técnicos habilitados para a execução do objeto deste Contrato;\n\n" +
      "(ii) o COMPRADOR tem interesse em adquirir e ter instalada, em imóvel de sua titularidade ou posse legítima, 1 (uma) Estação de Recarga para veículos elétricos, com a infraestrutura correlata descrita neste instrumento e em seu Anexo I;\n\n" +
      "(iii) as Partes são capazes, encontram-se livres e desimpedidas para contratar e celebram o presente pacto de boa-fé, com finalidade lícita, após negociação prévia em que tiveram oportunidade de discutir e compreender todas as suas cláusulas;\n\n" +
      "(iv) o COMPRADOR declara que a aquisição dos equipamentos objeto deste Contrato destina-se à instalação e operação de Estação de Recarga em seu próprio empreendimento, não tendo por finalidade a revenda dos equipamentos adquiridos.\n\n" +
      "Resolvem as Partes celebrar o presente CONTRATO DE COMPRA, VENDA E INSTALAÇÃO DE ESTAÇÃO DE RECARGA PARA VEÍCULOS ELÉTRICOS (\"Contrato\"), que se regerá pelas disposições da Lei nº 10.406/2002 (Código Civil), pela legislação e regulamentação setorial aplicável e pelas cláusulas e condições a seguir, às quais mutuamente se obrigam:",
  },
  {
    id: "clausula-1",
    title: "CLÁUSULA 1 — DEFINIÇÕES",
    body:
      "1.1. Para os fins deste Contrato, os termos abaixo, sempre que grafados em letra inicial maiúscula, terão os seguintes significados:\n\n" +
      "- **Estação de Recarga** ou **Eletroposto**: o conjunto de equipamentos, estruturas e sistemas destinados à recarga de veículos elétricos e híbridos plug-in, descrito na Cláusula 2 e detalhado no Anexo I;\n" +
      "- **Local de Instalação**: o imóvel/vaga indicados na Cláusula 5.1, onde a Estação de Recarga será instalada;\n" +
      "- **Anexo I**: a especificação técnica do fornecimento, parte integrante e inseparável deste Contrato;\n" +
      "- **Comissionamento**: o conjunto de testes, energização, parametrização e verificação funcional que atesta que a Estação de Recarga opera conforme o Anexo I;\n" +
      "- **Termo de Recebimento Definitivo (TRD)**: o documento, na forma do Anexo II, pelo qual o COMPRADOR atesta a conclusão do Comissionamento e o recebimento da Estação de Recarga;\n" +
      "- **Dia Útil**: dia que não seja sábado, domingo ou feriado nacional, estadual ou municipal no Local de Instalação.",
  },
  {
    id: "clausula-2",
    title: "CLÁUSULA 2 — DO OBJETO",
    body:
      "2.1. Constitui objeto deste Contrato a compra e venda, pelo VENDEDOR ao COMPRADOR, de 1 (uma) **{{eletropostoDescricao}}**, bem como a prestação dos serviços de projeto, instalação, comissionamento e ativação descritos na Cláusula 3, tudo conforme abaixo:\n\n" +
      "**DO ELETROPOSTO**\n" +
      "- Modelo: {{eletropostoModelo}}\n" +
      "- Potência nominal: {{potenciaNominalKw}} kW\n" +
      "- Tensão de entrada: {{tensaoEntrada}}\n" +
      "- Corrente máxima: {{correnteMaximaA}} A\n" +
      "- Conectores: {{conectores}}\n" +
      "- Nº de saídas simultâneas: {{saidasSimultaneas}}\n" +
      "- Faixa de temperatura de operação: {{faixaTemperatura}}\n" +
      "- Meios de autenticação e pagamento: {{meiosPagamento}}\n\n" +
      "**DA ESTRUTURA**\n" +
      "- Modelo/Tipo: {{estruturaTipo}}\n" +
      "- Quantidade de vagas para recarga: {{estruturaVagasQtd}}\n" +
      "- Quantidade de carregadores: {{estruturaCarregadoresQtd}}\n" +
      "- Cobertura: {{estruturaCobertura}}\n\n" +
      "2.2. Integram o fornecimento, no que couber, todos os materiais, acessórios e componentes necessários à instalação e ao funcionamento da Estação de Recarga, excetuados os itens listados na Cláusula 4.\n\n" +
      "2.3. O VENDEDOR poderá substituir componentes por outros de especificação igual ou superior, sem alteração de preço, mediante comunicação prévia e por escrito ao COMPRADOR, desde que preservadas a potência, os conectores, as funcionalidades e o desempenho previstos no Anexo I.",
  },
  {
    id: "clausula-3",
    title: "CLÁUSULA 3 — DO ESCOPO DE FORNECIMENTO",
    body:
      "3.1. Estão compreendidos no escopo do VENDEDOR:\n\n" +
      "(a) o fornecimento dos equipamentos e materiais descritos no Anexo I, novos, de primeiro uso e livres de ônus;\n" +
      "(b) a vistoria técnica prévia do Local de Instalação e a análise de viabilidade técnica de execução do projeto;\n" +
      "(c) a elaboração dos projetos de engenharia elétrica pertinentes, com emissão da respectiva ART/TRT junto ao CREA/CFT, cujo custo está incluído no Preço;\n" +
      "(d) a instalação, montagem e integração mecânica e elétrica da Estação de Recarga no Local de Instalação;\n" +
      "(e) os testes, o Comissionamento e a verificação funcional de todos os equipamentos instalados;\n" +
      "(f) a ativação da Estação de Recarga, incluindo, quando previsto no Anexo I, a configuração de rede e a integração com plataforma de gestão (OCPP/Smart Charging);\n" +
      "(g) a adequação do padrão de entrada de energia elétrica do Local de Instalação poderá ser realizada pelo VENDEDOR, exclusivamente na extensão prevista no Anexo I e no relatório de vistoria técnica prévia, ou, por decisão exclusiva do COMPRADOR, executada por profissional ou empresa de sua própria contratação e responsabilidade;\n" +
      "(h) o protocolo e o acompanhamento, junto à Distribuidora e aos órgãos competentes, dos pedidos de autorização, aumento de carga e/ou vistoria eventualmente necessários, na qualidade de mandatário do COMPRADOR, quando aplicável;\n" +
      "(i) a entrega ao COMPRADOR, ao final da obra, da documentação necessária à operação, manutenção e acompanhamento do sistema, incluindo manuais, certificados de garantia, projeto \"as built\" e relatório de comissionamento;\n" +
      "(j) a realização de treinamento operacional básico, presencial ou remoto, destinado ao(s) usuário(s) indicado(s) pelo COMPRADOR.\n\n" +
      "3.2. O escopo da alínea \"h\" compreende a preparação e o protocolo dos requerimentos e o acompanhamento junto à Distribuidora, não incluindo garantia de aprovação, de prazos de análise, exigências técnicas adicionais ou custos decorrentes de tarifas, taxas e obras de responsabilidade da Distribuidora, que serão do COMPRADOR.",
  },
  {
    id: "clausula-4",
    title: "CLÁUSULA 4 — DO QUE NÃO INTEGRA O OBJETO",
    body:
      "4.1. Não estão incluídos no escopo deste Contrato e são de exclusiva responsabilidade do COMPRADOR, salvo se expressamente previstos no Anexo I:\n\n" +
      "(a) reforço e/ou adequação de infraestrutura civil, elétrica ou mecânica existente, incluindo quadros de distribuição, cabeamento e aterramento, ressalvado o disposto na Cláusula 3.1, \"g\". Qualquer obra ou adequação não prevista no Anexo I não integra o escopo contratado e será de exclusiva responsabilidade do COMPRADOR, inclusive quanto à contratação, custos e execução;\n" +
      "(c) custos, tarifas, taxas, emolumentos, multas e obras exigidos pela Distribuidora, pelo Corpo de Bombeiros, pela Prefeitura ou por qualquer outro órgão público;\n" +
      "(d) fornecimento de energia elétrica para a obra e para a operação, bem como a respectiva contratação de demanda, quando aplicável;\n" +
      "(e) serviços de conectividade necessários ao monitoramento e à gestão remota do equipamento (internet, cabeamento de rede, Wi-Fi e respectivas mensalidades), a serem contratados diretamente pelo COMPRADOR;\n" +
      "(f) limpeza, conservação, manutenção preventiva e corretiva dos equipamentos após a emissão do TRD, salvo cobertura de garantia ou contrato específico de manutenção;\n" +
      "(g) reconfiguração de senhas, credenciais e painel de gestão (backend/OCPP), caso o COMPRADOR altere os dados de acesso após a entrega;\n" +
      "(h) seguro patrimonial e de responsabilidade civil relativo à Estação de Recarga e ao Local de Instalação.\n\n" +
      "4.2. Serviços não incluídos no escopo poderão ser executados pelo VENDEDOR mediante aditivo contratual escrito, com definição de preço e prazo próprios. Nenhum serviço extra será executado ou cobrado sem aprovação prévia e escrita do COMPRADOR.",
  },
  {
    id: "clausula-5",
    title: "CLÁUSULA 5 — DO LOCAL DE INSTALAÇÃO",
    body:
      "5.1. A Estação de Recarga será instalada no imóvel situado em **{{localEnderecoCompleto}}**, CEP {{localCep}}, {{localMunicipioUf}}, unidade consumidora nº **{{unidadeConsumidoraNumero}}**, atendido pela Distribuidora **{{distribuidoraNome}}** (\"Local de Instalação\").\n\n" +
      "5.2. O COMPRADOR declara ser **{{titularidadeImovel}}** do Local de Instalação. Caso não seja o proprietário do imóvel, o COMPRADOR deverá apresentar ao VENDEDOR, antes do início da montagem, procuração ou autorização formal, com firma reconhecida em cartório, outorgada pelo proprietário e/ou pelo condomínio, autorizando expressamente a execução das obras, a instalação e a permanência do equipamento no Local de Instalação.\n\n" +
      "5.3. O COMPRADOR declara que as informações prestadas sobre a infraestrutura elétrica existente, a carga disponível e as condições do Local de Instalação são verdadeiras e serviram de base para a formação do Preço e do prazo deste Contrato.\n\n" +
      "5.4. Constatando-se, no relatório de vistoria técnica prévia ou no curso da execução, divergência relevante entre as condições declaradas e as efetivamente encontradas, as Partes negociarão, de boa-fé, aditivo de prazo e/ou de preço.",
  },
  {
    id: "clausula-6",
    title: "CLÁUSULA 6 — DAS OBRIGAÇÕES DO VENDEDOR",
    body:
      "6.1. Além das obrigações previstas em lei e nas demais cláusulas deste Contrato, obriga-se o VENDEDOR a:\n\n" +
      "(a) planejar, conduzir e executar o objeto com integral observância da legislação vigente e das normas técnicas aplicáveis, notadamente ABNT NBR 5410, ABNT NBR 17019 (quando aplicável), IEC 61851, NR-10 e NR-35;\n" +
      "(b) empregar mão de obra própria ou subcontratada devidamente qualificada, treinada e habilitada, respondendo integralmente pelos atos de seus prepostos e subcontratados;\n" +
      "(c) fornecer ao COMPRADOR as informações necessárias ao cumprimento do objeto, mantendo-o atualizado quanto ao andamento dos trabalhos, exclusivamente pelos canais oficiais de comunicação da MHZ MOB;\n" +
      "(d) responsabilizar-se pela qualidade técnica e profissional dos equipamentos e serviços fornecidos;\n" +
      "(e) arcar, com exclusividade, com todos os ônus tributários, previdenciários, trabalhistas e securitários relativos a seus empregados e prepostos, bem como com o fornecimento de EPI e EPC;\n" +
      "(f) emitir e recolher a ART/TRT do responsável técnico e disponibilizá-la ao COMPRADOR;\n" +
      "(g) manter o Local de Instalação organizado e remover, ao término dos trabalhos, entulhos, sobras de materiais e embalagens;\n" +
      "(h) reparar ou substituir, às suas expensas, danos causados por si ou por seus prepostos ao imóvel, às instalações ou a bens do COMPRADOR ou de terceiros;\n" +
      "(i) emitir a documentação fiscal pertinente nos prazos legais;\n" +
      "(j) manter, durante toda a execução dos serviços, seguro de responsabilidade civil de obras e instalações, com cobertura mínima de R$ {{seguroRcValorMinimo}}, apresentando a respectiva apólice ao COMPRADOR antes do início da montagem.",
  },
  {
    id: "clausula-7",
    title: "CLÁUSULA 7 — DAS OBRIGAÇÕES DO COMPRADOR",
    body:
      "7.1. Além das obrigações previstas em lei e nas demais cláusulas deste Contrato, obriga-se o COMPRADOR a:\n\n" +
      "(a) efetuar os pagamentos nos valores, prazos e condições previstos na Cláusula 8;\n" +
      "(b) conferir a mercadoria no ato do recebimento e, havendo avaria aparente, consignar a ressalva e comunicar o VENDEDOR em até 2 (dois) Dias Úteis, sob pena de perda do direito à reposição por avaria de transporte;\n" +
      "(c) zelar pela guarda e integridade física dos equipamentos entregues, a partir da entrega e até o Comissionamento, ressalvados danos causados pelo VENDEDOR;\n" +
      "(d) assegurar ao VENDEDOR acesso livre, seguro e desimpedido ao Local de Instalação nos dias e horários acordados, disponibilizando ponto de energia e água;\n" +
      "(e) fornecer tempestivamente todos os documentos, licenças, alvarás, autorizações condominiais e informações necessárias à instalação;\n" +
      "(f) garantir que o ponto de conexão da infraestrutura elétrica existente esteja a, no máximo, 2 (dois) metros do ponto de instalação e seja compatível com a carga demandada; distâncias ou adequações superiores serão objeto de aditivo;\n" +
      "(g) disponibilizar e custear ponto de acesso à internet para conexão dos equipamentos de monitoramento e gestão remota, quando aplicável;\n" +
      "(h) manter em dia o pagamento das faturas de energia elétrica da unidade consumidora;\n" +
      "(i) manter a segurança patrimonial do Local de Instalação e contratar, às suas expensas, seguro com cobertura para incêndio, danos elétricos externos, vendaval, roubo e furto qualificado, a partir da entrega dos equipamentos;\n" +
      "(j) operar a Estação de Recarga em conformidade com os manuais do fabricante e realizar as manutenções preventivas recomendadas;\n" +
      "(k) não transferir ao VENDEDOR responsabilidades, multas ou encargos decorrentes de obrigações que lhe sejam próprias.",
  },
  {
    id: "clausula-8",
    title: "CLÁUSULA 8 — DO PREÇO E DAS CONDIÇÕES DE PAGAMENTO",
    body:
      "8.1. Pelo integral cumprimento do objeto, o COMPRADOR pagará ao VENDEDOR o preço certo e ajustado de **R$ {{precoTotal}} ({{precoExtenso}})** (\"Preço\"), já compreendidos todos os tributos, encargos, fretes, mão de obra e demais custos necessários ao fornecimento descrito nas Cláusulas 2 e 3.\n\n" +
      "**Condições de pagamento:** {{condicoesPagamento}}\n\n" +
      "8.2. O VENDEDOR emitirá a documentação fiscal correspondente, na forma da legislação tributária aplicável.",
  },
  {
    id: "clausula-9",
    title: "CLÁUSULA 9 — DO PRAZO DE EXECUÇÃO",
    body:
      "9.1. O prazo para conclusão do objeto é de até **{{prazoExecucaoDias}} dias corridos**, contados da data em que estiverem cumulativamente verificadas as seguintes condições: (a) assinatura deste Contrato por ambas as Partes; (b) confirmação do pagamento; (c) disponibilização, pelo COMPRADOR, do Local de Instalação em condições de acesso e execução e de toda a documentação prevista na Cláusula 7.1, \"e\".\n\n" +
      "9.2. O prazo será automaticamente suspenso, sem ônus para o VENDEDOR, pelo período em que perdurar (i) a análise de pedidos junto à Distribuidora ou a órgãos públicos; (ii) a mora do COMPRADOR; ou (iii) evento de força maior, retomando-se a contagem a partir da cessação do impedimento.\n\n" +
      "9.3. Prorrogações deverão ser justificadas por escrito e formalizadas por aditivo ou por troca de e-mails entre os representantes indicados na Cláusula 21.",
  },
  {
    id: "clausula-10",
    title: "CLÁUSULA 10 — DA ENTREGA, DO ACEITE, DA PROPRIEDADE E DO RISCO",
    body:
      "10.1. Concluído o comissionamento, o VENDEDOR comunicará o COMPRADOR, que terá o prazo de 48 (quarenta e oito) horas para vistoriar a Estação de Recarga e: (i) assinar o Termo de Recebimento Definitivo; ou (ii) apontar, por escrito e de forma fundamentada, eventuais pendências.\n\n" +
      "10.2. Havendo apontamento de pendências, o VENDEDOR terá o prazo de 10 (dez) Dias Úteis para as correções cabíveis, reiniciando-se o procedimento de aceite.\n\n" +
      "10.3. O silêncio do COMPRADOR após 48 horas, ou a utilização da Estação de Recarga em operação regular, caracterizará aceite tácito e definitivo.\n\n" +
      "10.4. Enquanto perdurar a reserva de domínio, fica vedado ao COMPRADOR alienar, ceder, onerar, dar em garantia, remover ou permitir a constrição judicial dos equipamentos.\n\n" +
      "10.5. O risco de perda, furto, dano ou deterioração dos equipamentos transfere-se ao COMPRADOR a partir da entrega física no Local de Instalação, cabendo-lhe manter o seguro previsto na Cláusula 7.1, \"i\".",
  },
  {
    id: "clausula-11",
    title: "CLÁUSULA 11 — DA GARANTIA",
    body:
      "11.1. O VENDEDOR garante a Estação de Recarga e os serviços de instalação contra defeitos de fabricação, de material e de execução pelo prazo de **{{garantiaMeses}} meses**, contados da data de assinatura deste contrato.\n\n" +
      "11.2. A garantia compreende o reparo ou a substituição, a critério do VENDEDOR, das peças e componentes defeituosos, bem como a mão de obra necessária, sem custo para o COMPRADOR, ressalvados os custos de deslocamento e hospedagem para atendimentos fora de um raio de **{{garantiaRaioKm}} km** da sede do VENDEDOR.\n\n" +
      "11.3. Aplicam-se, no que couber, as garantias legais previstas nos arts. 441 e seguintes do Código Civil e, se caracterizada relação de consumo, no art. 26 do Código de Defesa do Consumidor.\n\n" +
      "11.4. Estarão excluídos da garantia os danos e defeitos decorrentes de: (a) acidentes atribuíveis à culpa exclusiva do COMPRADOR, de seus prepostos, usuários ou terceiros; (b) uso, operação ou conservação em desacordo com os manuais do fabricante; (c) ausência das manutenções e revisões periódicas recomendadas; (d) modificações, reparos ou intervenções por pessoal não autorizado; (e) alteração do projeto ou da solução de engenharia; (f) incêndio, explosão, descarga atmosférica, vendaval, ciclone, inundação, vandalismo, roubo, furto e demais eventos externos; (g) desgaste natural de partes de uso (cabos, conectores e acabamentos).\n\n" +
      "11.5. A garantia dos equipamentos e componentes de terceiros observará adicionalmente os termos e prazos concedidos pelos respectivos fabricantes.\n\n" +
      "11.6. A suspensão do pagamento de qualquer parcela vencida faculta ao VENDEDOR suspender os atendimentos de garantia enquanto perdurar a inadimplência, sem prorrogação do respectivo prazo.",
  },
  {
    id: "clausula-12",
    title: "CLÁUSULA 12 — DA MORA E DAS PENALIDADES",
    body:
      "12.1. O não pagamento de qualquer parcela na data do respectivo vencimento sujeitará o COMPRADOR, independentemente de notificação, a juros de mora de 1% (um por cento) ao mês, calculados pro rata die, e multa moratória de 2% (dois por cento) sobre o valor vencido.\n\n" +
      "12.2. Persistindo a mora por prazo superior a 15 (quinze) dias, o VENDEDOR poderá suspender a execução dos serviços e a entrega dos equipamentos, sem que isso configure inadimplemento de sua parte, prorrogando-se automaticamente os prazos da Cláusula 10 pelo período da suspensão.\n\n" +
      "12.3. Persistindo a mora por prazo superior a 30 (trinta) dias, o VENDEDOR poderá levar este instrumento a protesto e inscrever o COMPRADOR nos órgãos de proteção ao crédito, além de considerar antecipadamente vencidas todas as parcelas vincendas.\n\n" +
      "12.4. Persistindo a mora por prazo superior a 60 (sessenta) dias, o VENDEDOR poderá resolver o Contrato, na forma da Cláusula 13, aplicando-se a multa compensatória ali prevista.",
  },
  {
    id: "clausula-13",
    title: "CLÁUSULA 13 — DA RESOLUÇÃO E DA RESCISÃO",
    body: "13.1. As Partes poderão rescindir o Contrato de comum acordo, mediante instrumento escrito que discipline os efeitos patrimoniais.",
  },
  {
    id: "clausula-14",
    title: "CLÁUSULA 14 — DA RESPONSABILIDADE E SUA LIMITAÇÃO",
    body:
      "14.1. Cada Parte responde pelos danos diretos que comprovadamente causar à outra em razão do descumprimento deste Contrato.\n\n" +
      "14.2. O VENDEDOR não responde por indisponibilidade da Estação de Recarga decorrente de falha no fornecimento de energia elétrica, de conectividade, de plataformas de terceiros ou de uso inadequado pelos usuários finais.",
  },
  {
    id: "clausula-15",
    title: "CLÁUSULA 15 — DO CASO FORTUITO E DA FORÇA MAIOR",
    body:
      "15.1. Nenhuma das Partes responderá pelo descumprimento de obrigações decorrente de caso fortuito ou força maior, nos termos do art. 393 do Código Civil, assim compreendidos, exemplificativamente, eventos climáticos extremos, calamidade pública, epidemias, greves gerais, embargos, restrições de importação, atos de autoridade e falhas generalizadas no fornecimento de energia ou de insumos essenciais não substituíveis.\n\n" +
      "15.2. A Parte afetada comunicará a outra, por escrito, em até 5 (cinco) Dias Úteis da ocorrência, indicando o impacto estimado, e envidará esforços razoáveis para mitigar os efeitos.",
  },
  {
    id: "clausula-16",
    title: "CLÁUSULA 16 — DO SOFTWARE, DA PLATAFORMA DE GESTÃO E DA PROPRIEDADE INTELECTUAL",
    body:
      "16.1. O firmware embarcado na Estação de Recarga e a plataforma de gestão (backend/OCPP) são licenciados, e não vendidos, ao COMPRADOR, que recebe licença de uso não exclusiva e intransferível, limitada à operação da Estação de Recarga objeto deste Contrato.\n\n" +
      "16.2. É vedado ao COMPRADOR realizar engenharia reversa, descompilação, modificação, sublicenciamento ou reprodução do firmware e da plataforma, bem como remover marcas, etiquetas de identificação ou números de série dos equipamentos.\n\n" +
      "16.3. Caso o COMPRADOR opte pela contratação dos serviços de gestão da Estação de Recarga por meio da plataforma Atlas e do Aplicativo, a gestão, a remuneração correspondente, o fluxo de arrecadação e repasse e os níveis de serviço serão regidos pelo Contrato de Gestão de Eletropostos, Plataforma Atlas e Aplicativo, que integrará este Contrato e deverá ser assinado conjuntamente.\n\n" +
      "16.4. Na hipótese de não contratação dos serviços de gestão previstos na Cláusula 16.3, as disposições relativas à gestão, remuneração, arrecadação, repasse e níveis de serviço não serão aplicáveis, não constituindo obrigação do VENDEDOR a prestação desses serviços.\n\n" +
      "16.5. A configuração, parametrização e disponibilização da comunicação OCPP da Estação de Recarga são de inteira e exclusiva responsabilidade do COMPRADOR, inclusive quando realizadas por terceiro por ele contratado.\n\n" +
      "16.6. O COMPRADOR será integralmente responsável pelos atos, configurações, informações, credenciais e procedimentos realizados por terceiros por ele contratados, não cabendo ao VENDEDOR responsabilidade por falhas ou problemas decorrentes desses serviços.\n\n" +
      "16.7. A responsabilidade do VENDEDOR limita-se ao fornecimento e à instalação dos equipamentos e serviços expressamente previstos no escopo contratado.\n\n" +
      "16.8. Todos os projetos, memoriais, desenhos, metodologias e demais materiais técnicos desenvolvidos pelo VENDEDOR permanecem de sua exclusiva titularidade.\n\n" +
      "16.9. Este Contrato não implica cessão, licença ou autorização de uso das marcas de qualquer das Partes, salvo o disposto na Cláusula 18.",
  },
  {
    id: "clausula-17",
    title: "CLÁUSULA 17 — DA CONFIDENCIALIDADE",
    body:
      "17.1. As Partes obrigam-se a manter em sigilo as informações técnicas, comerciais, financeiras e operacionais a que tiverem acesso em razão deste Contrato, utilizando-as exclusivamente para a sua execução, pelo prazo de vigência e por mais 2 (dois) anos após a sua extinção.\n\n" +
      "17.2. Excetuam-se do dever de sigilo as informações (i) de domínio público sem culpa da Parte receptora; (ii) já legitimamente conhecidas antes da divulgação; (iii) cuja divulgação seja exigida por lei, ordem judicial ou autoridade competente.",
  },
  {
    id: "clausula-18",
    title: "CLÁUSULA 18 — DA PROTEÇÃO DE DADOS PESSOAIS (LGPD)",
    body:
      "18.1. As Partes obrigam-se a cumprir a Lei nº 13.709/2018 (LGPD) e demais normas aplicáveis à proteção de dados pessoais, tratando os dados obtidos em razão deste Contrato apenas para finalidades legítimas, específicas, explícitas e informadas ao titular.\n\n" +
      "18.2. O tratamento observará as bases legais dos arts. 7º e/ou 11 da LGPD, notadamente a execução de contrato, o cumprimento de obrigação legal ou regulatória e o legítimo interesse, limitando-se ao mínimo necessário.\n\n" +
      "18.3. Os dados pessoais não serão compartilhados com terceiros, ressalvados (i) operadores e subcontratados necessários à execução do Contrato, vinculados a obrigações equivalentes de proteção; (ii) cumprimento de obrigação legal, regulatória ou determinação de autoridade; (iii) exercício regular de direitos em processo judicial, administrativo ou arbitral.\n\n" +
      "18.4. As Partes adotarão medidas técnicas e administrativas de segurança aptas a proteger os dados pessoais e comunicarão uma à outra, em até 2 (dois) Dias Úteis do conhecimento, qualquer incidente de segurança que possa acarretar risco ou dano relevante aos titulares.\n\n" +
      "18.5. Encerrado o Contrato, os dados pessoais serão eliminados ou devolvidos, salvo hipóteses de guarda obrigatória previstas em lei.\n\n" +
      "18.6. A Parte que infringir esta Cláusula responderá pelos danos que causar à outra e aos titulares, observados os arts. 42 a 45 da LGPD.",
  },
  {
    id: "clausula-19",
    title: "CLÁUSULA 19 — DO USO DE IMAGEM E DIVULGAÇÃO",
    body:
      "19.1. O COMPRADOR concede ao VENDEDOR licença gratuita e não exclusiva para captar e utilizar imagens da Estação de Recarga instalada e do respectivo Local de Instalação, bem como para mencionar a realização do projeto em website, portfólio, redes sociais e materiais institucionais, limitada ao contexto da instalação realizada.\n\n" +
      "19.2. A licença vigora pelo prazo de 5 (cinco) anos contados do TRD, renovável tacitamente, podendo ser revogada pelo COMPRADOR a qualquer tempo, mediante comunicação escrita, cessando o VENDEDOR novas divulgações em até 30 (trinta) dias.\n\n" +
      "19.3. A licença não abrange a imagem pessoal do COMPRADOR, de seus familiares, empregados ou clientes, nem a divulgação de valores, condições comerciais ou dados sigilosos deste Contrato.",
  },
  {
    id: "clausula-20",
    title: "CLÁUSULA 20 — DAS COMUNICAÇÕES E NOTIFICAÇÕES",
    body:
      "20.1. Todas as comunicações relativas a este Contrato serão feitas por escrito e endereçadas aos representantes abaixo, considerando-se válidas quando entregues pessoalmente, por carta com aviso de recebimento ou por e-mail com confirmação de recebimento:\n\n" +
      "**VENDEDOR** — E-mail: suporte@mhzmob.com.br — Telefone/WhatsApp: 62 98263-0672\n\n" +
      "**COMPRADOR** — E-mail: {{compradorEmail}} — Telefone/WhatsApp: {{compradorTelefone}}\n\n" +
      "20.2. Presume-se recebida a comunicação enviada por e-mail no primeiro Dia Útil seguinte ao envio, salvo prova de falha de entrega.\n\n" +
      "20.3. Alterações de endereço, e-mail ou representante deverão ser comunicadas em até 5 (cinco) Dias Úteis, sob pena de se reputarem válidas as comunicações enviadas aos dados anteriormente informados.\n\n" +
      "20.4. Os chamados de garantia e suporte deverão ser registrados pelos canais oficiais de atendimento da MHZ MOB, observando o SLA de Atendimento e Suporte apresentado ao COMPRADOR durante o Onboarding.",
  },
  {
    id: "clausula-21",
    title: "CLÁUSULA 21 — DAS DISPOSIÇÕES GERAIS",
    body:
      "21.1. Este Contrato é celebrado em caráter intuitu personae, sendo vedada a cessão ou transferência sem prévia e expressa anuência escrita da outra Parte, salvo cessão pelo VENDEDOR a sociedade de seu mesmo grupo econômico.\n\n" +
      "21.2. Qualquer alteração somente terá validade se formalizada por escrito e assinada por ambas as Partes.\n\n" +
      "21.3. A tolerância quanto ao descumprimento de qualquer obrigação constitui mera liberalidade e não implica novação, renúncia ou alteração do pactuado.\n\n" +
      "21.4. A eventual nulidade de qualquer cláusula não prejudicará as demais, que permanecerão em pleno vigor.\n\n" +
      "21.5. Este Contrato não cria vínculo societário, associativo, de representação, de consórcio ou empregatício entre as Partes.\n\n" +
      "21.6. Este Contrato obriga as Partes, seus herdeiros e sucessores a qualquer título.\n\n" +
      "21.7. As Partes reconhecem a validade e a eficácia da assinatura eletrônica, nos termos do art. 10, §2º, da MP nº 2.200-2/2001 e da Lei nº 14.063/2020.",
  },
  {
    id: "clausula-22",
    title: "CLÁUSULA 22 — DA LEI APLICÁVEL E DO FORO",
    body:
      "22.1. Este Contrato é regido pelas leis da República Federativa do Brasil.\n\n" +
      "22.2. Não obtida a solução consensual, fica eleito o Foro da Comarca de **{{cidadeAssinatura}}** para dirimir quaisquer dúvidas ou litígios oriundos deste Contrato, com renúncia expressa a qualquer outro.\n\n" +
      "22.3. Caracterizada relação de consumo, ou verificando-se que a eleição de foro dificulta o acesso à Justiça pelo COMPRADOR, prevalecerá o foro do domicílio do COMPRADOR, na forma do art. 63, §3º, do CPC, e do art. 51, IV, do CDC.",
  },
  {
    id: "assinaturas",
    title: "ASSINATURAS",
    body:
      "E, por estarem justas e contratadas, as Partes assinam o presente instrumento em 2 (duas) vias de igual teor e forma, ou eletronicamente, na presença das 2 (duas) testemunhas abaixo identificadas.\n\n" +
      "{{cidadeAssinatura}}, {{dataAssinaturaDia}} de {{dataAssinaturaMes}} de {{dataAssinaturaAno}}.\n\n" +
      "**{{vendedorRazaoSocial}}** — CNPJ nº {{vendedorCnpj}} — VENDEDOR\n\n" +
      "**{{compradorNome}}** — CPF/CNPJ nº {{compradorCpfCnpj}} — COMPRADOR\n\n" +
      "**TESTEMUNHAS:**\n\n" +
      "Nome: {{testemunha1Nome}} — CPF nº {{testemunha1Cpf}}\n\n" +
      "Nome: {{testemunha2Nome}} — CPF nº {{testemunha2Cpf}}",
  },
];
