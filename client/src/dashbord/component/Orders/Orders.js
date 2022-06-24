import React,{useEffect, useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/order.svg';

import useres from '../../data/users.json'
import Pagination from '../reusable/Pagination';
import AddOrder from './AddOrder';
import Nav from '../reusable/Nav'
import {getOrders} from '../../store/orderSlice'
import { useSelector, useDispatch } from 'react-redux';
import OrderRow from './OrderRow';
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
import OrderProducts from '../reusable/OrderProducts';
const Orders = ({setActiveIndex}) => {
  setActiveIndex()
  const dispatch = useDispatch()
  const {orderList, isLoading} =useSelector((state)=> state.orders)
  useEffect(() =>{
    dispatch(getOrders())
  

  },[dispatch])

  //info flashmsg state
  const[infoflashmsg,setInfoFlashmsg] = useState(false)


  const renderedOrders = orderList.map((order=><OrderRow  order={order} setInfoFlashmsg={setInfoFlashmsg}/>))



  return (
    <>
      <Nav   />
      
      {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
      <div className="box">  
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">Orders</span>
          <div className="table-box">

          {infoflashmsg && <FlashMsg 
                title="Still Under Development !"
                img={'/images/msgIcons/info.svg'}
                setFlashmsg={setInfoFlashmsg}
                icontype='info-icon'
                />}

              <div className="oposite">
                 
                  {/* <Link to='/dashbord/orders/add'> */}
                    <button onClick={()=>setInfoFlashmsg(true)}>+ Add New</button>
                

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
                <Route path="/products" element={<OrderProducts />} exact /> 

        </Routes>
    </div>
    }
</>
);
};

export default Orders;
