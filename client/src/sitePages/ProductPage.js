import React, { useState } from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import { BsFillHeartFill, BsHeart, BsSearch } from 'react-icons/bs'

import {FiShoppingCart} from 'react-icons/fi'
import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../landingPage/Navbar'
import Call from './components/Call'
import ContactSection from './components/ContactSection'
import ProductTitleBox from './ProductTitleBox'

const ProductPage = () => {
    const[number,setNumber]=useState(1)
    const[size,setSize] =useState(false)
    const[color,setColor] =useState(false)
    const[fav,setFav]=useState(false)
    return (
        <>
           <Navbar />
           <div className='productPage'>
            <div className='collections'>
                <span className='collection-name'> ALL</span>
                <span className='collection-name'> ABAYAS</span>
                <span className='collection-name'> BAGS</span>
                <span className='collection-name'> SHOES</span>
                <span className='collection-name'> ACCESSORIES</span>
                <span className='collection-name'> JEWELRY</span>
                <span className='collection-name'> HOME DECOR</span>
                
            <span className='search'>
                <input  placeholder='search any item ..' />   
                <span className='icon'> <BsSearch /> </span>
            </span>   
            </div>
             <Row>
                <Col md={6} lg={4}>
                  <img src='/images/products/6.png'  />
                </Col>
                <Col>
                  <img src='/images/products/6.png'  />
                </Col>
                <Col>
                  <div className='product-info'>
                    <div className='text'>Product title goes here</div>
                    <div className='text'>that's a helping text that's a helping text</div>
                    <div className='text'>that's a helping text that's a helping text</div>

                  

                    
                    <div className='property'>
                      <div className='toggle' onClick={() =>setSize(!size)}>
                        Size <span className='oposite'>{size?<MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}</span>
                       </div>
                       {size && <div className='list'>
                        <div className='option' >
                          <input type="radio" id="S" name="fav_language" value="S"/>
                            <label for="S">S</label>
                        </div>
                        <div className='option'>
                          <input type="radio" id="M" name="fav_language" value="M"/>
                            <label for="M">M</label>
                        </div>
                        <div className='option'>
                          <input type="radio" id="L" name="fav_language" value="L"/>
                            <label for="L">L</label>
                        </div>
                       

                       </div>}


                    </div>
                    <div className='property'>
                      <div className='toggle' onClick={() =>setColor(!color)}>
                        Color <span className='oposite'>{color?<MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}</span>
                       </div>
                       {color && <div className='list'>
                        <div className='option' >
                          <input type="radio" id="color1" name="fav_language" value="color1"/>
                            <label className='color' for="color1"></label>
                        </div>
                        <div className='option' >
                          <input type="radio" id="color2" name="fav_language" value="color2"/>
                            <label className='color' for="color2" style={{backgroundColor:'pink'}}></label>
                        </div>
                        <div className='option'>
                          <input type="radio" id="color3" name="fav_language" value="color3"/>
                            <label className='color' for="color3" style={{backgroundColor:'red'}}></label>
                        </div>
                       

                       </div>}


                    </div>
                    <div className='property'>
                    <div className='toggle num'> 
                        <span className='change-num' onClick={()=>setNumber(number+1)}>+ </span> 
                        {number} items
                        <span className='change-num' onClick={()=>number>0&&setNumber(number-1)}>- </span>
                         </div>
                    </div>
                    <div className='action'><span className='icon'><FiShoppingCart /></span>Add To Cart</div>
                    <div className='action fav'>{fav?<span className='icon'><BsFillHeartFill /></span>:<span className='icon'><BsHeart/></span> }ADD TO FAVOURITE</div>

                  </div>
                
                </Col>
             </Row>
             <div className='paragraphs'>
                  <div className='header'>
                     <span className='active'>DETAILS</span>
                     <span>DELIVERY & RETURNS</span>
                  </div>
             
          
             <Row>
              <Col lg={4} md={6}>
                 <ProductTitleBox />
              </Col>
              <Col lg={4} md={6}>
                 <ProductTitleBox />
              </Col>

             </Row>
             <Row>
              <Col lg={4} md={6}>
                 <ProductTitleBox />
                
              </Col>
              <Col lg={4} md={6}>
                <ProductTitleBox />
              </Col>

             </Row>
             </div>
             <ContactSection />
        
           </div>
           <Routes>
           <Route path="/call" element={<Call />} exact />
           </Routes>
         
        </>

    )
}

export default ProductPage
