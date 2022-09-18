import React,{useState} from 'react'
import { Link, Navigate,useNavigate } from 'react-router-dom'
import {FiCheckSquare} from 'react-icons/fi'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import {ImCheckboxUnchecked} from 'react-icons/im'
import {login, clearstate} from '../../dashbord/store/authslice'
import { useSelector, useDispatch } from 'react-redux';

//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
import FlashMsg from '../Flashmsgs/FlashMsg';

const Login = () => {
  const navigate = useNavigate();
        // yup validation
        let schema = yup.object().shape({
   
            email: yup.string().email('Enter a Valid Email').required("Email is required"),
            password: yup.string().required('password is required').min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
           
          });
     
          // end  yup 
    const {isLoading,error,userInfo} =useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    const [showPassword,setShowPassword] = useState(false)
  // error flashmsg state
  const[flashmsg,setFlashmsg] = useState(true)

    const[check,setCheck]=useState(false)
    const onSubmit= async( data )=> {
        setFlashmsg(true)
        dispatch( login({...data, remember:check}))
       
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
  window.onpopstate = () => {
    navigate(-2);
  }
    return (
      <>
            {isLoading ? 
    <div  className="clientloading loading"> <img src='/images/client_loading.gif' /></div> 
    :
    
    <div className='log_box'>
    
    {flashmsg && error && <FlashMsg 
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
    <div className='title'>Login</div>

    <Formik
 initialValues={{
    email: '',
    password: '',
   
   
   
  }}


  validationSchema={schema}
  onSubmit ={(values)=>{
    onSubmit(values);
    console.log(values);
 
  }}
 

>
{({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
<form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
    {/* <input placeholder='@ email' type='email' />
    <br/> */}
    <div className='input-div'>
    <Field type='email' placeholder='handel@example.com'  name="email" autoComplete="off"   />
           { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')} /></span>: <FcCheckmark />}</div>}
           {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
    </div>
    
    <div className='input-div'>
               <Field    placeholder='●●●●●●●' name='password' type={showPassword?'text':'password'}   />
                { touched.password ? <div className='mark'> 
                    <span onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<GrFormView />:<GrFormViewHide />}</span>
                     </div>:
                        <span className='mark' onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<GrFormView />:<GrFormViewHide />}</span>
                     }
                         {errors.password && touched.password && <><div className='error-text'> {errors.password}</div></> }
    </div>
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
    
    <input className='submit' type='submit' value='Login' />

    

</form>
)}
    </Formik>
    {userInfo&&userInfo.is_staff && <Navigate to='/dashbord' />}
    {userInfo&&userInfo.is_customer && navigate(-1)} 
<div className='option'  onClick={()=>dispatch(clearstate())}>
        <Link to='/log/sign'>
        Don't have Account ? Signup
        </Link>
</div>
</div>}
      </>
       
          
    )
}

export default Login