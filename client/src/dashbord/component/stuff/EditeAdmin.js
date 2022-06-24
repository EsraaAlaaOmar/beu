import React,{useState} from 'react'
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {editeAdmin} from '../../store/adminSlice'
import { FcCheckmark } from "react-icons/fc";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { useField,Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';

const EditeAdmin = ({setFlashmsg}) => {
     // yup validation
   
     let schema = yup.object().shape({
   
        email: yup.string().email('Enter a Valid Email'),
        name: yup.string().required('Name is required'),    
        password: yup.string().min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
        confirm_password:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
      
       
      });

      // end  yup 
  let location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {updated} =useSelector((state)=> state.admins)
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    is_superuser:location.state.user.is_superuser,
   
  })
  const {name, email, password,is_superuser, confirm_password}=formData
  const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
  const onCheckChange=e=>setFormData({...formData, [e.target.name]: e.target.checked})
  console.log(is_superuser)
  const onSubmit= async (values) => {

    setFlashmsg(true)
    
       dispatch(editeAdmin({...values,is_superuser:is_superuser}))
    
      
  
}
      //remove validation error 
      const removeError=(setFieldValue,setFieldTouched, name)=>{
        setFieldValue(name, '', false);
        setFieldTouched(name, false,false)
    
      }
  return (
    <div className='addpage'>
        <div className='opacity'>
          <div className='add'>
            <h4>Edit Employee</h4>
            <Formik
             initialValues={{
               
                
                name:location.state.user.name,
                email:location.state.user.email,
                oldEmail:location.state.user.email,
                password:location.state.user.password,
                confirm_password:location.state.user.confirm_password,
                admin_id:location.state.user.id,
                id:location.state.user.id
            
             
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
               
             
              }}
             
            
           >
 {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
               <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
               <div className='input-div'>
                   <label> Stuff Name</label>
                   < div className='input-field  '>
                   <Field    placeholder='Stuff Name' name='name'   />
                   { touched.name && <div className='mark'>{errors.name ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>}
               </div>
               {errors.name && touched.name && <><div className='error-text'> {errors.name}</div></> } 
               </div>
   
   
               <div className='input-div'>
                   <label> User Email </label>
                   < div className='input-field  '>
                   <Field    placeholder='Stuff Email' name='email'   />
                   { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')} /></span>: <FcCheckmark />}</div>}
               </div>
               {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> } 
                  
               </div>
            
               
               <div className='input-div'>
                   <label>Password </label>
                   < div className='input-field  '>
                   <Field    placeholder='●●●●●●●' name='password' type={showPassword?'text':'password'}   />
                   { touched.password ? <div className='mark'> 
                       <span onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<GrFormView />:<GrFormViewHide />}</span>
                    {errors.password ?  
                        <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'password')} /></span>
                        : <FcCheckmark />}
                        </div>:
                           <span className='mark' onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<GrFormView />:<GrFormViewHide />}</span>
                        }
                     
               </div>
               {errors.password && touched.password && <><div className='error-text'> {errors.password}</div></> } 
                
               </div>
               <div className='input-div'>
                   <label>Confirm Password </label>
                      < div className='input-field  '>
                   <Field    placeholder='●●●●●●●' name='confirm_password' type={showConfirmPassword?'text':'password'}   />
                   { touched.password ? <div className='mark'> 
                       <span onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}>{showConfirmPassword?<GrFormView />:<GrFormViewHide />}</span>
                    {errors.password ?  
                        <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'confirm_password')} /></span>
                        : <FcCheckmark />}
                        </div>:
                           <span className='mark' onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}>{showConfirmPassword?<GrFormView />:<GrFormViewHide />}</span>
                        }
                     
               </div>
               {errors.confirm_password && touched.confirm_password && <><div className='error-text'> {errors.confirm_password}</div></> } 
                
               </div>
               <div className='input-div'>
                  
                  <input type='checkbox' className='checkbox' placeholder='Stuff Name' name='is_superuser' value={is_superuser} onChange={e=>onCheckChange(e)} />
                  <label className='check-label'>superuser</label>        
              </div>
                 
               <div className='buttons'>
                   
                       <input type='submit' className='confrim' value='Confirm' />
                   <Link to='/dashbord/stuff'>
                         <button className='discard'>Discard</button>
                   </Link>
                   
               </div>
               </form>
 )}
 </Formik>
            {updated && <Navigate to='/dashbord/stuff' />}
    

          </div>
        </div>

    </div>
  )
}

export default EditeAdmin

