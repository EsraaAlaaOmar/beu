import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FeedbackRow from './components/FeedbackRow'
import {getClientquestions} from '../dashbord/store/clientSide/clientFeedbackSlice'

const Feedback = () => {
    const dispatch = useDispatch()
    const {isLoading,error,questions} =useSelector((state)=> state.clientFeedbackslice)
    useEffect(() =>{
        dispatch(getClientquestions())
      },[dispatch])
    const renderedQuestions = questions&&questions.length>0 ? questions.map(feedback=>  <FeedbackRow feedback={feedback}  />) : 'No Questions Found'
  return (
  
    <div className='log_box feedback'>
           <div className='title'>HOW ARE WE DOING !</div>
           <FeedbackRow />
        
    </div>
  )
}

export default Feedback