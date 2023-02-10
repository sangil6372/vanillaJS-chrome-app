const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "aff1e51d7f6da436c4a133b7a5022168";

//success geo
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then(
        response => response.json()).then(
            data => {
                weather.innerText = `날씨 : ${data.weather[0].main}   온도 : ${data.main.temp}`;
                city.innerText = `지역 : ${data.name}`;        
            });

}
function onGeoError(){
    alert("Can't find your [Geo Error]");
}




navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
