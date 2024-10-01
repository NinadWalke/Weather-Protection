import React from "react";

function StrokeStatistics() {
  return (
    <>
      <div className="container mt-5 pt-5 mb-5 pb-5">
        <h1 style={{ fontSize: "3rem" }} className="mb-5 text-center">
          Sun Stroke Statistics
        </h1>
        <div className="row">
          <div
            style={{
              backgroundImage: "url(/media/statisticsimg.jpg)",
              width: "100%",
              height: "650px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <h3 className="mt-5 mb-3">
          Sunstroke Statistics in India are as follows
          </h3>
          <p>
          1. Annual Sunstroke Cases:<br/> - Approximately 25,000 cases of sunstroke are reported across India each year during the summer months, particularly from April to June.
<br/><br/>
2. Heatwave-related Deaths:<br/> - On average, 1,500 to 2,000 deaths per year are attributed to extreme heatwaves and sunstroke, especially in states like Rajasthan, Gujarat, and Uttar Pradesh.
<br/><br/>
3. Affected Regions:<br/>- North and Central India experience the highest number of sunstroke incidents, with regions like Rajasthan, Madhya Pradesh, and Andhra Pradesh reporting over 65% of total cases.
<br/><br/>
4. Vulnerable Groups:<br/>
   - 70% of sunstroke cases involve individuals over the age of 60.<br/>
   - 15% of cases are reported in children under 10 years old, primarily due to prolonged outdoor exposure.
<br/><br/>
5. Urban vs Rural Divide:<br/>
   - 60% of sunstroke incidents are reported in rural areas, where access to healthcare and preventive measures like shaded shelters and hydration are limited.<br/>
   - In urban centers, particularly in cities like Delhi, Mumbai, and Chennai, sunstroke cases spike during peak heatwaves, accounting for 40% of the country’s cases.
<br/><br/>
6. Preventive Measures Adoption: <br/>
   - 80% of urban dwellers are aware of basic sunstroke prevention, such as wearing light clothing and staying hydrated.<br/>
   - However, only 50% of rural populations regularly adopt preventive measures, leading to higher sunstroke occurrences.
<br/><br/>
7. Medical Intervention: <br/>
   - 50% of severe sunstroke cases in India require hospitalization, with dehydration being the leading complication.

          </p>
        </div>
      </div>
    </>
  );
}

export default StrokeStatistics;
