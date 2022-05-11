import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const StuffRow = ({user}) => {
    const [showlist,setShowlist] =useState(false)
  return (
    
    <tr>
    <td className='align_dir'>
        <img 
            src={user.img}
        />
        <span>{user.name}</span>
    </td>
    <td>{user.id}</td>
    <td>{user.email}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
     <td>
        { showlist && <div className='hiddenlist'>
                <Link to='/dashbord/products'><div className='border-inlist'>Edit Employee</div> </Link>
                <div className='delete-inlist'>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span>
            
     </td>
</tr>
  )
}

export default StuffRow