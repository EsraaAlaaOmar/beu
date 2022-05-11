import React from 'react'
import {BsBell} from 'react-icons/bs'

import TransactionOrder from './TransactionOrder';
import TransactionPayment from './TransactionPayment';

const Transaction = () => {
  return (
    <div className="transiction">  
        <span className="icon">  </span>    
        <span className="title-text"> <BsBell /> Transaction Summary</span>
        <div className="info-div">
        <TransactionOrder />
         <TransactionPayment />
         
        

        </div>
       
    </div>
  )
}

export default Transaction