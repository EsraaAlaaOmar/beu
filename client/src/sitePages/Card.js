import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ProductInCard from './components/orders&points/ProductInCard';
import CostInCard from './components/orders&points/CostInCard';
const Card = () => {
  return <div className='card_page'>
            <div className='title'>
               <div className='line right'></div>
               Your Cart
               <div className='line'></div>
             </div>
             <div>
                 <Row>
                     <Col md={6}>
                       <Container>
                        <ProductInCard />
                        <ProductInCard />
                       </Container>
                     
                     </Col>
                     <Col md={6}>
                      <CostInCard />
                     </Col>
                 </Row>
             </div>

  </div>;
};

export default Card;
