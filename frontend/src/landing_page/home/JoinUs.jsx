import React from 'react';
import {Link} from 'react-router-dom'

function JoinUs() {
    return ( 
        <>
            <h1 className='text-center pb-5 pt-5' style={{fontSize: "3rem",}}>JOIN US</h1>
            <div className="container">
            <div className="row pt-5 pb-5 mb-5">
                    <div className="col">
                        <div style={{width: "550px", height: "400px", backgroundImage : "url('media/joinus.png')"}}></div>
                    </div>
                    <div className="col">
                        <h1 className='mb-4'>Empower Change: Join Us Today</h1>
                        <p>
                        Join us in our mission to combat the growing threat of sunstroke and promote awareness about heat-related illnesses. We invite passionate individuals, healthcare professionals, and community leaders to collaborate and make a difference. By becoming a part of our initiative, you'll have the opportunity to contribute to educational campaigns, participate in outreach programs, and share valuable resources to help protect vulnerable populations. Together, we can create a safer environment, enhance community resilience, and empower individuals with the knowledge they need to stay safe in extreme heat. Join us in our commitment to safeguarding lives and fostering a healthier future for all!</p>
                            <Link to={"/register"}><button className='btn btn-primary mt-3' style={{width: "250px", height: "50px"}}>Join Us</button></Link>
                        </div>
                </div>
            </div>
        </>
     );
}

export default JoinUs;