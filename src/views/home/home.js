import React from "react";
import AppAbout from "../../Components/home/about";
import AppHero from '../../Components/home/hero';
import AppFeatures from '../../Components/home/features';

function AppHome(){
    return (
        <div>
            <AppHero/>
            <AppAbout/>
            <AppFeatures/>
       </div>
    );
}

export default AppHome;