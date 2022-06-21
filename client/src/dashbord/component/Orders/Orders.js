import React,{useEffect} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/order.svg';

import useres from '../../data/users.json'
import Pagination from '../reusable/Pagination';
import AddOrder from './AddOrder';
import Nav from '../reusable/Nav'
import {getOrders} from '../../store/orderSlice'
import { useSelector, useDispatch } from 'react-redux';
import OrderRow from './OrderRow';
const Orders = ({setActiveIndex}) => {
  setActiveIndex()
  const dispatch = useDispatch()
  const {orderList, isLoading} =useSelector((state)=> state.orders)
  useEffect(() =>{
    dispatch(getOrders())
  

  },[dispatch])

  const renderedOrders = orderList.map((order=><OrderRow  order={order}/>))
  return (
    <>
      <Nav  first_link='Active' second_link='All'  first_link_url='/dashbord/orders'   second_link_url='/dashbord/orders' />
      
      {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
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
              
                {/* <Pagination maplist={useres} orderList={orderList} /> */}
          
                <table className='Table'>
            <thead>
            <tr className="head">
                <th>User</th>
                <th>ID</th>
                <th>PRODUCTs</th>
                {/* <th>ITEMS</th>
                <th>SIZE</th>
                <th>COLORS</th> */}
                <th>SHIPPING STATUS</th>
                <th>PRICE</th>
                <th>PAYMENT METHOD</th>
                <th></th>
                
            </tr>
            </thead>
            <tbody>
                 {renderedOrders}
            </tbody>
          </table>

        </div>
        <Routes>
                <Route path="/add" element={<AddOrder />} exact /> 
        </Routes>
    </div>
    }
</>
);
};

export default Orders;
