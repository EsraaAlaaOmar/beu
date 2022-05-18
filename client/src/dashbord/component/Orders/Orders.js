import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/order.svg';

import useres from '../../data/users.json'
import Pagination from '../reusable/Pagination';
import AddOrder from './AddOrder';
import Nav from '../reusable/Nav'
const Orders = ({setActiveIndex}) => {
  setActiveIndex()
  return (
    <>
      <Nav  first_link='Active' second_link='All'  first_link_url='/dashbord/orders'   second_link_url='/dashbord/orders' />
     
      <div className="box">  
      <div className='alert'>
        This Page not implemented yet because no payment gateway integrated
        the content below is just a demo content to show the screen design
              </div>
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
