import React from 'react';

// Component Imports
import HomeHero from './HomeHero';
import Offers from './Offers';
import Importance from './Importance';
import Statistics from './Statistics';
import JoinUs from './JoinUs';

function HomePage() {
    return ( 
        <>
            <h1>Home</h1>
            <HomeHero/>
            <div className="container">
                <Offers/>
                <Importance/>
                <Statistics/>
                <JoinUs/>
            </div>
        </>
     );
}

export default HomePage;