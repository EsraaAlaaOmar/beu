import React,{useState,useEffect,useRef} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {clearstate} from '../../store/discountslice'
import{useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

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
const DiscountRow = ({discont,setInfoFlashmsg}) => {
    const dispatch = useDispatch()
    const [showlist,setShowlist] =useState(false)
    // close list when click any where
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,setShowlist);

  return (
    <tr>
            <td className='align_dir'>
           
            <span>{discont.start_at}</span>
            </td>
            <td>{discont.end_at}</td>
            <td>{discont.percentage}</td>
            <td>{discont.code}</td>
            {/* <td>{ discont.avaliabil == true ? <span className='green'>available</span> : <span className='red'>unavailable</span>}</td> */}
             <td>{discont.limit}</td>           
            <td>{discont.ARCHIEVE === "Yes" ? 'archived' : 'unarchived'}</td>
            <td></td>
            <td>
           { showlist && <div className='hiddenlist' ref={wrapperRef}>
               <Link to='/dashbord/discount/edite' state={{discont:discont}}> <div className='border-inlist'onClick={() =>dispatch(clearstate())}>Update Discount</div></Link>
                <div className='delete-inlist' onClick={() =>setInfoFlashmsg(true)}>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span>
            </td>
    </tr>
  )
}

export default DiscountRow