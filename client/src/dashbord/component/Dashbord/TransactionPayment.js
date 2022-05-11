import React from 'react'
import { ReactComponent as Logo } from '../../images/finance.svg';
const TransactionPayment = () => {
  return (
    <div className='payment'>
    <span className="icon"><Logo  style= {{fill:'#2D62ED'}} /></span>  
    You received a new payment from <span className="yello">125 $</span> Order number #25847
    <button>View</button>
      
   </div>
  )
}

export default TransactionPayment