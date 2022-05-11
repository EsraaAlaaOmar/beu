import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
const SellRow = () => {
    const [showlist,setShowlist] =useState(false)
  return (
             <tr>
                       
                        <td>USER</td>
                        <td>BUSINESS NAME</td>
                    
                    
                        <td>ADDRESS</td>
                        <td>EMAIL</td>
                        <td>PHONE NUMBER</td>
                        
                        
                        <td>LOGO</td>
                        <td>FILES</td>
                        
                  <td>
                { showlist && <div className='hiddenlist'>
            
                
                    <div className='delete-inlist'>Delete</div>
                </div>}
                <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span>
            
            </td>
        </tr>
  )
}

export default SellRow