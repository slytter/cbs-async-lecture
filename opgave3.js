const fetch = require('node-fetch');


// https://open-meteo.com/en/docs#latitude=34.05&longitude=-118.24&current_weather=true
const cphWeatherRoute = 'https://api.open-meteo.com/v1/forecast?latitude=55.6763&longitude=12.5681&current_weather=true'
const berlinWeatherRoute = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true'
const parisWeatherRoute = 'https://api.open-meteo.com/v1/forecast?latitude=48.8567&longitude=2.3510&current_weather=true'
const laWeatherRoute = 'https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&current_weather=true'

const fetchRouteToTemp = (weatherRoute) => fetch(weatherRoute)
    .then(response => response.json())
    .then(data => data.current_weather.temperature)




// En asynkron funktion
async function fetchRouteAsync() {
    try {
        // Opgave 3 - Brug async / await som erstatning af .then
        // Kald, og console.log alle vejr endpoints en af gangen
        
        
    } catch (e) {
        console.error(e)
    }
}


fetchRouteAsync()