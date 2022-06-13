import React,{useEffect,useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login'
import Nav from '../reusable/Nav'
import FeedbackRow from './FeedbackRow'
import ViewFeedBacks from './ViewFeedBacks'
 
import { useSelector, useDispatch } from 'react-redux';
import {getFeedbacks} from'../../store/feedbackSlice'
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
const FeedBack = ({setActiveIndex}) => {
   setActiveIndex()
   const dispatch = useDispatch()
   useEffect(() =>{
      dispatch(getFeedbacks())
    
  
    },[dispatch])

   //info flashmsg state
   const[infoflashmsg,setInfoFlashmsg] = useState(false)


    const {feedbackList, isLoading, error } =useSelector((state)=> state.feedback)
    const renderedFeedbackrow = feedbackList.map((feedback)=><FeedbackRow setInfoFlashmsg={setInfoFlashmsg} feedback={feedback}  key={feedback.id} />)
  return (
    <>

    <Nav first_link='Feedback' second_link='Questions & Answers' first_link_url='/dashbord/feedback' second_link_url='/dashbord/questions'/>
    {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
         <div className="box">
            <div className="title-text">Feedback</div>
              {infoflashmsg && <FlashMsg 
                title="Delete Still Under Development !"
                img={'/images/msgIcons/info.svg'}
                setFlashmsg={setInfoFlashmsg}
                icontype='info-icon'
                />}
            <div className="table-box no-butons">
                  <table className='Table'>
                  <thead>
                  <tr className="head">
                     
                      <th>USER</th>
                      <th>NUM OF ANSWERED QUESTION</th>
                  
                  
                     <th></th>
                     <th></th>
                     <th></th>
                      
                  </tr>
                  </thead>
                  <tbody>
                    {renderedFeedbackrow}
                  </tbody>
              </table>
                 
           </div>
           <Routes>
             <Route path="/view" element={<ViewFeedBacks setInfoFlashmsg={setInfoFlashmsg} />} exact />
          </Routes>

        </div> }
  </>
  )
}

export default FeedBack