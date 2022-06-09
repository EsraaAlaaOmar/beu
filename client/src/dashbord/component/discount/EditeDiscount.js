import React,{useState} from 'react'
import { Link ,Navigate, useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {editeDiscount} from '../../store/discountslice'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"

 //formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
const EditeDiscount = ({setFlashmsg}) => {
    // yup validation
    let schema = yup.object().shape({
      start_at: yup.date().min(new Date(),'Please choose future date').required('Start Date is required'),    
      end_at: yup.date()    
                  .when('start_at',
                                (start_at, schema) => {
                                    if (start_at) {
                                    const dayAfter = new Date(start_at.getTime() + 86400000);
                                  
                                        return schema.min(dayAfter, 'End date has to be after than start date');
                                      }
                                  
                                      return schema;
                                    
                                }).required('End Date is required'),
     
      code:yup.string().required('code is required'),
      limit: yup.number().typeError('limit  must be a number').required(' limit  is required'),
      percentage: yup.number().typeError('percentage  must be a number').min(1,'Precentage must be a positive number').max(100,'precentage must be less than 100') .required(' percentage  is required'),
      
     });

     // end  yup 
  let location = useLocation()
  const dispatch = useDispatch()


  const {updated } =useSelector((state)=> state.discount)


const onSubmit=async (values)=>{
  
   
    dispatch(editeDiscount(values))
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
     { console.log(location.state.discont)}
      <div className='add'>
      <Formik
             initialValues={{
               
              start_at: location.state.discont.created_at,
              end_at: location.state.discont.end_at,
              code: location.state.discont.code,
              limit:location.state.discont.limit, 
              percentage:location.state.discont.percentage.replace("%", ""),
              discount_id:location.state.discont.id,
              id:location.state.discont.id
             
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
               
             
              }}
             
            
           >
 {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
        
        <h4>Edite Discount</h4>
        <div className='input-div'>
            <label> Promo Code</label>
            < div className='input-field  '>
                <Field    placeholder='Promo Code' name='code'   />
                { touched.code && <div className='mark'>{errors.code ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'code')} /></span>: <FcCheckmark />}</div>}
            </div>
            {errors.code && touched.code && <><div className='error-text'> {errors.code}</div></> } 
        </div>


        <div className='input-div'>
            <label> percentage</label>
            < div className='input-field  '>
                <Field    placeholder='percentage' name='percentage'   />
                { touched.percentage && <div className='mark'>{errors.percentage ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'percentage')} /></span>: <FcCheckmark />}</div>}
            </div>
            {errors.percentage && touched.percentage && <><div className='error-text'> {errors.percentage}</div></> }
        
           
        </div>
        
        <div className='input-div'>
            <label>limit</label>
            < div className='input-field  '>
                <Field    placeholder='limit' name='limit'   />
                { touched.limit && <div className='mark'>{errors.limit ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'limit')} /></span>: <FcCheckmark />}</div>}
            </div>
            {errors.limit && touched.limit && <><div className='error-text'> {errors.limit}</div></> }
           
           
        </div>
        
        
        <div className='input-div'>
            <label> Start Date </label>
            < div className='input-field  '>
                <Field    placeholder='Start Date'   type='date' name='start_at'   />
            </div>
            {errors.start_at && touched.start_at && <><div className='error-text'> {errors.start_at}</div></> }
        </div>


        <div className='input-div'>
            <label>End Date </label>
            < div className='input-field  '>
                <Field    placeholder='End Date'  type='date' name='end_at'   />
            
            </div>
            {errors.end_at && touched.end_at && <><div className='error-text'> {errors.end_at}</div></> }
           
          
        </div>
        <div className='buttons'>
            
                <input className='confrim' type='submit' value='Confirm' />
        
            <Link to='/dashbord/discount'>
                  <button className='discard'>Discard</button>
            </Link>
        </div>
      </form> 
      )}
      </Formik>
      { updated&&  <Navigate to="/dashbord/discount" /> }
      { console.log(updated)}
      </div>
    </div>

</div>
  )
}

export default EditeDiscount