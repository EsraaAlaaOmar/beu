import React from 'react'
import { Col, Row } from 'react-bootstrap'

const SecondSection = ({section}) => {
  return (
    <div className='second-section'>
        <Row>
            <Col md={5}>
            <img  src={ section? section.galleries[0].image :''}/>
            <div className='visit'>
                VISIT OUR ABAYA SIZE GUIDE <br/> Take my size now!

            </div>
            </Col>
            <Col md={7}>
            <img className='center-img'   src={ section? section.galleries[1].image :''} />
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