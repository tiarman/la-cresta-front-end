import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import { Row, Container } from 'react-bootstrap';
import Spinner from './../../../Shared/Spinner/Spinner';
import './AllProducts.css'

const products = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "price": 200,
        "description":"Best product in our shop",
        "img": "https://i.ibb.co/QvK4zW5/image-32.png"
    },
    {
        "id": 1,
        "name": "Leanne Graham",
        "price": 200,
        "description":"Best product in our shop",
        "img": "https://i.ibb.co/QvK4zW5/image-32.png"
    },
    {
        "id": 1,
        "name": "Leanne Graham",
        "price": 200,
        "description":"Best product in our shop",
        "img": "https://i.ibb.co/QvK4zW5/image-32.png"
    }
        
]

const AllProducts = () => {

    
    return (
        <section className="services" id='service'>
            <Container>
                <h5>What We Do</h5>
                <h3>Services We Provide</h3>
                <Row className="mt-5 justify-content-center">
                    {
                        products.length  > 0 ? 
                        products.map(product => <ProductDetails key={product.id} product={product}></ProductDetails>)
                            : 
                            <div className="m-auto">
                                <img  className='img-fluid' src={Spinner} alt="..." />
                            </div>
                    }
                </Row>
            </Container>
        </section>
    );
};

export default AllProducts;