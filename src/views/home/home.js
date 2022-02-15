import React from "react";
import AppAbout from "../../Components/home/about";
import AppHero from '../../Components/home/hero';

function AppHome(){
    return (
        <div>
            <AppHero/>

            <AppAbout/>
       </div>
    );
}

export default AppHome;