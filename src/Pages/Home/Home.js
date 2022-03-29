import React from 'react';
import TheExteriors from '../../Components/HomePageComponents/TheExteriors/TheExteriors';
import TheHouse from '../../Components/HomePageComponents/TheHouse/TheHouse';
import TheInteriors from '../../Components/HomePageComponents/TheInteriors/TheInteriors';
import LineDrowing from '../../Components/HomePart2/LineDrowing/LineDrowing';
import Header from './../../Components/HomePageComponents/Header/Header';

const home = () => {
    return (
        <div>
            <Header />
            <TheHouse />
            <TheInteriors />
            <TheExteriors />
            <LineDrowing />
            
        </div>
    );
};

export default home;