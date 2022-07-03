import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ContactSection from '../components/ContactSection'
import ProductInCart from './ProductInCart'


const Cart = () => {
  return (
    <div className='cart'>
        <Row>
            <Col md={6}>
             <div className='left'>
                <div className='title'>
                SHIPPING INFORMATION

                </div>
                <div className='input'>
                     <input  placeholder='Country'/>
                </div>
                <div className='input'>
                     <input placeholder='City' />
                </div>
                <div className='input'>
                    <input  placeholder='area'/>
                </div>
                <div className='input'>
                     <input  placeholder='phone number'/>
                </div>
             
                <div className='submit'>
                     <input type='submit' value='Continue To Payment' />
                </div>
                   <ContactSection />
             </div>
            </Col>
            <Col  md={6}>
            <div className='right' > 
               <div className='title'>
                  YOUR CART
               </div>
               <ProductInCart />
               <ProductInCart />
               <div className='discount'>
                  <input  placeholder='enter discount code'/>
                  <button>APPLY</button>
               </div>
               <div className='price-dev'>
                   <div className='priceLine'>
                    <span className='name'> SubTotal Cost</span>
                    <span className='price'> 150 $</span>
                   </div>
                   <div className='priceLine'>
                    <span className='name'>Shipping Cost </span>
                    <span className='price'> 150 $</span>
                   </div>
               </div>
               <div className='priceLine bold'>
                    <span className='name'>Total Cost </span>
                    <span className='price'> 300 $</span>
             </div>

            </div>
            </Col>
        </Row>
        
    </div>
  )
}

export default Cart