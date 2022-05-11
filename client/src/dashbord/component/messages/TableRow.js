import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
const TableRow = ({user}) => {
    const [showlist,setShowlist] =useState(false)
  return (
    <tr>
    <td className='align_dir'>
        <img 
            src={user.img}
        />
        <span>{user.name}</span>
    </td>
    <td>{user.content}</td>
    <td>{user.text}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    
    <td>
       { showlist && <div className='hiddenlist'>
            <div className='border-inlist'>Add Response</div>
            <div className='delete-inlist'>Delete</div>
        </div>}
        <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span></td>
</tr>
  )
}

export default TableRow