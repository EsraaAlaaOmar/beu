import React from 'react';
import {BsApple} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const ApplePay = () => {
  return <div>
      <div className='header'>
     <Link to='/'>visa</Link>
     <Link to='/'>paypal</Link>
     <Link to='/'>pay</Link>

   </div>
     <div className='cost'>
   Total Cost : 300 $
   </div>
   <button><span> <BsApple /> </span>Confirm Checkout with Apple-pay</button>  
  </div>;
};

export default ApplePay;
