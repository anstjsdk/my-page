const API_KEY = "c093754c8749ea986a16d574f0d7b708";
const weather = document.querySelector(".weather");

window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
      const res = await fetch(url);
      const data = await res.json();

      const icon = data.weather[0].icon;
      const desc = data.weather[0].description;
      const temp = data.main.temp.toFixed(1);
      const cityName = data.name;

      weather.innerHTML = `
        <div class="city-name">${cityName}</div>
        <div class="weather-info">
            <div class="temp">${temp}°C</div>
            <div class="weather-icon">
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
            </div>
        </div>
        <div>${desc}</div>
      `;
    },
    () => {
      weather.innerHTML = `<div>위치 정보를 가져올 수 없습니다.</div>`;
    }
  );
});
