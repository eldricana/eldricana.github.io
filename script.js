////// Countdown timer
const countdownElement = document.getElementById('countdown-timer');
const targetDate = new Date('2026-08-05T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "Goddomme knaaien maar!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  countdownElement.textContent =
    `Nog maar ${days} nachtjes slapen!`;
}

updateCountdown(); // run immediately
const timer = setInterval(updateCountdown, 1000); // then every second

// Weer info API
const latitude = 51.59;   // Eldrik
const longitude = 6.11;

const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const weather = data.current_weather;
    const temp = weather.temperature;
    const wind = weather.windspeed;
    const desc = `Tis ${temp}°C warm en het waait ${wind} kneiters/uur`;

    document.getElementById("weather-data").textContent = desc;
  })
  .catch(() => {
    document.getElementById("weather-data").textContent = "Het weert niet.";
  });

function spawnHaunter() {
  const img = document.createElement('img');
  img.src = 'assets/scooter96.png';
  img.className = 'haunting-image dismissible';

  // ensure correct positioning mode
  img.style.position = 'fixed';

  // get viewport size
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // estimate image size (adjust if needed)
  const imgWidth = 96;
  const imgHeight = 96;

  // random position fully inside viewport
  const x = Math.random() * (vw - imgWidth);
  const y = Math.random() * (vh - imgHeight);

  img.style.left = x + 'px';
  img.style.top = y + 'px';

  img.addEventListener('click', () => {
    img.remove();
    setTimeout(spawnHaunter, 12000);
  });

  document.body.appendChild(img);
}

document.addEventListener('DOMContentLoaded', () => {
  spawnHaunter();
});


window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const button = document.getElementById('enter-btn');
  const audio = document.getElementById('bg-music');

  // sanity check
  console.log(button); // should NOT be null

  button.addEventListener('click', () => {
    console.log('clicked'); // debug

    audio.play();
    overlay.style.display = 'none';
  });
});

console.log(document.getElementById('enter-btn'));

button.addEventListener('click', () => {
  console.log('clicked');
});

//const overlay = document.getElementById('overlay');
//const audio = document.getElementById('bg-music');

//overlay.addEventListener('click', () => {
//audio.play();

// Hide instead of remove (more reliable visually)
//overlay.style.display = 'none';
//);

//countdownElement.textContent =
//`${days}d ${hours}h ${minutes}m ${seconds}s`;}
//const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//const minutes = Math.floor((diff / (1000 * 60)) % 60);
//const seconds = Math.floor((diff / 1000) % 60);