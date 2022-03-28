import React from 'react';
import TheExteriors from '../../Components/HomePageComponents/TheExteriors/TheExteriors';
import TheHouse from '../../Components/HomePageComponents/TheHouse/TheHouse';
import TheInteriors from '../../Components/HomePageComponents/TheInteriors/TheInteriors';
import Header from './../../Components/HomePageComponents/Header/Header';

const home = () => {
    return (
        <div>
            <Header />
            <TheHouse />
            <TheInteriors />
            <TheExteriors />
            
        </div>
    );
};

export default home;