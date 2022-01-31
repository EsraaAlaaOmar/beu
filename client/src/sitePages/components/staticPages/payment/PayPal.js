import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiCheckSquare} from 'react-icons/fi'
import {ImCheckboxUnchecked} from 'react-icons/im'


const PayPal = () => {
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
   <label>Email</label>
   <input placeholder='francine.pierce@mail.com' />
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

export default PayPal;