import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return  <div>
      
      <div className='log_box forget'>
                <div className='title'>Forget your Password</div>
                <p>Enter your email to send you a confirmation message</p>
            <form>
                <input placeholder='@ email' type='email' />
                
               
             
            
              
               
                <input className='submit' type='submit' value='Continue' />
                

            </form>
        
    </div>
  </div>;
};

export default ForgetPassword;
