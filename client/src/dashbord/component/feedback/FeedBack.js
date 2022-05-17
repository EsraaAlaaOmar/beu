import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login'
import Nav from '../reusable/Nav'
import FeedbackRow from './FeedbackRow'
import ViewFeedBacks from './ViewFeedBacks'

const FeedBack = ({setActiveIndex}) => {
   setActiveIndex()
const {loggedIn} =useSelector((state)=> state.auth)
  return (
    <>
    <Nav first_link='Feedback' second_link='Questions & Answers' first_link_url='/dashbord/feedback' second_link_url='/dashbord/questions'/>
    
         <div className="box">
            <div className="title-text">Feedback</div>
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
                     <FeedbackRow />
                  </tbody>
              </table>
                 
           </div>
           <Routes>
             <Route path="/view" element={<ViewFeedBacks />} exact />
          </Routes>

        </div> 
  </>
  )
}

export default FeedBack