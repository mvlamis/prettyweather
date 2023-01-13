// get city and api key from settings.json
fetch("settings.json")
    .then(response => response.json())
    .then(settings => {

        document.getElementById("title").innerHTML = "Current weather in " + settings.city;
        document.getElementById("temperature").innerHTML = "beans!";
        console.log("https://api.weatherapi.com/v1/current.json?key=" + settings.apiKey + "&q=" + settings.city + "&units=metric");
        // get weather data from weatherapi.com
        fetch("https://api.weatherapi.com/v1/current.json?key=" + settings.apiKey + "&q=" + settings.city + "&units=metric")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // set weather data
                var condition = data.current.condition.text;
                var temperature = data.current.temp_c;
                var winddirection = data.current.wind_dir;
                var windspeed = data.current.wind_kph;
                var humidity = data.current.humidity;


                document.getElementById("temperature").innerHTML = temperature + "°C";
                document.getElementById("condition").innerHTML = condition;
                document.getElementById("winddirection").innerHTML = winddirection;
                document.getElementById("windspeed").innerHTML = windspeed + "km/h";
                document.getElementById("humidity").innerHTML = humidity + "%";

                if (temperature < 0) {
                    document.body.style.backgroundColor = "lightblue";
                } else if (temperature < 10) {
                    document.body.style.backgroundColor = "lightgreen";
                } else if (temperature < 20) {
                    document.body.style.backgroundColor = "yellow";
                } else if (temperature < 30) {
                    document.body.style.backgroundColor = "orange";
                } else {
                    document.body.style.backgroundColor = "red";
                }

                condition = "snow"
                condition = condition.toLowerCase();

                // set box to match weather condition
                if (condition.includes("snow")) {
                    document.getElementsByClassName("box")[2].style.display = "block";
                } else if (condition.includes("cloud")) {
                    document.getElementsByClassName("box")[1].style.display = "block";
                } else if (condition.includes("storm")) {
                    document.getElementsByClassName("box")[2].style.display = "block";
                } else if (condition.includes("rain")) {
                    document.getElementsByClassName("box")[3].style.display = "block";
                } else if (condition.includes("clear")) {
                    document.getElementsByClassName("box")[0].style.display = "block";
                } else if (condition.includes("sunny")) {
                    document.getElementsByClassName("box")[0].style.display = "block";
                } else if (condition.includes("wind")) {
                    document.getElementsByClassName("box")[3].style.display = "block";
                } else if (condition.includes("fog")) {
                    document.getElementsByClassName("box")[1].style.display = "block";
                } else if (condition.includes("mist")) {
                    document.getElementsByClassName("box")[1].style.display = "block";
                } else if (condition.includes("haze")) {
                    document.getElementsByClassName("box")[1].style.display = "block";
                } else if (condition.includes("overcast")) {
                    document.getElementsByClassName("box")[1].style.display = "block";
                } else if (condition.includes("partly cloudy")) {
                    document.getElementsByClassName("box")[1].style.display = "block";
                } else if (condition.includes("partly Sunny")) {
                    document.getElementsByClassName("box")[1].style.display = "block";
                } else if (condition.includes("sleet")) {
                    document.getElementsByClassName("box")[2].style.display = "block";
                } else if (condition.includes("thunder")) {
                    document.getElementsByClassName("box")[2].style.display = "block";
                } else if (condition.includes("thunderstorm")) {
                    document.getElementsByClassName("box")[2].style.display = "block";
                } else if (condition.includes("tornado")) {
                    document.getElementsByClassName("box")[2].style.display = "block";
                }


            });

    });


