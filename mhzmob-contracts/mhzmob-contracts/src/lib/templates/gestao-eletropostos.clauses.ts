import { Clause } from "@/types/template";

// Clausulado extraído/adaptado de CONTRATO_GESTAO_ELETROPOSTOS_MHZMOB.docx.
// {{carregadores}} é renderizado automaticamente como tabela (campo tipo "group").
export const gestaoEletropostosClauses: Clause[] = [
  {
    id: "preambulo",
    title: "CONTRATO DE GESTÃO DE ELETROPOSTOS, PLATAFORMA ATLAS E APLICATIVO",
    body:
      "Aplicável a eletropostos da Rede MHZ MOB (Modalidade A) e a eletropostos de terceiros (Modalidade B)\n\n" +
      "Contrato nº {{numeroContrato}}/{{dataAssinaturaAno}} — Modalidade contratada: {{modalidade}}{{#contratoVinculadoNumero}} — vinculado ao Contrato de Compra e Venda nº {{contratoVinculadoNumero}}, como ANEXO III{{/contratoVinculadoNumero}}\n\n" +
      "**PARTES**\n\n" +
      "**GESTORA:** {{gestoraRazaoSocial}}, nome de fantasia MHZ MOB, inscrita no CNPJ sob o nº {{gestoraCnpj}}, com sede em {{gestoraEndereco}}, neste ato representada na forma de seu Contrato Social;\n\n" +
      "**INVESTIDOR:** {{investidorNomeRazaoSocial}}, {{investidorQualificacao}}, inscrito no CPF/CNPJ sob o nº {{investidorCpfCnpj}}, com endereço em {{investidorEndereco}}, neste ato representado na forma de seus atos constitutivos;\n\n" +
      "em conjunto denominados **Partes** e, isoladamente, **Parte**.",
  },
  {
    id: "clausula-1",
    title: "CLÁUSULA 1 — DA NATUREZA DO INSTRUMENTO E DAS MODALIDADES",
    body:
      "1.1. Este Contrato disciplina a gestão comercial, operacional e financeira de eletropostos por meio da plataforma Atlas e do Aplicativo da MHZ MOB, aplicando-se, conforme o registrado no Apêndice A, à Modalidade A (Rede MHZ MOB — eletroposto adquirido da MHZ MOB, firmado como Anexo III do respectivo Contrato de Compra, Venda e Instalação) e/ou à Modalidade B (eletroposto de terceiro, de titularidade do INVESTIDOR, instrumento autônomo que não pressupõe relação de compra e venda entre as Partes).\n\n" +
      "1.2. Na Modalidade A, aplicam-se subsidiariamente as disposições do Contrato de Compra, Venda e Instalação, prevalecendo este Contrato quanto à gestão, à plataforma, à remuneração, à arrecadação e ao repasse.\n\n" +
      "1.3. Na Modalidade B, o ingresso do eletroposto na gestão depende de prévia homologação técnica pela MHZ MOB, na forma da Cláusula 7, e este Contrato não implica assunção, pela GESTORA, de qualquer responsabilidade por vícios, defeitos, garantia, projeto, instalação ou conformidade do equipamento e da infraestrutura preexistentes.\n\n" +
      "1.4. Um mesmo INVESTIDOR pode manter, sob este Contrato, Carregadores em ambas as Modalidades, bastando o respectivo registro no Apêndice A, com identificação individual de cada unidade.",
  },
  {
    id: "clausula-2",
    title: "CLÁUSULA 2 — DAS DEFINIÇÕES",
    body:
      "- **Atlas**: sistema de gestão de eletropostos da MHZ MOB, por meio do qual o INVESTIDOR acompanha, em ambiente próprio e segregado, a operação, a telemetria, as Sessões de Recarga, a apuração financeira e os repasses de sua rede;\n" +
      "- **Aplicativo**: software de interface com o Usuário Final, por meio do qual são localizados os eletropostos e iniciadas, encerradas e pagas as Sessões de Recarga;\n" +
      "- **Carregador** ou **Ponto de Recarga**: cada equipamento de recarga individualmente identificado por número de série, ainda que instalado no mesmo endereço ou compartilhando a mesma infraestrutura elétrica. Cada Carregador constitui unidade autônoma de apuração, cobrança e repasse;\n" +
      "- **INVESTIDOR**: o proprietário ou possuidor legítimo do Carregador, titular da receita da recarga;\n" +
      "- **Usuário Final**: pessoa física ou jurídica que utiliza o Carregador para recarregar veículo elétrico ou híbrido plug-in;\n" +
      "- **Sessão de Recarga**: cada evento de recarga individualmente identificado, com registro de início, término, energia entregue (kWh), tempo de conexão e valor apurado;\n" +
      "- **Tarifa ao Usuário**: preço cobrado do Usuário Final pela Sessão de Recarga;\n" +
      "- **Receita Bruta**: soma dos valores efetivamente cobrados e liquidados dos Usuários Finais nas Sessões de Recarga de determinado Carregador, no Ciclo de Apuração;\n" +
      "- **Repasse**: valor devido ao INVESTIDOR, correspondente à Receita Bruta deduzida da remuneração da GESTORA e dos demais itens da Cláusula 11;\n" +
      "- **Ciclo de Apuração**: o mês-calendário imediatamente anterior ao mês do fechamento;\n" +
      "- **O&M**: serviços de operação e manutenção preventiva e corretiva do Carregador e da respectiva infraestrutura, quando contratados;\n" +
      "- **PSP / Adquirente**: prestador de serviços de pagamento responsável pelo processamento das transações;\n" +
      "- **Dia Útil**: dia que não seja sábado, domingo ou feriado nacional.",
  },
  {
    id: "clausula-3",
    title: "CLÁUSULA 3 — DO OBJETO",
    body:
      "3.1. Constitui objeto deste Contrato: (a) a disponibilização ao INVESTIDOR de acesso à plataforma Atlas, para acompanhamento e gestão de sua rede de Carregadores; (b) a exposição dos Carregadores no Aplicativo e nas redes de Roaming integradas, com gestão de tarifas, autenticação e disponibilidade; (c) a arrecadação centralizada, pela GESTORA, dos valores pagos pelos Usuários Finais e o respectivo Repasse ao INVESTIDOR; (d) o monitoramento remoto, o suporte técnico e o atendimento ao Usuário Final, nos termos do SLA; (e) quando contratados, os serviços de O&M, na forma da Cláusula 15 e do Apêndice C.\n\n" +
      "3.2. A plataforma Atlas e o Aplicativo são fornecidos em regime de licenciamento (SaaS), sem cessão de código-fonte, transferência de tecnologia ou exclusividade territorial.",
  },
  {
    id: "clausula-4",
    title: "CLÁUSULA 4 — DA PLATAFORMA ATLAS",
    body:
      "4.1. A GESTORA disponibilizará ao INVESTIDOR, sem custo adicional além da remuneração da Cláusula 11, acesso individualizado ao Atlas, contemplando, no mínimo: (a) status em tempo real de cada Carregador e histórico de eventos e alarmes; (b) relação detalhada das Sessões de Recarga; (c) indicadores de desempenho por Carregador; (d) demonstrativo financeiro do Ciclo de Apuração, com memória de cálculo; (e) histórico de repasses e comprovantes; (f) canal de contestação do fechamento; (g) exportação dos dados em formato aberto (CSV/XLSX).\n\n" +
      "4.2. O acesso será concedido em até 5 (cinco) Dias Úteis contados da ativação do primeiro Carregador, mediante credenciais pessoais e intransferíveis.\n\n" +
      "4.3. O INVESTIDOR poderá cadastrar usuários adicionais, com perfis de leitura ou de operação, respondendo pelos atos por eles praticados.\n\n" +
      "4.4. É vedado ao INVESTIDOR realizar engenharia reversa, extração massiva automatizada de dados (scraping), sublicenciamento ou disponibilização do Atlas a terceiros estranhos à sua operação.\n\n" +
      "4.5. Os dados exibidos no Atlas constituem, para todos os fins deste Contrato, a base oficial de apuração entre as Partes, ressalvado erro material comprovado.",
  },
  {
    id: "clausula-5",
    title: "CLÁUSULA 5 — DOS SERVIÇOS INCLUÍDOS",
    body:
      "5.1. Estão compreendidos na remuneração de gestão da plataforma: (a) hospedagem, manutenção corretiva e evolutiva e atualização do Atlas e do Aplicativo; (b) monitoramento remoto e operação assistida, quando tecnicamente possível; (c) parametrização e manutenção da Tarifa ao Usuário conforme instrução do INVESTIDOR; (d) cadastro e autenticação de Usuários Finais e gestão de credenciais e cartões RFID; (e) processamento de pagamentos, emissão de comprovantes e conciliação financeira; (f) atendimento de 1º nível ao Usuário Final e suporte de 2º nível ao INVESTIDOR; (g) exposição dos Carregadores no Aplicativo e nas redes de Roaming integradas; (h) backup diário e plano de continuidade.",
  },
  {
    id: "clausula-6",
    title: "CLÁUSULA 6 — DO QUE NÃO INTEGRA O OBJETO",
    body:
      "6.1. Salvo contratação específica, não estão incluídos e são de responsabilidade do INVESTIDOR: (a) o custo da energia elétrica consumida nas recargas e as faturas da unidade consumidora; (b) a conectividade do Carregador (link de internet, SIM card 4G/5G) e sua mensalidade; (c) a manutenção preventiva e corretiva do hardware e da infraestrutura elétrica, salvo contratação de O&M; (d) a segurança patrimonial, a limpeza, a sinalização e a disciplina de uso da vaga; (e) campanhas de marketing, cupons e descontos, salvo quando expressamente acordados; (f) customizações, integrações com sistemas de terceiros, marca branca e relatórios sob medida, orçados à parte; (g) tributos e obrigações acessórias incidentes sobre a receita auferida pelo INVESTIDOR.",
  },
  {
    id: "clausula-7",
    title: "CLÁUSULA 7 — DAS CONDIÇÕES ESPECÍFICAS DA MODALIDADE B (ELETROPOSTO DE TERCEIRO)",
    body:
      "7.1. O ingresso de Carregador não fornecido pela MHZ MOB depende de homologação técnica prévia, que verificará compatibilidade com o protocolo OCPP, comandos de start/stop remoto, medição de energia, conformidade documental (ART/TRT, laudo elétrico, aterramento, certificações) e condições de conectividade e acesso físico.\n\n" +
      "7.2. O resultado da homologação será formalizado no Apêndice D, podendo a GESTORA aprovar, aprovar condicionado a adequações (às expensas do INVESTIDOR) ou recusar o ingresso.\n\n" +
      "7.3. A homologação tem natureza de verificação de compatibilidade com a plataforma e não constitui atestado de segurança, de conformidade normativa ou de adequação da instalação.\n\n" +
      "7.4. Na Modalidade B, o INVESTIDOR declara e garante que é proprietário ou possuidor legítimo do Carregador, que a instalação observa as normas técnicas aplicáveis, que inexiste vínculo de exclusividade com outra plataforma de gestão e que mantém em dia as obrigações perante a distribuidora de energia.\n\n" +
      "7.5. Poderá ser cobrada taxa de integração e homologação (onboarding) por Carregador, conforme Apêndice A.\n\n" +
      "7.6. A GESTORA poderá suspender ou desligar do Atlas Carregador que apresente falhas recorrentes, mediante notificação e prazo para regularização pelo INVESTIDOR.",
  },
  {
    id: "clausula-8",
    title: "CLÁUSULA 8 — DAS OBRIGAÇÕES DA GESTORA",
    body:
      "8.1. Obriga-se a GESTORA a: (a) manter o Atlas e o Aplicativo operacionais, observado o SLA do Apêndice B; (b) realizar a apuração e o Repasse nas datas da Cláusula 12; (c) comunicar janelas de manutenção programada com antecedência mínima de 48 horas; (d) adotar medidas técnicas e administrativas de segurança da informação compatíveis com o estado da técnica; (e) não alterar a Tarifa ao Usuário sem instrução escrita do INVESTIDOR; (f) manter os Carregadores corretamente identificados no Aplicativo; (g) disponibilizar, a qualquer tempo, a exportação integral dos dados operacionais e financeiros do INVESTIDOR; (h) emitir a documentação fiscal relativa à sua remuneração.",
  },
  {
    id: "clausula-9",
    title: "CLÁUSULA 9 — DAS OBRIGAÇÕES DO INVESTIDOR",
    body:
      "9.1. Obriga-se o INVESTIDOR a: (a) manter cada Carregador energizado, conectado à internet e em condições de operação; (b) manter a vaga desobstruída e acessível nos horários informados no Aplicativo; (c) informar por escrito a Tarifa ao Usuário e suas alterações, respondendo por sua adequação legal e tributária; (d) manter dados cadastrais, fiscais e bancários atualizados no Atlas; (e) comunicar à GESTORA, em até 2 (dois) Dias Úteis, reclamações, acidentes ou incidentes; (f) não realizar engenharia reversa, cópia, sublicenciamento ou cessão do Atlas e do Aplicativo; (g) não desviar Sessões de Recarga para fora da plataforma com o propósito de reduzir a base de cálculo da remuneração da GESTORA; (h) manter, na Modalidade B, o equipamento em condições técnicas e documentais regulares durante toda a vigência.",
  },
  {
    id: "clausula-10",
    title: "CLÁUSULA 10 — DA TARIFA AO USUÁRIO E DA ARRECADAÇÃO CENTRALIZADA",
    body:
      "10.1. A Tarifa ao Usuário é livremente definida pelo INVESTIDOR, podendo ser estruturada por energia entregue, por tempo de conexão, por taxa de ativação e por idle fee, conforme parametrizado no Apêndice A.\n\n" +
      "10.2. As Partes reconhecem que a atividade de recarga configura prestação de serviço, e não revenda de energia elétrica sujeita a concessão, cabendo ao INVESTIDOR o enquadramento tributário da receita que auferir.\n\n" +
      "10.3. Arrecadação centralizada: todos os valores pagos pelos Usuários Finais serão integralmente retidos pela GESTORA, na qualidade de arrecadadora e repassadora, e posteriormente repassados ao INVESTIDOR na forma das Cláusulas 11 e 12.\n\n" +
      "10.4. A retenção prevista na Cláusula 10.3 tem natureza meramente operacional e não transfere à GESTORA a titularidade da receita da recarga, que permanece do INVESTIDOR.\n\n" +
      "10.5. Estornos, chargebacks e contestações relativos a Sessões de Recarga efetivamente prestadas serão suportados pelo INVESTIDOR e deduzidos dos Repasses subsequentes; quando decorrentes de falha comprovada da plataforma, serão suportados pela GESTORA.",
  },
  {
    id: "clausula-11",
    title: "CLÁUSULA 11 — DA REMUNERAÇÃO DA GESTORA E DA APURAÇÃO POR CARREGADOR",
    body:
      "11.1. Apuração por Carregador. A remuneração da GESTORA e o Repasse ao INVESTIDOR são apurados e cobrados individualmente, por Carregador. Cada Carregador constitui unidade autônoma de cobrança, ainda que instalado no mesmo endereço ou compartilhando a mesma infraestrutura elétrica.\n\n" +
      "11.2. A inclusão ou exclusão de Carregadores produz efeitos sobre a cobrança a partir do Ciclo de Apuração seguinte ao respectivo registro no Atlas.\n\n" +
      "11.3. A remuneração da GESTORA é composta pelos seguintes itens, incidentes sobre a Receita Bruta de cada Carregador no Ciclo de Apuração:\n\n" +
      "- Taxa de gateway de pagamento: **{{percentualGateway}}%** da Receita Bruta\n" +
      "- Gestão da plataforma (Atlas e Aplicativo): **{{percentualGestaoPlataforma}}%** da Receita Bruta\n" +
      "- O&M (operação e manutenção): {{omModeloRemuneracao}} — {{omValor}}\n" +
      "- Mensalidade fixa por Carregador: R$ {{mensalidadeFixaCarregador}}/mês\n" +
      "- Taxa de onboarding (apenas Modalidade B): R$ {{taxaOnboarding}}, cobrança única\n\n" +
      "11.4. Enquanto o O&M não for definido e formalizado no Apêndice C, nada será cobrado a esse título, permanecendo a manutenção do Carregador sob responsabilidade do INVESTIDOR.\n\n" +
      "11.5. Ordem de dedução (cascata). Sobre a Receita Bruta de cada Carregador serão aplicadas, nesta ordem: (i) taxa de gateway de pagamento; (ii) taxa de gestão da plataforma; (iii) O&M, quando contratado; (iv) mensalidade fixa por Carregador, quando contratada; (v) estornos, chargebacks e ajustes de ciclos anteriores; (vi) tributos retidos na fonte, quando legalmente exigidos. O saldo remanescente constitui o Repasse devido ao INVESTIDOR.\n\n" +
      "11.6. Os percentuais previstos nesta Cláusula permanecerão fixos pelo prazo de **{{percentuaisFixosMeses}} meses** contados do início da vigência. Os valores fixos serão reajustados anualmente pela variação positiva do IPCA/IBGE.\n\n" +
      "11.7. Alterações na taxa de gateway impostas pelo PSP ou pelas bandeiras poderão ser repassadas ao INVESTIDOR, mediante comprovação documental e aviso prévio de 30 (trinta) dias, facultada ao INVESTIDOR a resolução sem ônus caso não as aceite.",
  },
  {
    id: "clausula-12",
    title: "CLÁUSULA 12 — DO CICLO FINANCEIRO, DO FECHAMENTO E DO REPASSE",
    body:
      "12.1. O Ciclo de Apuração corresponde ao mês-calendário imediatamente anterior, encerrando-se no seu último dia.\n\n" +
      "12.2. Calendário financeiro: Dia 10 — fechamento e apuração do mês anterior, com demonstrativo por Carregador disponibilizado no Atlas; 5 Dias Úteis do dia 10 — prazo de contestação, exclusivamente pelo canal do Atlas; Dia 25 — pagamento do repasse ao INVESTIDOR, crédito na conta do Apêndice A.\n\n" +
      "12.3. Recaindo o dia 10 ou o dia 25 em sábado, domingo ou feriado nacional, o evento será realizado no primeiro Dia Útil subsequente.\n\n" +
      "12.4. O demonstrativo de fechamento será disponibilizado exclusivamente no Atlas, valendo a disponibilização como notificação ao INVESTIDOR.\n\n" +
      "12.5. Contestação: o INVESTIDOR terá 5 (cinco) Dias Úteis, contados da disponibilização do fechamento, para contestá-lo de forma fundamentada, exclusivamente pelo canal do Atlas. Decorrido o prazo sem manifestação, o fechamento será considerado aceito de forma tácita e definitiva.\n\n" +
      "12.6. A contestação não suspende o pagamento da parcela incontroversa, que será repassada normalmente no dia 25.\n\n" +
      "12.7. A GESTORA responderá à contestação em até 5 (cinco) Dias Úteis de seu recebimento, com a respectiva memória de recálculo.\n\n" +
      "12.8. O atraso da GESTORA no Repasse, por causa que lhe seja imputável, sujeita-a a juros de mora de 1% ao mês, multa de 2% e correção pelo IPCA sobre o valor em atraso.\n\n" +
      "12.9. A GESTORA poderá reter o Repasse enquanto pendentes, por culpa do INVESTIDOR, a atualização de dados bancários, a regularização cadastral ou a entrega de documentação fiscal exigida por lei.\n\n" +
      "12.10. Existindo valores vencidos devidos pelo INVESTIDOR à GESTORA a qualquer título, fica autorizada a compensação com os Repasses, com discriminação no demonstrativo.",
  },
  {
    id: "clausula-13",
    title: "CLÁUSULA 13 — DOS TRIBUTOS E DOS DOCUMENTOS FISCAIS",
    body:
      "13.1. Cada Parte é responsável pelos tributos incidentes sobre as receitas que auferir, cabendo à GESTORA emitir documento fiscal relativo à sua remuneração e ao INVESTIDOR cumprir as obrigações relativas à receita da recarga.\n\n" +
      "13.2. Havendo obrigação legal de retenção na fonte, a GESTORA efetuará a retenção e o recolhimento, discriminando os valores no demonstrativo de fechamento.\n\n" +
      "13.3. A GESTORA disponibilizará no Atlas os relatórios necessários à escrituração da receita pelo INVESTIDOR.",
  },
  {
    id: "clausula-14",
    title: "CLÁUSULA 14 — DO NÍVEL DE SERVIÇO (SLA)",
    body:
      "14.1. A GESTORA compromete-se com Disponibilidade mensal mínima da plataforma de **{{disponibilidadeMinimaPercentual}}%**, apurada na forma do Apêndice B.\n\n" +
      "14.2. Os prazos de atendimento observarão a matriz de severidade do Apêndice B, com plantão para severidade crítica.\n\n" +
      "14.3. As datas de fechamento (dia 10) e de repasse (dia 25) constituem compromissos de nível de serviço financeiro.\n\n" +
      "14.4. Descumprida a Disponibilidade mínima, a GESTORA concederá crédito sobre a remuneração de gestão do mês subsequente, conforme o Apêndice B, limitado a **{{creditoMaximoPercentual}}%**.\n\n" +
      "14.5. Excluem-se do cálculo de Disponibilidade: janelas de manutenção comunicadas; falhas de conectividade ou de energia no local; falhas do hardware; indisponibilidade de terceiros; e força maior.",
  },
  {
    id: "clausula-15",
    title: "CLÁUSULA 15 — DA OPERAÇÃO E MANUTENÇÃO (O&M)",
    body:
      "15.1. Os serviços de O&M são opcionais e somente serão devidos quando contratados e formalizados no Apêndice C.\n\n" +
      "15.2. Enquanto não formalizado o Apêndice C, o O&M permanece a definir, não sendo cobrado, e a manutenção do Carregador é de responsabilidade exclusiva do INVESTIDOR.\n\n" +
      "15.3. Na Modalidade B, a contratação de O&M dependerá de avaliação prévia do estado do equipamento e poderá ser recusada, condicionada a adequações ou precificada de forma diversa.\n\n" +
      "15.4. O O&M não abrange danos excluídos de garantia, vandalismo, sinistros, adequações de infraestrutura, obras civis e substituição de equipamento por obsolescência.",
  },
  {
    id: "clausula-16",
    title: "CLÁUSULA 16 — DO ATENDIMENTO AO USUÁRIO FINAL",
    body:
      "16.1. A GESTORA prestará atendimento de 1º nível ao Usuário Final, nos canais e horários do Apêndice B.\n\n" +
      "16.2. Reclamações relativas ao estado físico do Carregador, à vaga, à segurança do local ou à qualidade da energia serão encaminhadas ao INVESTIDOR, salvo se contratado O&M com escopo correspondente.\n\n" +
      "16.3. As Partes cooperarão na resposta a reclamações perante órgãos de defesa do consumidor e plataformas públicas.",
  },
  {
    id: "clausula-17",
    title: "CLÁUSULA 17 — DA PROPRIEDADE INTELECTUAL E DOS DADOS OPERACIONAIS",
    body:
      "17.1. O Atlas, o Aplicativo, as marcas, os layouts e a documentação correlata são de titularidade exclusiva da GESTORA ou de seus licenciantes, sendo concedida ao INVESTIDOR licença não exclusiva, intransferível e revogável.\n\n" +
      "17.2. Sugestões e feedback fornecidos pelo INVESTIDOR poderão ser livremente incorporados pela GESTORA, sem cotitularidade, remuneração ou royalties.\n\n" +
      "17.3. Os registros de Sessões de Recarga, consumo e faturamento dos Carregadores do INVESTIDOR pertencem ao INVESTIDOR, que poderá exportá-los a qualquer tempo pelo Atlas. A GESTORA poderá utilizá-los de forma agregada e anonimizada para fins estatísticos.\n\n" +
      "17.4. O INVESTIDOR autoriza a exibição do nome, do logotipo e de imagens do eletroposto no Aplicativo, no Atlas e nos canais institucionais da GESTORA.",
  },
  {
    id: "clausula-18",
    title: "CLÁUSULA 18 — DA PROTEÇÃO DE DADOS PESSOAIS (LGPD)",
    body:
      "18.1. No tratamento de dados pessoais de Usuários Finais realizado por meio do Aplicativo, a GESTORA atua como controladora, respondendo pela base legal, pela política de privacidade, pelo atendimento aos direitos dos titulares e pelas comunicações à ANPD.\n\n" +
      "18.2. O INVESTIDOR atua como controlador dos dados que trate por conta própria e, ao receber dados pessoais por meio do Atlas, obriga-se a utilizá-los exclusivamente para as finalidades deste Contrato, vedado o uso para marketing próprio ou compartilhamento com terceiros sem base legal.\n\n" +
      "18.3. As Partes obrigam-se a adotar medidas de segurança adequadas, manter registro das operações de tratamento, comunicar uma à outra em até 2 (dois) Dias Úteis qualquer incidente de segurança relevante e cooperar no atendimento de requisições de titulares e autoridades.\n\n" +
      "18.4. Extinto este Contrato, a GESTORA disponibilizará ao INVESTIDOR, em até 30 (trinta) dias, a exportação dos dados operacionais e financeiros, eliminando-os em seguida, salvo guarda obrigatória. Os dados pessoais de Usuários Finais permanecem sob a controladoria da GESTORA.",
  },
  {
    id: "clausula-19",
    title: "CLÁUSULA 19 — DA CONFIDENCIALIDADE",
    body:
      "19.1. As Partes manterão em sigilo as informações técnicas, comerciais e financeiras a que tiverem acesso, incluindo tarifas praticadas, volumes de recarga, faturamento e condições comerciais aqui pactuadas, pelo prazo de vigência e por mais 2 (dois) anos após a extinção.\n\n" +
      "19.2. Excetuam-se as informações de domínio público sem culpa da Parte receptora, as já legitimamente conhecidas e aquelas cuja divulgação seja exigida por lei ou autoridade competente.",
  },
  {
    id: "clausula-20",
    title: "CLÁUSULA 20 — DA RESPONSABILIDADE E SUA LIMITAÇÃO",
    body:
      "20.1. A GESTORA não garante operação ininterrupta e isenta de erros, comprometendo-se a envidar seus melhores esforços e a observar o SLA.\n\n" +
      "20.2. Salvo dolo, culpa grave, danos pessoais, violação de confidencialidade ou de proteção de dados e retenção indevida de Repasses, a responsabilidade total da GESTORA, em cada período de 12 (doze) meses, limita-se ao valor total de sua remuneração nos 12 (doze) meses anteriores ao evento, não respondendo por lucros cessantes ou danos indiretos.\n\n" +
      "20.3. A GESTORA não responde por indisponibilidade decorrente de falha de energia, de conectividade, do hardware, de terceiros ou de uso indevido pelo Usuário Final.\n\n" +
      "20.4. O INVESTIDOR responde perante Usuários Finais e terceiros pelos danos decorrentes do estado, da segurança e da operação física do Carregador e do local.\n\n" +
      "20.5. Caracterizada relação de consumo entre as Partes, a limitação da Cláusula 20.2 não se aplicará.",
  },
  {
    id: "clausula-21",
    title: "CLÁUSULA 21 — DO PRAZO, DA RESCISÃO E DA TRANSIÇÃO",
    body:
      "21.1. Este Contrato vigorará por **{{vigenciaMeses}} meses**, contados (i) na Modalidade A, da assinatura do Termo de Recebimento Definitivo do primeiro Carregador; (ii) na Modalidade B, da homologação técnica do primeiro Carregador; renovando-se automaticamente por períodos iguais, salvo manifestação escrita com antecedência mínima de 60 (sessenta) dias.\n\n" +
      "21.2. Qualquer das Partes poderá denunciar este Contrato imotivadamente mediante aviso prévio escrito de 90 (noventa) dias, sem ônus, ressalvado o disposto na Cláusula 21.3.\n\n" +
      "21.3. Havendo carência, isenção, subsídio de implantação ou investimento amortizado pela GESTORA, a denúncia imotivada pelo INVESTIDOR antes do prazo mínimo acordado implicará o ressarcimento proporcional do benefício concedido, apurado pro rata temporis.\n\n" +
      "21.4. A resolução por descumprimento de obrigação relevante não sanada em 15 (quinze) dias de notificação escrita sujeitará a Parte inadimplente a multa compensatória sobre a remuneração estimada do período remanescente, limitada a 6 (seis) meses de remuneração.\n\n" +
      "21.5. Transição e desligamento: extinto este Contrato, a GESTORA (i) manterá a operação por até 60 (sessenta) dias adicionais, mediante pagamento da remuneração vigente; (ii) entregará a exportação integral dos dados; (iii) liberará as credenciais OCPP e promoverá o desvinculamento dos Carregadores do backend; (iv) não praticará ato que dificulte a migração para outra plataforma.\n\n" +
      "21.6. As obrigações da Cláusula 21.5 poderão ser condicionadas à quitação integral dos valores devidos pelo INVESTIDOR, ressalvado seu direito de exigir a liberação mediante depósito do valor controvertido.\n\n" +
      "21.7. Os Repasses relativos a Ciclos de Apuração já encerrados serão pagos nas datas ordinárias, ainda que após a extinção do Contrato.",
  },
  {
    id: "clausula-22",
    title: "CLÁUSULA 22 — DAS DISPOSIÇÕES GERAIS E DO FORO",
    body:
      "22.1. A GESTORA poderá subcontratar terceiros para a execução parcial dos serviços (hospedagem, PSP, atendimento, O&M), permanecendo integralmente responsável perante o INVESTIDOR.\n\n" +
      "22.2. Alterações de funcionalidades que reduzam materialmente o escopo contratado serão comunicadas com antecedência mínima de 30 (trinta) dias, facultada ao INVESTIDOR a resolução sem ônus caso não as aceite.\n\n" +
      "22.3. As comunicações serão feitas por escrito, pelo Atlas ou por e-mail com confirmação de recebimento, aos endereços do Apêndice A.\n\n" +
      "22.4. A eventual nulidade de qualquer cláusula não prejudicará as demais. Este Contrato não cria vínculo societário, associativo ou empregatício entre as Partes.\n\n" +
      "22.5. As Partes reconhecem a validade da assinatura eletrônica, nos termos do art. 10, §2º, da MP nº 2.200-2/2001 e da Lei nº 14.063/2020.\n\n" +
      "22.6. Integram este Contrato os Apêndices A (Carregadores, tarifas, remuneração e dados de repasse), B (SLA, canais e calendário financeiro), C (Escopo de O&M) e D (Homologação técnica — Modalidade B).\n\n" +
      "22.7. Fica eleito o foro da Comarca de **{{cidadeAssinatura}}**, com renúncia a qualquer outro. Caracterizada relação de consumo, prevalecerá o foro do domicílio do INVESTIDOR.",
  },
  {
    id: "assinaturas",
    title: "ASSINATURAS",
    body:
      "E, por estarem justas e contratadas, as Partes assinam este instrumento em 2 (duas) vias de igual teor, ou eletronicamente, na presença de 2 (duas) testemunhas.\n\n" +
      "{{cidadeAssinatura}}, {{dataAssinaturaDia}} de {{dataAssinaturaMes}} de {{dataAssinaturaAno}}.\n\n" +
      "**{{gestoraRazaoSocial}} (MHZ MOB)** — CNPJ nº {{gestoraCnpj}} — GESTORA\n\n" +
      "**{{investidorNomeRazaoSocial}}** — CPF/CNPJ nº {{investidorCpfCnpj}} — INVESTIDOR\n\n" +
      "**TESTEMUNHAS:**\n\n" +
      "Nome: {{testemunha1Nome}} — CPF nº {{testemunha1Cpf}}\n\n" +
      "Nome: {{testemunha2Nome}} — CPF nº {{testemunha2Cpf}}",
  },
  {
    id: "apendice-a",
    title: "APÊNDICE A — CARREGADORES, TARIFAS, REMUNERAÇÃO E DADOS DE REPASSE",
    body:
      "**1. Carregadores abrangidos** (cada linha é uma unidade autônoma de cobrança, na forma da Cláusula 11.1):\n\n" +
      "{{carregadores}}\n\n" +
      "**2. Tarifa ao Usuário Final (vigente na assinatura)**\n" +
      "- Tarifa por energia: R$ {{tarifaEnergiaKwh}} / kWh\n" +
      "- Tarifa por tempo: R$ {{tarifaTempoMinuto}} / minuto\n" +
      "- Taxa de ativação: R$ {{taxaAtivacao}} por sessão\n" +
      "- Idle fee: R$ {{idleFeeValor}} / minuto, após {{idleFeeMinutosCarencia}} minutos do término da recarga\n" +
      "- Horário exibido no Aplicativo: {{horarioExibidoApp}}\n\n" +
      "**3. Dados para repasse**\n" +
      "- Titular: {{repasseTitular}} | CPF/CNPJ: {{repasseCpfCnpj}}\n" +
      "- Banco: {{repasseBanco}} | Agência: {{repasseAgencia}} | Conta: {{repasseConta}} | Chave PIX: {{repassePix}}\n\n" +
      "**4. Contatos**\n" +
      "- INVESTIDOR — A/C: {{investidorContatoNome}} | E-mail: {{investidorContatoEmail}} | Telefone: {{investidorContatoTelefone}}\n" +
      "- GESTORA — A/C: {{gestoraContatoNome}} | E-mail: {{gestoraContatoEmail}} | Telefone: {{gestoraContatoTelefone}}",
  },
  {
    id: "apendice-b",
    title: "APÊNDICE B — NÍVEIS DE SERVIÇO, CANAIS E CALENDÁRIO FINANCEIRO",
    body:
      "**Matriz de severidade**\n" +
      "- Crítica — resposta: {{slaCriticaRespostaHoras}}h | solução: {{slaCriticaSolucaoHoras}}h\n" +
      "- Alta — resposta: {{slaAltaRespostaHoras}}h | solução: {{slaAltaSolucaoHorasUteis}}h úteis\n" +
      "- Média — resposta: {{slaMediaRespostaDiasUteis}} dias úteis | solução: {{slaMediaSolucaoDiasUteis}} dias úteis\n" +
      "- Baixa — resposta: {{slaBaixaRespostaDiasUteis}} dias úteis | solução: a combinar\n\n" +
      "**Canais e horários**\n" +
      "- Usuário Final (1º nível): {{canalUsuarioFinal}} — horário: {{horarioUsuarioFinal}}\n" +
      "- Investidor (2º nível): {{canalInvestidor}} — horário: {{horarioInvestidor}}\n" +
      "- Plantão para severidade crítica: {{plantaoCritico}}",
  },
];
