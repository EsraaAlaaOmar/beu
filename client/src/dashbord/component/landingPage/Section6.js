import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {BsFillCameraFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SectionImage from './SectionImage'
const Section6 = ({data}) => {
  return (
    <div className="section-6 section">
        <div className='first-line'>Section 6 # Mood Board</div>
        <div className='second-line'>Uploaded Photos Have To Be With Required Sizes</div>
        <div className='images'>
          <Row>
          
              <Col lg={3} md={6}>
                 <SectionImage img={data&&data.galleries[0]} sectionId={data&&data.id}  />
              </Col>
              <Col lg={5} md={6}>
              <SectionImage img={data&&data.galleries[1]} sectionId={data&&data.id}  />
              </Col>
              <Col lg={3} md={6}>
              <SectionImage img={data&&data.galleries[2]} sectionId={data&&data.id}  />
            
              </Col>
          
          </Row>
        </div>


    </div>
  )
}

export default Section6