import React from 'react';
import './Header.css'
import Banner from './../Banner/Banner';
import NavBar from './../NavBar/NavBar';

const header = () => {
    return (
        <div>
            <NavBar />
            <Banner />
        </div>
    );
};

export default header;