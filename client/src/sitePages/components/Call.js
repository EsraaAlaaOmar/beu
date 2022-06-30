import React,{useRef,useEffect} from 'react'
import {RiFileCopyLine} from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
// use ref  function 
function useOutsideAlerter(ref,navigate) {
    useEffect(() =>{
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          
            navigate('/product')
        }
      } 
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      
    }}, [ref]);
  }

const Call = () => {
    const navigate = useNavigate()
     //use ref 
     const wrapperRef = useRef(null);
     useOutsideAlerter(wrapperRef, navigate);
  return (
    <div className='call'>
        <div className='opacity'>
            <div className='content'  ref={wrapperRef}>
                <div className='title'>CALL US</div>
                <div className='phone'>(357)076-0538 <span className='oposite'><RiFileCopyLine /></span></div>
            
            </div>
        </div>
    </div>
  )
}

export default Call