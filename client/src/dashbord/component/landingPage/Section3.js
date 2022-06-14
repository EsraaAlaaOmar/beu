import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {BsFillCameraFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SectionImage from './SectionImage'
const Section3 = ({data}) => {
  return (
    <div className="section-3 section">
    <div className='first-line'>{data&&data.title}</div>
    <div className='second-line'>Uploaded Photos Have To Be With Required Sizes</div>
    <div className='images'>
    <Row>
            <Col md={4}>
               <SectionImage img={data&&data.galleries[0]} sectionId={data&&data.id}  />
            </Col>
            <Col md={4}>
                
                <SectionImage img={data&&data.galleries[1]} sectionId={data&&data.id}  imageClass={'big-img'}/>
            
            </Col>
            <Col md={4}>
                <SectionImage img={data&&data.galleries[0]} sectionId={data&&data.id}  />
            </Col>
        </Row>
    </div>
</div>
  )
}

export default Section3