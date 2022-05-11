import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const NewQuestion = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
      <div className='add'>
        <h4>New Question</h4>
        <form  onSubmit = {e=>onSubmit(e)}>
        <div className='input-div'>
            <label> Question ..?</label>
            <input type='text' placeholder='Question ..?' name='question'   required/>
             <input className='priority' type='number' min={1} placeholder='priority' name='priority'  required />
        </div>
        <div className='input-div'>
            <label> Answer 1 </label>
            <input type='text'  placeholder='Answer 1'  name='Answer'   required/>
            <input className='priority' type='number' min={1} placeholder='priority' name='priority'  required />
        </div>
        <div className='input-div'>
            <label>Answer 2 </label>
            <input type='text'  name='Answer 2'  placeholder='Answer'  required/>
            <input className='priority' type='number' min={1} placeholder='priority' name='priority'  required />
        </div>
        <div className='input-div'>
            <label>Answer 3</label>
            <input type='text'  name='Answer 3'  placeholder='Answer'  required/>
            <input  className='priority'  type='number' min={1} placeholder='priority' name='priority'  required />
        </div>

        <div className='buttons'>
            
                <input type='submit' className='confrim' value='Confirm' />
            <Link to='/dashbord/questions'>
                  <button className='discard'>Discard</button>
            </Link>
            
        </div>
        </form>
      </div>
    </div>

</div>
  )
}

export default NewQuestion