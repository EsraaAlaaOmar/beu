import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ViewFeedBacks = () => {
    const [formData, setFormData] = useState({
        question: '',
        priority: '',
        name:'',
        answers : [],
      
     
    })
    const {question,priority, email, password, confirm_password}=formData
    //const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
       
    }
  return (
    <div className='addpage add-question'>
    <div className='opacity'>
      <div className='add view-feedback'>
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
                <div className='line'>
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
                </div>

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