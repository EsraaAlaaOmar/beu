import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Auth/Login'
import Nav from '../reusable/Nav'
import FeedbackRow from '../feedback/FeedbackRow'
import QuestionRow from './QuestionRow'
import { Link, Route, Routes } from 'react-router-dom'
import NewQuestion from './NewQuestion'
import EditeQuestion from './EditeQuestion'

const QuestionswithAnswers = ({setActiveIndex}) => {
   setActiveIndex()
    const {loggedIn} =useSelector((state)=> state.auth)
    return (
      <>
      <Nav first_link='Questions & Answers'  second_link='Feedback' first_link_url='/dashbord/questions'   second_link_url='/dashbord/feedback' />
      
     
           <div className="box">
           <div className="title-text">Questions & Answers</div>
           <div className="table-box no-butons">
           <div className="oposite">
                    
                    <Link to='/dashbord/questions/add'>
                      <button>
                        <span className='big-sizes'> + Add New</span>
                        <span className='small-sizes'> + Add </span>
                       </button>
                    </Link>
                    </div>
                    <br/>
                 <table className='Table'>
                 <thead>
                 <tr className="head">
                    
                     <th>QUESTION</th>
                     <th></th>
                     <th>ANSWER 1</th>
                     <th></th>
                 
                    <th>ANSWER 2</th>
                    <th></th>
                    <th>ANSWER 2</th>
                    <th></th>
                    <th></th>
                     
                 </tr>
                 </thead>
                    <tbody>
                       <QuestionRow />
                    </tbody>
                </table>
                   
             </div>
             <Routes>
             <Route path="/add" element={<NewQuestion />} exact />
             <Route path="/edite" element={<EditeQuestion />} exact />
             </Routes>
  
          </div>
    </>
    )
}

export default QuestionswithAnswers