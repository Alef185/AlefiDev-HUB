link = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";
    var request = new XMLHttpRequest();
    request.open('GET',link,true);
    request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    
    // const feels_like = document.getElementById("feelsLikeTemp");
    // const wind_speed = document.getElementById("windSpeed");
    // feels_like.innerHTML = Math.floor(info.main.feels_like)+'°C';
    // wind_speed.innerHTML = Math.floor(info.wind.speed * 3.6) + 'Km/H';

    document.getElementById('name').innerHTML = obj.USDBRL.name;
    document.getElementById('usd').innerHTML = 'USD$ '+(obj.USDBRL.ask);
    document.getElementById('name2').innerHTML = obj.EURBRL.name;
    document.getElementById('eur').innerHTML = 'EUR$ '+(obj.EURBRL.ask);
    document.getElementById('name3').innerHTML = obj.BTCBRL.name;
    document.getElementById('btc').innerHTML = 'BTC$ '+(obj.BTCBRL.ask);
    

    if (request.status >= 200 && request.status < 400) {
    var temp = obj.main.temp;
    }
    else{
    console.log("The city doesn't exist! Kindly check");
    }
    }
    request.send();