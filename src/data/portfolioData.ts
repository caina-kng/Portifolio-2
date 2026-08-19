import { TrajectoryNode, VisionTopic, SkillItem, ProjectDetail, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'JOÃO CAINÃ',
  roleTag: 'MILITAR • EX-JOGADOR FEDERADO • ENTUSIASTA DE IA & ESPORTE',
  location: 'Brasília — DF',
  coordinates: '15° 47\' 38" S  47° 52\' 58" W',
  heroHeadlineMain: 'EXPERIÊNCIAS DIFERENTES.',
  heroHeadlineAccent: 'UMA MESMA FORMA DE PENSAR.',
  heroDescription:
    'Militar, ex-jogador federado e entusiasta de tecnologia explorando Inteligência Artificial, dados e esporte para transformar ideias em projetos.',
  positioningStatement:
    'Estou construindo minha trajetória em tecnologia e Inteligência Artificial, utilizando minhas experiências com esporte, estatística e disciplina para criar projetos e explorar novas soluções.',
  coreQuote: 'Quero transformar minha experiência com o esporte em soluções para o próprio esporte.',
  evolutionConcept: 'JOGAR → OBSERVAR → ANALISAR → CONSTRUIR',
};

export const TRAJECTORY_NODES: TrajectoryNode[] = [
  {
    id: 'basquete',
    stepNumber: '01',
    label: '01 BASQUETE',
    period: '2018 — 2020',
    title: 'BASQUETE FEDERADO',
    subtitle: 'O início da trajetória esportiva em Brasília',
    description:
      'Experiência como jogador federado de basquete em Brasília. Base fundamental onde foram desenvolvidos princípios que acompanham toda a caminhada: leitura rápida de jogo, tomada de decisão sob pressão, trabalho em equipe e competitividade constante.',
    category: 'esporte',
    badge: 'JOGADOR FEDERADO',
    keyConcepts: ['Competitividade', 'Disciplina', 'Trabalho em Equipe', 'Leitura de Jogo', 'Tomada de Decisão', 'Evolução'],
    statusText: 'Fundação e visão de quadra',
  },
  {
    id: 'federacao',
    stepNumber: '02',
    label: '02 FEDERAÇÃO',
    period: 'PÓS-JOGADOR',
    title: 'FBDF — FEDERAÇÃO DE BASQUETEBOL DO DF',
    subtitle: 'Contato institucional e ampliação da visão esportiva',
    description:
      'Aproximação com a Federação de Basquetebol do Distrito Federal (FBDF), compreendendo a estrutura organizacional do esporte e abrindo caminhos para o aprendizado técnico fora das quatro linhas.',
    category: 'estatistica',
    badge: 'FORMAÇÃO TÉCNICA',
    keyConcepts: ['Estrutura Esportiva', 'Visão Institucional', 'Regulamentos', 'Organização de Partidas'],
    statusText: 'Transição da quadra para a análise',
  },
  {
    id: 'estatistica',
    stepNumber: '03',
    label: '03 ESTATÍSTICA',
    period: 'CAPACITAÇÃO TÉCNICA',
    title: 'CURSO DE ESTATÍSTICA DE BASQUETE (FBDF)',
    subtitle: 'JOGAR → OBSERVAR → ANALISAR → CONSTRUIR',
    description:
      'Curso oficial de Estatística de Basquete realizado pela FBDF. Momento divisor de águas onde passei a enxergar o esporte sob a ótica analítica: dados, scout, organização de súmulas, análise de desempenho e o potencial da tecnologia aplicada ao esporte.',
    category: 'estatistica',
    badge: 'SCOUT & DADOS',
    keyConcepts: ['Estatísticas Oficiais', 'Scout Técnico', 'Súmulas', 'Análise de Desempenho', 'Dados no Esporte'],
    quote: 'Foi através da estatística que comecei a enxergar como tecnologia e dados poderiam ampliar a forma como entendemos o esporte.',
    statusText: 'Despertar para o poder dos dados',
  },
  {
    id: 'exercito',
    stepNumber: '04',
    label: '04 EXÉRCITO',
    period: '2022 — ATUALMENTE',
    title: 'EXÉRCITO BRASILEIRO',
    subtitle: 'Atuação profissional e fortalecimento de princípios',
    description:
      'Atuação profissional no Exército Brasileiro desde 2022. Experiência que consolida pilares indispensáveis para qualquer projeto: rigor operacional, comprometimento, visão estratégica, responsabilidade e capacidade de execução.',
    category: 'militar',
    badge: 'ATUAÇÃO PROFISSIONAL ATUAL',
    keyConcepts: ['Disciplina Operacional', 'Responsabilidade', 'Estratégia', 'Comprometimento', 'Execução', 'Organização'],
    statusText: 'Estrutura, foco e perseverança',
  },
  {
    id: 'tecnologia',
    stepNumber: '05',
    label: '05 TECNOLOGIA',
    period: 'ATUALMENTE',
    title: 'TECNOLOGIA & INTELIGÊNCIA ARTIFICIAL',
    subtitle: 'Criação, experimentação e projetos digitais',
    description:
      'Ampliando conhecimentos em tecnologia, Inteligência Artificial, engenharia de prompt e prototipagem rápida. Foco em explorar como modelos generativos e fluxos de dados podem resolver gargalos reais no esporte.',
    category: 'tecnologia',
    badge: 'EM CONSTRUÇÃO ATIVA',
    keyConcepts: ['Inteligência Artificial', 'Engenharia de Prompt', 'Google AI Studio', 'GitHub', 'Vercel', 'Prototipagem'],
    statusText: 'Unindo dados, disciplina e código',
  },
  {
    id: 'futuro',
    stepNumber: '06',
    label: '06 FUTURO',
    period: 'VISÃO DE LONGO PRAZO',
    title: 'SPORTSTECH & CONTRIBUIÇÃO AO BASQUETE',
    subtitle: 'Levar inovação e tecnologia para o esporte e para a FBDF',
    description:
      'Objetivo futuro de construir soluções sólidas que aproximem basquete, dados e Inteligência Artificial. Com o aprendizado contínuo, levar esse conhecimento para apoiar atletas, treinadores e, se houver oportunidade futura, contribuir com a FBDF.',
    category: 'futuro',
    badge: 'OBJETIVO FUTURO',
    keyConcepts: ['Inovação no Basquete', 'Sportstech', 'Apoio a Atletas', 'Contribuição com a FBDF'],
    statusText: 'Visão de impacto esportivo',
  },
];

