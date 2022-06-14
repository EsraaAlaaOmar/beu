import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {BsFillCameraFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SectionImage from './SectionImage'
const Section1 = ({data}) => {

 const RenderedImages= data&&data.galleries.map((img)=>{

 return <Col lg={4} md={6}>
  <SectionImage img={img} sectionId={data.id} />

</Col>

 })
  return (
    <div className="section-1 section">
        <div className='first-line'>{data&&data.title}</div>
        <div className='second-line'>Uploaded Photos Have To Be With Required Sizes</div>
        <div className='images'>
          <Row>
          
              {RenderedImages}
   
          
          </Row>
        </div>


    </div>
  )
}

export default Section1 