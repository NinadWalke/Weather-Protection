import React from 'react';

function Importance() {
    return ( 
        <>
            <h1 className='text-center mt-5 mb-5 pb-5 pt-5' style={{fontSize: "3rem"}}>IMPORTANCE</h1>
            <div className="container mb-5 pb-5">
                <div className="row mt-5 pt-5 pb-5">
                    <div className="col">
                        <div style={{width: "550px", height: "300px", backgroundImage: "url('media/risk.png')",  backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
                    </div>
                    <div className="col">
                        <h1 className='mb-4'>Understanding Sunstroke Risks</h1>
                        <p>Sunstroke can lead to severe health complications, including heat exhaustion and even death. Awareness of the risks associated with extreme heat is crucial for prevention and timely intervention.</p>
                        <p>By recognizing the symptoms early, individuals can take immediate action to cool down and seek medical help if necessary. This knowledge empowers communities to respond effectively during heatwaves.</p>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col">
                        <h1 className='mb-4'>Promoting Preventive Measures</h1>
                        <p>Educating people about sunstroke prevention strategies can significantly reduce the incidence of heat-related illnesses. Simple measures, such as staying hydrated and wearing protective clothing, can save lives.</p>
                        <p>Community initiatives focused on sun safety can foster a culture of health awareness. This proactive approach encourages individuals to prioritize their well-being during peak heat periods.</p>
                    </div>
                    <div className="col">
                        <div style={{width: "550px", height: "300px", backgroundImage: "url('media/sunstroke.png')",backgroundSize: "cover" }}></div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Importance;
