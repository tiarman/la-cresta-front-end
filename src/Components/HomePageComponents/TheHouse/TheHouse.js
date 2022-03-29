import React from 'react';
import { Container } from 'react-bootstrap';
import './TheHouse.css'
import {Carousel} from '3d-react-carousal';
import Fade from 'react-reveal/Fade';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

let slides = [
    <img  src='https://picsum.photos/id/1015/1000/600/' alt="1" />,
    <img  src='https://picsum.photos/id/1019/1000/600/' alt="2" />  ,
    <img  src='https://picsum.photos/id/1018/1000/600/' alt="3" />  ,
    <img  src='https://picsum.photos/id/1019/1000/600/' alt="4" />  ,
    <img src='https://picsum.photos/id/1019/1000/600/' alt="5" />   ];


const TheHouse = () => {

    return (
        <section className="services" id='service'>
           
            <Fade top>
                <h5>THE HOUSES</h5>
                <h3>Services We Provide</h3>
                </Fade>
                <br />
                <br />
              
                <div>
                <Carousel  slides={slides} autoplay={true} interval={4000}/>
                </div>
            
                <br />
                <br />
                <Container>
                <Fade top>
                <p className='house-palign'>Each house will have a private garden with the center piece being the negative edge, glass tiled swimming pool on the same level as the house. There will be stairs down to the sloping garden for extra outdoor space. Each house will have several outdoor group seating and dining areas to ensure you have a choice of sun or shade throughout the day and evening, depending on the season and your solar preference.</p>
                </Fade>
                </Container>
         
        </section>
    );
};

export default TheHouse;