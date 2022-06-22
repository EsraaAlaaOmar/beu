import React from 'react'
import {BsBell} from 'react-icons/bs'

import TransactionOrder from './TransactionOrder';
import TransactionPayment from './TransactionPayment';

const Transaction = ({order}) => {
  return (
    <div className="transiction">  
        <span className="icon">  </span>    
        <span className="title-text"> <BsBell /> Transaction Summary</span>
        <div className="info-div">
        <TransactionOrder order={order} />
         <TransactionPayment order={order} />
         
        

        </div>
       
    </div>
  )
}

export default Transaction