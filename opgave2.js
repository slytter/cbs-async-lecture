const fetch = require('node-fetch');


// https://open-meteo.com/en/docs#latitude=34.05&longitude=-118.24&current_weather=true
const wrongRoute = 'https://api.open-UPS.com/v1/forecast?latitude=34.05&longitude=-118.24&current_weather=true'

const fetchRoute = (weatherRoute) => fetch(weatherRoute)
    .then(response => response.json())


// Brug fetchRoute() til at kalde ‘wrongRoute’ Brug .catch til at fange og håndtere fejlen

