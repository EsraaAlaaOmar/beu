import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CurrentOrders from './CurrentOrders';
import {FaShoppingBag} from 'react-icons/fa'
import PrevOrders from './PrevOrders';
import ReturnedOrders from './ReturnedOrders';

const Orders = ({ordersList}) => {
  const currentOrders = ordersList&& ordersList.filter(order=>order.order_status =='In Progress')
  const prevOrders = ordersList&& ordersList.filter(order=>order.order_status =='Completed')
  const returnedOrders = ordersList&& ordersList.filter(order=>order.order_status =='Returned')
  return <div className='orders'>
         <div className='header'>
                <div className='your_orders your_active' > <Link to='/profile'> <span className='bag'><FaShoppingBag /></span> Your Orders</Link> </div> 
             
          </div>
              <Routes>
                <Route path="/" element={<CurrentOrders orders={currentOrders}/>} exact />
                <Route path="/prev" element={<PrevOrders orders={prevOrders}/>} exact />
                <Route path="/returned" element={<ReturnedOrders orders={returnedOrders} />} exact />
                
               </Routes>
  </div>;
};

export default Orders;
