import { useEffect, useState } from "react";

function Weather() {

    const [imgSrc, setImgSrc] = useState("");
    const [city, setCity] = useState("");
    const [humidity, setHumidity] = useState("")
    const [temperature, setTemperature] = useState("");
    const [date, setDate] = useState("")
    useEffect(() => {
        const weatherApi = async () =>
        {
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
              setCity(weatherResponseObj.location.name)
              setDate(new Date().toLocaleDateString(
                "pt-br",
                { year: "numeric", month: "numeric", day: "numeric" }
              ));
              setTemperature(weatherResponseObj.current.temp_c + "C")
              setHumidity("H: " + weatherResponseObj.current.humidity + "%")
              
              let icon = weatherResponseObj.current.condition.icon;
              icon = icon.replace("64x64", "128x128");
              setImgSrc(`${icon}`);
              
            } catch (error) {
              console.log("erro");
            }
          }
          weatherApi();
    })
    return(
        <div className="flex flex-col w-[20rem] h-[16rem] bg-slate-600 rounded-lg hover:scale-105 duration-500">
            <div className="my-[2rem] mx-[2rem]">
                <div className="flex gap-4 items-center">
                    <div className="text-white">
                        <p className="text-4xl font-black mb-2 hover:scale-105 duration-500">{city}</p>
                        <p className="text-xl hover:scale-105 duration-500">{date}</p>
                    </div>
                    <div className="img">
                        <img src={imgSrc} className="duration-500 hover:scale-125"/>
                    </div>
                </div>
                <div className="mt-[3rem] text-white text-2xl font-bold flex gap-8 justify-between">
                    <div className="text-5xl hover:scale-105 duration-500"> {temperature} </div>
                    <div className="animate-pulse hover:scale-105 duration-500"> {humidity} </div>
                </div>
            </div>
        </div>
    )
}
export default Weather;