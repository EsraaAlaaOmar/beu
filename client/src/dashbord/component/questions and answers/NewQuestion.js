import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
const NewQuestion = () => {
    // yup validation
    let schema = yup.object().shape({
      question:yup.string().required('Package title is required'),
      questionPriority: yup.number().typeError('Price must be a number'),
      answer1:yup.string().required('Package title is required'),
      prioritya1: yup.number().typeError('Price must be a number'),
      answer2:yup.string().required('Package title is required'),
      prioritya2: yup.number().typeError('Price must be a number'),
      answer3:yup.string().required('Package title is required'),
      prioritya3: yup.number().typeError('Price must be a number'),
      
     });

     // end  yup 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
      question: '',
      questionPriority: '',
        name:'',
        answers : [],
      
     
    })
    const {question,priority, email, password, confirm_password}=formData
    //const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
       
    }
     //remove validation error 
  const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)

  }
  return (
    <div className='addpage add-question'>
    <div className='opacity'>
      <div className='add'>
        <h4>New Question</h4>
        <Formik
             initialValues={{
               
              question: '',
              questionPriority: '',
              answer1:'',
              prioritya1:'',
              answer2:'',
              prioritya2:'',
              answer3:'',
              prioritya3:'',
             
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
               
             
              }}
             
            
           >
 {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
        <div className='input-div'>
            <label> Question ..?</label>
            <div className='input-field  big-input'>
            <Field type='text' placeholder='Question ..?' name='question'   required/>
            </div>
            < div className='input-field  small-input'>
             <Field className='priority' type='number' min={1} placeholder='priority1' name='priority'  required />
             </div>
        </div>
        <div className='input-div '>
            <label> Answer 1 </label>
            <div className='input-field  big-input'>
            <Field type='text'  placeholder='Answer 1'  name='answer1'   required/>
            { touched.answer1 && <div className='mark'>{errors.answer1 ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'answer1')} /></span>: <FcCheckmark />}</div>}
         
            </div>
           < div className='input-field  small-input'>
            <Field className='priority' type='number' min={1} placeholder='priority' name='prioritya1'  required />
            { touched.prioritya1 && <div className='mark'>{errors.prioritya1 ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'prioritya1')} /></span>: <FcCheckmark />}</div>}
           
            </div>
            {errors.answer1 && touched.answer1 && <><div className='error-text'> {errors.answer1}</div></> }
            {errors.prioritya1 && touched.prioritya1 && <><div className='error-text'> {errors.prioritya1}</div></> }
        </div>
        <div className='input-div '>
            <label>Answer 2 </label>
            <div className='input-field  big-input'>
            <Field type='text'  name='answer2'  placeholder='Answer'  required/>
            </div>
            < div className='input-field  small-input'>
            <Field className='priority' type='number' min={1} placeholder='priority' name='prioritya2'  required />
            </div>
        </div>
        <div className='input-div'>
            <label>Answer 3</label>
            <div className='input-field  big-input'>
            <Field type='text'  name='answer3'  placeholder='Answer'  required/>
            </div>
            < div className='input-field  small-input'>
               <Field  className='priority'  type='number' min={1} placeholder='priority' name='prioritya3'  required />
            </div>
        </div>

        <div className='buttons'>
            
                <input type='submit' className='confrim' value='Confirm' />
            <Link to='/dashbord/questions'>
                  <button className='discard'>Discard</button>
            </Link>
            
        </div>
        </form>
         )}
      </Formik>
      </div>
    </div>

</div>
  )
}

export default NewQuestion