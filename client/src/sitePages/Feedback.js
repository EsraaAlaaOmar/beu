import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FeedbackRow from './components/FeedbackRow'
import {getClientquestions,addFeedback} from '../dashbord/store/clientSide/clientFeedbackSlice'
import FlashMsg from './Flashmsgs/FlashMsg'
import { Navigate } from 'react-router-dom'

const Feedback = () => {
    const dispatch = useDispatch()
    const [lastfeedback, setLastFeedback] = useState([])
    const {isLoading,error,questions} =useSelector((state)=> state.clientFeedback)
    const {userInfo,loggedIn} =useSelector((state)=> state.auth)
    
  const[Flashmsg,setFlashmsg] = useState(true)
 const addAnswer = (value) => {
var index = lastfeedback.findIndex(q => q.question_id == value.question_id);      
if (index === -1) {
    setLastFeedback([...lastfeedback, value])
} else {
    const newArray = lastfeedback;         
    newArray[index] = value;
    setLastFeedback(newArray) ;
}}

console.log(lastfeedback)
 


    useEffect(() =>{
        dispatch(getClientquestions())
      },[dispatch])

    const renderedQuestions =questions.length>0 ? questions.map((feedback)=> {

        return <FeedbackRow feedback={feedback} addAnswer={addAnswer} />
        }) : 'No Questions Found'
  return (
  <>
   {isLoading ? <div  className="clientloading loading"> <img src='/images/client_loading.gif' /></div>:
    <div className='log_box feedback'>
             {Flashmsg && error && <FlashMsg 
                      title={`${ Object.keys(error)}  Error : ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
           <div className='title'>HOW ARE WE DOING !</div>
           {renderedQuestions}
        
           <button className='submit' onClick={()=>dispatch(addFeedback(lastfeedback))}>Submit </button>
           {userInfo&&!userInfo.is_customer && <Navigate to='/log/login' />}
            {!loggedIn&& <Navigate to='/log/login' />}
      
    </div>
}
</>
  )
}

export default Feedback