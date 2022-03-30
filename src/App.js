import './App.css';
import {useEffect, useState} from "react";
import {Alert, Button} from "@mui/material";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const App = () => {

    const [degree, setDegree] = useState(26)

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    return (
        <div>
            <h1>Weather degree in celsius</h1>
            <h1>{degree > 0 ?
                <h1>+{degree}C</h1> :
                <h1>{degree}C</h1>}
                <Button variant="contained" onClick={() => setDegree(randomInteger(-70, 70))}>Change weather :)</Button>
            </h1>

           <WeatherInfo degree={degree}/>


        </div>

    )
}

export default App;
