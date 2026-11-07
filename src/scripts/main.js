const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
const $ = (sel, el = document) => el.querySelector(sel);

// ---- Day / night -----------------------------------------------------------
$('[data-theme-toggle]').addEventListener('click', () => {
  const next = root.dataset.theme === 'night' ? 'day' : 'night';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});

// ---- Typewriter dialog -----------------------------------------------------
const tw = $('[data-typewriter]');
if (tw && !reduceMotion) {
  const text = tw.dataset.text;
  tw.textContent = '';
  let i = 0;
  const tick = () => {
    tw.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(tick, 55);
  };
  setTimeout(tick, 300);
}

// ---- Trainer card clock ----------------------------------------------------
const clock = $('[data-clock]');
const daypart = $('[data-daypart]');
function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const colon = reduceMotion || now.getSeconds() % 2 === 0 ? ':' : ' ';
  clock.textContent = `${String(h).padStart(2, '0')}${colon}${String(now.getMinutes()).padStart(2, '0')}`;
  daypart.textContent = h < 4 ? 'NITE' : h < 10 ? 'MORN' : h < 18 ? 'DAY' : 'NITE';
}
updateClock();
setInterval(updateClock, 1000);

// ---- Shiny check: click any sprite with data-id ----------------------------
document.addEventListener('click', (e) => {
  const img = e.target.closest?.('img.sprite[data-id]');
  if (!img || !img.hasAttribute('data-shiny') && !img.closest('[data-pet]')) return;
  const shiny = img.dataset.shinyOn !== 'true';
  img.dataset.shinyOn = shiny;
  img.src = `/sprites/${shiny ? 'shiny/' : ''}${img.dataset.id}.png`;
  if (shiny && !reduceMotion) sparkle(img);
});

function sparkle(img) {
  const r = img.getBoundingClientRect();
  for (let n = 0; n < 6; n++) {
    const s = document.createElement('span');
    s.textContent = '✦';
    s.className = 'spark';
    s.style.cssText = `position:fixed;left:${r.left + Math.random() * r.width}px;top:${r.top + Math.random() * r.height}px;color:#ffc40d;font-size:1.4rem;pointer-events:none;z-index:90;transition:transform .7s ease-out,opacity .7s;`;
    document.body.append(s);
    requestAnimationFrame(() => {
      s.style.transform = `translate(${(Math.random() - 0.5) * 60}px,-${30 + Math.random() * 40}px)`;
      s.style.opacity = '0';
    });
    setTimeout(() => s.remove(), 750);
  }
}

// ---- Pet the Meowth -------------------------------------------------------
const walker = $('[data-pet]');
let petTimer;
walker?.addEventListener('click', () => {
  walker.classList.add('petted');
  clearTimeout(petTimer);
  petTimer = setTimeout(() => walker.classList.remove('petted'), 1500);
  for (let n = 0; n < 3; n++) {
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = '♥';
    h.style.setProperty('--dx', `${(n - 1) * 24}px`);
    h.style.animationDelay = `${n * 0.12}s`;
    walker.append(h);
    setTimeout(() => h.remove(), 1400);
  }
});

// ---- Coffee counter -------------------------------------------------------
const coffee = $('[data-coffee]');
const countEl = $('[data-coffee-count]');
const msg = $('[data-coffee-msg]');
const snorlax = $('[data-snorlax]');
let cups = Number(localStorage.getItem('cups')) || 0;

function renderCoffee() {
  countEl.textContent = cups;
  snorlax.dataset.awake = cups >= 3;
  msg.textContent =
    cups === 0 ? 'Snorlax is fast asleep.'
    : cups < 3 ? 'Snorlax stirs... it smells something good.'
    : cups < 8 ? 'Snorlax woke up and moved off the path!'
    : cups < 15 ? 'Snorlax is vibrating. Productivity at all-time high.'
    : 'Snorlax used Rest. It is a lie. Nobody is resting.';
}
$('[data-brew]', coffee).addEventListener('click', () => {
  cups++;
  localStorage.setItem('cups', cups);
  renderCoffee();
});
renderCoffee();

// ---- Konami code: it's raining Pokémon ------------------------------------
const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let pos = 0;
addEventListener('keydown', (e) => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
  if (pos === code.length) {
    pos = 0;
    rain();
  }
});

function rain() {
  if (reduceMotion) return;
  for (let n = 0; n < 40; n++) {
    const img = new Image(112, 112);
    const shiny = Math.random() < 0.1 ? 'shiny/' : '';
    img.src = `/sprites/${shiny}${[25, 52, 53, 94, 133, 137, 143, 151, 196, 197, 79, 129][n % 12]}.png`;
    img.className = 'sprite rain';
    img.style.cssText = `--scale:2;left:${Math.random() * 100}vw;--spin:${(Math.random() - 0.5) * 720}deg;animation-duration:${2 + Math.random() * 2.5}s;animation-delay:${Math.random() * 1.5}s`;
    document.body.append(img);
    img.addEventListener('animationend', () => img.remove());
  }
}

console.log('%cHow do you do, fellow developers?', 'font-size: 25px; color: #ff6b6b; font-style: italic;');
console.log('%cPsst: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #5fc4b6;');
