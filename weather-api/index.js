state = document.querySelector(".state");
sun = document.createElement("img");
// Seu código JavaScript

console.log(window.API_KEY);
async function WeatherApi() {
  try {
    const ipResponse = await fetch(
      "https://ipinfo.io/json?token=917f90adf26853"
    );
    const weatherJson = await ipResponse.json();
    let weatherJsonLocale = await weatherJson.loc;
    weatherJsonLocale = await weatherJsonLocale.replace(/,/, "%2C");
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${weatherJsonLocale}`;

    const options = await {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6af0087817msh11552228f1f7680p194fc6jsn88e02f9db09e",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    const weatherResponseFetch = await fetch(url, options);
    const weatherResponseObj = await weatherResponseFetch.json();
    document.querySelector(".city").textContent =
      weatherResponseObj.location.name;
    document.querySelector(".date").textContent = new Date().toLocaleDateString(
      "pt-br",
      { year: "numeric", month: "numeric", day: "numeric" }
    );
    document.querySelector(".temperature").textContent =
      weatherResponseObj.current.temp_c + "C";
    document.querySelector(".humidity").textContent =
      "H: " + weatherResponseObj.current.humidity + "%";
    document.querySelector(".state").appendChild(sun);
    let icon = weatherResponseObj.current.condition.icon;
    icon = icon.replace(/64x64/, "128x128");
    sun.src = `${icon}`;
  } catch (error) {
    console.log("erro");
  }
}

WeatherApi();
