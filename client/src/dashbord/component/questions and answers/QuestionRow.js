import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const QuestionRow = () => {
    const [showlist,setShowlist] =useState(false)
  return (
        <tr >
                            
            <td>USER</td>
            <td></td>
            <td>4</td>
            <td></td>


            
            <td>e</td>
            <td></td>
            <td>e</td>    
            <td></td>  
            <td>
            { showlist && <div className='hiddenlist'>

            <Link to='/dashbord/questions/edite'> <div className='border-inlist' >Edit Question</div> </Link>
            <div className='delete-inlist'>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span>

            </td>
        </tr>
  )
}

export default QuestionRow