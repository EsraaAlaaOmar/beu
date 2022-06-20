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
const SellRow = ({sell, setInfoFlashmsg}) => {
    const [showlist,setShowlist] =useState(false)
           // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShowlist);
  return (
             <tr>
        
                      { console.log(sell)}
                        <td>{sell && sell.full_name}</td>
                        <td>{sell && sell.brand_name_english}</td>
                    
                    
                        <td>{sell && sell.city.name}</td>
                        <td>{sell && sell.email}</td>
                        <td>{sell && sell.phone}</td>
                        
                        
                        <td><img src={sell &&`https://thebeauwow.me${sell.logo}`}  /></td>
                        <td>FILES</td>
                        
                  <td>
               { showlist && <div className='hiddenlist' ref={wrapperRef}>
            
                
                    <div className='delete-inlist' onClick={() =>setInfoFlashmsg(true)}>Delete</div>
                </div>}
                <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span>
            
            </td>
        </tr>
  )
}

export default SellRow