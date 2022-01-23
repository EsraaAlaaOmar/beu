import React from 'react';

const OneOrder = () => {
  return <div className='one_order'>

      <img src='/images/products/3.png' />
       <div className='order_info'>
         <div className='title'>Product title</div>
         <div className='price'>
          Price : 150 $
          <span className='number'>    1  </span>
          <span className='items'>items</span>
         </div>
         <div className='color'>
          Color : <span></span>
         </div>
         <div className='size'>
         Size : small
         </div>

       </div>
  </div>;
};

export default OneOrder;
