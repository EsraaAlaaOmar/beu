import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FirstSection = ({section, enLanguage}) => {
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
                    {enLanguage ?'LETS GET IN TOUCH!':'انشئ حساب لتري احدث المنتجات'}
                    <div>
                    {enLanguage ?'Sign Up Now':'انشاء حساب'}
                      
                        </div>

                </div>
            
            </Link>
            </Row>
         
          
            
        </div>
    )
}

export default FirstSection
