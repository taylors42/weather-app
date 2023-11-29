const url =
  "https://weatherapi-com.p.rapidapi.com/current.json?q=-23.73%2C-46.6";
/* const urlCustom = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;*/
state = document.querySelector(".state");
sun = document.createElement("img");
sun.src = "";
async function weatherAPI() {
  const options = await {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6af0087817msh11552228f1f7680p194fc6jsn88e02f9db09e",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console
      .log(
        `CIDADE:${json.location.name}
TEMPERATURA:${json.current.temp_c + "C"}
HUMIDADE:${json.current.humidity + "%"}`
      )
      .trim();
  } catch (error) {
    console.error(`Erro ao buscar a previsão do tempo: ${error.message}`);
  }
}

weatherAPI();
