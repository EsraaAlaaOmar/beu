import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Box from '../reusable/Box'
import Nav from '../reusable/Nav'
import {editOffer} from '../../store/offerSlice'

const OffersProducts = () => {
    let location = useLocation()
    
  let products = location.state.offer.products
  let renderedProducts =products.length > 0 ? products.map((product)=>{
    return (
      <Col md={6} lg={4} >
          <Box product={product} viewProducts={true} deleteFuction={editOffer} offer_id={location.state.offer.id}/>
        
        </Col>
    )
  }) :<>
  <br/>
  &nbsp;
 
  <h5>&nbsp; No Products Selected for This offer </h5>
  </>
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