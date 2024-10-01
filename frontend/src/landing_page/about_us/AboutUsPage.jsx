import React from 'react';

// Imports

import Collaborators from './Collaborators';
import Motivation from './Motivation';
import Guidance from './Guidance';

function AboutUsPage() {
    return ( 
        <>
            <h1>About Us</h1>
            <Collaborators/>
            <Motivation/>
            <Guidance/>
        </>
     );
}

export default AboutUsPage;