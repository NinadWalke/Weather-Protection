import React from 'react';

function Statistics() {
    return ( 
        <>
            <h1 className='text-center mt-5 pb-5 pt-5' style={{fontSize: "3rem"}}>STATISTICS</h1>
            <div className="container">
                <div className="row">
                    <div style={{backgroundImage: "url(/media/stats.png)", width: "100%", height: "650px", backgroundSize: "cover", backgroundPosition: "center"}}></div>
                    <h1 className='mt-5 mb-3'>A Collective Effort: Enhancing Sunstroke Awareness and Prevention</h1>
                    <p>Sunstroke, or heatstroke, is a significant health concern in India, particularly during the scorching summer months. According to the India Meteorological Department, extreme heat waves have become increasingly frequent, with temperatures often exceeding 45°C in many regions. The National Disaster Management Authority (NDMA) reports that heatwaves claim thousands of lives annually, especially among vulnerable populations such as the elderly, outdoor workers, and those without access to adequate cooling. Rising urbanization and climate change exacerbate the situation, contributing to a higher incidence of heat-related illnesses.</p>
                    <p>In 2021 alone, heatwaves led to approximately 1,000 deaths across the country, highlighting the urgent need for effective public health strategies. Enhanced awareness and timely interventions can significantly mitigate the impact of sunstroke, saving lives and improving overall community resilience.</p>
                </div>
            </div>
        </>
     );
}

export default Statistics;