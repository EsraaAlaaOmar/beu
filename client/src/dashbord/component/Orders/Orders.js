import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/order.svg';

import useres from '../../data/users.json'
import Pagination from '../reusable/Pagination';
import AddOrder from './AddOrder';
import Nav from '../reusable/Nav'
const Orders = () => {
  
  return (
    <>
      <Nav  first_link='Active' second_link='All'/>
      <div className="box">  
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">Orders</span>
          <div className="table-box">
              <div className="oposite">
                  <Link to='/dashbord/orders'>
                    <button>Filter</button>
                  </Link>
                  <Link to='/dashbord/orders/add'>
                    <button>+ Add New</button>
                  </Link>

              </div>
              <br/>
              
                <Pagination maplist={useres} />

        </div>
        <Routes>
                <Route path="/add" element={<AddOrder />} exact /> 
        </Routes>
    </div>
</>
);
};

export default Orders;
