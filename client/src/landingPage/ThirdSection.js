import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import ThirdBox from './ThirdBox'

const ThirdSection = ({enLanguage}) => {
    return (
        <div className='third'>
             <div className='title'>
                {enLanguage?'See Whats Popular': 'الاكثر رواجا'}
                
             </div>
             <div className='boxs'>
                <Row>
                    <Col lg={3} md={4} sm={6}>
                       
                            <ThirdBox title={'SUMMER LOOKS'} secondLine={'knockout summer styles'} backgroundColor={'#E1C3AF'} />
                    
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                       
                            <ThirdBox title={'RAMADHAN READY'} secondLine={'whats trending this ramadhan..'} backgroundColor={'#FFE6E1'} />
                    
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                       
                            <ThirdBox title={'Tres chic At Work'} secondLine={'choose from casual comfort to sophisticated elegance ..'} backgroundColor={'#E8D8CC'} />
                    
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                       
                            <ThirdBox title={'STATEMENT PEICES'} secondLine={'fabulous evening looks'} backgroundColor={'#FFC2AF'} />
                    
                    </Col>
                    
                </Row>
             </div>
        </div>
     
    )
}

export default ThirdSection
