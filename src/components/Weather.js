import React, {useState, useEffect} from "react";
import axios from "axios";

import Success from "./Geo";

//import "../styles/Main.css";




function Weather(props){


    const [city, setCity] = useState([]);
    const [weather, setWeather] = useState([]);
    const [wind, setWind] = useState([]);
    const [hour, setHour] = useState([]);
    const [lat, setLat] = useState('58.0174')
    const [lon, setLon] = useState('56.2855')
    const [count, setCount] = useState(0)
    const apiKey = '2f35997f952b7aa5115b5f3b3f948196'
//    var c = `${props.gorod}`





     useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.value}&appid=${apiKey}&units=metric&lang=ru`)
//    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&units=metric&lang=en&APPID=${apiKey}`)
    .then(res =>{console.log(res);
    setCity(res.data);
    setWeather(res.data.main);
    setWind(res.data.wind);
    setLat(res.data.coord.lat);
    setLon(res.data.coord.lon);
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=en&APPID=${apiKey}`)
    .then(res =>{console.log(res)
    setHour(res.data.hourly)
    });
    });


    }, [props.value]);
    return (

        <table>
                <p>Город: {city.name}</p>
                <p>{lat}</p>
                <p>{lon}</p>
                <p>На сегодняшний день</p>
                <p>Температура {weather.temp}<sup>o</sup>C</p>
                <p>Скорость ветра {wind.speed} М/С</p>
                <p>На ближайше 2-е суток</p>
                 {hour.map((x, i) =><p>{i+1} час, {x.temp} <sup>o</sup>C</p>)}
        </table>
    );

}


export default Weather;


//2f35997f952b7aa5115b5f3b3f948196