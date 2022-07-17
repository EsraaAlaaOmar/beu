import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import Box from '../reusable/Box'
import Nav from '../reusable/Nav'
import {editOffer} from '../../store/offerSlice'
import { useSelector } from 'react-redux'

const OffersProducts = () => {
    let location = useLocation()
    const {updated} =useSelector((state)=> state.offers)
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
      {updated&& <Navigate to='/dashbord/offers' />}
    </div>
    </>
  )
}

export default OffersProducts