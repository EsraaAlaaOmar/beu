import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SixSection = () => {
    return (
        <div className='firstsection six'>
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
               <div className='button'>Sell At The Beau Wow</div>
            
            </Link>
         
          
            
        </div>
    )
}


export default SixSection