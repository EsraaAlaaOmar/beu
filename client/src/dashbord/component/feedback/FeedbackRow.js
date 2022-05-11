import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const FeedbackRow = () => {
    const [showlist,setShowlist] =useState(false)
    return (
               <tr >
                         
                          <td>USER</td>
                          <td>4</td>
                      
                      
                         
                    <td></td>
                    <td></td>      
                    <td>
                  { showlist && <div className='hiddenlist'>
              
                      <Link to='/dashbord/feedback/view'><div className='border-inlist' >View Feedback</div></Link>
                      <div className='delete-inlist'>Delete</div>
                  </div>}
                  <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span>
              
              </td>
          </tr>
    )
}

export default FeedbackRow