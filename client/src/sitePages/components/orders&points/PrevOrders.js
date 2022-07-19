import React from 'react';
import { Link } from 'react-router-dom';

import OneOrder from './OneOrder';
const PrevOrders = (orders) => {
  const renderedOrders = orders.length > 0? orders.map(order=>order.products.map(product=>{
    return <><OneOrder product={product} />
    

    <div className='orderes_info'>
    <div className='payment'>
      <div>Total : 300 $</div>
      <div>Paid by paypal</div>
    </div>
    <div className='status'>
      <div>Status : Recieved</div>
      <Link to='/log/returnorder'><div className='return'>Return</div> </Link>
      <div className='date'>1/1/2022</div>
    </div>
  </div>
  </>}
  ))
    : <div className='order_details_prev' style={{padding:'10px'}}>No Orders Found</div>
    return <div className='satue'>
    <div className='orders_status_header'>
    <Link to='/profile'>
            <div className='section '>
            <span>1</span> Current
            </div>
      </Link>
      <Link to='/profile/prev'>
            <div className='section active'>
            <span>2</span> Previous
            </div>
      </Link>
      <Link to='/profile/returned'>
            <div className='section '>
            <span>3</span> Returned
            </div>
      </Link>

   </div>
   <div className='order_details order_details_prev'>
     
      {renderedOrders}
     
  </div>
  
      
 </div>;
};


export default PrevOrders
;
