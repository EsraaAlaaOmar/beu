import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FirstSection = ({section}) => {
    return (
    
        <div className='firstsection'>
            <Row>
                <Col lg={4}>
                   <img  src={ section? section.galleries[0].image :''}/>
                   {console.log(section)}
                </Col>
                <Col lg={4}>
                     <img  src={section ? section.galleries[1].image :''}/>
                </Col>
                <Col lg={4}>
                     <img  src={section ? section.galleries[2].image :''}/>
                </Col>
                <Link to='/log/sign'>
                <div className='in-toutch'>
                    LETS GET IN TOUCH!
                    <div>Sign Up Now</div>

                </div>
            
            </Link>
            </Row>
         
          
            
        </div>
    )
}

export default FirstSection
