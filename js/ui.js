export function renderReading(reading) {
  const container = document.getElementById('reading-area');
  container.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'reading-header';
  header.innerHTML = `<h2 class="reading-title">${reading.label}</h2>`;
  container.appendChild(header);

  const grid = document.createElement('div');
  grid.className = `cards-grid layout-${reading.type}`;
  container.appendChild(grid);

  reading.cards.forEach((card, index) => {
    const el = createCardElement(card, index);
    grid.appendChild(el);
  });

  container.classList.add('visible');
}

function createCardElement(card, index) {
  const wrapper = document.createElement('div');
  wrapper.className = 'card-wrapper';
  wrapper.style.animationDelay = `${index * 0.12}s`;

  wrapper.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <div class="card-back-design"></div>
      </div>
      <div class="card-face">
        <div class="card-img-wrap">
          <img src="${card.img}" alt="${card.name}" loading="lazy" onerror="this.parentNode.classList.add('no-img')">
          <div class="card-img-fallback">${card.id.toString().padStart(2,'0')}</div>
        </div>
        <div class="card-info">
          <p class="card-position">${card.position}</p>
          <h3 class="card-name">${card.name}</h3>
        </div>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    setTimeout(() => {
      wrapper.classList.add('flipped');
    }, 300 + index * 120);
  });

  wrapper.addEventListener('click', () => {
    if (wrapper.classList.contains('flipped')) {
      openModal(card);
    }
  });

  return wrapper;
}

function openModal(card) {
  const existing = document.getElementById('card-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'card-modal';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" aria-label="Fechar">✕</button>
      <div class="modal-img-wrap">
        <img src="${card.img}" alt="${card.name}" onerror="this.parentNode.classList.add('no-img')">
        <div class="card-img-fallback">${card.id.toString().padStart(2,'0')}</div>
      </div>
      <div class="modal-content">
        <p class="modal-position">${card.position}</p>
        <h2 class="modal-name">${card.name}</h2>
        <p class="modal-keywords">${card.keywords}</p>
        <div class="modal-divider"></div>
        <p class="modal-meaning">${card.meaning}</p>
        <p class="modal-reversed"><span class="reversed-label">Invertida</span> ${card.meaning_reversed}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('visible'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });

  modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal));

  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape') { closeModal(modal); document.removeEventListener('keydown', onKey); }
  });
}

function closeModal(modal) {
  modal.classList.remove('visible');
  modal.addEventListener('transitionend', () => modal.remove(), { once: true });
}

export function setLoading(state) {
  document.getElementById('loading').classList.toggle('visible', state);
  document.getElementById('reading-area').classList.toggle('hidden', state);
}

export function setActiveButton(type) {
  document.querySelectorAll('.spread-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.spread === type);
  });
}

export function clearReading() {
  const container = document.getElementById('reading-area');
  container.innerHTML = '';
  container.classList.remove('visible');
  const modal = document.getElementById('card-modal');
  if (modal) modal.remove();
}