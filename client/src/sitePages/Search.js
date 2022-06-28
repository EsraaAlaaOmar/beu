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
        <div className='search'>
         <div  className='search_input'>
              <input placeholder='Search any item ..' />
              <span><BsSearch /></span>
          </div>
          <Row>
        
              <Col md={4} lg={3}>
                    <div className='filter'>
                        
                     <span  onClick={()=>setFilterItems(!filterItems)}>  Filter By &nbsp;{filterItems? <MdOutlineChevronRight />:<MdOutlineChevronLeft />  }</span>
                    </div>
                  
                    
              </Col>
           </Row>
          <div className='products'>
          <Row>
          {filterItems && 
                <Col md={4} lg={3}>
                
                  <FilterProducts />
                </Col>
                }
                <Col md={6} lg={4} > 
                <Link to='/product'>
                  <Product  productid={1} sale img='/images/products/4.png'/>
                 </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                    <Product productid={2} img='/images/products/5.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                    <Product productid={3} img='/images/products/6.png' />
                  </Link>
                </Col>

                <Col md={6} lg={4} > 
                  <Link to='/product'>
                    <Product  productid={1} sale img='/images/products/1.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                     <Product productid={2} img='/images/products/2.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                    <Product productid={3} img='/images/products/3.png' />
                  </Link>
                </Col>
             

                <Col md={6} lg={4} > 
                  <Link to='/product'>
                     <Product  productid={1} sale img='/images/products/4.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                    <Product productid={2} img='/images/products/5.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                    <Product productid={3} img='/images/products/6.png' />
                  </Link>
                </Col>
             
            </Row>

          </div>
          <button className='load_more'>Load More</button>
        </div>
    )
}

export default Search
