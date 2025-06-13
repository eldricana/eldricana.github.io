////// Countdown timer
const countdownElement = document.getElementById('countdown-timer');
const targetDate = new Date('2025-08-03T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "Goddomme knaaien maar!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown(); // run immediately
const timer = setInterval(updateCountdown, 1000); // then every second

// Weer info API
const latitude = 52.07;   // Camping Belarus
const longitude = 6.32;

const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const weather = data.current_weather;
    const temp = weather.temperature;
    const wind = weather.windspeed;
    const desc = `🌡️ ${temp}°C, 💨 ${wind} km/h wind`;

    document.getElementById("weather-data").textContent = desc;
  })
  .catch(() => {
    document.getElementById("weather-data").textContent = "Weather unavailable.";
  });
