import React from 'react'
import { Col, Row } from 'react-bootstrap'

import {BsSearch} from 'react-icons/bs'


import Navbar from '../landingPage/Navbar'
import Product from '../components/Product'
const Search = () => {
    return (
        <div className='search'>
         <div  className='search_input'>
              <input placeholder='Search any item ..' />
              <span><BsSearch /></span>
          </div>
          <div className='products'>
          <Row>
                <Col md={6} lg={4} > 
                  <Product  productid={1} sale img='/images/products/4.png'/>
                </Col>
                <Col md={6} lg={4}> 
                  <Product productid={2} img='/images/products/5.png'/>
                </Col>
                <Col md={6} lg={4}> 
                  <Product productid={3} img='/images/products/6.png' />
                </Col>

                <Col md={6} lg={4} > 
                  <Product  productid={1} sale img='/images/products/1.png'/>
                </Col>
                <Col md={6} lg={4}> 
                  <Product productid={2} img='/images/products/2.png'/>
                </Col>
                <Col md={6} lg={4}> 
                  <Product productid={3} img='/images/products/3.png' />
                </Col>
             

                <Col md={6} lg={4} > 
                  <Product  productid={1} sale img='/images/products/4.png'/>
                </Col>
                <Col md={6} lg={4}> 
                  <Product productid={2} img='/images/products/5.png'/>
                </Col>
                <Col md={6} lg={4}> 
                  <Product productid={3} img='/images/products/6.png' />
                </Col>
             
            </Row>

          </div>
          <button className='load_more'>Load More</button>
        </div>
    )
}

export default Search
