import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Product from '../components/Product'
const Products = () => {
    return (
        <div className='products'>
          <div className='choose'>

          </div>
            <Row>
                <Col  md={4} > 
                  <Product  productid={1} sale img='/images/products/1.png'/>
                </Col>
                <Col md={4}> 
                  <Product productid={2} img='/images/products/3.png'/>
                </Col>
                <Col md={4}> 
                  <Product productid={3} img='/images/products/2.png' />
                </Col>
             
            </Row>
            <div className='explore'>Explore new collections</div>
           
        </div>
    )
}

export default Products
