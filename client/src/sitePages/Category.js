import React from 'react'
import { Row,Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Product from '../components/Product'
const Category = () => {
  return(
    <div className='fav'>
           <div className='title'>
               <div className='line right'></div>
               Category Name
               <div className='line'></div>
           </div>

           <div className='products'>
          <Row>
                <Col md={6} lg={4} > 
                  <Link to='/product'>
                      <Product  fav  productid={1} sale img='/images/products/4.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                       <Product  fav productid={2} img='/images/products/5.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                 <Link to='/product'>
                     <Product  fav productid={3} img='/images/products/6.png' />
                  </Link>
                </Col>

                <Col md={6} lg={4} > 
                  <Link to='/product'>
                    <Product  fav  productid={1} sale img='/images/products/1.png'/>
                  
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                      <Product  fav productid={2} img='/images/products/2.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                      <Product  fav productid={3} img='/images/products/3.png' />
                  </Link>
                </Col>
             

                <Col md={6} lg={4} > 
                   <Link to='/product'>
                      <Product  fav  productid={1} sale img='/images/products/4.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                    <Product  fav productid={2} img='/images/products/5.png'/>
                  </Link>
                </Col>
                <Col md={6} lg={4}> 
                  <Link to='/product'>
                       <Product  fav productid={3} img='/images/products/6.png' />
                  </Link>
                </Col>
             
            </Row>
    
          </div>
          <button className='load_more'>Load More</button>
        </div>
  );
};

export default Category;
