import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CurrentOrders from './CurrentOrders';
import {FaShoppingBag} from 'react-icons/fa'

const Orders = () => {
  return <div className='orders'>
         <div className='header'>
                <div className='your_orders your_active' > <Link to='/'> <span className='bag'><FaShoppingBag /></span> Your Orders</Link> </div> 
                <div className='your_points' >  <Link to='/'><span>$</span> Your Points</Link> </div>
          </div>
              <Routes>
                <Route path="/" element={<CurrentOrders />} exact />
                
               </Routes>
  </div>;
};

export default Orders;
