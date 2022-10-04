import React from 'react';
import { Link } from 'react-router-dom';


import OneOrder from './OneOrder';
const CurrentOrders = ({orders}) => {
  const renderedOrders = orders&&orders.map(order=>order.products.map(product=>{
      return <OneOrder product={product} />}
      ))
  return <div className='satue'>
            <div className='orders_status_header'>
              <Link to='/profile'>
                  <div className='section active'>
                  <span>1</span> Current
                  </div>
              </Link>
              <Link to='/profile/prev'>
                    <div className='section '>
                    <span>0</span> Previous
                    </div>
              </Link>
              <Link to='/profile/returned'>
                    <div className='section '>
                    <span>3</span> Returned
                    </div>
              </Link>


           </div>
           <div className='order_details'>
             
              {renderedOrders}
              <div className='orderes_info'>
                <div className='payment'>
                  <div>Total : 300 $</div>
                  <div>Paid by paypal</div>
                </div>
                <div className='status'>
                  <div>Status : Shipped</div>
                  <div className='date'>1/1/2022</div>
                </div>
              </div>
          </div>
              
         </div>;
};

export default CurrentOrders;
