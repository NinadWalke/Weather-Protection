import { useState } from 'react';
import TextField from '@mui/material/TextField';    // Material UI Text Field
import Button from '@mui/material/Button';          // Material UI button
import "./SearchBox.css";

export default function SearchBox ({updateInfo}) {
    // Setting state
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    // Requiring and using API Data
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const TEMP_API_KEY = "1031e82180981b48e6b9fba105594774"     // Shradha ma'am's key as our API key wasn't activated at the time of project creation
    const API_KEY = "d99e4dabd38483e1df9a234db13cdb47";

    // Getting the weather data
    let getWeatherInfo = async () => {
        try {
            setError(false);   
            let response = await fetch(`${API_URL}?q=${city}&appid=${TEMP_API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse); // Entire object response returned from API
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err
        }
    }

    // Event handlers
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    // Handling submit form and get weather info
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);  
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch(err) {
            setError(true);
        }
    }
    return (
        <div className='SearchBox' onSubmit={handleSubmit}>
            <form action="">
                <TextField 
                    id="city" 
                    label="Enter your desired tracking location" 
                    variant="outlined"
                    required 
                    value={city} 
                    onChange={handleChange}
                    style={{width: "60%"}}
                />
                <br />
                <br />
                <Button variant='contained' type='submit'>Search</Button>
                {error && <p className='mt-3' style={{color: "red"}}><b>This location doesn't exist in our database</b></p>}
            </form>
        </div>
    )
}