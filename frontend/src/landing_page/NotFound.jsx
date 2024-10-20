import React from 'react';

function NotFound() {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col mt-5 mb-5 pb-5">
                        <div style={{width: "100%", display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <img src="/media/error404.png" alt="Error 404 | Not found" width={"75%"}/>
                            <h1 className='mt-5'>Oops! Looks like the page you tried visiting doesn't exist</h1>
                            <h4 className='mt-4'>Please recheck your URL, maybe you missed '/home'?</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default NotFound;