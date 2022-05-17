import React,{useState,useEffect,useRef} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'


// use ref  function 
function useOutsideAlerter(ref,setShowlist) {
  useEffect(() =>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
          setShowlist(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    
  }}, [ref]);
}
const OrderRow = ({user}) => {
    const [showlist,setShowlist] =useState(false)
       // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShowlist);
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
                { showlist && <div className='hiddenlist' ref={wrapperRef}>
                   <Link to='/dashbord/products'> <div className='border-inlist' >View Order</div> </Link>
                    <div className='delete-inlist'>Delete</div>
                </div>}
                <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span>
            </td>
</tr>
  )
}

export default OrderRow