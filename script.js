let weather = 
{
    apiKey: "50d7fc5f19471822addc3c2dc5e640e2",

fetchWeather: function(city) {
        fetch
        //("https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=50d7fc5f19471822addc3c2dc5e640e2")
        (
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid="
             + this.apiKey 
             ) 
             .then((response) => response.json())
             .then((data)=> this.displayWeather(data));
    },

displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, feels_like } = data.main;
        const { speed } = data.wind;
        const { country} = data.sys;
       // console.log(name,icon,desciption,temp,humidity,speed);

       document.querySelector(".city").innerText = "Weather in " + name + " / " + country;
       document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
       document.querySelector(".description").innerText = description;
       document.querySelector(".temp").innerText= temp + "°C";
       document.querySelector(".feel").innerText= "Feels like: " + feels_like + "°C";
       document.querySelector(".humidity").innerText= "Humidity is: " + humidity + "%";
       document.querySelector(".wind").innerText= "Wind Speed is: " + speed + "km/h";
       document.querySelector(".weather").classList.remove("loading");
       document.body.style.background="url('https://source.unsplash.com/1600x900/?" + name + "')"
       document.body.style.backgroundRepeat = "no-repeat";
       document.body.style.backgroundSize = "cover";
    } ,
    
search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value); 
    }
};
document.querySelector(".search button").addEventListener("click", function(){
weather.search();    
},
);
document.querySelector(".search button").addEventListener("keydown", function(event){
    if(event.key == "Enter")
    { 
        weather.search();
    }
});
weather.fetchWeather("London")


