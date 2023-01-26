const apiKey = '675d2042bea64a76be963045210109';
const urlWithKey = 'https://api.weatherapi.com/v1/current.json?key=675d2042bea64a76be963045210109&q=lucknow&aqi=no';

const con = document.querySelector('.con');
const timeElement = document.querySelector('.time');
const weatherElement = document.querySelector('.weather');
const iconTag = document.querySelector('.icon');

const getTime = ()=>{
    const time =  new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    console.log(time)
    timeElement.textContent = time
}

const getWeather = async()=>{
    const fetchWeather = await fetch(urlWithKey);
    const weather = await fetchWeather.json()
    const temp = weather?.current?.temp_c;
    const { icon, text } = weather?.current?.condition
    iconTag.src = icon
    const uiString = `
        <h1>${temp}°C</h1>
        <small>${text}</small>
    `;
    weatherElement.innerHTML = uiString;
    console.log(weather?.current);
}

getWeather()
setInterval(() => {
    getWeather();
}, 600000);

setInterval(() => {
    getTime()
}, 1000);


