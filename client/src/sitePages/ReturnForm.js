import React,{useState} from 'react';
import{IoMdRadioButtonOff,IoMdRadioButtonOn} from 'react-icons/io'
import {FiCheckSquare} from 'react-icons/fi'
import {ImCheckboxUnchecked} from 'react-icons/im'

const ReturnForm = () => {
    const[returnway,setReturnway]=useState(true)
    const[check,setCheck]=useState(false)
  return <div className='fav return_page'>
            <div className='title'>
               <div className='line right'></div>
               Return Request
               <div className='line'></div>
           </div>
           <form>
               <textarea  placeholder='Tell us the reason you returning this product'/>
               <input className='input'  placeholder='Address' />
               <div className='return'>
              <div onClick={()=>setReturnway(true)}> <span className='icon'>{returnway?<IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}</span> Return money to credit <span>100 $</span></div>
              <div onClick={()=>setReturnway(false)}> <span className='icon'>{!returnway?<IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}</span> Save money as points <span>300 <span>points</span></span></div>

               </div>
               <span className='polices' onClick={()=>setCheck(!check)}>
                        <span className='icon'>{ check ?<FiCheckSquare /> :<ImCheckboxUnchecked />}</span>
                        By submitting this request, you agree to our 
                        <span className='oposite'>Returning Policies</span>
                </span> 
                <br/>
                <input className='button' type='submit' />
            
           </form>


  </div>;
};

export default ReturnForm;
