import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return  <div>
      
      <div className='log_box forget'>
                <div className='title'>FORGET YOUR PASSWORD</div>
                <p>Enter your email to send you a confirmation message</p>
            <form>
                <input placeholder='@ email' type='email' />
                
               
             
            
              
               <Link to='/log/forgetconfirmation'>
                  <input className='submit' type='submit' value='Continue' />
                </Link>

            </form>
        
    </div>
  </div>;
};

export default ForgetPassword;
