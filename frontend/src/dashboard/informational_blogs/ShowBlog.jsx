import React from "react";
import { useParams } from "react-router-dom";

function ShowBlog() {
  const blogs = {
    100: {
      title: "Home Remedies for Sun Strokes",
      abstract: "Sun strokes are a serious health concern during extreme summers, especially in tropical or arid regions. This blog dives into easy, effective home remedies to treat and prevent sun strokes naturally, using everyday ingredients and smart habits that protect your body from overheating.",
      img1: "/media/blog1img1.png",
      para1: "Sun strokes occur when the body fails to regulate its temperature under extreme heat. Common symptoms include dizziness, nausea, rapid heartbeat, and dry skin. The first step is to get out of direct sunlight immediately and move to a shaded or air-conditioned space. Loosen any tight clothing to help the body cool down naturally. Lay the person down and elevate their legs slightly to improve blood circulation. Applying a cold, wet cloth to the forehead and neck can also be helpful. Rehydration is crucial—sip on cool water slowly to avoid shocking the system. If symptoms persist, seek medical attention promptly.",
      img2: "/media/blog1img2.jpeg",
      para2: "Several natural ingredients at home can offer relief. A popular remedy is tamarind water, which helps in cooling down the body. You can soak tamarind in water, strain it, and drink the solution with a pinch of salt. Similarly, mint and coriander juice are known for their internal cooling properties. Buttermilk with a dash of cumin or ginger is another traditional fix that replenishes fluids and soothes the digestive system. These remedies are not only easy to prepare but also help maintain electrolyte balance. Avoid caffeinated or sugary beverages as they can worsen dehydration.",
      img3: "/media/blog1img3.jpg",
      para3: "Preventing sun strokes is just as important as treating them. Make hydration a habit by drinking water consistently throughout the day—not just when you're thirsty. Wear light-colored, loose-fitting cotton clothes when going outdoors. Use hats or umbrellas and avoid peak sun hours between 11 AM and 3 PM whenever possible. A natural coolant like aloe vera gel can be applied post-exposure to reduce inflammation. Staying weather-aware and adjusting your routine to the heat can go a long way in avoiding the risks associated with sun strokes."
    },
    101: {
      title: "Stay Safe During Stormy Winds",
      abstract: "Stormy winds can strike suddenly and disrupt daily life with falling debris, power cuts, and dangerous outdoor conditions. This blog explores how to prepare your home, travel smart, and stay safe using basic safety practices that can make a major difference in emergencies.",
      img1: "/media/blog2img1.jpg",
      para1: "Stormy winds are more than just strong breezes—they can cause structural damage, down trees, and bring chaos to streets and power lines. The best safety practice starts with awareness. Keep an eye on weather alerts from reliable sources like meteorological departments or weather apps. If a storm is predicted, secure outdoor furniture, potted plants, or any object that could become airborne. Inside your home, make sure windows and doors are tightly shut. If necessary, use duct tape in a crisscross pattern on large glass windows to reduce shattering risk during strong gusts.",
      img2: "/media/blog2img2.jpg",
      para2: "Having an emergency kit is a game-changer. Essentials like a flashlight, power bank, batteries, first aid supplies, dry food, and bottled water should always be stocked. In case of a power outage, it's good to have candles or solar lamps at hand. Unplug major appliances to prevent damage from voltage fluctuations when electricity returns. It's also smart to store important documents in waterproof files. For families, especially with kids or elderly members, a calm and clear emergency plan ensures that everyone knows what to do and where to gather if separated.",
      img3: "/media/blog2img3.jpg",
      para3: "When caught outdoors during stormy winds, prioritize shelter and safety. Avoid standing under trees, near tall poles, or close to construction zones. If you're in a car, pull over safely and stay inside until the wind subsides. Try not to panic and avoid making calls unless urgent—to keep networks free for emergency services. After the storm, be cautious while stepping outside, as debris, broken power lines, or unstable structures could pose serious risks. Staying prepared, informed, and alert can dramatically reduce harm in storm situations."
    },
    102: {
      title: "Daily Care from Weather Anomalies",
      abstract: "Weather anomalies like sudden rains, temperature drops, or unexpected heat waves can throw off your daily routine. This blog highlights simple ways to care for your body and maintain a steady routine that adapts well to unpredictable climate shifts.",
      img1: "",
      para1: "Weather anomalies are no longer rare—they’re a growing reality of climate change. Your daily habits need to evolve with the unpredictability. For example, unexpected temperature spikes can lead to dehydration or skin breakouts. Make hydration a core part of your routine, and opt for lightweight skincare products that won’t clog your pores. On colder-than-usual days, layering clothing and using hydrating moisturizers can help prevent dryness and fatigue. Flexibility is key—your routines should be ready to pivot with the weather without compromising comfort or health.",
      img2: "",
      para2: "Your wardrobe and skincare shelf should reflect seasonal shifts. Keep a mix of breathable fabrics like cotton and weather-resistant materials like windbreakers handy. Carry a small umbrella or raincoat during monsoon months—even if it looks sunny in the morning. Similarly, always have a high-SPF sunscreen ready, regardless of cloud cover. Skincare products with ingredients like niacinamide, hyaluronic acid, or ceramides offer daily support in adapting to both humidity and dryness. Being weather-ready doesn’t have to be complex—it just takes a little foresight and consistency.",
      img3: "",
      para3: "Mental care is just as important during erratic weather. Shifts in climate can affect your mood, sleep cycle, and productivity. Establish calming rituals like evening walks, herbal teas, or even journaling to keep grounded. Limit screen time during weather stress—especially during storms or gloomy days—and focus on rest and hydration. Eat seasonal fruits and veggies that help balance your body's natural response to the environment. Staying mindful of both physical and emotional health ensures you’re equipped to handle whatever the skies throw your way."
    },
  };

  const { id } = useParams(); // Extract params from blogs id in URL (We'll be collecting blogs here)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
            <h1 className="mt-5 mb-5">{blogs[id].title}</h1>
            <hr />
            <p>{blogs[id].abstract}</p>
            <div className="text-center mt-5 mb-5">
              <img src={blogs[id].img1} alt="Image 1" width={"80%"}/>
            </div>
            <p>{blogs[id].para1}</p>
            <div className="text-center mt-5 mb-5">
              <img src={blogs[id].img2} alt="Image 2" width={"80%"}/>
            </div>
            <p>{blogs[id].para2}</p>
            <div className="text-center mt-5 mb-5">
              <img src={blogs[id].img3} alt="Image 3" width={"80%"}/>
            </div>
            <p className="mb-5 pb-5">{blogs[id].para3}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowBlog;
