import React,{useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const OrderRow = ({user}) => {
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
    <td className='align_dir'>
            <img src='https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?w=996' />
            <br/>
            {user.text}
   </td>
    <td>{user.id}</td>
    <td>M</td>
    <td><div className='color' style={{backgroundColor:'red'}}></div></td>
    <td>Delivered</td>
    <td>100$</td>
    <td>visa </td>
    
          <td>
                { showlist && <div className='hiddenlist'>
                   <Link to='/dashbord/products'> <div className='border-inlist' >View Order</div> </Link>
                    <div className='delete-inlist'>Delete</div>
                </div>}
                <span className='icon' onClick={()=>setShowlist(!showlist)}><BsThreeDotsVertical /></span>
            </td>
</tr>
  )
}

export default OrderRow