
const apikey = "0be4b2d24aa2a16f14147308292986bc";


const weatherData = document.querySelector(".weather-data");
const inputCity = document.querySelector("#input-city");
const btn = document.querySelector("#btn");
const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = inputCity.value;
    getWeatherData(cityValue);
});


async function getWeatherData(cityValue) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

    try {
        if(!response.ok) {
            throw new Error("Network response was not ok.")
        }
        const data = await response.json()
        
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`
        ]

        weatherData.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;


        weatherData.querySelector(".temperature").textContent = `${temperature}°C`;


        weatherData.querySelector(".description").textContent = description;


        weatherData.querySelector(".details").innerHTML = details.map((detail) => {
            return `<div>${detail}</div>`
        }).join("")
    
    } catch (error) {
        
        weatherData.querySelector(".icon").innerHTML = "";


        weatherData.querySelector(".temperature").textContent = "";


        weatherData.querySelector(".description").textContent = "An error occurred. Please try again later.";


        
    }
}