export const VISION_TOPICS: VisionTopic[] = [
  {
    id: 'performance',
    number: '01',
    title: 'PERFORMANCE',
    tagline: 'Acompanhamento físico e evolução',
    description:
      'Exploração de como a tecnologia pode auxiliar atletas no monitoramento de carga, evolução técnica e identificação de pontos de melhoria física com base em registros contínuos.',
    iconName: 'Activity',
    focusArea: 'Acompanhamento Físico & Evolução',
    metricConcept: 'Métricas de carga e ritmo',
  },
  {
    id: 'dados',
    number: '02',
    title: 'DADOS',
    tagline: 'Organização e interpretação de estatísticas',
    description:
      'Transformar números brutos de quadra em insights claros e objetivos, permitindo que jogadores compreendam sua eficiência real em diferentes momentos do jogo.',
    iconName: 'BarChart2',
    focusArea: 'Organização & Leitura Estatística',
    metricConcept: 'Eficiência de arremesso & posse',
  },
  {
    id: 'scout',
    number: '03',
    title: 'SCOUT',
    tagline: 'Análise de jogos e desempenho individual',
    description:
      'Sistematização de padrões de jogo, tendências ofensivas/defensivas e leitura de adversários com o auxílio de estruturas inteligentes de análise.',
    iconName: 'Target',
    focusArea: 'Análise Tática & Comportamento',
    metricConcept: 'Mapeamento espacial de jogadas',
  },
  {
    id: 'sumula',
    number: '04',
    title: 'SÚMULA',
    tagline: 'Organização e utilização de informações',
    description:
      'Modernização da coleta e estruturação de dados de súmulas esportivas, facilitando o histórico de partidas e a consulta rápida por treinadores e federações.',
    iconName: 'FileSpreadsheet',
    focusArea: 'Estruturação de Histórico de Jogos',
    metricConcept: 'Digitalização e histórico de partidas',
  },
  {
    id: 'treinamento',
    number: '05',
    title: 'TREINAMENTO',
    tagline: 'Criação e personalização de rotinas para atletas',
    description:
      'Uso de Inteligência Artificial para gerar rotinas de treinamento adaptadas às necessidades específicas, deficiências técnicas e rotina de cada atleta.',
    iconName: 'Dumbbell',
    focusArea: 'Personalização com Modelos de IA',
    metricConcept: 'Planilhas inteligentes de fundamentos',
  },
];

