import {React,useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import SelectProduct from '../reusable/SelectProduct'
import { useSelector, useDispatch } from 'react-redux';
import {addOffer} from '../../store/offerSlice'
import{getCollections} from '../../store/collectionsSlice'
import {getProducts} from '../../store/productSlice'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
import _ from 'lodash';

 //formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';

const AddOffer = () => {
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
        percentage: yup.number().typeError('percentage  must be a number').min(1,'Precentage must be a positive number').max(100,'precentage must be less than 100') .required(' percentage  is required'),
       });
       // end  yup 

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
    
        products:[],
      
    
      
    })
    const { products}=formData

//ADD PRODUCT TO LIST
     const addProduct=(data)=>
     {
      setFormData({...formData, products:[...products , data ] })
       
        }
//remove product from list
    const removeProduct=(id)=>
     {
      setFormData({...formData, products:products.filter(product=>product.product_id!=id) })
       
        }
        
    const {collectionsList} =useSelector((state)=>state.collections)
  //selecte  Collection  to see its products 
    const [selectedCollection,setSelectedCollection]= useState()
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit=async ( data)=>{
     
        dispatch(addOffer({...data, products:products}))
     
    


   
    
}
        const renderedCollections = collectionsList.map(collection=>{
            return(
               <option key={collection.id} value={collection.id} >{collection.title}</option>
            )
   })
   const { isLoading} =useSelector((state)=>state.product)
   const {created } =useSelector((state)=> state.offers)
   const productdata =useSelector((state)=>state.product)
   const productsList =  productdata.products

  useEffect(() =>{
      if(selectedCollection)
   { dispatch(getProducts( selectedCollection))}
  
 
  },[selectedCollection])
   useEffect(() =>{
    dispatch(getCollections())
  
 
  },[dispatch])

    //remove validation error 
    const removeError=(setFieldValue,setFieldTouched, name)=>{
        setFieldValue(name, '', false);
        setFieldTouched(name, false,false)
    
      }
  return (
    <div className='addpage'>
        <div className='opacity'>
            <div className='choose-product'>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className='inputs'>
                        <h4>New Offer</h4>
                        <Formik
             initialValues={{
               
                start_at: '',
                end_at: '',
                percentage:'', 
             
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
               
             
              }}
             
            
           >
 {({errors, touched,setFieldTouched,  handleSubmit,setFieldValue})=> (
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                            <div className='input-div'>
                                <label>Collection</label>
                                
                                <select  value={selectedCollection}  onChange={(e)=>{setSelectedCollection(e.target.value); console.log(selectedCollection)}}>
                                <option hidden >choose a collection</option>
                                    {renderedCollections}
                                  
                                </select>
                            
                            </div>
                            <div className='input-div'>
                                <label> Percentage</label>
                                < div className='input-field  '>
                                <Field    placeholder='percentage' name='percentage'   />
                                { touched.percentage && <div className='mark'>{errors.percentage ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'percentage')} /></span>: <FcCheckmark />}</div>}
                                </div>
                                {errors.percentage && touched.percentage && <><div className='error-text'> {errors.percentage}</div></> }
                                
                            </div>
                            <div className='input-div'>
                                <label> Start Date </label>
                                < div className='input-field  '>
                <Field    placeholder='Start Date' onFocus={(e)=>e.target.type='date'} type='text' name='start_at'   />
            </div>
            {errors.start_at && touched.start_at && <><div className='error-text'> {errors.start_at}</div></> }
                            </div>
                            <div className='input-div'>
                                <label>End Date </label>
                                < div className='input-field  '>
                <Field    placeholder='End Date' onFocus={(e)=>e.target.type='date'} type='text' name='end_at'   />
            
            </div>
            {errors.end_at && touched.end_at && <><div className='error-text'> {errors.end_at}</div></> }
                      {/* selected products */}
                      <div className='selected-products'>
                                {products.length>0 && <h5>Selected Products</h5>}
                                 {products.map(product =><div>{product.title}</div>)}

                            </div>
                              
                            </div>
                            
                            <div className='buttons'>
                              
                                    <input   className='confrim' type='submit' value='Confirm' />

                               
                                <Link to='/dashbord/offers'>
                                    <button className='discard'>Discard</button>
                                </Link>
                            </div>
                        </form>

                        )}
                        </Formik>
                        </div>
                      

                    </Col>
                   {selectedCollection&& <Col sm={12} md={6} lg={8}>
                   {isLoading ? <div  className="box loading"> <img src='/images/loading.gif' /></div> 
                       :productsList && <div className='select'>
                            <span className='black-title'>Products on  selected collection</span> 
                            <span className='yello-title'>&nbsp;  {productsList.length}  &nbsp; Product</span>
                            <Row>
                                {productsList.length>0?productsList.map(product =>{
                                    return(
                                        <Col sm={12} lg={6}>
                                            <SelectProduct product={product}  addProduct={addProduct} removeProduct={removeProduct}/>
                                        </Col>
                                    )
                                }): 'No Products In Tis collection'

                            }
                                
                                
                            </Row>
                        </div>
                    }
                    </Col>}
                    {created&& <Navigate to='/dashbord/offers' />}

{console.log(products)}
                </Row>
            
            </div>
        </div>
    </div>
  )
}

export default AddOffer