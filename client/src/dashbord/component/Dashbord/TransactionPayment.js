import React from 'react'
import { ReactComponent as Logo } from '../../images/finance.svg';
const TransactionPayment = ({order}) => {
  return (
    <div className='payment'>
    <span className="icon"><Logo  style= {{fill:'#2D62ED'}} /></span>  
    You received a new payment  <span className="yello">{order&&order.total_price} $</span>from Order number # {order && order.id}
    <button>View</button>
      
   </div>
  )
}

export default TransactionPayment