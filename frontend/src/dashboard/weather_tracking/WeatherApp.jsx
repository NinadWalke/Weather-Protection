import SearchBox from "./components/SearchBox";
import InfoBox from "./InfoBox";
import axios from 'axios';
import { useState } from "react";

import './components/MachineLearning.css';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Thane",
    temp: 25.085,
    tempMin: 21.02,
    tempMax: 27.3,
    humidity: 47,
    feelsLike: 30.2,
    weather: "Drizzle",
  });
  const [formData, setFormData] = useState({
    uv_index: "",
    sweating_level: "",
    spf_level: "",
    skin_type: "",
    water_intake: "",
    activity_level: "",
  });
  // Result Data
  const [predictionData, setPredictionData] = useState({
    heatstroke_risk: "",
    hydration_status: "",
    sunburn_severity: ""
  })

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Prediction Call towards the backend using Axios
  async function handlePrediction(e) {
    e.preventDefault();
    console.log(formData);
    const formattedData = {
        temperature: weatherInfo.temp,
        humidity: weatherInfo.humidity,
        ...formData
    }
    try {
        let res = await axios.post("http://127.0.0.1:5000/predict", formattedData);
        console.log(res.data); 
        setPredictionData(res.data);
    }
    catch(err) {
        console.log("Prediction Error: ", err);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="mt-5 mb-5">
        Track your weather, safeguard your whereabouts!
      </h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
      <form action="" onSubmit={handlePrediction}>
      <h2 className="text-center">Recommendation for you</h2>
      <div className="radios-holder">
      <div className="radio-holder container mt-4">
        <div>
        <label htmlFor="uv_index">UV Index</label><br/>
          <select name="uv_index" id="uv_index" className="ml-inputs" onChange={handleChange} value={formData.uv_index}>
            <option value="" disabled>
              UV Index
            </option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>
        <div><label htmlFor="sweating_level">Sweating Level</label><br/>
          <select name="sweating_level" id="sweating_level" className="ml-inputs" onChange={handleChange} value={formData.sweating_level}>
            <option value="" disabled>
              Sweating Level
            </option>
            <option value="No Sweating">No Sweating</option>
            <option value="Moderate">Moderate Sweating</option>
            <option value="Heavy">Heavy Sweating</option>
          </select></div>
        </div>
        <div className="radio-holder container">
        <div>
            <label htmlFor="spf_level">SPF Level</label><br/>
          <select name="spf_level" id="spf_level" className="ml-inputs" onChange={handleChange} value={formData.spf_level}>
            <option value="" disabled>
              SPF
            </option>
            <option value="SPF 15">15</option>
            <option value="SPF 30">30</option>
            <option value="SPF 50">50</option>
          </select></div>
        <div><label htmlFor="skin_type">Skin Type</label><br/>
          <select name="skin_type" id="skin_type" className="ml-inputs" onChange={handleChange} value={formData.skin_type}>
            <option value="" disabled>
              Skin Type
            </option>
            <option value="Type 1">Dry</option>
            <option value="Type 2">Oily</option>
            <option value="Type 3">Combination</option>
          </select></div>
        </div>
        <div className="radio-holder container">
        <div>
            <label htmlFor="water_intake">Water Intake</label><br/>
          <select name="water_intake" id="water_intake" className="ml-inputs" onChange={handleChange} value={formData.water_intake}>
            <option value="" disabled>
              Water Intake
            </option>
            <option value="Less than 500ml">Less than 500ml</option>
            <option value="1L - 2L">1L - 2L</option>
            <option value="More than 2L">More than 2L</option>
          </select></div>
        <div>
            <label htmlFor="activity_level">Activity Level</label><br/>
          <select name="activity_level" id="activity_level" className="ml-inputs" onChange={handleChange} value={formData.activity_level}>
            <option value="" disabled>
              Activity Level
            </option>
            <option value="Walking">Walking</option>
            <option value="Running">Running</option>
            <option value="High Intensity">High Intensity</option>
          </select></div>
        </div>
      </div>
      <div className="btn-holder text-center mb-5">
        <button className="btn btn-primary" style={{width: "210px", borderRadius: "0rem", height: "45px", fontSize: "1.1rem"}}>Predict</button>
      </div>
      </form>
      {/* Prediction Results */}
        <div className="prediction-data">
            <p><b>Heatstroke Risk:</b> {predictionData.heatstroke_risk}</p>
            <p><b>Hydration Status:</b> {predictionData.hydration_status}</p>
            <p><b>Sunburn Severity:</b> {predictionData.sunburn_severity}</p>
        </div>
    </div>
  );
}
