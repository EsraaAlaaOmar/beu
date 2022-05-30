import {React,useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import SelectProduct from '../reusable/SelectProduct'
import { useSelector, useDispatch } from 'react-redux';
import {addOffer} from '../../store/offerSlice'
import{getCollections} from '../../store/collectionsSlice'
const AddOffer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        start_at: '',
        end_at: '',
        percentage:'', 
        products:[],
      
    
      
    })
    const { start_at, end_at, percentage, products}=formData


     const addProduct=(newid)=>
     {let data={product_id : newid}
      setFormData({...formData, products:[...products , data ] })
       
        }
    const {collectionsList} =useSelector((state)=>state.collections)
  //selecte  Collection  to see its products 
    const [selectedCollection,setSelectedCollection]= useState()
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit=async e=>{
        e.preventDefault()
        dispatch(addOffer(formData))
        navigate('/offers')
     
    


   
    
}
        const renderedCollections = collectionsList.map(collection=>{
            return(
               <option key={collection.id} value={collection.id} >{collection.title}</option>
            )
   })
   const collection = collectionsList.find(collection => collection.id == selectedCollection)
  console.log(collection)
   useEffect(() =>{
    dispatch(getCollections())
  
 
  },[dispatch])
  return (
    <div className='addpage'>
        <div className='opacity'>
            <div className='choose-product'>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className='inputs'>
                        <h4>New Offer</h4>
                        <form onSubmit={(e)=>onSubmit(e)}>
                            <div className='input-div'>
                                <label>Collection</label>
                                
                                <select  value={selectedCollection}  onChange={(e)=>{setSelectedCollection(e.target.value); console.log(selectedCollection)}}>
                                <option hidden >choose a collection</option>
                                    {renderedCollections}
                                  
                                </select>
                            
                            </div>
                            <div className='input-div'>
                                <label> Percentage</label>
                                <input type='text' placeholder='Percentage' name='percentage' value={percentage} onChange={e=>onChange(e)} required/>
                                
                            </div>
                            <div className='input-div'>
                                <label> Start Date </label>
                                <input type='text'  placeholder="Start Date" onFocus={(e)=>e.target.type='date'} name='start_at' value={start_at} onChange={e=>onChange(e)} required/>
                            </div>
                            <div className='input-div'>
                                <label>End Date </label>
                                <input type='text' placeholder='End Date' onFocus={(e)=>e.target.type='date'} name='end_at' value={end_at} onChange={e=>onChange(e)} required />
                            </div>
                            <div className='buttons'>
                              
                                    <input   className='confrim' type='submit' value='Confirm' />

                               
                                <Link to='/dashbord/offers'>
                                    <button className='discard'>Discard</button>
                                </Link>
                            </div>
                        </form>
                        </div>
                      

                    </Col>
                    <Col sm={12} md={6} lg={8}>
                       {collection && <div className='select'>
                            <span className='black-title'>Products on  {collection.title}</span> 
                            <span className='yello-title'>&nbsp;  {collection.products&&collection.products.length}  &nbsp; Product</span>
                            <Row>
                                {collection.products&&collection.products.map(product =>{
                                    return(
                                        <Col sm={12} lg={6}>
                                            <SelectProduct product={product}  addProduct={addProduct}/>
                                        </Col>
                                    )
                                })}
                                
                                
                            </Row>
                        </div>
                    }
                    </Col>
{console.log(products)}
                </Row>
            
            </div>
        </div>
    </div>
  )
}

export default AddOffer