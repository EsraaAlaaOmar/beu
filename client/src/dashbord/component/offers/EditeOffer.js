import {React,useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SelectProduct from '../reusable/SelectProduct'
import { useSelector, useDispatch } from 'react-redux';
import {editOffer} from '../../store/offerSlice'
const EditeOffer = () => {
    let location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        start_at: location.state.offer.start_at,
        end_at: location.state.offer.end_at,
        percentage:location.state.offer.percentage.replace("%", ""),
        products:location.state.offer.products,
        offer_id:location.state.offer.id,
        id:location.state.offer.id
      
    
      
    })
    const { start_at, end_at, percentage, products}=formData
    //const [products, setProducts] = useState()
     //add new product to this offer 
     const addProduct=(newid)=>
     {let data={product_id : newid}
      setFormData({...formData, products:[...products , data ] })
       
        }
    const {collectionsList} =useSelector((state)=>state.collections)
  
    const [selectedCollection,setSelectedCollection]= useState(collectionsList[0])
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit=async e=>{
        e.preventDefault()
        dispatch(editOffer(formData))
        navigate('/offers')
        
     
    


   
    
}
        const renderedCollections = collectionsList.map(collection=>{
            return(
               <option key={collection.id} value={collection.id} >{collection.title}</option>
            )
   })
   const collection = collectionsList.find(collection => collection.id == selectedCollection)
  
    useEffect(() =>{
   
    
  
    },[])
  return (
    <div className='addpage'>
        <div className='opacity'>
            <div className='choose-product'>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className='inputs'>
                        <h4>Edite Offer</h4>
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
                            <span className='yello-title'>&nbsp;  {collection.products.length}  &nbsp; Product</span>
                            <Row>
                                {collection.products.map(product =>{
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

export default EditeOffer
