import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ProductInCard from './components/orders&points/ProductInCard';
const Card = () => {
  return <div className='card_page'>
            <div className='title'>
               <div className='line right'></div>
               Your Cart
               <div className='line'></div>
             </div>
             <div>
                 <Row>
                     <Col>
                       <Container>
                        <ProductInCard />
                        <ProductInCard />
                       </Container>
                     
                     </Col>
                     <Col>
                     
                     </Col>
                 </Row>
             </div>

  </div>;
};

export default Card;
