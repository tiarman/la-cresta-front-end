import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductDetails.css'
import { motion } from 'framer-motion/dist/framer-motion';

const ProductDetails = ({product}) => {
    const {name, price,description, img} = product
    return (
        <Col lg={4} md={6} className="mt-5">
        <motion.div  drag dragConstraints={{left:0, top:0, right:0, bottom:0}} dragElastic={0.5}>
           <Card className="border-0 p-3 container card-container ">
               <Fade left duration={2000} distance="40px">
                   <img className='img-fluid' src={img} alt={name} />
                       <Card.Body>
                           <Card.Title as="h5" className="text-info">{name}</Card.Title>
                           <Card.Text as='p' className="text-muted text-center">{description}</Card.Text>
                       </Card.Body>  
                       <Card.Footer className='d-flex justify-content-between align-items-center border-0'>
                           <h5>৳ {price}</h5>
                           <Button  variant='info'  as={Link} to="/dashboard/book" className="main-button"><FontAwesomeIcon icon={faShoppingCart}  />  Book</Button>            
                       </Card.Footer>
                   </Fade>
               </Card>
        </motion.div>
   </Col>
    );
};

export default ProductDetails;