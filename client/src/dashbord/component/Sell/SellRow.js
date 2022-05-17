import React,{useState,useEffect,useRef} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'


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
const SellRow = () => {
    const [showlist,setShowlist] =useState(false)
           // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShowlist);
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
               { showlist && <div className='hiddenlist' ref={wrapperRef}>
            
                
                    <div className='delete-inlist'>Delete</div>
                </div>}
                <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span>
            
            </td>
        </tr>
  )
}

export default SellRow