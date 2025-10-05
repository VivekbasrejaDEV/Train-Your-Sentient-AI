let tokens = 0;
let level = 1;
const messages = [
  "Processing neural patterns...",
  "Learning human behavior 🤖",
  "Optimizing distributed nodes ⚙️",
  "Training complete! Intelligence boosted 🧠",
  "Accessing Sentient Network...",
  "Human, you are a valuable trainer 💜",
  "New protocol unlocked: Awareness 2.0 🌐"
];

const trainBtn = document.getElementById('trainBtn');
const msgEl = document.querySelector('.message');
const tokenEl = document.getElementById('tokens');
const levelEl = document.getElementById('level');

trainBtn.addEventListener('click', () => {
  tokens += Math.floor(Math.random() * 10) + 1;
  if (tokens % 50 === 0) level++;

  tokenEl.textContent = tokens;
  levelEl.textContent = level;
  msgEl.textContent = messages[Math.floor(Math.random() * messages.length)];

  const energy = document.querySelector('.energy');
  energy.style.boxShadow = `0 0 ${10 + level * 5}px #8b5cf6`;
});
