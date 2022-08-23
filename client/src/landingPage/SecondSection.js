import React from 'react'
import { Col, Row } from 'react-bootstrap'

const SecondSection = ({section,enLanguage}) => {
  return (
    <div className='second-section'>
        <Row>
            <Col md={5}>
            <img  src={ section? section.galleries[0].image :''}/>
            <div className='visit'>
            {enLanguage?<> VISIT OUR ABAYA SIZE GUIDE <br/> Take my size now!</>:<> زر صفحة المرشد الخاصة بنا  <br/> حذ مقاسي الان!</>}
               

            </div>
            </Col>
            <Col md={7}>
            <img className='center-img'   src={ section? section.galleries[1].image :''} />
            <div className='text'>
                <div className='title'>
                   
                     {enLanguage?'DISCOVER WHATS ON DISCOUNT ..':'اكتشف المنتجات التي يوجد عليها خصم'}
                </div>
                <div className='button'>
                    
                      {enLanguage?'  SHOP THE SALE':'تسوق بالخصم'}
                </div>

            </div>
            </Col>
        </Row>
        <div className='pink'></div>
    </div>
  )
}

export default SecondSection