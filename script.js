let dojoWeather = {
    'San Jose': {
        today: {sky: 'some sun', high: 80, low: 58},
        tomorrow: {sky: 'some clouds', high: 78, low: 58},
        friday: {sky: 'some clouds', high: 82, low: 61},
        saturday: {sky: 'some clouds', high: 80, low: 61},
    },
    'Burbank': {
        today: {sky: 'some sun', high: 85, low: 64},
        tomorrow: {sky: 'some sun', high: 87, low: 66},
        friday: {sky: 'some clouds', high: 89, low: 67},
        saturday: {sky: 'some clouds', high: 88, low: 68},
    },
    'Chicago': {
        today: {sky: 'some clouds', high: 78, low: 70},
        tomorrow: {sky: 'some rain', high: 82, low: 68},
        friday: {sky: 'some clouds', high: 78, low: 65},
        saturday: {sky: 'some clouds', high: 79, low: 66},
    },
    'Dallas': {
        today: {sky: 'some clouds', high: 104, low: 81},
        tomorrow: {sky: 'some sun', high: 103, low: 80},
        friday: {sky: 'some clouds', high: 101, low: 80},
        saturday: {sky: 'some clouds', high: 100, low: 79},
    },
}

let imageMap = {
    'some sun': './assets/some_sun.png',
    'some clouds': './assets/some_clouds.png',
    'some rain': './assets/some_rain.png'
}

// get weather item (sky, high, or low) for city and day selected
function getWeather(city, day, item) {
    return dojoWeather[city][day][item]
}

// console.log(getWeather('Chicago', 'tomorrow', 'sky'))


let currentCity = 'San Jose'

// Convert Fahrenheit to Celsius
const toCelsius = (temp) => Math.round((temp - 32) * 5 / 9)

// Are we using Celsius?
let inCelsius = false

// If so, use it!
const verifyUnits = (temp) => inCelsius ? toCelsius(temp) : temp

// console.log(verifyUnits(getWeather(currentCity, 'friday', 'low')))

// Update inCelsius to reflect unit selection
function setUnits(el) {
    inCelsius = el.value == 'c' ? true : false
} 

// Hide element (use this for cookie banner)
function hide(el) {
    el.remove()
}

// DOM Elements to update

let cityName = document.getElementById('cityName')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')
let sky1 = document.getElementById('sky1')
let sky2 = document.getElementById('sky2')
let sky3 = document.getElementById('sky3')
let sky4 = document.getElementById('sky4')
let high1 = document.getElementById('high1')
let high2 = document.getElementById('high2')
let high3 = document.getElementById('high3')
let high4 = document.getElementById('high4')
let low1 = document.getElementById('low1')
let low2 = document.getElementById('low2')
let low3 = document.getElementById('low3')
let low4 = document.getElementById('low4')

// update forecast content
function update(city) {
    // if city passed in, update currentCity
    currentCity = city ? city : currentCity

    // update images
    img1.src = imageMap[getWeather(currentCity, 'today', 'sky')]
    img2.src = imageMap[getWeather(currentCity, 'tomorrow', 'sky')]
    img3.src = imageMap[getWeather(currentCity, 'friday', 'sky')]
    img4.src = imageMap[getWeather(currentCity, 'saturday', 'sky')]

    // update sky conditions
    sky1.innerText = getWeather(currentCity, 'today', 'sky')
    sky2.innerText = getWeather(currentCity, 'tomorrow', 'sky')
    sky3.innerText = getWeather(currentCity, 'friday', 'sky')
    sky4.innerText = getWeather(currentCity, 'saturday', 'sky')

    // update highs
    high1.innerText = verifyUnits(getWeather(currentCity, 'today', 'high'))
    high2.innerText = verifyUnits(getWeather(currentCity, 'tomorrow', 'high'))
    high3.innerText = verifyUnits(getWeather(currentCity, 'friday', 'high'))
    high4.innerText = verifyUnits(getWeather(currentCity, 'saturday', 'high'))

    // update lows
    low1.innerText = verifyUnits(getWeather(currentCity, 'today', 'low'))
    low2.innerText = verifyUnits(getWeather(currentCity, 'tomorrow', 'low'))
    low3.innerText = verifyUnits(getWeather(currentCity, 'friday', 'low'))
    low4.innerText = verifyUnits(getWeather(currentCity, 'saturday', 'low'))
}

// Set initial values
update()