import React,{useState} from 'react';
import{IoMdRadioButtonOff,IoMdRadioButtonOn} from 'react-icons/io'
import {FiCheckSquare} from 'react-icons/fi'
import {ImCheckboxUnchecked} from 'react-icons/im'
import { Link } from 'react-router-dom';

const ReturnForm = () => {
    const[returnway,setReturnway]=useState(true)
    const[check,setCheck]=useState(false)
  return <div className='log_box'>
            <div className='title'>
               <div className='line right'></div>
               Return Request
               <div className='line'></div>
           </div>
           <form>
               <textarea  placeholder='Tell us the reason you returning this product'/>
               <input className='input'  placeholder='Address' />
            
               <span className='polices' onClick={()=>setCheck(!check)}>
                        <span className='icon'>{ check ?<FiCheckSquare /> :<ImCheckboxUnchecked />}</span>
                        By submitting this request, you agree to our <Link to='/'><span className='link'>Returning Policies</span></Link>
                </span> 
                <br/>
                <input className='submit' type='submit' />
            
           </form>


  </div>;
};

export default ReturnForm;
