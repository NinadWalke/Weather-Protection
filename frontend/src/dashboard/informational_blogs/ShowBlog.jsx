import React from 'react';
import { useParams } from 'react-router-dom';

function ShowBlog() {
    const {id} = useParams();     // Extract params from blogs id in URL (We'll be collecting blogs here)
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Blog Id: {id}</h1>
                        <h1>Blog Title: </h1>
                        <p>Blog Data</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ShowBlog;