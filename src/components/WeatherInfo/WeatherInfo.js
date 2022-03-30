import React, {useEffect, useState} from 'react';
import {Alert} from "@mui/material";
import "./WeatherInfo.css"

const WeatherInfo = ({degree}) => {

    const [weatherInfo, setWeatherInfo] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await fetch("./weatherTitle.json").then(res => res.json())
            setWeatherInfo(data)
        })()
    }, [])

    function temperatureInfo (celsius) {
        if (celsius < 0 && celsius >= -50) {
            return (
                <div className="mainInfo">
                    <Alert severity="info">{weatherInfo.cold}</Alert>
                    <img src="https://media.giphy.com/media/d3mlmtNPoxNrt4Bi/giphy.gif" alt="cold weather" className="weatherImg"/>
                </div>
            )
        }
        if (celsius >= 0 && celsius <= 10) {
            return (
                <div className="mainInfo">
                    <Alert severity="info">{weatherInfo.windy}</Alert>
                    <img src="https://media.giphy.com/media/G5n8sqIOxBqow/giphy.gif" alt="windy weather" className="weatherImg"/>
                </div>
            )
        }
        if (celsius >= 11 && celsius <= 30) {
            return (
                <div className="mainInfo">
                    <Alert severity="info">{weatherInfo.normal}</Alert>
                    <img src="https://media.giphy.com/media/gJhZvtLAO9Sv0s7d6j/giphy.gif" alt="normal weather" className="weatherImg"/>
                </div>
            )
        }
        if (celsius >= 31 && celsius <= 40) {
            return (
                <div className="mainInfo">
                    <Alert severity="info">{weatherInfo.hot}</Alert>
                    <img src="https://media.giphy.com/media/CzBDtNJmAFTUadZicj/giphy.gif" alt="hot weather" className="weatherImg"/>
                </div>
            )
        }
        if (celsius >= 41 && celsius <= 50 ) {
            return (
                <div className="mainInfo">
                    <Alert severity="info">{weatherInfo.veryHot}</Alert>
                    <img src="https://media.giphy.com/media/xT0Gqz4x4eLd5gDtaU/giphy.gif" alt="veryHot weather" className="weatherImg"/>
                </div>
            )
        }
        else {
            return (
                <div className="mainInfo">
                    <Alert severity="info">{weatherInfo.reCheck}</Alert>
                    <img src="https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif" alt="re-check weather" className="weatherImg"/>
                </div>
            )
        }
    }

    return (
        <>{temperatureInfo(degree)}</>
    );
};

export default WeatherInfo;