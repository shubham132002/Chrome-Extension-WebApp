var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".submit");
var em = document.querySelector(".emoji");
var w = document.querySelector(".wind");


button.addEventListener("click", function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=50a7aa80fa492fa92e874d23ad061374"
  )
    .then((response) => response.json())
    .then((data) => {
       
      var tempValue = data["main"]["temp"];
      var nameValue = data["name"];
      var descValue = data["weather"][0]["description"];
      t = tempValue / 14;
      t1 = t.toFixed(2);
      em.innerHTML = "🗺️";
      w.innerHTML = "Wind speed is: " + data["wind"]["speed"] + " knots";
      main.innerHTML = nameValue;
      desc.innerHTML = "Sky Info: " + descValue;
      temp.innerHTML = "Temperature is: " + t1 + "°C";
      input.value = "";
      document.querySelector(".card").style.background = "white"; 
    })

    .catch((err) => alert("Wrong city name!"));
});

