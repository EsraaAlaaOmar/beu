import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {RiCheckboxBlankCircleLine, RiCheckboxCircleFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
const UserLine = ({user,multiple,all}) => {
    const [selected, setSelected] =useState({all})
    const [showlist,setShowlist] =useState(false)
    return (
     
            <tr>
                
          
            <td className='nospace'> {multiple && <div className="check" onClick={()=>setSelected(!selected)}> {selected ? <div className="checked"> <RiCheckboxCircleFill /> </div>: <RiCheckboxBlankCircleLine /> }</div>}
               <img 
                    src={user.img}
                />
            </td>
            
            <td>
                
                <span>{user.name}</span>
            </td>
           
            <td></td>
            <td>{user.address}</td>
            <td></td>
            <td>{user.id}</td>
            <td></td>
            
            <td>
                { showlist && <div className='hiddenlist'>
            
                    <Link to='/dashbord/orders/add'> <div className='border-inlist' >Add Order</div> </Link>
                    <div className='border-inlist' >View cart</div>
                    <div className='border-inlist' >View favourite</div>
                    <div className='border-inlist' >System rate</div>
                    <div className='delete-inlist'>Delete</div>
                </div>}
                <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span>
            
            </td>
        </tr>
    )
}

export default UserLine