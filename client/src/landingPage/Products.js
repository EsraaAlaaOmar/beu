import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Product from '../components/Product'
const Products = () => {
    return (
        <div className='products'>
            <Row>
                <Col md={4}> 
                  <Product />
                </Col>
                <Col md={4}> 
                  <Product />
                </Col>
                <Col md={4}> 
                  <Product />
                </Col>
             
            </Row>
            <div className='explore'>Explore new collections</div>
           
        </div>
    )
}

export default Products
