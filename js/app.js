import { dailyCard, threeCards, celticCross } from './spreads.js';
import { saveDailyCard, loadDailyCard, saveReading } from './storage.js';
import { renderReading, setLoading, setActiveButton, clearReading } from './ui.js';

const spreads = {
  daily: dailyCard,
  three: threeCards,
  celtic: celticCross
};

function doReading(type) {
  setLoading(true);
  setActiveButton(type);

  setTimeout(() => {
    let reading;

    if (type === 'daily') {
      const cached = loadDailyCard();
      reading = cached || dailyCard();
      if (!cached) saveDailyCard(reading);
    } else {
      reading = spreads[type]();
      saveReading(reading);
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