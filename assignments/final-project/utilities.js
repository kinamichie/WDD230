const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13)
 {
     getResults(searchBox.value);
     console.log(searchBox.value);
 }}

 function getResults (query){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=bf97aaaa16a02c56f0db0c5d12eb5eed`)
     .then(weather => {
         return weather.json();
     }) .then(displayResults);
 }

 function displayResults(weather){
     console.log(weather);
     let city = document.querySelector('.location .city');
     city.innerText = `${weather.name}`; 

     let temp = document.querySelector('.current .temp');
     temp.innerText = `${Math.round(weather.main.temp).toFixed(0)}°F`;

     let weatherCondition = document.querySelector('.current .weather');
     weatherCondition.innerText = weather.weather[0].main;

     let hiLow = document.querySelector('.hi-low');
     hiLow.innerText = `High ${Math.round(weather.main.temp_min)}°F / Low ${Math.round(weather.main.temp_max)}°F`;

 }

export default {
    setQuery,
    getResults,
    displayResults
}

