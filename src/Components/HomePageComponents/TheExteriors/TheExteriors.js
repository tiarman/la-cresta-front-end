import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import exterior1 from '../../../Images/exterior/exterior1.jpg';
import exterior2 from '../../../Images/exterior/exterior2.jpg';
import exterior3 from '../../../Images/exterior/exterior3.jpg';
import './TheExteriors.css'


const carosols = [
    {
        "id": 1,
        "img": exterior1,
        "img1": 'https://picsum.photos/id/1019/1000/600/'
    },
    {
        "id": 2,
        "img": exterior2,
        "img1": 'https://picsum.photos/id/1018/1000/600/'
    },
    {
        "id": 3,
        "img": exterior3,
        "img1": 'https://picsum.photos/id/1015/1000/600/'
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
                                        src={slide.img1}
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