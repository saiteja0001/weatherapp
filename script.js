function search() {
  cityname = input.value;
  if (cityname.length == 0) {
    result.innerHTML = `<h3>Please Enter a city name</h3>`;
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5b4bee0ba241d092159faf007e166080`
    )
      .then((data) => data.json())
      .then((data) => displaydata(data));
  }

  function displaydata(weatherdetails) {
    if (weatherdetails?.cod === "404") {
      result.innerHTML = `<h3>${weatherdetails?.message}</h3>`;
    }
    place = weatherdetails.name;
    Description = weatherdetails.weather[0].description;
    Temperature = weatherdetails.main.temp;
    Pressure = weatherdetails.main.pressure;
    Humidity = weatherdetails.main.humidity;
    Wind = weatherdetails.wind.speed;
    icon = weatherdetails.weather[0].icon;
    feelsLike = weatherdetails.main.feels_like;

    Temperature = Math.round(Temperature - 273.15);
    feelsLike = Math.round(feelsLike - 273.15);

    result.innerHTML = `<div class="part1">
             <h1 class="city" id="city">${place}</h1><hr>
             <h3 class="date" id="date">${Description}</h3>
             <img src="http://openweathermap.org/img/wn/${icon}@4x.png" alt="showWeather" class="w-25">
         </div>

         <div class="weather-status">
            <div class="temp" id="temp">${Temperature}<sup>°</sup>C</div>
             <div class="weather" id="weather">Feels like ${feelsLike}<sup>°</sup>C</div>
            <div class="humidity" id="humidity">Humidity- <i class="fa-solid fa-droplet me-1"></i>${Humidity}%</div>
             <div class="weather" id="weather"> Pressure-<i class="fa-solid fa-gauge-high me-1"></i>${Pressure}hPa</div>
             <div class="weather" id="weather">Wind speed-<i class="fa-solid fa-wind me-1"></i>${Wind}kmph</div>
             </div>`;
  }
}
