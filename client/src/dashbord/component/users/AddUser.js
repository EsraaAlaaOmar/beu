import React,{useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {userRegister} from '../../store/authslice'
import { FcCheckmark } from "react-icons/fc";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { useField,Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';

const AddUser = ({setFlashmsg}) => {

     // yup validation
   
     let schema = yup.object().shape({
   
        email: yup.string().email('Enter a Valid Email').required("Email is required"),
        name: yup.string().required('Name is required'),    
        password: yup.string().required('password is required').min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
        confirm_password:yup.string().required('confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
      
       
      });

      // end  yup 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {added} =useSelector((state)=> state.users)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password:'',
     
    })
    const {name, email, password, confirm_password}=formData
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async data => {
        
        setFlashmsg(true)
     
           dispatch(userRegister(data))
           
          
        
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
        <h4>New User</h4>
        <Formik
             initialValues={{
               
                
                name: '',
                email: '',
                password: '',
                confirm_password:'',
            
             
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
               
             
              }}
             
            
           >
 {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
        <div className='input-div'>
            <label> User Name</label>
            < div className='input-field  '>
                <Field    placeholder='Stuff Name' name='name'   />
                { touched.name && <div className='mark'>{errors.name ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>}
            </div>
            {errors.name && touched.name && <><div className='error-text'> {errors.name}</div></> } 
          
           
        </div>
        <div className='input-div'>
            <label> User Email </label>
            < div className='input-field  '>
                <Field    placeholder='Stuff Name' name='email'   />
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
                { touched.confirm_password ? <div className='mark'> 
                    <span onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}>{showConfirmPassword?<GrFormView />:<GrFormViewHide />}</span>
                 {errors.confirm_password ?  
                     <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'confirm_password')} /></span>
                     : <FcCheckmark />}
                     </div>:
                        <span className='mark' onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}>{showConfirmPassword?<GrFormView />:<GrFormViewHide />}</span>
                     }
                  
            </div>
            {errors.confirm_password && touched.confirm_password && <><div className='error-text'> {errors.confirm_password}</div></> }
        </div>

        <div className='buttons'>
            
                <input type='submit' className='confrim' value='Confirm' />
            <Link to='/dashbord/users'>
                  <button className='discard'>Discard</button>
            </Link>
            
        </div>
        </form>
    )}
     </Formik>
        {added && <Navigate to='/dashbord/users' />}
      </div>
    </div>

</div>
  )
}

export default AddUser