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

const StuffRow = ({user}) => {
    const [showlist,setShowlist] =useState(false)
           // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShowlist);
  return (
    
    <tr>
    <td className='align_dir'>
        <img 
            src={user.avatar}
        />
        <span>{user.name}</span>
    </td>
    <td>{user.is_superuser? 'superuser' : 'not superuser'}</td>
    <td>{user.email}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
     <td>
        { showlist && <div className='hiddenlist'>
                <Link to='/dashbord/stuff/edite' state={{ user: user }}><div className='border-inlist'>Edit Employee</div> </Link>
                <div className='delete-inlist'>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span>
            
     </td>
</tr>
  )
}

export default StuffRow