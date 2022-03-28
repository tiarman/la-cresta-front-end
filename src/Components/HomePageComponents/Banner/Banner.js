import React from 'react';
import { Button, Col, Container, Image, Row, Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import animation from '../../../Images/animation.mp4';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
             <Fade top duration={20} distance="40px">
                        <video loop muted>
                           <source src={animation} type="video/mp4" />

                       </video>
                    </Fade>
                    <Fade left duration={2000} distance="300px">
        <div className='text-wrapper'>
            <h1>SEVEN NEW INDIVIDUAL VILLAS WITH PRIVATE POOLS</h1>
            <br />
            <p>Unique and rare urban residential development set in a private community of 12,142m2. These spacious houses with individual gardens and private negative  pool are situated on a ridge line providing uninterrupted views of the Mediterranean sea , the entire coast line from Almunecar east and the majestic Sierra Nevada mountains The seven houses are approached up a private pine tree lined cul de sac drive with easy access to individual private secure parking. There is plenty of on-street parking for guests. </p>


        </div>
        </Fade>
        </div>
    //   <Carousel fade>
           
    //     <Carousel.Item interval={3000}>
    //     <Container fluid>
        
    //         <Row className="align-items-center justify-content-center banner">
    //             <Col className="p-md-5 order-2 order-md-1">
    //                 <Fade left duration={2000} distance="40px">
    //                     <h2>Shopping With <br /> Sweetable Cuple Here</h2>
    //                     <p className="text-muted my-4 pr-md-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
    //                     <Button
    //                         className="btn-main"
    //                         href="#services">
    //                         Get Started
    //                     </Button>
    //                 </Fade>
    //             </Col>
    //             <Col className="order-1 order-md-2">
    //                 <Fade right duration={2000} distance="40px">
    //                     <video >
    //                         <source src={animation} type="video/mp4" />

    //                     </video>
    //                 </Fade>
    //             </Col>
    //         </Row>
           
    //         </Container>
    //         </Carousel.Item>
    
    //     </Carousel>
    );
};

export default Banner;