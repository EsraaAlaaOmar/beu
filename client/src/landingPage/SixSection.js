import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SixSection = ({section}) => {
    return (
        <div className='firstsection six'>
            <Row>
                <Col lg={4}>
                    <img  src={ section? section.galleries[0].image :''}/>
                </Col>
                <Col lg={4}>
                    <img  src={ section? section.galleries[1].image :''}/>
                </Col>
                <Col lg={4}>
                    <img  src={ section? section.galleries[2].image :''}/>
                </Col>
            </Row>
            <Link to='/log/sell'>
               <div className='button'>Sell At The Beau Wow</div>
            
            </Link>
         
          
            
        </div>
    )
}


export default SixSection