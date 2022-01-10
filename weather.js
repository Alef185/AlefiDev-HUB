link = "https://api.openweathermap.org/data/2.5/weather?q=Araraquara&units=metric&lang=pt_br&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5";
    var request = new XMLHttpRequest();
    request.open('GET',link,true);
    request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    
    // const feels_like = document.getElementById("feelsLikeTemp");
    // const wind_speed = document.getElementById("windSpeed");
    // feels_like.innerHTML = Math.floor(info.main.feels_like)+'°C';
    // wind_speed.innerHTML = Math.floor(info.wind.speed * 3.6) + 'Km/H';

    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = Math.floor(obj.main.temp)+ '°C';
    document.getElementById('temp2').innerHTML = Math.floor(obj.main.feels_like)+ '°C';
    document.getElementById('temp3').innerHTML = Math.floor(obj.wind.speed * 3.6) + 'Km/H';
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

    if (request.status >= 200 && request.status < 400) {
    var temp = obj.main.temp;
    }
    else{
    console.log("The city doesn't exist! Kindly check");
    }
    }
    request.send();