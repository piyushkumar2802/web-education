import React from 'react'
import GlobleStyle from './GlobleStyle';
import Advanced from './Home/Advanced_Services';
import AppTesting from './Home/App_testing_service';
import Project from './Home/OurProjext';
import Contact from './Home/contact';
import Work from './Home/work';


export default function home() {
    return (
        <div> 
            < GlobleStyle />
            < Advanced />
            < AppTesting />
            < Project />
            < Work />
            < Contact />
        </div>
    )
}
