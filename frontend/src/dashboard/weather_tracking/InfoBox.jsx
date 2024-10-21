// Importing Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// Importing Icons
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// Importing CSS
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const URLs = {
    hotUrl:
      "https://images.unsplash.com/photo-1602521368813-bb0e916eca46?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coldUrl:
      "https://plus.unsplash.com/premium_photo-1671101506168-881c3bad90b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
    rainUrl:
      "https://images.unsplash.com/photo-1574790989029-373ba6b885bb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  const alertMessages = {
    highTemp:
      "Warning: The temperature is dangerously high today, reaching levels that can cause severe health issues such as dehydration, heat exhaustion, or even sunstroke. It's crucial to avoid being outdoors during peak hours, especially between 11 AM and 3 PM, when the sun's rays are most intense. Stay in shaded areas or air-conditioned spaces whenever possible. Make sure to drink plenty of fluids throughout the day, particularly water or electrolyte drinks, to keep yourself hydrated. Wear loose, light-colored clothing to help your body cool down, and don’t forget to apply sunscreen if you're stepping outside. It's also important to check on vulnerable individuals, such as the elderly or children, as they are more susceptible to heat-related illnesses.",
    safeTemp:
      "The temperature is currently within a safe range, providing relatively comfortable weather conditions for outdoor activities. However, it’s always a good idea to stay cautious and be prepared. Even though the risk of sunstroke is minimal, maintaining hydration is essential, especially if you plan on being outdoors for extended periods. Wear sunscreen to protect your skin, take regular breaks in shaded areas, and wear a hat or sunglasses to shield yourself from the sun's rays. If you're exercising or performing physical activities, try to schedule them during cooler parts of the day. Overall, it’s a great day to be outside, but a few simple precautions will keep you safe and comfortable.",
    lowTemp:
      "Today's temperature is quite cool, falling below 15°C. While this means there is no risk of sunstroke, it's essential to dress warmly to avoid cold-related health issues like hypothermia or frostbite, especially if you're spending long periods outdoors. Layer your clothing, wear a jacket, and consider gloves or a hat to keep your body heat in. Even though the risk from the sun is lower, it’s still advisable to use sunscreen, as UV rays can penetrate through clouds. Cold weather can also increase the risk of respiratory issues, so it's important to stay warm and monitor any sudden changes in temperature. Overall, it's a safe day in terms of sun exposure, but be mindful of the chill in the air.",
    rainyWeather:
      "Alert: The high humidity levels today suggest the potential for heavy rain, which could lead to flooding in certain areas. It's advised to avoid traveling through low-lying regions where water accumulation may occur. Roads and sidewalks may become slippery, so wear appropriate footwear with good grip to prevent accidents. If you're driving, reduce your speed to avoid hydroplaning and ensure that your windshield wipers are functioning properly. In case of torrential downpours, try to stay indoors and avoid unnecessary travel. Heavy rain may also lead to sudden drops in temperature, so be prepared with an umbrella or raincoat if you need to venture out. Be cautious, and stay tuned to local weather reports for updates on any flood warnings or severe weather conditions.",
  };
  const precautions = {
    highTemp: `
        1. Avoid going out during peak sunlight hours (11 AM - 3 PM).<br/>
        2. Stay hydrated by drinking at least 8-10 glasses of water.<br/>
        3. Wear loose, light-colored, and breathable clothing.<br/>
        4. Use sunscreen with high SPF to protect against UV rays.<br/>
        5. Take frequent breaks in shaded or air-conditioned areas.<br/>
        6. Avoid strenuous physical activities outdoors to prevent heat-related issues.
    `,
    safeTemp: `
        1. Stay hydrated by drinking water regularly throughout the day.<br/>
        2. Use sunscreen to protect your skin from sun exposure.<br/>
        3. Wear sunglasses or a hat if you plan to be outside for long periods.<br/>
        4. Schedule outdoor activities for early mornings or late afternoons.<br/>
        5. Wear comfortable clothing suitable for mild weather.<br/>
        6. Keep yourself informed about any sudden weather changes.
    `,
    lowTemp: `
        1. Wear layers of warm clothing, including a jacket, gloves, and a hat.<br/>
        2. Stay indoors as much as possible, especially during windy periods.<br/>
        3. Avoid staying outside for prolonged periods to prevent hypothermia.<br/>
        4. Keep your hands and feet warm to avoid frostbite.<br/>
        5. Stay hydrated even in cooler weather.<br/>
        6. Use moisturizing lotions to protect your skin from dryness.
    `,
    rainyWeather: `
        1. Carry an umbrella or raincoat to stay dry in case of sudden rain.<br/>
        2. Avoid walking or driving through flooded areas.<br/>
        3. Wear shoes with a good grip to prevent slipping on wet surfaces.<br/>
        4. Stay indoors during heavy rain or thunderstorms.<br/>
        5. Check weather updates for any flood warnings in your area.<br/>
        6. Drive slowly to avoid hydroplaning and accidents.
    `,
  };
  return (
    <>
      <div className="InfoBox mb-5 mt-5">
        <div className="card-container">
          <Card style={{ width: "900px" }}>
            <CardMedia
              style={{ height: "275px" }}
              image={
                info.humidity > 80
                  ? URLs.rainUrl
                  : info.temp > 20
                  ? URLs.hotUrl
                  : URLs.coldUrl
              }
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}{" "}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 20 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <div>Temperature = {info.temp}&deg;C</div>
                <div>Humidity = {info.humidity}&deg;C</div>
                <div>Min Temp = {info.tempMin}&deg;C</div>
                <div>Max Temp = {info.tempMax}&deg;C</div>
                <div>
                  The weather can be described as <b>{info.weather}</b> and
                  feels like <b>{info.feelsLike}&deg;C</b>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Weather Analysis</h1>
            <Typography variant="body1" color="text.primary">
              {info.temp > 35 ? (
                <div>
                  <img
                    src="/media/heatalert.jpg"
                    alt=""
                    width={"750px"}
                    height={"400px"}
                    className="mt-4 mb-4"
                  />
                  <p className="mb-5">{alertMessages.highTemp}</p>
                  <h1 className="mb-4">Suggestions based on the weather</h1>
                  <div
                    className="mb-5"
                    dangerouslySetInnerHTML={{ __html: precautions.highTemp }}
                  />
                </div>
              ) : info.temp <= 35 && info.temp >= 15 ? (
                <div>
                  <img
                    src="/media/safealert.jpg"
                    alt=""
                    width={"750px"}
                    height={"400px"}
                    className="mt-4 mb-4"
                  />
                  <p className="mb-5">{alertMessages.safeTemp}</p>
                  <h1 className="mb-4">Suggestions based on the weather</h1>
                  <div
                    className="mb-5"
                    dangerouslySetInnerHTML={{ __html: precautions.safeTemp }}
                  />
                </div>
              ) : info.humidity > 80 ? (
                <div>
                  <img
                    src="/media/rainalert.jpg"
                    alt=""
                    width={"750px"}
                    height={"400px"}
                    className="mt-4 mb-4"
                  />
                  <p className="mb-5">{alertMessages.rainyWeather}</p>
                  <h1 className="mb-4">Suggestions based on the weather</h1>
                  <div
                    className="mb-5"
                    dangerouslySetInnerHTML={{ __html: precautions.rainyWeather }}
                  />
                </div>
              ) : (
                <div>
                  <img
                    src="/media/coldalert.png"
                    alt=""
                    width={"750px"}
                    height={"400px"}
                    className="mt-4 mb-4"
                  />
                  <p className="mb-5">{alertMessages.lowTemp}</p>
                  <h1 className="mb-4">Suggestions based on the weather</h1>
                  <div
                    className="mb-5"
                    dangerouslySetInnerHTML={{ __html: precautions.lowTemp }}
                  />
                </div>
              )}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
