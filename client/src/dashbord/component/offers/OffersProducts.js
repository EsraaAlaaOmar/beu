import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Box from '../reusable/Box'
import Nav from '../reusable/Nav'

const OffersProducts = () => {
    let location = useLocation()
  let products = location.state.offer.products
  let renderedProducts = products.map((product)=>{
    return (
      <Col md={6} lg={4} >
          <Box product={product} viewProducts={true}/>
        
        </Col>
    )
  }) 
   return(
     <>
        <Nav/>
      <div className='box'>
      <span className="title-text">Offer Products</span> 
      <Row>
       
      {renderedProducts}
      </Row>
    </div>
    </>
  )
}

export default OffersProducts