import React,{useState} from 'react'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose, AiFillFileZip} from "react-icons/ai";
import {BsCameraFill} from "react-icons/bs"
import {BsCheck2Square} from "react-icons/bs"
import {RiCheckboxBlankLine} from "react-icons/ri"
import{useDispatch,useSelector} from 'react-redux'
import {sell} from '../dashbord/store/clientSide/sellSlice'
//formik
import { useField,Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
import { Col, Row } from 'react-bootstrap';

const SellInBeau = () => {
      // yup validation
      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      let schema = yup.object().shape({
    
         email: yup.string().email('Enter a Valid Email').required("Email is required"),
         full_name: yup.string().required('Name is required'),  
         phone:yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),    
         brand_name_english:yup.string().required('Brand english name is required'),
         brand_name_arabic:yup.string().required('Brand Arabic name is required'),
         social_media:yup.string().required('Social media  is required'),
         comment:yup.string().required('Comment is required'),
        
        
        
       });
 
       // end  yup 
    

          //remove validation error 
   const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)

  }


  const {brands} =useSelector((state)=> state.clientbrands)
  const dispatch = useDispatch()
  // logo 
  const [logo, setLogo] = useState()
  const imgChange=e=>setLogo( e.target.files[0])

// files
const [files, setFiles] = useState()
const filesChange=e=>setFiles(e.target.files)

const renderedBrands = brands.map(brand=> <Col sm={4}>

<input type="checkbox" id={brand.id} name="brand" value={brand.title} />
<label for={brand.id}>{brand.title}</label><br/>
</Col>
)
const onSubmit = (data)=>{dispatch(sell({...data,files:files, logo:logo})); console.log(data)}
  return (
    <div className='log_box'>
          <div className='title'>SELL AT BEAU WOW</div>

          <Formik
        initialValues={{
            full_name:'',
            email: '',
            brand_name_english:'',
            brand_name_arabic:'',
            phone:'',
            social_media: '',
            comment:''
           
        
        
        
        }}


        validationSchema={schema}
        onSubmit ={(values)=>{
            onSubmit(values);
            console.log(values);
        
        }}
        

        >
        {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
        <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">

              
    {/* {flashmsg && error && <FlashMsg
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />} */}
                <div className='input-div'>
                        <Field type='text' placeholder={`What's your name`}  name="full_name" autoComplete="off"   />
                        { touched.full_name && <div className='mark'>{errors.full_name ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'full_name')} /></span>: <FcCheckmark />}</div>}
                        {errors.full_name && touched.full_name && <><div className='error-text'> {errors.full_name}</div></> }
                </div>
                <div className='input-div'>
                        <Field type='text' placeholder='Brand name in English'  name="brand_name_english" autoComplete="off"   />
                        { touched.brand_name_english && <div className='mark'>{errors.brand_name_english ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'brand_name_english')} /></span>: <FcCheckmark />}</div>}
                        {errors.brand_name_english && touched.brand_name_english && <><div className='error-text'> {errors.brand_name_english}</div></> }
                </div>
                <div className='input-div'>
                        <Field type='text' placeholder='Brand name in Arabic'  name="brand_name_arabic" autoComplete="off"   />
                        { touched.brand_name_arabic && <div className='mark'>{errors.brand_name_arabic ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'brand_name_arabic')} /></span>: <FcCheckmark />}</div>}
                        {errors.brand_name_arabic && touched.brand_name_arabic && <><div className='error-text'> {errors.brand_name_arabic}</div></> }
                </div>

                <div className='logo'>Logo<span className='icon' onClick={()=>document.getElementById('image').click()}><BsCameraFill /></span></div>
                <input id='image' type='file' className='file' onChange={(e)=>imgChange(e)}/>


                <div className='input-div'>
                        <Field type='tel'  placeholder='Your direct phone number'  name="phone" autoComplete="off"   />
                        { touched.phone && <div className='mark'>{errors.phone ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'phone')} /></span>: <FcCheckmark />}</div>}
                        {errors.phone && touched.phone && <><div className='error-text'> {errors.phone}</div></> }
                </div>
            
               <div className='input-div'>
                        <Field type='email' placeholder='Email'  name="email" autoComplete="off"   />
                        { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')} /></span>: <FcCheckmark />}</div>}
                        {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
                </div>
                <Row>
                    <Col sm={6}>
                        <div className='input-div'>
                            <Field type='number'  placeholder='Country'   autoComplete="off"   />
                           
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='input-div'>
                            <Field type='text'  placeholder='City' autoComplete="off" value=''   />
                           
                        </div>
                    </Col>
                </Row>
                <div className='sell-texarea'>
                    <div className='title'>Categories of your products? Select all that apply</div>
                    
                    <Row>
                    {renderedBrands}
                    </Row>
                </div>
                <div className='input-div'>
                            <Field as='textarea' className='sell-texarea'  placeholder='@ social_media'  name="social_media" autoComplete="off"   />
                            { touched.social_media && <div className='mark'>{errors.social_media ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'social_media')} /></span>: <FcCheckmark />}</div>}
                            {errors.social_media && touched.social_media && <><div className='error-text'> {errors.social_media}</div></> }
                </div>
                
                <div className='logo' >Do you have any files or images that you would like to share with us? (you can upload multiple files)
                    <span className='icon'onClick={()=>document.getElementById('file').click()}><AiFillFileZip /></span>
                    <input id='file' type='file' multiple  onChange={(e)=>filesChange(e)}/>
                </div>
              


                <div className='input-div'>
                            <Field as='textarea' className='sell-texarea' placeholder='@ comment'  name="comment" autoComplete="off"   />
                            { touched.comment && <div className='mark'>{errors.comment ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'comment')} /></span>: <FcCheckmark />}</div>}
                            {errors.comment && touched.comment && <><div className='error-text'> {errors.comment}</div></> }
                </div>

                

          
              
               {/* <Link to='/log/phoneconfirmation'> */}
                   <input className='submit' type='submit' value='Signup' />
           
               

           </form>
            )}
           </Formik>
    </div>
  )
}

export default SellInBeau