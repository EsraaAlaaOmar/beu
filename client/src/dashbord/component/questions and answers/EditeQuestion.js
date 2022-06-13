import React,{useState,useRef, useEffect} from 'react'
import { Link, Navigate,useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {updateQuestion} from'../../store/questionSlice'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';




// use ref  function  to close when click outside white cox
function useOutsideAlerter(ref,navigate) {
  useEffect(() =>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        
          navigate('/dashbord/questions')
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    
  }}, [ref]);
}


//react function 
const EditeQuestion = () => {
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
     let location = useLocation()
    const dispatch = useDispatch()
    const {updated } =useSelector((state)=> state.question)
    const [formData, setFormData] = useState({
   
      
     
    })
    const {question,priority, email, password, confirm_password}=formData
    //const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    console.log(location.state)
    const onSubmit= data => {
      
       dispatch(updateQuestion({question:data.question,
        question_id:location.state.question.id,
         priority:data.questionPriority,
         update_answers : [{
          answer_id:data.answer1_id,
          answer:data.answer1,
          priority:data.prioritya1
        },
        {
          answer_id:data.answer2_id,
          answer:data.answer2,
          priority:data.prioritya2
        },
        {
          answer_id:data.answer3_id,
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
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, navigate);
  return (
    <div className='addpage add-question'>
    <div className='opacity'>
      <div className='add' ref={wrapperRef}>
        <h4>Edite Question</h4>
        {console.log( location.state.question)}
        <Formik
             initialValues={{
              
              question: location.state.question.question,
              questionPriority:location.state.question.questionPriority,
              answer1_id:location.state.question.answers[0].id,
              answer1:location.state.question.answers[0].answer
                      
                      ,
              prioritya1:location.state.question.prioritya1
                         ,
              answer2_id:location.state.question.answers[1].id,
              answer2:location.state.question.answers[1].answer
                 
              ,
              prioritya2: location.state.question.prioritya2
                         ,
              answer3_id:location.state.question.answers[2].id,
              answer3:location.state.question.answers[2].answer ,
              prioritya3:location.state.question.prioritya3,
             
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
               
             
              }}
             
            
           >
 {({errors, touched,setFieldTouched,values,  handleSubmit,setFieldValue})=> (
  
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
              { console.log(values)}
              { console.log(location.state.question)}
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
        {updated && <Navigate to='/dashbord/questions' />}
        </form>
         )}
      </Formik>
      </div>
    </div>

</div>
  )
}


export default EditeQuestion

