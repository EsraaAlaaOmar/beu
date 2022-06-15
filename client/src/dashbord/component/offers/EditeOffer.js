import {React,useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import SelectProduct from '../reusable/SelectProduct'
import { useSelector, useDispatch } from 'react-redux';
import {editOffer} from '../../store/offerSlice'
import{getCollections} from '../../store/collectionsSlice'
import {getProducts} from '../../store/productSlice'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
import moment from 'moment'
 //formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
const EditeOffer = () => {
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

   const {updated} =useSelector((state)=> state.offers)
    let location = useLocation()
      const offer= location.state.offer
    const dispatch = useDispatch()
    const navigate = useNavigate()
    {console.log(moment(location.state.offer.start_at).format('YYYY-MM-DD'))}

    const [formData, setFormData] = useState({
       
        add_products:[],
   
    
      
    })
    const { add_products}=formData
   //ADD PRODUCT TO LIST
   const addProduct=(data)=>
   {
    setFormData({...formData, add_products:[...add_products , data ] })
     
      }
//remove product from list
  const removeProduct=(id)=>
   {
    setFormData({...formData, add_products:add_products.filter(product=>product.product_id!=id) })
     
      }
   
    const {collectionsList} =useSelector((state)=>state.collections)
    //products state
    const { isLoading} =useSelector((state)=>state.product)
    const productdata =useSelector((state)=>state.product)
    const productsList =  productdata.products


    const [selectedCollection,setSelectedCollection]= useState(null)
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit=async data=>{
    
        dispatch(editOffer({...data, add_products:add_products}))
    
        
     
    


   
    
}
        const renderedCollections = collectionsList.map(collection=>{
            return(
               <option key={collection.id} value={collection.id} >{collection.title}</option>
            )
   })
   const collection = collectionsList.find(collection => collection.id == selectedCollection)
  
    useEffect(() =>{
   
        dispatch(getCollections( ))
  
    },[dispatch])
    useEffect(() =>{
        if(selectedCollection)
     { dispatch(getProducts( selectedCollection))}
    
    
    },[selectedCollection])
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
                        <h4>Edite Offer</h4>
                        <Formik
             initialValues={{
               
                start_at: moment(location.state.offer.start_at).format('YYYY-MM-DD'),
                end_at: moment(location.state.offer.end_atmoment).format('YYYY-MM-DD'),
                percentage:location.state.offer.percentage.replace("%", ""),
                offer_id:location.state.offer.id,
                id:location.state.offer.id
                
               
               
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
                                <Field    placeholder='percentage' name='percentage'  />
                                { touched.percentage && <div className='mark'>{errors.percentage ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'percentage')} /></span>: <FcCheckmark />}</div>}
                                </div>
                                {errors.percentage && touched.percentage && <><div className='error-text'> {errors.percentage}</div></> }
                                
                            </div>
                            <div className='input-div'>
                                <label> Start Date </label>
                                < div className='input-field  '>
                <Field    placeholder='Start Date' type='date' name='start_at'    />
            </div>
            {errors.start_at && touched.start_at && <><div className='error-text'> {errors.start_at}</div></> }
                            </div>
                            <div className='input-div'>
                                <label>End Date </label>
                                < div className='input-field  '>
                <Field    placeholder='End Date'  type='date' name='end_at'    />
            
            </div>
            {errors.end_at && touched.end_at && <><div className='error-text'> {errors.end_at}</div></> }
                    <div className='selected-products'>
                      <Link to='/dashbord/offerproducts' state={{offer:offer}}>Edite Previous Offer Products</Link>
                      {add_products.length>0 && <h5>products you want to add</h5>}
                                 {add_products.map(product =><div>{product.title}</div>)}
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
                                            <SelectProduct product={product}    addProduct={addProduct} removeProduct={removeProduct}/>
                                        </Col>
                                    )
                                }): 'No Products In Tis collection'

                            }
                                
                                
                            </Row>
                        </div>
                    }
                    </Col>}
{updated&& <Navigate to='/dashbord/offers' />}
                </Row>
            
            </div>
        </div>
    </div>
  )
}

export default EditeOffer
