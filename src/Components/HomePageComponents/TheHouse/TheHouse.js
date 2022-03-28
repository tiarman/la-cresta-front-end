import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './TheHouse.css'
import {Carousel} from '3d-react-carousal';
import house1 from '../../../Images/house1.jpg'
import house2 from '../../../Images/house2.jpg'
import house3 from '../../../Images/house3.jpg'
import house4 from '../../../Images/house4.jpg'
import house5 from '../../../Images/house5.jpg'

let slides = [
    <img  src={house1} alt="1" />,
    <img  src={house2} alt="2" />  ,
    <img  src={house3} alt="3" />  ,
    <img  src={house4} alt="4" />  ,
    <img src={house5} alt="5" />   ];


const TheHouse = () => {


    const callback = function(index){
        console.log("callback",index);
    }
    return (
        <section className="services" id='service'>
            <Container>
                <h5>THE HOUSES</h5>
                <h3>Services We Provide</h3>
                <br />
                <br />
                <Carousel slides={slides} autoplay={true} interval={3000} onSlideChange={callback}/>
                <br />
                <br />
                
                <p>Each house will have a private garden with the center piece being the negative edge, glass tiled swimming pool on the same level as the house. There will be stairs down to the sloping garden for extra outdoor space. Each house will have several outdoor group seating and dining areas to ensure you have a choice of sun or shade throughout the day and evening, depending on the season and your solar preference.</p>
            </Container>
        </section>
    );
};

export default TheHouse;