export const MAIN_PROJECT: ProjectDetail = {
  id: 'ai-basketball-coach',
  title: 'APP DE TREINAMENTO DE BASQUETE COM IA',
  provisionalName: 'AI BASKETBALL COACH [NOME PROVISÓRIO]',
  category: 'SPORTSTECH • IA • BASQUETE',
  status: 'EM DESENVOLVIMENTO',
  description:
    'Projeto em desenvolvimento focado na criação de uma plataforma de treinamento de basquete auxiliada por Inteligência Artificial, explorando maneiras de personalizar treinos e acompanhar a evolução do atleta.',
  detailedVision:
    'A plataforma nasce da percepção de que a maioria dos atletas amadores e em formação não possui acesso a comissões técnicas completas. A IA pode atuar como uma ferramenta de apoio para estruturar sessões de fundamentos, calcular volumes de treino e orientar o foco semanal.',
  problem:
    'Treinos genéricos sem direcionamento individual, falta de métricas acessíveis para atletas fora do alto rendimento profissional e dificuldade em planejar uma evolução técnica consistente ao longo dos meses.',
  solution:
    'Uma aplicação orientada a IA que interpreta as características do jogador (posição, pontos fortes, deficiências, tempo disponível) e estrutura planos de desenvolvimento de fundamentos com acompanhamento dinâmico.',
  corePillars: [
    {
      title: 'Criação de Treinos',
      description: 'Geração estruturada de blocos de aquecimento, mecânica, arremesso e tomada de decisão.',
      icon: 'Calendar',
    },
    {
      title: 'Organização de Sessões',
      description: 'Divisão de tempo por fundamento (dribles, finalizações, defesa, arremesso sob fadiga).',
      icon: 'Clock',
    },
    {
      title: 'Desenvolvimento de Fundamentos',
      description: 'Instruções claras e pontos de atenção técnica para cada exercício proposto.',
      icon: 'Zap',
    },
    {
      title: 'Planejamento de Evolução',
      description: 'Ciclos de treino adaptáveis que evoluem conforme o atleta registra seu progresso.',
      icon: 'TrendingUp',
    },
    {
      title: 'Acompanhamento de Progresso',
      description: 'Registro de volume semanal, repetições concluídas e autoavaliação de confiança.',
      icon: 'BarChart',
    },
    {
      title: 'Personalização através de IA',
      description: 'Prompts especializados que calibram a intensidade e foco para cada perfil de atleta.',
      icon: 'Cpu',
    },
  ],
  roadmap: [
    {
      phase: 'FASE 01',
      title: 'Conceituação & Engenharia de Prompt',
      description: 'Estruturação dos prompts de treinamento esportivo e regras de basquete no Google AI Studio.',
      completed: true,
      current: false,
    },
    {
      phase: 'FASE 02',
      title: 'Prototipagem de Interface & Fluxos',
      description: 'Desenho da experiência do atleta, cards de exercícios e navegação de sessões.',
      completed: false,
      current: true,
    },
    {
      phase: 'FASE 03',
      title: 'Integração de Modelos & Feedback de Treino',
      description: 'Conexão dos modelos de IA com a interface web e testes de geração de rotinas.',
      completed: false,
      current: false,
    },
    {
      phase: 'FASE 04',
      title: 'Testes Práticos com Jogadores',
      description: 'Validação com atletas locais para refinamento dos exercícios e usabilidade da ferramenta.',
      completed: false,
      current: false,
    },
  ],
  toolsInvolved: ['Google AI Studio', 'Engenharia de Prompt', 'GitHub', 'Vercel', 'Design Gráfico'],
};

