import React,{useEffect,useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import{getCollections} from '../../store/collectionsSlice'
import {getProducts} from '../../store/productSlice'
import SelectProduct from '../reusable/SelectProduct'

const AddOrder = () => {


     //selecte  Collection  to see its products 
     const [selectedCollection,setSelectedCollection]= useState()
     const {collectionsList} =useSelector((state)=>state.collections)
     
     const { isLoading} =useSelector((state)=>state.product)
     const {created } =useSelector((state)=> state.offers)
     const productdata =useSelector((state)=>state.product)
     const productsList =  productdata.products

     const dispatch = useDispatch()
     useEffect(() =>{
         if(selectedCollection)
      { dispatch(getProducts( selectedCollection))}
     
    
     },[selectedCollection])
 
      useEffect(() =>{
       dispatch(getCollections())
     
    
     },[dispatch])
     const renderedCollections = collectionsList.map(collection=>{
        return(
           <option key={collection.id} value={collection.id} >{collection.title}</option>
        )
})

  return (
    <div className='addpage'>
    <div className='opacity'>
        <div className='choose-product'>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <div className='inputs'>
                    <h4>Add Order</h4>
                        <div className='input-div'>
                            <label>Collection</label>
                            
                            <select  value={selectedCollection}  onChange={(e)=>{setSelectedCollection(e.target.value); console.log(selectedCollection)}}>
                                <option hidden >choose a collection</option>
                                    {renderedCollections}
                                  
                                </select>
                        
                        </div>
                       <div className='order-details'>
                           <div>Product title</div>
                           <div>Size : S</div>
                           <div>Items : 1 item</div>
                           <div>Total : 100 $</div>
                         
                       </div>
                        <div className='buttons'>
                            <Link to='/dashbord/orders'>
                                <button className='confrim'>Confirm</button>
                            </Link>
                            <Link to='/dashbord/orders'>
                                <button className='discard'>Discard</button>
                            </Link>
                        </div>

                        
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
                                            <SelectProduct product={product}  addProduct={''} removeProduct={''}/>
                                        </Col>
                                    )
                                }): 'No Products In Tis collection'

                            }
                                
                                
                            </Row>
                        </div>
                    }
                    </Col>}

            </Row>
        
        </div>
    </div>
</div>
  )
}

export default AddOrder