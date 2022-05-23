import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CurrentOrders from './CurrentOrders';
import {FaShoppingBag} from 'react-icons/fa'
import PrevOrders from './PrevOrders';
import ReturnedOrders from './ReturnedOrders';

const Orders = () => {
  return <div className='orders'>
         <div className='header'>
                <div className='your_orders your_active' > <Link to='/profile'> <span className='bag'><FaShoppingBag /></span> Your Orders</Link> </div> 
             
          </div>
              <Routes>
                <Route path="/" element={<CurrentOrders />} exact />
                <Route path="/prev" element={<PrevOrders />} exact />
                <Route path="/returned" element={<ReturnedOrders />} exact />
                
               </Routes>
  </div>;
};

export default Orders;
