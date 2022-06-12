import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {addQuestion} from'../../store/questionSlice'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
const NewQuestion = () => {
    // yup validation
    let schema = yup.object().shape({
      question:yup.string().required('Question required'),
      questionPriority: yup.number().typeError('Priority must be a number').required(' periority  is required'),
      answer1:yup.string().required('Answer 1 is required'),
      prioritya1: yup.number().typeError('Priority must be a number').required(' periority  is required'),
      answer2:yup.string().required('Answer 2 is required'),
      prioritya2: yup.number().typeError('Priority must be a number').required(' periority  is required'),
      answer3:yup.string().required('Answer 3 is required'),
      prioritya3: yup.number().typeError('Priority must be a number').required(' periority  is required'),
      
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
    const onSubmit= data => {
      
       dispatch(addQuestion({question:data.question,
         priority:data.questionPriority,
         answers : [{
          answer:data.answer1,
          priority:data.prioritya1
        },
        {
          answer:data.answer2,
          priority:data.prioritya2
        },
        {
          answer:data.answer3,
          priority:data.prioritya3
        }
      
      ]}
      ))
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
            <Field type='text' placeholder='Question ..?' name='question'   />
            { touched.question && <div className='mark'>{errors.question ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'question')} /></span>: <FcCheckmark />}</div>}
            </div>
            < div className='input-field  small-input'>
             <Field className='priority' type='number' min={1} placeholder='priority1' name='questionPriority'   />
             { touched.questionPriority && <div className='mark'>{errors.questionPriority ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'questionPriority')} /></span>: <FcCheckmark />}</div>}
             </div>
             {errors.question && touched.question && <><div className='error-text'> {errors.question}</div></> }
            {errors.questionPriority && touched.questionPriority && <><div className='error-text'> {errors.questionPriority}</div></> }
        </div>
        <div className='input-div '>
            <label> Answer 1 </label>
            <div className='input-field  big-input'>
            <Field type='text'  placeholder='Answer 1'  name='answer1'   />
            { touched.answer1 && <div className='mark'>{errors.answer1 ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'answer1')} /></span>: <FcCheckmark />}</div>}
         
            </div>
           < div className='input-field  small-input'>
            <Field className='priority' type='number' min={1} placeholder='priority' name='prioritya1'   />
            { touched.prioritya1 && <div className='mark'>{errors.prioritya1 ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'prioritya1')} /></span>: <FcCheckmark />}</div>}
           
            </div>
            {errors.answer1 && touched.answer1 && <><div className='error-text'> {errors.answer1}</div></> }
            {errors.prioritya1 && touched.prioritya1 && <><div className='error-text'> {errors.prioritya1}</div></> }
        </div>
        <div className='input-div '>
            <label>Answer 2 </label>
            <div className='input-field  big-input'>
            <Field type='text'  name='answer2'  placeholder='Answer'  />
            { touched.answer2 && <div className='mark'>{errors.answer2 ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'answer2')} /></span>: <FcCheckmark />}</div>}
            </div>
            < div className='input-field  small-input'>
            <Field className='priority' type='number' min={1} placeholder='priority' name='prioritya2'   />
            { touched.prioritya2 && <div className='mark'>{errors.prioritya2 ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'prioritya2')} /></span>: <FcCheckmark />}</div>}
            </div>
            {errors.answer2 && touched.answer2 && <><div className='error-text'> {errors.answer2}</div></> }
            {errors.prioritya2 && touched.prioritya2 && <><div className='error-text'> {errors.prioritya2}</div></> }
        </div>
        <div className='input-div'>
            <label>Answer 3</label>
            <div className='input-field  big-input'>
            <Field type='text'  name='answer3'  placeholder='Answer'  />
            { touched.answer3 && <div className='mark'>{errors.answer3 ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'answer3')} /></span>: <FcCheckmark />}</div>}
            </div>
            < div className='input-field  small-input'>
               <Field  className='priority'  type='number' min={1} placeholder='priority' name='prioritya3'   />
               { touched.prioritya3 && <div className='mark'>{errors.prioritya3 ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'prioritya3')} /></span>: <FcCheckmark />}</div>}
            </div>
            {errors.answer3 && touched.answer3 && <><div className='error-text'> {errors.answer3}</div></> }
            {errors.prioritya3 && touched.prioritya3 && <><div className='error-text'> {errors.prioritya3}</div></> }
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