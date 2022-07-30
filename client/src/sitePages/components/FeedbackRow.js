import React from 'react'
import { Col, Row } from 'react-bootstrap'

const FeedbackRow = () => {
  return (
    <div>
        <div>question</div>
        <Row>
            <Col>
               <div className='answer'>answer</div>
            </Col>
            <Col>
               <div className='answer'>answer</div>
            </Col>
            <Col>
               <div className='answer'>answer</div>
            </Col>
        </Row>
    </div>
  )
}

export default FeedbackRow