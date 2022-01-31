import React,{useState} from 'react';
import {FiCheckSquare} from 'react-icons/fi'
import {ImCheckboxUnchecked} from 'react-icons/im'
import { Link } from 'react-router-dom';
const CostInCard = () => {
    const[check,setCheck]=useState(false)
  return <div className='cost'>
      <div className='total'>Total cost</div>
      <div className='price'>300 $</div>
      <div className='code'>
          <input placeholder='enter discount code'/>
          <span className='real_cost'>300$</span>
          <span className='cost_after_code'>250$</span>
         

      </div>
      <div className='points' >
                      <span onClick={()=>setCheck(!check)}>
                         <span className='icon'>{ check ?<FiCheckSquare /> :<ImCheckboxUnchecked />}</span>
                      </span>
                       Use total gained points <span className='yello'>120</span> <span className='gray'>points</span>
                       <div className=''>
      {check &&  <div className='mony'>
          <span className='real_cost'>250$</span>
          <span className='cost_after_code'>200$</span>
        </div>}
         

      </div>
       </div> 

       <div className='order_personal_info'>
           <div className='address'>Detailed address goes here</div>
           <Link to='/card'> <div className='oposite'>Change info</div></Link>
           <div className='phone'>Phone number</div>

       </div>
       <Link to='/payvisa'>
        <button>Continue to Payment</button>
       </Link>


  </div>;
};

export default CostInCard

;
