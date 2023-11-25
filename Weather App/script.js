const apiKey = "9a0230891578351dfc8a694ee3d42b4b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputBox = document.querySelector(".search input");
const button = document.querySelector("#btn");
const weatherIcon = document.querySelector(".weather-icon");
button.addEventListener("click",()=>{
    weathercheck(inputBox.value);
    
})
async function weathercheck(city){
    let responce = await fetch(apiURL + city + `&APPID=${apiKey}`);
    if(responce.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        
    }
    let data = await responce.json();

    document.querySelector("#city").innerHTML=data.name;
    document.querySelector(".Temp").innerHTML= Math.round(data.main.temp) +`°c`;
    document.querySelector(".humidity").innerHTML=data.main.humidity +`%`;
    document.querySelector(".wind").innerHTML=data.wind.speed + ` Km/h`;

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src="images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src="images/snow.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none"; 
}
