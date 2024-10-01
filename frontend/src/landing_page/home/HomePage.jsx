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
            <HomeHero/>
                <Offers/>
                <Importance/>
                <Statistics/>
                <JoinUs/>
        </>
     );
}

export default HomePage;