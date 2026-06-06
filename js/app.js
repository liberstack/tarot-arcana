import { dailyCard, threeCards, celticCross } from './spreads.js';
import { saveDailyCard, loadDailyCard, saveDaily, loadDaily, saveReading } from './storage.js';
import { renderReading, renderAllCards, setLoading, setActiveButton, clearReading } from './ui.js';

const spreads = {
  daily: dailyCard,
  three: threeCards,
  celtic: celticCross
};

const KEYS = {
  three: 'tarot_three',
  celtic: 'tarot_celtic'
};

function doReading(type) {
  setLoading(true);
  setActiveButton(type);

  setTimeout(() => {
    if (type === 'all') {
      setLoading(false);
      clearReading();
      renderAllCards();
      return;
    }

    let reading;

    if (type === 'daily') {
      const cached = loadDailyCard();
      reading = cached || dailyCard();
      if (!cached) saveDailyCard(reading);
    } else {
      const cached = loadDaily(KEYS[type]);
      reading = cached || spreads[type]();
      if (!cached) saveDaily(KEYS[type], reading);
    }

    setLoading(false);
    clearReading();
    renderReading(reading);
  }, 800);
}

document.querySelectorAll('.spread-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.spread;
    doReading(type);
  });
});