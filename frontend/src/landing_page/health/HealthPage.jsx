import React from 'react';

// Imports
import HealthHero from './HealthHero';
import StrokeDefense from './StrokeDefense';
import StrokeDiet from './StrokeDiet';
import ResearchCredits from './ResearchCredits';

function HealthPage() {
    return ( 
        <>
            <HealthHero/>
            <StrokeDefense/>
            <StrokeDiet/>
            <ResearchCredits/>
        </>
     );
}

export default HealthPage;