import React, {useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'

import {BsSearch} from 'react-icons/bs'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import {MdOutlineChevronLeft,MdOutlineChevronRight} from 'react-icons/md'

import Navbar from '../landingPage/Navbar'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import FilterProducts from './FilterProducts'
import {getClientProducts} from '../dashbord/store/clientSide/clientProducts'
import { useDispatch, useSelector } from 'react-redux'
const Search = () => {
  const dispatch= useDispatch()
  const [filterItems, setFilterItems] = useState(false)
  const [pagenum,setPagenum] = useState(1)
  const pageSize =filterItems?11:12
  
  useEffect(() =>{
    dispatch(getClientProducts({page_size:pageSize,
      page:pagenum}))
  

  },[dispatch, pagenum,pageSize])
  const {products,count, isLoading, error}=useSelector((state)=> state.clientProducts)
  const maxpagenum =Math.ceil(count/pageSize)
  console.log(maxpagenum)
  const renderedProducts = products&&products.map(product=>{
    return(
      <Col md={4} lg={3} >  
                  <Link to='/product'>
                     <Product img={product.galleries[0]&&product.galleries[0].image} product={product}/>
                  </Link>
       </Col>
    )

  })
    return (
      <>
         <Navbar />
         <div className='search-page'>
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
          <Row>
        
          <Col md={4} lg={3} > 
                    <div className='filter'>
                        
                     <span  onClick={()=>setFilterItems(!filterItems)}>  Filter By &nbsp;{filterItems? <MdOutlineChevronRight />:<MdOutlineChevronLeft />  }</span>
                    </div>
                  
                    
              </Col>
           </Row>
          <div className='products'>
          <Row>
          {filterItems && 
            <Col md={4} lg={3} > 
                
                  <FilterProducts />
                </Col>
                }
           { renderedProducts}
             
            </Row>

          </div>
          <div className='pagination'>
            <div className='ch-page'>
              <div className='button' onClick={() =>pagenum!==1&& setPagenum(pagenum-1)} >
                     
                     <span><GrFormPrevious />  </span>
                      Previous
              </div>
            </div>
            
            <div className='space'> Page {pagenum} of {maxpagenum} </div>
            <div className='ch-page'>
              <div className='button' onClick={() =>pagenum<maxpagenum&& setPagenum(pagenum+1)}>
              Next
              <span> <GrFormNext /> </span>
              </div>
            </div>

          </div>
        
        </div>
      
      </>
     
    )
}

export default Search
