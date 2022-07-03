import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiCheckSquare} from 'react-icons/fi'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import ContactSection from '../ContactSection';

const PayPal = () => {
const[check,setCheck]=useState(true)
  return <div>
        <form>

<div className='header'>
      <Link to='/pay'>visa</Link>
     <Link to='/pay/paypal'>paypal</Link>
     <Link to='/pay/applepay'>pay</Link>

</div>
<div className='body'>
 <div className='input'>
   <label>Email</label>
   <input placeholder='francine.pierce@mail.com' />
  <span className='abs'>
   <img src='https://image.freepik.com/free-photo/pretty-smilin…sually-looking-with-satisfaction_176420-15187.jpg' />
    <span><IoIosCheckmarkCircle /></span>
  </span> 
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

export default PayPal;