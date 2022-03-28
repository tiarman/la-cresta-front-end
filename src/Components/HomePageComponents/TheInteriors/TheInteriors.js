import React from 'react';
import { Row, Container } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import './TheInteriors.css'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const TheInteriors = () => {
    return (
        <section className="interior" id='interior'>
            <Container>
                <h5>THE INTERIORS</h5>
                <h3>Services We Provide</h3>
                <br />
                <Row className="image-align mt-5 justify-content-center">
                <ImageGallery items={images} />;
                </Row>
                <br />
                <p>The areas are open plan and each floor is based on single level living. Wide opening sliding glass doors allow you to determine your level of outdoor living. Spain is all about living between Sol y Sombra. The ground floor flows seamlessly between the kitchen, indoor dining room, living room, shower room, studio, bathroom and utility room. The first floor has three full bedrooms with three full baths. The master bedroom has a private veranda as well as a shared patio with bedroom two.</p>
            </Container>
        </section>
    );
};

export default TheInteriors;