import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {FiMinusSquare ,FiPlusSquare}  from 'react-icons/fi'
import {MdDeleteSweep} from 'react-icons/md'


const ProductInCard = () => {
  const[number,setNumber]=useState(1)
  return <div className='product_in_card'>
      <Row>
          <Col>
            <img  src="/images/products/5.png" />
            
          </Col>
          <Col>
          <div className='info'>
          <div className='poroduct_title'> Product title</div>
          <div className='price'>Price : 150 $</div>
           <div className='number'>
                            <span className='action' onClick={()=>setNumber(number+1)}> <FiPlusSquare /></span>
                            <span className='num'>{number}</span>
                            <span className='items'> items</span>
                            <span className='action' onClick={()=>setNumber(number-1)}><FiMinusSquare /></span>

          </div>
          <div className='property'>Color : <span></span></div>
          <div className='property'>Size : <span className='size'>S</span></div>
          <span className='delete'><MdDeleteSweep /></span>
          </div>
          
          </Col>
      </Row>
  </div>;
};

export default ProductInCard;
