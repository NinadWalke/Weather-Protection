import React from 'react';

// Imports
import HealthHero from './HealthHero';
import StrokeDefense from './StrokeDefense';
import StrokeDiet from './StrokeDiet';

function HealthPage() {
    return ( 
        <>
            <HealthHero/>
            <StrokeDefense/>
            <StrokeDiet/>
        </>
     );
}

export default HealthPage;