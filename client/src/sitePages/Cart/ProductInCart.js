import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {FiMinusSquare ,FiPlusSquare}  from 'react-icons/fi'
import {MdDeleteSweep} from 'react-icons/md'
import { useDispatch } from 'react-redux'

const ProductInCart = ({product,editeCard,deleteFromCard}) => {
  const dispatch= useDispatch()
  const [number, setNumber] = useState(product && product.quantity)
  console.log(product )
  return <div className='product_in_cart'>
            <div className='img'>
               <img   src= {product&&product.product.galleries[0].image}/> 
             
            </div>
           
         

          
          <div className='info'>
            {console.log(product)}
                <div className='poroduct_title'> {product&&product.product.title}</div>
                <div className='property'>Color : <span className='color-box' style={{backgroundColor:product&&product.color_hex}}></span></div>
                <div className='property'>Size : {product&&product.size}</div>
                <span className='delete' onClick={()=>dispatch(deleteFromCard({product_id:product&&product.product.id}))}><MdDeleteSweep /></span>
          </div>
          <div className='oposite'>
            <div>
                {product&&product.unit_price} $
      </div>
      
           <div className='number'>
                            <span className='action' onClick={()=>{ number<product.product.quantity && dispatch(editeCard({product_id:product&&product.product.id,quantity:number+1}));  number<product.product.quantity  && setNumber(number+1)}}> <FiPlusSquare /></span>
                            <span className='num'>{number}</span>
                            <span className='items'> items</span>
                            <span className='action' onClick={()=>{ number>0 && dispatch(editeCard({product_id:product&&product.product.id,quantity:number-1})); number>0 && setNumber(number-1)}}><FiMinusSquare /></span>
                        

          </div>
        </div>
         
         
          
          
    
  </div>;
};

export default ProductInCart;
