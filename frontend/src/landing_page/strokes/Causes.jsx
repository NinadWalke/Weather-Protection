import React from "react";

// Imports
import LeftData from "./components/LeftData";
import RightData from "./components/RightData";

function Causes() {
  return (
    <>
      <div className="container mt-5">
        <h1 style={{ fontSize: "3rem" }} className="mb-5">
          Common causes of Sun Strokes
        </h1>
        <div className="row">
          <div className="col">
            <LeftData
              sectionTitle="1. Prolonged Exposure to Direct Sunlight, Especially During Hot Weather"
              sectionData="Sunstroke often occurs when individuals are exposed to intense
              sunlight for extended periods without adequate protection.
              Prolonged exposure to direct sunlight increases the body’s core
              temperature, which can overwhelm the body’s ability to cool
              itself. This is especially dangerous during the hottest parts of
              the day, typically between 10 AM and 4 PM, when the sun’s rays are
              strongest. Without access to shade or protection like hats,
              sunglasses, or sunscreen, people are at a much higher risk of
              experiencing heat-related illnesses, including sunstroke."
            />
            <RightData
              sectionTitle="2. High Humidity, Which Prevents Sweat from Evaporating
              Efficiently"
              sectionData="High humidity levels make it more difficult for the body to cool
              itself through sweating. Normally, when we sweat, evaporation
              helps to lower our body temperature. However, in environments with
              high humidity, sweat cannot evaporate as effectively, leading to a
              buildup of heat in the body. This can cause the core temperature
              to rise dangerously high, triggering sunstroke. High humidity is
              especially dangerous during heatwaves, as the body’s natural
              cooling mechanisms become less effective in humid conditions."
            />
            <LeftData
              sectionTitle="3. Strenuous Physical Activity in Hot Weather"
              sectionData="Engaging in strenuous physical activities, such as sports or
              outdoor labor, during hot weather significantly increases the risk
              of sunstroke. Physical exertion generates additional body heat,
              and when combined with high external temperatures, it can
              overwhelm the body’s ability to dissipate heat. Without regular
              breaks, proper hydration, and cooling measures, people involved in
              intense outdoor activities are more likely to experience
              heat-related illnesses, including sunstroke. This is especially
              common among athletes and workers who spend extended hours
              outdoors."
            />
            <RightData
              sectionTitle="4. Dehydration, Reducing the Body's Ability to Cool Down"
              sectionData="Dehydration is a key factor that can lead to sunstroke, as it
              hampers the body's ability to regulate temperature. When you are
              dehydrated, your body cannot produce enough sweat to cool down
              properly. Without sufficient water intake, the risk of heat stroke
              increases because the body is unable to effectively transfer heat
              out of the system. During hot weather, it’s crucial to stay
              hydrated by drinking water regularly, especially when engaging in
              outdoor activities. Dehydration not only increases susceptibility
              to sunstroke but also impairs cognitive function and physical
              performance."
            />
            <LeftData
              sectionTitle="5. Wearing Tight or Non-Breathable Clothing in the Heat"
              sectionData="Wearing tight or non-breathable clothing in hot weather traps heat
              and prevents the skin from releasing it into the surrounding
              environment. Fabrics that do not allow air circulation, like
              synthetic materials, restrict the body’s ability to cool down
              through evaporation and heat transfer. This leads to a rapid
              increase in core body temperature, putting individuals at greater
              risk for sunstroke. Loose, light-colored, and breathable clothing,
              such as cotton, helps keep the body cooler by allowing sweat to
              evaporate more efficiently and promoting better airflow around the
              skin."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Causes;
