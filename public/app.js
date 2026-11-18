const slides = [
  { title: 'College<br>Football 27', name: 'College Football 27', kicker: 'EA SPORTS', status: 'COMING SOON', copy: "The sights. The sounds. The glory. It's all here.", image: '/images/football.png', action: 'PRE-ORDER NOW', url: 'https://www.xbox.com/en-US/games', position: 'center 42%' },
  { title: 'DOOM: The Dark<br>Ages Revelations', name: 'DOOM: The Dark Ages', kicker: 'DOOM', status: 'THE DARK AGES AWAIT', copy: 'Stand and fight in a world on the brink.', image: '/images/doom.jpg', action: 'GET IT NOW', url: 'https://www.xbox.com/en-US/games/doom-the-dark-ages', position: 'center' },
  { title: 'Grand Theft<br>Auto VI', name: 'Grand Theft Auto VI', kicker: 'ROCKSTAR GAMES', status: 'COMING SOON', copy: 'Enter a world that changes everything.', image: '/images/gta.jpg', action: 'EXPLORE THE GAME', url: 'https://www.xbox.com/en-US/games/grand-theft-auto-vi', position: 'center' },
  { title: 'Gears of War:<br>E-Day', name: 'Gears of War: E-Day', kicker: 'GEARS OF WAR', status: 'COMING SOON', copy: 'The beginning of a legendary fight.', image: '/images/gears.jpg', action: 'EXPLORE THE GAME', url: 'https://www.xbox.com/en-US/games', position: 'center' },
  { title: 'Call of Duty:<br>Modern Warfare 4', name: 'Call of Duty: MW4', kicker: 'CALL OF DUTY', status: 'COMING SOON', copy: 'Answer the call. Change the game.', image: '/images/cod.jpg', action: 'EXPLORE THE GAME', url: 'https://www.xbox.com/en-US/games', position: 'center' }
];
const $ = id => document.getElementById(id);
const tabs = $('slide-tabs');
let current = 0;
let playing = true;
let timer;
slides.forEach((slide, index) => {
  const button = document.createElement('button');
  button.className = 'slide-tab';
  button.setAttribute('aria-label', `Show ${slide.name}`);
  button.innerHTML = `<img src="${slide.image}" alt=""><span><small>0${index + 1}</small><strong>${slide.name}</strong></span>`;
  button.addEventListener('click', () => { show(index); restart(); });
  tabs.appendChild(button);
});
function show(index) {
  current = (index + slides.length) % slides.length;
  const slide = slides[current];
  $('hero-art').style.backgroundImage = `url("${slide.image}")`;
  $('hero-art').style.backgroundPosition = slide.position;
  $('hero-status').textContent = slide.status;
  $('hero-kicker').textContent = slide.kicker;
  $('hero-title').innerHTML = slide.title;
  $('hero-copy').textContent = slide.copy;
  $('hero-link').innerHTML = `${slide.action} <span>›</span>`;
  $('hero-link').href = slide.url;
  $('carousel-count').textContent = `0${current + 1} / 05`;
  [...tabs.children].forEach((tab, i) => { tab.classList.toggle('active', i === current); tab.setAttribute('aria-pressed', String(i === current)); });
  if (tabs.scrollWidth > tabs.clientWidth) tabs.scrollLeft = tabs.children[current].offsetLeft - tabs.offsetLeft;
}
function restart() { clearInterval(timer); if (playing) timer = setInterval(() => show(current + 1), 8000); }
$('previous').addEventListener('click', () => { show(current - 1); restart(); });
$('next').addEventListener('click', () => { show(current + 1); restart(); });
$('play-pause').addEventListener('click', () => { playing = !playing; $('play-pause').textContent = playing ? 'Ⅱ' : '▶'; $('play-pause').setAttribute('aria-label', playing ? 'Pause carousel' : 'Play carousel'); restart(); });
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { playing = false; $('play-pause').textContent = '▶'; $('play-pause').setAttribute('aria-label', 'Play carousel'); }
show(0); restart();
