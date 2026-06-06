const KEY_DAILY = 'tarot_daily';
const KEY_HISTORY = 'tarot_history';
const KEY_THREE = 'tarot_three';
const KEY_CELTIC = 'tarot_celtic';

export function saveDailyCard(reading) {
  const entry = {
    reading,
    date: new Date().toDateString()
  };
  localStorage.setItem(KEY_DAILY, JSON.stringify(entry));
}

export function loadDailyCard() {
  const raw = localStorage.getItem(KEY_DAILY);
  if (!raw) return null;
  const entry = JSON.parse(raw);
  if (entry.date !== new Date().toDateString()) return null;
  return entry.reading;
}

export function saveDaily(key, reading) {
  localStorage.setItem(key, JSON.stringify({
    reading,
    date: new Date().toDateString()
  }));
}

export function loadDaily(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  const entry = JSON.parse(raw);
  if (entry.date !== new Date().toDateString()) return null;
  return entry.reading;
}

export function saveReading(reading) {
  const history = loadHistory();
  history.unshift({ reading, date: new Date().toISOString() });
  if (history.length > 20) history.splice(20);
  localStorage.setItem(KEY_HISTORY, JSON.stringify(history));
}

export function loadHistory() {
  const raw = localStorage.getItem(KEY_HISTORY);
  return raw ? JSON.parse(raw) : [];
}

export function clearAll() {
  localStorage.removeItem(KEY_DAILY);
  localStorage.removeItem(KEY_HISTORY);
}