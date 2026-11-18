const featured = [
  {name:'Cyberpunk 2077', art:'cyberpunk', shot:'cyber', artTitle:'CYBERPUNK <em>2077</em>', subtitle:'Enter the world of Night City.', tags:['Open World','RPG'], price:'$59.99', id:1091500},
  {name:'ELDEN RING', art:'elden', shot:'elden', artTitle:'ELDEN RING', subtitle:'Rise, Tarnished, and become Elden Lord.', tags:['Souls-like','Fantasy'], price:'$59.99', id:1245620},
  {name:"Baldur's Gate 3", art:'baldur', shot:'baldur', artTitle:"BALDUR’S GATE <em>3</em>", subtitle:'Gather your party and venture forth.', tags:['RPG','Adventure'], price:'$59.99', id:1086940}
];
const offers = [
  {name:'Kingdom Come: Deliverance II', image:'kingdom', id:1771300, off:67, old:'$59.99', price:'$19.79', tag:'OPEN WORLD RPG'},
  {name:'Call of Duty: Black Ops III', image:'blackops', id:311210, off:75, old:'$59.99', price:'$14.99', tag:'ACTION · FPS'},
  {name:'Crimson Desert Enhanced', image:'crimson', id:3321460, off:20, old:'$69.99', price:'$55.99', tag:'ACTION · ADVENTURE'},
  {name:'Bodycam', image:'bodycam', id:2406770, off:20, old:'$33.32', price:'$26.65', tag:'MULTIPLAYER · FPS'}
];
const games = {
  popular: [ ['Elden Ring','elden',1245620,'Action RPG, Fantasy, Open World','$59.99'], ['Hades II','hades',1145350,'Roguelike, Action, Indie','$29.99'], ['Baldur’s Gate 3','baldur',1086940,'RPG, Choices Matter, Fantasy','$59.99'], ['Cyberpunk 2077','cyberpunk',1091500,'Open World, Cyberpunk, RPG','$59.99'] ],
  top: [ ['Counter-Strike 2','cs2',730,'FPS, Multiplayer, Competitive','Free to Play'], ['Black Myth: Wukong','wukong',2358720,'Action, Adventure, Mythology','$59.99'], ['HELLDIVERS 2','helldivers',553850,'Co-op, Action, Multiplayer','$39.99'], ['Monster Hunter Wilds','monster',2246340,'Action, Co-op, Adventure','$39.99'] ],
  indie: [ ['Stardew Valley','stardew',413150,'Farming Sim, Relaxing, Pixel Graphics','$14.99'], ['Hades II','hades',1145350,'Roguelike, Action, Indie','$29.99'], ['Hollow Knight','hollow',367520,'Metroidvania, Adventure, Indie','$14.99'], ['Celeste','celeste',504230,'Platformer, Indie, Precision','$19.99'] ]
};
const byId = id => document.getElementById(id);
const gameUrl = id => `https://store.steampowered.com/app/${id}/`;
let current = 0;
function showFeatured(index) {
  current = (index + featured.length) % featured.length;
  const item = featured[current];
  byId('feature-image').style.backgroundImage = `url('/steam-images/${item.art}-hero.jpg')`;
  byId('feature-image').href = gameUrl(item.id);
  byId('feature-image').setAttribute('aria-label', `View ${item.name}`);
  byId('feature-art-title').innerHTML = item.artTitle;
  byId('feature-title').textContent = item.name;
  byId('feature-subtitle').textContent = item.subtitle;
  byId('feature-tag').textContent = item.tags[0];
  byId('feature-tag2').textContent = item.tags[1];
  byId('feature-price').textContent = item.price;
  byId('feature-link').href = gameUrl(item.id);
  byId('feature-shots').innerHTML = Array.from({length:4}, (_, i) => `<img src="/steam-images/${item.shot}-${i}.jpg" alt="">`).join('');
  [...byId('feature-pagination').children].forEach((button,i) => { button.classList.toggle('active', i === current); button.setAttribute('aria-pressed', String(i === current)); });
}
featured.forEach((item,i) => {const button=document.createElement('button'); button.setAttribute('aria-label',`Show ${item.name}`); button.addEventListener('click',()=>showFeatured(i)); byId('feature-pagination').appendChild(button);});
byId('feature-prev').addEventListener('click',()=>showFeatured(current-1));
byId('feature-next').addEventListener('click',()=>showFeatured(current+1));
byId('offer-grid').innerHTML = offers.map(item => `<a class="offer-card" href="${gameUrl(item.id)}"><img src="/steam-images/${item.image}.jpg" alt=""><div class="offer-info"><span class="offer-label">SPECIAL PROMOTION</span><strong>${item.name}</strong><small>${item.tag}</small><div class="price-row"><span class="discount">-${item.off}%</span><span class="price-box"><s>${item.old}</s><b>${item.price}</b></span><span class="windows">⊞</span></div></div></a>`).join('');
function showList(key){byId('game-list').innerHTML = games[key].map(game=>`<a class="game-row" href="${gameUrl(game[2])}"><img src="/steam-images/${game[1]}.jpg" alt=""><span class="game-meta"><strong>${game[0]}</strong><small>⊞ &nbsp; ${game[3]}</small></span><span class="game-price">${game[4]}</span></a>`).join('');}
document.querySelectorAll('.catalog-tabs button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.catalog-tabs button').forEach(tab=>{tab.classList.remove('active');tab.setAttribute('aria-pressed','false');});button.classList.add('active');button.setAttribute('aria-pressed','true');showList(button.dataset.list);}));
const mobileToggle = document.querySelector('.mobile-toggle');
mobileToggle.addEventListener('click',()=>{const open=mobileToggle.getAttribute('aria-expanded')==='true'; mobileToggle.setAttribute('aria-expanded',String(!open));mobileToggle.setAttribute('aria-label',open?'Open navigation':'Close navigation');document.querySelector('.global-nav').classList.toggle('open',!open);});
showFeatured(0); showList('popular');
