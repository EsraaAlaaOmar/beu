import React from 'react'
import { ReactComponent as logo } from '../../images/order.svg';
const TransactionOrder = ({order}) => {
  return (
    <div className="order">
        <span className="icon"><logo  style= {{fill:'#2D62ED'}} /></span>    
        You received a new order from
        <img src={order&&order.customer&&order.customer.avatar} />
        {order&&order.customer&&order.customer.name}
        <button>View</button>
    </div>
    )
}

export default TransactionOrder