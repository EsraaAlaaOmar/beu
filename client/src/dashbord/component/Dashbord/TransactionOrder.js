import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as logo } from '../../images/order.svg';
const TransactionOrder = ({order}) => {
  return (
    <div className="order">
        <span className="icon"><logo  style= {{fill:'#2D62ED'}} /></span>    
        You received a new order from
        <img src={order&&order.customer&&order.customer.avatar} />
        {order&&order.customer&&order.customer.name}
     <Link to='/dashbord/orderproduct' state={{products:order&&order.products, link:'/dashbord',orderId:order&&order.id}} style={{float:'right'}} >   <button>View</button></Link>
    </div>
    )
}

export default TransactionOrder