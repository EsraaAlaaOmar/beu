import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap'

const FeedbackRow = ({feedback,addAnswer}) => {
    const [activeIndex,setActiveIndex]=useState()
    // const {answer_id} = answer
    // const selectAnswer =(value)=> setAnswer({...answer, 'answer_id': value})
    const renderedAnswers =feedback.answers.map((questAnswer,index) =>{
        const  className = activeIndex === index ? 'active' : '';  
          return<Col>
            <div className={`answer ${className}`} onClick={()=>{setActiveIndex(index);addAnswer( {"question_id":feedback.id,"answer_id":questAnswer.id})}}>{questAnswer.answer}</div>
         </Col>})
  return (
    <div className='feedback-row'>
        <div className='question'>{feedback.question}</div>
        <Row>
          {renderedAnswers}
        </Row>
    </div>
  )
}

export default FeedbackRow