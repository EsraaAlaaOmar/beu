
import React, { useState } from 'react'
import { Link, useNavigate,useLocation, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {editeCountry} from '../../store/Address/counteriesSlice'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';

const EditeCountry = ({setFlashmsg}) => { // yup validation
    let location = useLocation()
    let schema = yup.object().shape({
      name:yup.string().required('Country name required'),
      code:yup.string().max(5,'phone code max 5 characters').required('country code required'),
      phone_code: yup.string().max(5,'phone code max 5 characters').required('Phone code required'), 
      phone_length:yup.number().typeError('phone length must be a number'),
      
     });

     // end  yup 
     const {countryupdated} =useSelector((state)=>state.countries)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: location.state.country.name,
        code: location.state.country.code,
        phone_code :location.state.country.phone_code, 
        phone_length:location.state.country.phone_length
      
    })
    console.log(location.state.country.name)
    const {name, code,phone_code, phone_length}=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= values => {
       
       dispatch(editeCountry(values))
       setFlashmsg(true)
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
          <h4>Edite Country</h4>
          <Formik
             initialValues={{
                country_id:location.state.country.id,
                oldName:location.state.country.name,
                oldCode:location.state.country.code,
                oldPhone_code:location.state.country.phone_code,
                name: location.state.country.name,
                code: location.state.country.code,
                phone_code :location.state.country.phone_code, 
                phone_length:location.state.country.phone_length,
                cities:location.state.country.cities
             
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
               
             
              }}
             
            
           >
 {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
            <div className='input-div'>
                <label>Country</label>
                <div className='input-field'>
                   <Field type='text' placeholder='Country' name='name'  />
                   { touched.name && <div className='mark'>{errors.name ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>}
                </div>
                {errors.name && touched.name && <><div className='error-text'> {errors.name}</div></> }
            </div>
            <div className='input-div'>
                <label>country code</label>
                <div className='input-field'>
                    <Field type='text' placeholder='Country code' name='code'  />
                    { touched.code && <div className='mark'>{errors.code ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'code')} /></span>: <FcCheckmark />}</div>}
                </div>
                {errors.code && touched.code && <><div className='error-text'> {errors.code}</div></> }
            </div>
            <div className='input-div'>
                <label>Phone Code</label>
                <div className='input-field'>
                    <Field type='text' placeholder='Phone Code' name='phone_code'  />
                    { touched.phone_code && <div className='mark'>{errors.phone_code ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'phone_code')} /></span>: <FcCheckmark />}</div>}
                </div>
                {errors.phone_code && touched.phone_code && <><div className='error-text'> {errors.phone_code}</div></> }
            </div>
            <div className='input-div'>
                <label>phone length</label>
                <div className='input-field'>
                   <Field type='text' placeholder='phone length' name='phone_length' />
                   { touched.phone_code && <div className='mark'>{errors.phone_code ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'phone_code')} /></span>: <FcCheckmark />}</div>}
                </div>
                {errors.phone_code && touched.phone_code && <><div className='error-text'> {errors.phone_code}</div></> }
            </div>
         
            <div className='buttons'>
               
                    <input type='submit' className='confrim' value='Confirm' />
                <Link to='/dashbord/addresses'>
                      <button className='discard'>Discard</button>
                </Link>
                
            </div>
            {countryupdated &&  <Navigate  to='/dashbord/addresses' /> }
            </form>
             )}
             </Formik>
          </div>
        </div>

    </div>
  )
}


export default EditeCountry