import React from 'react';

import './CollabCard.css';

function CollabCard({img = "/media/usericon.jpg", name = "XYZ", title = "Title", desc = "Description"}) {
    return ( 
        <>
            <div className="collab-card">
                <div className="collab-card-img" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={img} alt="Oops...Error loading image" width={"150px"} height={"150px"} style={{borderRadius: "50%"}}/>
                </div>
                <div className="collab-name card-padder" style={{display: "flex", justifyContent: "center", alignItems: "center", fontFamily: ""}}><h3 className='mt-2'>{name}</h3></div>
                <div className="collab-card-body">
                    <div className="collab-title card-padder mt-3 text-center"><h2>{title}</h2></div>
                    <div className="collab-description card-padder text-center">{desc}</div>
                </div>
            </div>
        </>
     );
}

export default CollabCard;