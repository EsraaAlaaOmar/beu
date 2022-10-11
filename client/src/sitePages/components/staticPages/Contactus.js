import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//formik
import { useField,Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai";
import {contactus} from '../../../dashbord/store/clientSide/clientContactslice'
import { useDispatch, useSelector } from 'react-redux';
import FlashMsg from '../../Flashmsgs/FlashMsg';
const Contactus = () => {

     // yup validation
     const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
     let schema = yup.object().shape({
        phone:yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),    
        email: yup.string().email('Enter a Valid Email').required("Email is required"),
         name: yup.string().required('Name is required'),  
         content: yup.string().required('Problem is required'),  
         
      
       
      });

      // end  yup
    const dispatch = useDispatch()
    
    const { error,isLoading, created } = useSelector((state) => state.clientContact)
    

      const onSubmit= async( data )=> {
        dispatch( contactus(data))
        setFlashmsg(true)
       
    }
    
  // error flashmsg state
    const [flashmsg, setFlashmsg] = useState(true)
    
       //remove validation error 
   const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)

  }
  return (
      <>
        {isLoading ? 
          <div  className="clientloading loading"> <img src='/images/client_loading.gif' /></div> 
      :
      <div className='log_box'>
      <div className='title'>Contact Us</div>
      <Formik
  initialValues={{
              name:'',
              email: '',
              phone: '',
              content:''   
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
                            
{flashmsg && created && <FlashMsg 
              title={`Your  Problem sent successfully`}
              img={'/images/msgIcons/success.svg'}
              setFlashmsg={setFlashmsg}

              icontype='success-icon'

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
              <Field type='tel' placeholder='Phone Number'  name="phone" autoComplete="off"   />
              { touched.phone && <div className='mark'>{errors.phone ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'phone')} /></span>: <FcCheckmark />}</div>}
              {errors.phone && touched.phone && <><div className='error-text'> {errors.phone}</div></> }
                  </div>
                  <Field as='textarea' className='textarea-contact' placeholder='Feel free to tell us about the problem ..'  name="content" autoComplete="off"   />
          <div className='input-div'>
            
              { touched.content && <div className='mark'>{errors.content ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'content')} /></span>: <FcCheckmark />}</div>}
              {errors.content && touched.content && <><div className='error-text'> {errors.content}</div></> }
          </div>
         
   
     
         {/* <Link to='/log/phoneconfirmation'> */}
             <input className='submit' type='submit' value='Send' />
     
         

     </form>
      )}
     </Formik>
     
    
</div>
}
      </>
      
    )
};

export default Contactus;
