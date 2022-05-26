import React,{useState, useRef, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
// use ref  function  to close when click outside white cox
function useOutsideAlerter(ref,navigate) {
  useEffect(() =>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        
          navigate('/dashbord/feedback')
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    
  }}, [ref]);
}
const ViewFeedBacks = () => {
  const navigate = useNavigate()
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, navigate);
  let location = useLocation()
 const feeddbacks= location.state.feeddback
console.log(location.state)
 const renderedQuestionsandanswers=feeddbacks&& feeddbacks.map(feedback=> {
   return <div className='line'>
            <span>{feedback.question}</span>
            <span className='answer'> {feedback.answer}</span>
          </div>
 })
  return (
    <div className='addpage add-question'>
    <div className='opacity'>
      <div className='add view-feedback' ref={wrapperRef}>
        <h4>Feedback <img  
            src='https://img.freepik.com/free-photo/cheerful-caucasian-girl-keeps-hands-together-near-face-looks-positively-aside-has-no-make-up-healthy-skin-wears-white-sweater-stands-purple-wall-with-blank-space-your-promotion_273609-26101.jpg?w=996' 
            className='user-img'/>
            <span>Josh Brolin</span>
        </h4>
        <div className='feedbaks'>
            <div className='title'> 
                <span>Question</span>
                <span>Selected Answer</span>
            </div>
            <div className='feedbak-table'>
                {/* <div className='line'>
                    <span>Supporting description for the question goes here like aupporting description .</span>
                    <span className='answer'> Answer</span>
                </div>
                <div className='line'>
                    <span>Supporting description for the question goes here like aupporting description .</span>
                    <span className='answer'> Answer</span>
                </div>
                <div className='line'>
                    <span>Supporting description for the question goes here like aupporting description .</span>
                    <span className='answer'> Answer</span>
                </div> */}
               { renderedQuestionsandanswers}

            </div>
            <Link to='/dashbord/feedback'>
              <button className='discard'>Delete</button>
            </Link>
       

        </div>
     
       
            
           
        
      </div>
    </div>

</div>
  )
}

export default ViewFeedBacks