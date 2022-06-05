import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FiCheckSquare} from 'react-icons/fi'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai";
import {ImCheckboxUnchecked} from 'react-icons/im'
import {login} from '../../dashbord/store/authslice'
import { useSelector, useDispatch } from 'react-redux';

//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';

const Login = () => {

        // yup validation
        let schema = yup.object().shape({
   
            email: yup.string().email('Enter a Valid Email').required("Email is required"),
            password: yup.string().min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
           
          });
    
          // end  yup 
    const {sizsList,error,added,updated,deleted , isLoading} =useSelector((state)=>state.sizes)
    const dispatch = useDispatch()
    const[check,setCheck]=useState(false)
    const onSubmit= async( data )=> {
        
        dispatch( login(data))
       
        // setShowAlert(true)
        const timeId = setTimeout(() => {
         // After 3 seconds set the showAlert value to false
        //  setShowAlert(false)
        //  setFlashmsg(true)
         // dispatch(clearstate())
       }, 5000)
   
       return () => {
         clearTimeout(timeId)
       }
 }
   //remove validation error 
   const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)

  }

    return (
        <div className='log_box'>
                <div className='title'>Login</div>

                <Formik
             initialValues={{
                email: '',
                password: '',
                remember:false
               
               
              }}
            
            
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
              }}
             
            
           >
            {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                {/* <input placeholder='@ email' type='email' />
                <br/> */}
                <Field type='email' placeholder='handel@example.com'  name="email" autoComplete="off"   />
                       { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')} /></span>: <FcCheckmark />}</div>}
                       {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
               
                <input placeholder='Password' type='password' />
                <div className='action'>
                   <span className='remember' onClick={()=>setCheck(!check)}>
                       <span className='icon'>{ check ?<FiCheckSquare /> :<ImCheckboxUnchecked />}</span>
                       Remember Me !
                       </span> 
                       <Link to='/log/forget'>
                       <span className='oposite'>
                       Forget Password !
                       </span>
                       </Link>
                </div>
              
                <div className='log_privacy'>
                By signing up, you agree to our <br/><Link to='/'><span> privacy policy <span> &#38;  </span> terms of conditions</span></Link>
                </div>
                <Link to='/'>
                <input className='submit' type='submit' value='Login' />
                </Link>
                

            </form>
            )}
                </Formik>
            <div className='option'>
                    <Link to='/log/sign'>
                    Don't have Account ? Signup
                    </Link>
            </div>
    </div>
    )
}

export default Login
