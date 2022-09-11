const myLocation = document.querySelector(".myLocation");
const placeText = document.querySelector(".location span:first-child");
const weatherText = document.querySelector(".location span:last-child");

function onGeoOk(position) {
    const { latitude, longitude } = position.coords;
    const API_KEY = "c64798885f0263973e3371e3de684ec6";

    myLocation.innerText = "My location is " + latitude + ", " + longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const name = data.name;
            const weather = data.weather[0].main;

            placeText.innerText = name;
            weatherText.innerText = weather;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);