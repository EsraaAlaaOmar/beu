import React from 'react'
import { Row,Col, Dropdown, DropdownButton } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {MdOutlineChevronLeft,MdOutlineChevronRight} from 'react-icons/md'
import Product from '../components/Product'
import { useState } from 'react'

const Favourite = () => {

  const [filterItems, setFilterItems] = useState(false)
    return (
        <div className='fav'>
           <div className='title'>
            
           FAVOURITE ITEMS
               
           </div>
           <Row>
              <Col md={4} lg={3}>
                    <div className='filter'>
                        
                     <span  onClick={()=>setFilterItems(!filterItems)}>   filter{filterItems? <MdOutlineChevronLeft /> : <MdOutlineChevronRight />}</span>
                    </div>
                  
                    
              </Col>
           </Row>
         
           <div className='products'>
          <Row>
                <Col>
                 esraa ITEMS
                </Col>
                <Col md={4} lg={3} > 
                  <Link to='/product'>
                      <Product  fav  productid={1}  img='/images/products/4.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3}> 
                  <Link to='/product'>
                       <Product  fav productid={1} img='/images/products/5.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3}> 
                 <Link to='/product'>
                     <Product  fav productid={3} img='/images/products/6.png' />
                  </Link>
                </Col>

                <Col md={4} lg={3} > 
                  <Link to='/product'>
                    <Product  fav  productid={1}  img='/images/products/1.png'/>
                  
                  </Link>
                </Col>
                <Col md={4} lg={3}> 
                  <Link to='/product'>
                      <Product  fav productid={1} img='/images/products/2.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3}> 
                  <Link to='/product'>
                      <Product  fav productid={3} img='/images/products/3.png' />
                  </Link>
                </Col>
             

                <Col md={4} lg={3} > 
                   <Link to='/product'>
                      <Product  fav  productid={1}  img='/images/products/4.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3}> 
                  <Link to='/product'>
                    <Product  fav productid={1} img='/images/products/5.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3}> 
                  <Link to='/product'>
                       <Product  fav productid={3} img='/images/products/6.png' />
                  </Link>
                </Col>
             
            </Row>
    
          </div>
          <div className='recommended'>
          <div className='title'>Recommended For You</div>
          <div className='products'>
          <Row>

                <Col md={4} lg={3} > 
                  <Link to='/product'>
                     <Product  fav  productid={1}  img='/images/products/1.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3}> 
                  <Link to='/product'>
                      <Product  fav productid={1} img='/images/products/2.png'/>
                  </Link>
                </Col>
                <Col md={4} lg={3}> 
                  <Link to='/product'>
                     <Product  fav productid={3} img='/images/products/3.png' />
                  </Link>
                </Col>
             
             
            </Row>
    
          </div>
          <button className='load_more'>Load More</button>

          </div>
        </div>
    )
}

export default Favourite
