import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FirstSection = () => {
    return (
        <div className='firstsection'>
            <Row>
                <Col lg={4}>
                   <img  src='/images/Landingpage/C2.png' />
                </Col>
                <Col lg={4}>
                   <img  src='/images/Landingpage/C2.png' />
                </Col>
                <Col lg={4}>
                   <img  src='/images/Landingpage/C2.png' />
                </Col>
            </Row>
            <Link to='/log/sign'>
                <div className='in-toutch'>
                    LETS GET IN TOUCH!
                    <div>Sign Up Now</div>

                </div>
            
            </Link>
          
            
        </div>
    )
}

export default FirstSection
