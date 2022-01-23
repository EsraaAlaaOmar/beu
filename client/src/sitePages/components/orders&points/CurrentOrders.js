import React from 'react';


import OneOrder from './OneOrder';
const CurrentOrders = () => {
  return <div className='satue'>
            <div className='orders_status_header'>
              <div className='section active'>
              <span>1</span> Current
              </div>
              <div className='section'>
              <span>2</span> Previous
              </div>

              <div className='section'>
              <span>3</span> Returned
              </div>


           </div>
           <div className='order_details'>
             
              <OneOrder />
              <OneOrder />
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
