import React,{useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/Product'
import Navbar from '../landingPage/Navbar'
import {getBrandProducts} from '../dashbord/store/clientSide/clientbrands'
import { useParams } from 'react-router-dom'
const BrandProducts = () => {
    const dispatch= useDispatch()
    let { id }  = useParams();

    const {products, isLoading} =useSelector((state)=> state.clientbrands)

    useEffect(() =>{
        dispatch(getBrandProducts(id))
      },[dispatch,id])

    const renderedProducts= products.length>0 ? products.map(product=>{
        return(
          <Col md={4} lg={3} key={product.id}>  
                      
                         <Product   img={product.galleries[0]&&product.galleries[0].image} product={product}/>
                    
           </Col>
        ) 
    
      }): <div className='text-center'>No products found for this brand</div>
        return (
        
          <>
          { isLoading ? <div  className="clientloading loading"> <img src='/images/client_loading.gif'  alt='loading'/></div> : 
          <div>
             <Navbar navigate={false} />
             <div className='fav'>
              <div className='collections'>
               
                
            <span className='search'>
                 <input  placeholder='search any item ..' />   
                 <span className='icon'> <BsSearch /> </span>
            </span>   
              </div>
              
             
               
             
               <div className='products'>
              <Row>
                 
                    { renderedProducts}
                 
                </Row>
        
              </div>
              {/* <div className='recommended'>
              <div className='title'>Recommended For You</div>
              <div className='products'>
              <Row>
    
                    <Col md={4} lg={3} > 
                      <Link to='/product'>
                         <Product  fav  productid={1}  img='/images/products/1.png'/>
                      </Link>
                    </Col>
                    <Col md={4} lg={3}> 
                      <Link to='/product'>
                          <Product  fav productid={1} img='/images/products/2.png'/>
                      </Link>
                    </Col>
                    <Col md={4} lg={3}> 
                      <Link to='/product'>
                         <Product  fav productid={3} img='/images/products/3.png' />
                      </Link>
                    </Col>
                 
                 
                </Row>
        
              </div>
            
              </div> */}
            </div>
          </div> }
          </>
       
           
        )
}

export default BrandProducts