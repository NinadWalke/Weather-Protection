import React from 'react';

// Imports

import Collaborators from './Collaborators';
import Motivation from './Motivation';
import Guidance from './Guidance';

function AboutUsPage() {
    return ( 
        <>
            <h4 className='text-center mt-4 mb-4'>ABOUT</h4>
            <Collaborators/>
            <Motivation/>
            <Guidance/>
        </>
     );
}

export default AboutUsPage;