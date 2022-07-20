import React,{useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import {editeUser} from '../../dashbord/store/authslice'
//formik
import { useField,Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import FlashMsg from '../Flashmsgs/FlashMsg';


const EdieProfile = () => {
      // yup validation
      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      let schema = yup.object().shape({
    
         email: yup.string().email('Enter a Valid Email'),
         name: yup.string(),  
         old_password: yup.string(),
         new_password:yup.string().min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
        
       });
 
       // end  yup 

       const dispatch = useDispatch()
       // redux state
       const {isLoading,error,updated} =useSelector((state)=> state.auth)
       const [showPassword,setShowPassword] = useState(false)
       const [confShowPassword,setConfShowPassword] = useState(false)
       
        // error flashmsg state
     const[flashmsg,setFlashmsg] = useState(true)
   
       const onSubmit= async( data )=> {
       setFlashmsg(true)
       dispatch( editeUser(data))
      
        }
        //remove validation error 
      const removeError=(setFieldValue,setFieldTouched, name)=>{
       setFieldValue(name, '', false);
       setFieldTouched(name, false,false)
   
     }
  return (<>
    <div className='opacity'>
       <div className='edite_box'>
                  
    <Formik
        initialValues={{
            name:'',
            email: '',
            old_password: '',
            new_password:''
            
        
        
        
        }}


        validationSchema={schema}
        onSubmit ={(values)=>{
            onSubmit(values);
            console.log(values);
        
        }}
        

        >
        {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue,values})=> (
        <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}} autocomplete="off">

              
    {flashmsg && error && <FlashMsg
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
               <div className='inputs'>
                <div className='input-div'>
                        <Field type='text' placeholder='Full name'  name="name"autocomplete="off"   />
                        { touched.name && <div className='mark'>{errors.name ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>}
                        {errors.name && touched.name && <><div className='error-text'> {errors.name}</div></> }
                </div>
               <div className='input-div'>
                        <Field type='email' placeholder='@ email'  name="email"autocomplete=''  />
                        { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')} /></span>: <FcCheckmark />}</div>}
                        {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
                </div>
               <div className='input-div'>
               <Field    placeholder='old password' name='old_password' type={showPassword?'text':'password'}   />
                { touched.old_password ? <div className='mark'> 
                    <span onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<GrFormView />:<GrFormViewHide />}</span>
                     </div>:
                        <span className='mark' onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<GrFormView />:<GrFormViewHide />}</span>
                     }
                         {errors.old_password && touched.old_password && <><div className='error-text'> {errors.old_password}</div></> }
                </div>
               <div className='input-div'>
               <Field    placeholder='Confirm Password' name='new_password' type={confShowPassword?'text':'password'}   />
                { touched.password ? <div className='mark'> 
                    <span onClick={()=>{setConfShowPassword(!confShowPassword)}}>{confShowPassword?<GrFormView />:<GrFormViewHide />}</span>
                     </div>:
                        <span className='mark' onClick={()=>{setConfShowPassword(!confShowPassword)}}>{confShowPassword?<GrFormView />:<GrFormViewHide />}</span>
                     }
                         {errors.new_password && touched.new_password && <><div className='error-text'> {errors.new_password}</div></> }
                </div>
             
           
                   </div>
                
                   <input className='butn' type='submit' value='Save' />
            
               <br/>
               <Link  to='/profile/'>
                 <button className='butn discard'>Discard</button>
               </Link>

               {updated && <Navigate to='/profile' />}
           </form>
         
            )}
           </Formik>
          
        </div>
  </div>
  </>
  )
                    };


export default EdieProfile;
