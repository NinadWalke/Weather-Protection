import React from 'react';
import {Link} from 'react-router-dom'

function JoinUs() {
    return ( 
        <>
            <h1 className='text-center pb-5 pt-5' style={{fontSize: "3rem",}}>JOIN US</h1>
            <div className="container">
            <div className="row pt-5 pb-5 mb-5">
                    <div className="col">
                        <div style={{width: "550px", height: "300px", backgroundColor: "red"}}></div>
                    </div>
                    <div className="col">
                        <h1 className='mb-4'>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nihil, labore eligendi eveniet itaque saepe ducimus nostrum sequi aspernatur deleniti voluptates quo dolores, quaerat assumenda facere temporibus quidem suscipit possimus!</p>
                            <Link to={"/signup"}><button className='btn btn-primary mt-3' style={{width: "250px", height: "50px"}}>Join Us</button></Link>
                        </div>
                </div>
            </div>
        </>
     );
}

export default JoinUs;