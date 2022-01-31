import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import Visa from './Visa';
const Payment = () => {
  return <div className='payment_page'>
     
      <div className='title'>
               <div className='line right'></div>
               Payment
               <div className='line'></div>
     </div>
     <Container>
        <Row>
            
                <Col>
                <div className='payment_method' >
                   <Visa />

                </div>
                
                </Col>
                <Col>
                <div className='saved_payment'>
    h
                    </div>
                
                </Col>
            
        </Row>
     </Container>
     

  </div>;
};

export default Payment;
