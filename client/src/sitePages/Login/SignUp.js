import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import {userSignUp, clearstate} from '../../dashbord/store/authslice'
import { useDispatch, useSelector } from 'react-redux';
import FlashMsg from '../Flashmsgs/FlashMsg';

//formik
import { useField,Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';




const SignUp = () => {

         // yup validation
         const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
         let schema = yup.object().shape({
       
            email: yup.string().email('Enter a Valid Email').required("Email is required"),
            name: yup.string().required('Name is required'),  
            password: yup.string().required('password is required').min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
            confirm_password:yup.string().required('confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
           
          });
    
          // end  yup 

    const dispatch = useDispatch()
    // redux state
    const {error} =useSelector((state)=> state.auth)
    const [showPassword,setShowPassword] = useState(false)
    const [confShowPassword,setConfShowPassword] = useState(false)
    
     // error flashmsg state
  const[flashmsg,setFlashmsg] = useState(true)

    const onSubmit= async( data )=> {
    setFlashmsg(true)
    dispatch( userSignUp(data))
   
     }
     //remove validation error 
   const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)

  }
    return (
        <div className='log_box'>
            <div className='title'>SIGN UP</div>
           
    <Formik
        initialValues={{
            name:'',
            email: '',
            password: '',
            confirm_password:''
            
        
        
        
        }}


        validationSchema={schema}
        onSubmit ={(values)=>{
            onSubmit(values);
            console.log(values);
        
        }}
        

        >
        {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
        <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">

              
    {flashmsg && error && <FlashMsg
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
                <div className='input-div'>
                        <Field type='text' placeholder='Full name'  name="name" autoComplete="off"   />
                        { touched.name && <div className='mark'>{errors.name ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>}
                        {errors.name && touched.name && <><div className='error-text'> {errors.name}</div></> }
                </div>
               <div className='input-div'>
                        <Field type='email' placeholder='@ email'  name="email" autoComplete="off"   />
                        { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')} /></span>: <FcCheckmark />}</div>}
                        {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
                </div>
               <div className='input-div'>
               <Field    placeholder='Password' name='password' type={showPassword?'text':'password'}   />
                { touched.password ? <div className='mark'> 
                    <span onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<GrFormView />:<GrFormViewHide />}</span>
                     </div>:
                        <span className='mark' onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<GrFormView />:<GrFormViewHide />}</span>
                     }
                         {errors.password && touched.password && <><div className='error-text'> {errors.password}</div></> }
                </div>
               <div className='input-div'>
               <Field    placeholder='Confirm Password' name='confirm_password' type={confShowPassword?'text':'password'}   />
                { touched.password ? <div className='mark'> 
                    <span onClick={()=>{setShowPassword(!confShowPassword)}}>{confShowPassword?<GrFormView />:<GrFormViewHide />}</span>
                     </div>:
                        <span className='mark' onClick={()=>{setConfShowPassword(!confShowPassword)}}>{confShowPassword?<GrFormView />:<GrFormViewHide />}</span>
                     }
                         {errors.confirm_password && touched.confirm_password && <><div className='error-text'> {errors.confirm_password}</div></> }
                </div>
               <div className='log_privacy'>
               By signing up, you agree to our <Link to='/'><span> privacy policy <span> &#38;  </span> terms of conditions</span></Link>
               </div>
               {/* <Link to='/log/phoneconfirmation'> */}
                   <input className='submit' type='submit' value='Signup' />
           
               

           </form>
            )}
           </Formik>
           <div className='option' onClick={()=>dispatch(clearstate())}>
                <Link to='/log/login'>
                Have Account ? LOGIN
                </Link>
           </div>
        </div>
    )
}

export default SignUp
