import SearchBox from "./components/SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Thane",
        temp: 25.085,
        tempMin: 21.02,
        tempMax: 27.3,
        humidity: 47,
        feelsLike: 30.2,
        weather: "Drizzle"
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1 className="mt-5 mb-5">Track your weather, safeguard your whereabouts!</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}