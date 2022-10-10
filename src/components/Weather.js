import React, {useState, useEffect} from "react";
import axios from "axios";
import "../styles/index.css";
import Success from "./Geo";

//import "../styles/Main.css";




function Weather(props){


    const [city, setCity] = useState([]);
    const [weather, setWeather] = useState([]);
    const [wind, setWind] = useState([]);
    const [hour, setHour] = useState([]);
    const [hour_dt, setHour_dt] = useState([]);
    const [daily, setDaily] = useState([]);
    const [daily_weather, setDaily_weather] = useState([]);
    const [lat, setLat] = useState('58.0174')
    const [lon, setLon] = useState('56.2855')

    const apiKey = '2f35997f952b7aa5115b5f3b3f948196'
//    var c = `${props.gorod}`





     useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.value}&appid=${apiKey}&units=metric&lang=ru`)
    .then(res =>{console.log(res);
    setCity(res.data);
    setWeather(res.data.main);
    setWind(res.data.wind);
    setLat(res.data.coord.lat);
    setLon(res.data.coord.lon);
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=en&APPID=${apiKey}`)
    .then(res =>{console.log(res);
    setHour(res.data.hourly);
    setHour_dt(res.data.hourly.map(time => <p>{new Date(time.dt * 1000).toLocaleTimeString()}</p>));
    setDaily(res.data.daily.map(y => <p>{new Date(y.dt * 1000).toLocaleDateString()}</p>));
    setDaily_weather(res.data.daily);

    });
    });



    }, [props.value]);
    return (

        <table><center>
            <div class='td1'>
                <td >
                <p>Город: {city.name}</p>
                <p>На сегодняшний день</p>
                <p>Температура {weather.temp}<sup>o</sup>C</p>
                <p>Скорость ветра {wind.speed} М/С</p>
                </td>
            </div>
                <td>
                <p>На 2-е суток</p>
                <p>{hour_dt}</p>
                </td>
                 <td>
                 <p>t <sup>o</sup>C</p>
                {hour.map(x  =><p> {x.temp}</p>)}
                </td>
                 <td>
                 <p>____Погода на неделю</p>
                 {daily}
                 </td>
                 <td>
                 <p>t <sup>o</sup>C</p>
                 {daily_weather.map(z  =>  <p>{z.temp.day} </p>)}
                 </td>
        </center></table>
    );

}


export default Weather;


//2f35997f952b7aa5115b5f3b3f948196