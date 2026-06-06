const DECK = await fetch('./js/deck.json').then(r => r.json());

export default DECK;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function drawCards(n) {
  return shuffle(DECK).slice(0, n);
}

export function dailyCard() {
  const [card] = drawCards(1);
  return {
    type: 'daily',
    label: 'Carta do Dia',
    cards: [
      { ...card, position: 'A mensagem do dia' }
    ]
  };
}

export function threeCards() {
  const [past, present, future] = drawCards(3);
  return {
    type: 'three',
    label: 'Três Cartas',
    cards: [
      { ...past,    position: 'Passado'  },
      { ...present, position: 'Presente' },
      { ...future,  position: 'Futuro'   }
    ]
  };
}

export function celticCross() {
  const drawn = drawCards(10);
  const positions = [
    'Situação atual',
    'O que cruza / desafia',
    'Fundação / base',
    'Passado recente',
    'Potencial / o que pode ser',
    'Futuro próximo',
    'Sua perspectiva',
    'Influências externas',
    'Esperanças e medos',
    'Resultado final'
  ];
  return {
    type: 'celtic',
    label: 'Cruz Celta',
    cards: drawn.map((card, i) => ({ ...card, position: positions[i] }))
  };
}