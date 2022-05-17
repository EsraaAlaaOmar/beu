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
const QuestionRow = () => {
    const [showlist,setShowlist] =useState(false)

           // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShowlist);
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
           { showlist && <div className='hiddenlist' ref={wrapperRef}>

            <Link to='/dashbord/questions/edite'> <div className='border-inlist' >Edit Question</div> </Link>
            <div className='delete-inlist'>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span>

            </td>
        </tr>
  )
}

export default QuestionRow