import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import ApplePay from './ApplePay';
import PayPal from './PayPal';
import SavedPayment from './SavedPayment';


import Visa from './Visa';
const Payment = () => {
  return <div className='payment_page'>
     
 
        <Row>
            
                <Col md={6}>
                <div className='payment_method left' >
                  <div className='title'>PAYMENT</div>
                  <Routes>
                     <Route path="/" element={ <Visa />} exact />
                     <Route path="/paypal" element={ <PayPal />} exact />
                     <Route path="/Applepay" element={ <ApplePay />} exact />
                  </Routes>
                </div>
                
                </Col>
                <Col md={6}>
                <div className='saved_payment right'>
                    <SavedPayment />
                    </div>
                
                </Col>
            
        </Row>
   
     

  </div>;
};

export default Payment;
