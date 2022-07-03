import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {FiMinusSquare ,FiPlusSquare}  from 'react-icons/fi'
import {MdDeleteSweep} from 'react-icons/md'


const ProductInCart = () => {
  const[number,setNumber]=useState(1)
  return <div className='product_in_cart'>
            <div className='img'>
               <img  src="/images/products/5.png" /> 
               <span className='delete'><MdDeleteSweep /></span>

            </div>
           
            
          
          <div className='info'>
                <div className='poroduct_title'> Product title Goes Here</div>
                <div className='property'>Color : <span className='color-box'></span></div>
                <div className='property'>Size : S</div>
           
          </div>
          <div className='oposite'>
            <div>
                150 $
            </div>
           <div className='number'>
                            <span className='action' onClick={()=>setNumber(number+1)}> <FiPlusSquare /></span>
                            <span className='num'>{number}</span>
                            <span className='items'> items</span>
                            <span className='action' onClick={()=>setNumber(number-1)}><FiMinusSquare /></span>
                        

          </div>
        </div>
         
         
          
          
    
  </div>;
};

export default ProductInCart;
