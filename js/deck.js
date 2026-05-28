const DECK = [
  {
    id: 0,
    name: "O Louco",
    img: "assets/00.png",
    keywords: "Início, espontaneidade, aventura",
    meaning: "Um novo começo se apresenta. A energia do Louco convida você a dar o salto com fé, sem medo do desconhecido. O espírito livre domina o momento.",
    meaning_reversed: "Impulsividade e falta de direção. Cuidado com decisões precipitadas."
  },
  {
    id: 1,
    name: "O Mago",
    img: "assets/01.png",
    keywords: "Vontade, habilidade, manifestação",
    meaning: "Você possui todos os recursos necessários. O Mago aponta para o poder de transformar intenção em realidade através da ação consciente.",
    meaning_reversed: "Manipulação ou potencial desperdiçado. Reveja suas intenções."
  },
  {
    id: 2,
    name: "A Sacerdotisa",
    img: "assets/02.png",
    keywords: "Intuição, mistério, sabedoria interior",
    meaning: "O conhecimento que você busca está dentro de você. A Sacerdotisa pede silêncio e escuta — confie na sua intuição acima de tudo.",
    meaning_reversed: "Segredos ocultos ou intuição bloqueada. Algo não está sendo revelado."
  },
  {
    id: 3,
    name: "A Imperatriz",
    img: "assets/03.png",
    keywords: "Abundância, fertilidade, criatividade",
    meaning: "Tempo de florescimento e criação. A Imperatriz traz nutrição, beleza e prosperidade. O que você semeia agora cresce com força.",
    meaning_reversed: "Dependência excessiva ou estagnação criativa."
  },
  {
    id: 4,
    name: "O Imperador",
    img: "assets/04.png",
    keywords: "Autoridade, estrutura, estabilidade",
    meaning: "Construa com firmeza e disciplina. O Imperador representa o poder de criar ordem, estabelecer limites e liderar com responsabilidade.",
    meaning_reversed: "Rigidez, controle excessivo ou autoridade mal usada."
  },
  {
    id: 5,
    name: "O Hierofante",
    img: "assets/05.png",
    keywords: "Tradição, ensinamento, crença",
    meaning: "Busque sabedoria nos ensinamentos estabelecidos. Rituais, tradições e mentores têm algo importante a oferecer neste momento.",
    meaning_reversed: "Dogmatismo ou necessidade de questionar o status quo."
  },
  {
    id: 6,
    name: "Os Amantes",
    img: "assets/06.png",
    keywords: "União, escolha, valores",
    meaning: "Uma escolha importante se apresenta, alinhada aos seus valores mais profundos. Relacionamentos e alinhamento interior estão em foco.",
    meaning_reversed: "Desequilíbrio nos relacionamentos ou conflito de valores."
  },
  {
    id: 7,
    name: "O Carro",
    img: "assets/07.png",
    keywords: "Vitória, determinação, controle",
    meaning: "Você está no caminho certo. Com foco e determinação, os obstáculos serão vencidos. A vitória vem pela disciplina e força de vontade.",
    meaning_reversed: "Falta de controle ou direção. Reavaliar o rumo."
  },
  {
    id: 8,
    name: "A Força",
    img: "assets/08.png",
    keywords: "Coragem, paciência, compaixão",
    meaning: "A verdadeira força não é bruta — ela vem de dentro. Enfrente os desafios com calma, coragem e coração aberto.",
    meaning_reversed: "Insegurança ou força mal direcionada."
  },
  {
    id: 9,
    name: "O Eremita",
    img: "assets/09.png",
    keywords: "Recolhimento, sabedoria, busca interior",
    meaning: "Um período de introspecção e busca interior. Afaste-se do ruído externo — a lanterna do Eremita ilumina seu próprio caminho.",
    meaning_reversed: "Isolamento excessivo ou recusa em aceitar ajuda."
  },
  {
    id: 10,
    name: "A Roda da Fortuna",
    img: "assets/10.png",
    keywords: "Ciclos, destino, mudança",
    meaning: "A roda gira e tudo muda. Um ciclo importante está em movimento — reconheça os padrões e alinhe-se ao fluxo natural da vida.",
    meaning_reversed: "Resistência à mudança ou má sorte passageira."
  },
  {
    id: 11,
    name: "A Justiça",
    img: "assets/11.png",
    keywords: "Equilíbrio, verdade, consequência",
    meaning: "As ações têm consequências. A Justiça pede honestidade e equilíbrio — o que é justo prevalecerá se você agir com integridade.",
    meaning_reversed: "Injustiça ou fuga da responsabilidade."
  },
  {
    id: 12,
    name: "O Enforcado",
    img: "assets/12.png",
    keywords: "Pausa, sacrifício, perspectiva",
    meaning: "Uma pausa voluntária revela o que não era visível antes. O Enforcado pede rendição e uma nova perspectiva — o sacrifício tem propósito.",
    meaning_reversed: "Estagnação por resistência ou martirio desnecessário."
  },
  {
    id: 13,
    name: "A Morte",
    img: "assets/13.png",
    keywords: "Transformação, fim e começo, renovação",
    meaning: "Não é o fim — é a transformação mais profunda. O que estava velho precisa partir para que o novo possa nascer. Aceite a mudança.",
    meaning_reversed: "Resistência à transformação necessária."
  },
  {
    id: 14,
    name: "A Temperança",
    img: "assets/14.png",
    keywords: "Equilíbrio, moderação, paciência",
    meaning: "A harmonia vem da moderação. A Temperança convida ao equilíbrio entre os opostos — paciência e fluxo criam resultados duradouros.",
    meaning_reversed: "Desequilíbrio ou impaciência prejudicando resultados."
  },
  {
    id: 15,
    name: "O Diabo",
    img: "assets/15.png",
    keywords: "Apego, sombra, ilusão",
    meaning: "Examine o que te prende. O Diabo revela apegos, ilusões ou padrões sombrios que limitam sua liberdade — o poder de romper as correntes é seu.",
    meaning_reversed: "Libertação de apegos ou início da cura de padrões."
  },
  {
    id: 16,
    name: "A Torre",
    img: "assets/16.png",
    keywords: "Ruptura, revelação, caos criativo",
    meaning: "Uma estrutura falsa está prestes a cair. A Torre traz revelação através da ruptura — o caos momentâneo abre espaço para a verdade.",
    meaning_reversed: "Evitar mudança necessária ou desastre adiado."
  },
  {
    id: 17,
    name: "A Estrela",
    img: "assets/17.png",
    keywords: "Esperança, renovação, fé",
    meaning: "Após a tempestade, a Estrela ilumina com esperança e renovação. Confie no processo, cure-se e siga em frente com fé no futuro.",
    meaning_reversed: "Desespero ou dificuldade em ver a luz."
  },
  {
    id: 18,
    name: "A Lua",
    img: "assets/18.png",
    keywords: "Ilusão, inconsciente, medo",
    meaning: "Nem tudo é o que parece. A Lua revela o inconsciente, medos e ilusões — navegue com cuidado e confie mais na intuição que na razão.",
    meaning_reversed: "Confusão se dissipando ou medos sendo superados."
  },
  {
    id: 19,
    name: "O Sol",
    img: "assets/19.png",
    keywords: "Alegria, clareza, sucesso",
    meaning: "Clareza, vitalidade e sucesso irradiam. O Sol ilumina tudo com positividade — é tempo de celebrar, criar e brilhar com autenticidade.",
    meaning_reversed: "Otimismo excessivo ou clareza temporariamente obscurecida."
  },
  {
    id: 20,
    name: "O Julgamento",
    img: "assets/20.png",
    keywords: "Avaliação, renascimento, chamado",
    meaning: "Um chamado profundo para renascer e se avaliar com honestidade. O Julgamento convida à absolvição do passado e ao compromisso com um novo propósito.",
    meaning_reversed: "Autocrítica excessiva ou recusa de ouvir o chamado interior."
  },
  {
    id: 21,
    name: "O Mundo",
    img: "assets/21.png",
    keywords: "Completude, realização, integração",
    meaning: "Um ciclo se completa com maestria. O Mundo representa realização plena, integração e a sensação de que tudo se encaixou perfeitamente.",
    meaning_reversed: "Ciclo incompleto ou busca de atalhos."
  }
];

export default DECK;