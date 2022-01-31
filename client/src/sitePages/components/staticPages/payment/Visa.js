import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiCheckSquare} from 'react-icons/fi'
import {ImCheckboxUnchecked} from 'react-icons/im'


const Visa = () => {
  const[check,setCheck]=useState(true)
  return <div>
    <form>

   <div className='header'>
     <Link to='/'>visa</Link>
     <Link to='/'>paypal</Link>
     <Link to='/'>pay</Link>

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
  </div>;
};

export default Visa;