export const SKILLS_DATA: SkillItem[] = [
  // Competências
  {
    id: 'prompt-eng',
    title: 'Engenharia de Prompt',
    description: 'Criação, teste e estruturação de instruções refinadas para modelos de Inteligência Artificial.',
    category: 'competencia',
    icon: 'Terminal',
    tag: 'IA & MODELOS',
  },
  {
    id: 'graphic-design',
    title: 'Design Gráfico',
    description: 'Criação de conceitos visuais, interfaces, identidades e materiais digitais com foco estético e clareza.',
    category: 'competencia',
    icon: 'Layers',
    tag: 'VISUAL & UI',
  },
  {
    id: 'ai-projects',
    title: 'Inteligência Artificial aplicada a projetos',
    description: 'Exploração de aplicações práticas de IA generativa para resolver problemas reais no esporte e produtividade.',
    category: 'competencia',
    icon: 'Cpu',
    tag: 'SOLUÇÕES IA',
  },
  {
    id: 'prototyping',
    title: 'Prototipagem de soluções',
    description: 'Estruturação ágil de conceitos, fluxos de navegação e teste de viabilidade de aplicações digitais.',
    category: 'competencia',
    icon: 'Box',
    tag: 'PRODUTO & CONCEITO',
  },
  // Ferramentas
  {
    id: 'google-ai-studio',
    title: 'Google AI Studio',
    description: 'Uso para explorar criação de aplicações, protótipos e soluções utilizando Inteligência Artificial.',
    category: 'ferramenta',
    icon: 'Sparkles',
    tag: 'FERRAMENTA DE IA',
  },
  {
    id: 'github',
    title: 'GitHub',
    description: 'Uso para organização, armazenamento e versionamento dos meus projetos e códigos.',
    category: 'ferramenta',
    icon: 'GitBranch',
    tag: 'VERSIONAMENTO',
  },
  {
    id: 'vercel',
    title: 'Vercel',
    description: 'Uso para publicação, deploy e hospedagem dos meus projetos web e protótipos em produção.',
    category: 'ferramenta',
    icon: 'Globe',
    tag: 'DEPLOY & HOSTING',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/caina-kngg',
    username: 'caina-kngg',
    icon: 'Github',
    type: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jo%C3%A3o-cain%C3%A3-',
    username: 'João Cainã',
    icon: 'Linkedin',
    type: 'linkedin',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/og_castrin',
    username: '@og_castrin',
    icon: 'Instagram',
    type: 'instagram',
  },
];

export const ABOUT_TEXT = {
  paragraphs: [
    'Sou João Cainã, de Brasília, militar do Exército Brasileiro e ex-jogador federado de basquete.',
    'Minha trajetória começou dentro do esporte, mas foi através de um curso de Estatística de Basquete pela FBDF que comecei a enxergar novas possibilidades além da quadra.',
    'A partir daí, passei a me interessar cada vez mais por tecnologia, dados e Inteligência Artificial.',
    'Hoje estou construindo projetos e ampliando meus conhecimentos com o objetivo de entender como essas ferramentas podem contribuir com atletas, treinadores e organizações esportivas.',
    'No futuro, espero conseguir complementar essa experiência ainda mais dentro do basquete e, caso surja oportunidade, contribuir também com a FBDF utilizando tecnologia e inovação.',
  ],
  quote: 'Quero transformar minha experiência com o esporte em soluções para o próprio esporte.',
};
