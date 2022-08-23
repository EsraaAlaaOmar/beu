import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SixSection = ({section,enLanguage}) => {
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
               <div className='button'>
                 {enLanguage?'Sell At The Beau Wow':'اعرض منتجاتك للبيع'}
              </div>
            
            </Link>
         
          
            
        </div>
    )
}


export default SixSection