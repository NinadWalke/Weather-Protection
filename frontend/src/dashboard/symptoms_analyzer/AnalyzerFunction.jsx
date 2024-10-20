import React, {useState} from "react";

// Data imports
import countermeasures from './data/countermeasures.js';
import dietarySuggestions from './data/dietarySuggestions.js';

function AnalyzerFunction() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <label htmlFor="options">
        <h2 className="mb-3">Choose your symptom:</h2>
      </label>
      <br />
      <select
        className="mb-5"
        id="options"
        value={selectedOption}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "60px",
          padding: "1rem",
          fontSize: "1.1rem",
          borderRadius: "0.5rem",
          outline: "none",
          border: "1px solid lightgrey",
        }}
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="dizziness">Dizziness</option>
        <option value="headache">Headache</option>
        <option value="nausea">Nausea</option>
        <option value="confusion">Confusion</option>
        <option value="excessive_sweating">Excessive Sweating</option>
        <option value="rapid_heartbeat">Rapid Heartbeat</option>
        <option value="dry_skin">Dry Skin</option>
        <option value="muscle_cramps">Muscle Cramps</option>
        <option value="fainting">Fainting</option>
        <option value="high_body_temperature">High Body Temperature</option>
        <option value="fatigue">Fatigue</option>
        <option value="thirst">Increased Thirst</option>
      </select>
      {selectedOption && (
        <div className=" mb-5">
          <h3>Countermeasure:</h3>
          <p className="mb-5">{countermeasures[selectedOption]}</p>
          <h3>Dietary Advice: </h3>
          <p style={{lineHeight: "2"}}
            dangerouslySetInnerHTML={{
              __html: dietarySuggestions[selectedOption].replace(
                /\n/g,
                "<br />"
              ),
            }}
          />
        </div>
      )}
    </>
  );
}

export default AnalyzerFunction;
