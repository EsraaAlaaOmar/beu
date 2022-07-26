import React from 'react'
import { Col, Row } from 'react-bootstrap'

const SecondSection = () => {
  return (
    <div className='second-section'>
        <Row>
            <Col md={5}>
            <img  src='/images/Landingpage/C2.png' />
            <div className='visit'>
                VISIT OUR ABAYA SIZE GUIDE <br/> Take my size now!

            </div>
            </Col>
            <Col md={7}>
            <img className='center-img'  src='/images/Landingpage/C2.png' />
            <div className='text'>
                <div className='title'>
                     DISCOVER WHATS ON DISCOUNT
                </div>
                <div className='button'>
                      SHOP THE SALE
                </div>

            </div>
            </Col>
        </Row>
        <div className='pink'></div>
    </div>
  )
}

export default SecondSection