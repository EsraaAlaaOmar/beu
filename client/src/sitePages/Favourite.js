import React,{useEffect} from 'react'
import { Row,Col, Dropdown, DropdownButton } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {MdOutlineChevronLeft,MdOutlineChevronRight} from 'react-icons/md' 
import {BsSearch} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useState } from 'react'
import {getFavourites} from '../dashbord/store/clientSide/favouriteSlice'
import FilterProducts from './FilterProducts'
import Product from '../components/Product'
import Navbar from '../landingPage/Navbar'
import { useDispatch, useSelector } from 'react-redux'

const Favourite = () => {
  const dispatch= useDispatch()
  const {favList,favAdded, isLoading, error}=useSelector((state)=> state.favourite)
  const [filterItems, setFilterItems] = useState(false)

  useEffect(() =>{
    dispatch(getFavourites())
  

  },[dispatch])
   console.log(favList)
  const renderedFavourites= favList&&favList.map(product=>{
    return(
      <Col md={4} lg={3} >  
                  
                     <Product fav={true} img={product.galleries[0]&&product.galleries[0].image} product={product}/>
                
       </Col>
    )

  })
    return (
    
      <>
      { isLoading ? <div  className="clientloading loading"> <img src='/images/client_loading.gif' /></div> : 
      <>
         <Navbar />
         <div className='fav'>
          <div className='collections'>
            <span className='collection-name'> ALL</span>
            <span className='collection-name'> ABAYAS</span>
            <span className='collection-name'> BAGS</span>
            <span className='collection-name'> SHOES</span>
            <span className='collection-name'> ACCESSORIES</span>
            <span className='collection-name'> JEWELRY</span>
            <span className='collection-name'> HOME DECOR</span>
            
        <span className='search'>
             <input  placeholder='search any item ..' />   
             <span className='icon'> <BsSearch /> </span>
        </span>   
          </div>
          
           <div className='title'>
            
           FAVOURITE ITEMS
               
           </div>
           <Row>
              <Col md={4} lg={3}>
                    <div className='filter'>
                        
                     <span  onClick={()=>setFilterItems(!filterItems)}>   Filter By &nbsp;{filterItems? <MdOutlineChevronRight />:<MdOutlineChevronLeft />  }</span>
                    </div>                    
              </Col>
             {filterItems&& <Col md={8} lg={8}>
                <div className='category'>
                       category  <span className='close'> <AiFillCloseCircle /></span>
                </div>
                <div className='category'>
                       category  <span className='close'> <AiFillCloseCircle /></span>
                </div>
              </Col>}
           </Row>
         
           <div className='products'>
          <Row>
              {filterItems && 
                <Col md={4} lg={3}>
                
                  <FilterProducts />
                </Col>
                }
                { renderedFavourites}
             
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
      </> }
      </>
   
       
    )
}

export default Favourite
