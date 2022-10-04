import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiCheckSquare} from 'react-icons/fi'
import {ImCheckboxUnchecked} from 'react-icons/im'
import ContactSection from '../ContactSection';


const Visa = () => {
  const[check,setCheck]=useState(true)
  return <div>
    <form>

   <div className='header'>
   <Link to='/pay'>
      <img className='active' src='/images/payment/visa.png' />
    </Link>
     <Link to='/pay/paypal'>
     <img src='/images/payment/paypal.png' />
     </Link>
     <Link to='/pay/applepay'>
      <img src='/images/payment/pay.png' />
     </Link>


   </div>
   <div className='body'>
    <div className='input'>
      <label>Card Number</label>
      <input placeholder='1234 5678 3456 2456' />
    </div>
    <div className='input'>
      <label>CARDHOLDER NAME</label>
      <input placeholder='Jasmine Hoffman' />
    </div>
    <div className='inputline'>
      <div className='input inline'>
        <label>EXPIRE DATE</label>
        <input placeholder='30/24' />
      </div>
      <div className='input inline sec'>
        <label>CVV</label>
        <input placeholder='123' />
      </div>
    </div>
    <div className='savecard' >
                       <span  onClick={()=>setCheck(!check)}className='icon'>{ check ?<FiCheckSquare /> :<ImCheckboxUnchecked />}</span>
                       Save Card
                       </div> 
   </div>
   <div className='cost'>
   Total Cost : 300 $
   </div>
   <input  className='confrim' type='submit' value='Confirm Checkout' />
   </form>
   <ContactSection />
  </div>;
};

export default Visa;
