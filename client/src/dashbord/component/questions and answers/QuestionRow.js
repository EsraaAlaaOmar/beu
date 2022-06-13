import React,{useState,useEffect,useRef} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
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

//react fuction 
const QuestionRow = ({question,setInfoFlashmsg,clearstate}) => {
    const [showlist,setShowlist] =useState(false)
    const dispatch = useDispatch()
           // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShowlist);
  return (
        <tr >
                            
            <td>{question&&question.question}</td>
            <td></td>
            <td>{question.answers[0]&&question.answers[0].answer}</td>
            <td></td>


            
            <td>{question.answers[1]&&question.answers[1].answer}</td>
            <td></td>
            <td>{question.answers[2]&&question.answers[2].answer}</td>    
            <td></td>  
            <td>
           { showlist && <div className='hiddenlist' ref={wrapperRef}>

            <Link to='/dashbord/questions/edite' state={{question:question}}> <div className='border-inlist' onClick={()=>dispatch(clearstate())} >Edit Question</div> </Link>
            <div className='delete-inlist' onClick={()=>setInfoFlashmsg(true)}>Delete</div>
            </div>}
            <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span>

            </td>
        </tr>
  )
}

export default QuestionRow