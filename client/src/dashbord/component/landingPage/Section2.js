import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {BsFillCameraFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SectionImage from './SectionImage'
const Section2 = ({data}) => {
  return (
    <div className="section-2 section">
        <div className='first-line'>{data&&data.title}</div>
        <div className='second-line'>Uploaded Photos Have To Be With Required Sizes</div>
        <div className='images'>
            <Row>
                <Col lg={8} md={6}>
                <SectionImage img={data&&data.galleries[0]} sectionId={data&&data.id}  />
                </Col>
                <Col lg={4} md={6}>
                <SectionImage img={data&&data.galleries[1]} sectionId={data&&data.id}  imageClass={'small-img'}/>
                
                </Col> 
        </Row>
        </div>
    </div>
  )
}

export default Section2