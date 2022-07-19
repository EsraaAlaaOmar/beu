import React from 'react';

const OneOrder = ({product}) => {
  return <div className='one_order'>

      <img src='/images/products/3.png' />
       <div className='order_info'>
         <div className='title'>Product title</div>
         <div className='price'>
          Price : {product&&product.total_price}
          <span className='number'>   {product&&product.quantity} </span>
          <span className='items'>items</span>
         </div>
         <div className='color'>
          Color : <span style={{backgroundColor:product&&product.color_hex}}></span>
         </div>
         <div className='size'>
         Size : {product&&product.size}
         </div>

       </div>
  </div>;
};

export default OneOrder;
