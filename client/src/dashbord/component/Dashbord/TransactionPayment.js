import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/finance.svg';
const TransactionPayment = ({order}) => {
  return (
    <div className='payment'>
    <span className="icon"><Logo  style= {{fill:'#2D62ED'}} /></span>  
    You received a new payment  <span className="yello">{order&&order.total_price} $</span>from Order number # {order && order.id}
    <Link to='/dashbord/orderproduct' state={{products:order&&order.products, link:'/dashbord',orderId:order&&order.id}} style={{float:'right'}} > <button>View</button></Link>
      
   </div>
  )
}

export default TransactionPayment