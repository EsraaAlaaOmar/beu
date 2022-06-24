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


const TableRow = ({user, setInfoFlashmsg}) => {
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
    <td>{user.content}</td>
    <td>No Response</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    
    <td>
      { showlist && <div className='hiddenlist' ref={wrapperRef}>
            <div className='border-inlist' onClick={() =>setInfoFlashmsg(true)}>Add Response</div>
            <div className='delete-inlist'  onClick={() =>setInfoFlashmsg(true)}>Delete</div>
        </div>}
        <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span></td>
</tr>
  )
}

export default TableRow