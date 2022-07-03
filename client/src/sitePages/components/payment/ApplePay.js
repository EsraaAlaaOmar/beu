import React from 'react';
import {BsApple} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import ContactSection from '../ContactSection';

const ApplePay = () => {
  return <div>
      <div className='header'>
    <Link to='/pay'>visa</Link>
     <Link to='/pay/paypal'>paypal</Link>
     <Link to='/pay/applepay'>pay</Link>

   </div>
     <div className='cost'>
   Total Cost : 300 $
   </div>
   <button><span> <BsApple /> </span>Confirm Checkout with Apple-pay</button> 
   <ContactSection/> 
  </div>;
};

export default ApplePay;
