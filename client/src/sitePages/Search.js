import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap'

import {BsSearch} from 'react-icons/bs'

import {MdOutlineChevronLeft,MdOutlineChevronRight} from 'react-icons/md'

import Navbar from '../landingPage/Navbar'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import FilterProducts from './FilterProducts'
const Search = () => {
  const [filterItems, setFilterItems] = useState(false)
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
                <Col md={4} lg={3} >  
                <Link to='/product'>
                  <Product  productid={1} sale img='/images/products/4.png'/>
                 </Link>
                </Col>
                <Col md={4} lg={3} >  
                  <Link to='/product'>
                    <Product productid={2} img='/images/products/5.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3} >  
                  <Link to='/product'>
                    <Product productid={3} img='/images/products/6.png' />
                  </Link>
                </Col>

                <Col md={4} lg={3} >  
                  <Link to='/product'>
                    <Product  productid={1} sale img='/images/products/1.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3} >  
                  <Link to='/product'>
                     <Product productid={2} img='/images/products/2.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3} >  
                  <Link to='/product'>
                    <Product productid={3} img='/images/products/3.png' />
                  </Link>
                </Col>
             

                <Col md={4} lg={3} >  
                  <Link to='/product'>
                     <Product  productid={1} sale img='/images/products/4.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3} >  
                  <Link to='/product'>
                    <Product productid={2} img='/images/products/5.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3} >  
                  <Link to='/product'>
                    <Product productid={3} img='/images/products/6.png' />
                  </Link>
                </Col>
             
            </Row>

          </div>
        
        </div>
      
      </>
     
    )
}

export default Search
