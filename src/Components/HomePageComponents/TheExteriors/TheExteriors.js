import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import exterior1 from '../../../Images/exterior/exterior1.jpg';
import exterior2 from '../../../Images/exterior/exterior2.jpg';
import exterior3 from '../../../Images/exterior/exterior3.jpg';
import exterior4 from '../../../Images/exterior/exterior4.jpg';
import exterior5 from '../../../Images/exterior/exterior5.jpg';
import exterior6 from '../../../Images/exterior/exterior6.jpg';
import './TheExteriors.css'


const carosols = [
    {
        "id": 1,
        "img": exterior1
    },
    {
        "id": 2,
        "img": exterior2
    },
    {
        "id": 3,
        "img": exterior3
    },
    {
        "id": 4,
        "img": exterior4
    },
    {
        "id": 5,
        "img": exterior5
    },
    {
        "id": 6,
        "img": exterior5
    },
    {
        "id": 7,
        "img": exterior6
    }
]
const TheExteriors = () => {
    return (
        <section className="exterior" id='exterior'>
            <Container>
                <h5>THE EXTERIORS</h5>
                <h3>Services We Provide</h3>
                <br />
                <br />
                <Carousel className='exterior-align'>

                    {

                        carosols.map(slide =>

                            <Carousel.Item interval={3000}>
                                <Fade left duration={1000} distance="40px">
                                    <img
                                        className="d-block"
                                        style={{ width: "100%", height: "450px" }}
                                        src={slide.img}
                                        alt="First slide"
                                    />
                                </Fade>

                            </Carousel.Item>
                        )

                    }

                </Carousel>

                <br />
                <p>The outdoor areas are on the same level as the interior so it allows you to move effortless between several exterior dining areas, pool area, decking and chill area to the outdoor kitchen with island bar and dining area. Each house will have a private garden with the center piece being the negative edge, glass tiled swimming pool on the same level as the house. There will be stairs down to the sloping garden for extra outdoor space. Each house will have several outdoor group seating and dining areas to ensure you have a choice of sun or shade throughout the day and evening, depending on the season and your solar preference.</p>
            </Container>
        </section>
    );
};

export default TheExteriors;