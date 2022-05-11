import React from 'react'
import { ReactComponent as Logo } from '../../images/collections.svg';
import {Col, Row} from 'react-bootstrap'

import Box from '../reusable/Box'
import { Link, Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';
import Nav from '../reusable/Nav';
const Products = () => {
  return (
    <>
      <Nav />
        <div className="box"> 
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text"> Products on collection name <span className="prodcts-num">412 <span>Product</span></span></span> 
          <div className="oposite">
                  
                    <Link to='/dashbord/products/add'>
                      <button>+ Add New</button>
                    </Link>
          </div>
          <div className="boxs">
              <Row>
                  <Col >
                    <Box  yello={
                    <>
                      <div>Price : 100 $</div>
                      <div>Sizes : &nbsp;S &nbsp;  M &nbsp; L</div>
                      <div>Colors :<span className="color"></span></div>
                    </>}/>
                  </Col>
                  <Col >
                    <Box  yello={
                    <>
                      <div>Price : 100 $</div>
                      <div>Sizes : &nbsp;S &nbsp;  M &nbsp; L</div>
                      <div>Colors :<span className="color"></span></div>
                    </>}/>
                  </Col>``
                  <Col >
                    <Box  yello={
                    <>
                      <div>Price : 100 $</div>
                      <div>Sizes : &nbsp;S &nbsp;  M &nbsp; L</div>
                      <div>Colors :<span className="color"></span></div>
                    </>}/>
                  </Col>
                  <Col >
                    <Box  yello={
                    <>
                      <div>Price : 100 $</div>
                      <div>Sizes : &nbsp;S &nbsp;  M &nbsp; L</div>
                      <div>Colors :<span className="color"></span></div>
                    </>}/>
                  </Col>
              </Row>

          </div>
          <Routes>
              <Route path="/add" element={<AddProduct />} exact /> 
          </Routes>
  </div>
      
    </>
    
)
}

export default Products