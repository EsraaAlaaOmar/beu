import React from 'react';
import { Link } from 'react-router-dom';

const ResetCode = () => {
  return <div>
       <div className='log_box forget'>
                <div className='title'>Reset your Password</div>
                <p>Enter the confirmation code sent to your email</p>
            <form>
                <input placeholder='6 digit numbers' />
                
               
             
            
              
       {/*
         <div className='time'>
                01:23
                <span>Resend</span>

                </div>
*/}
                <Link to='/log/resetpassword'> 
                <input className='submit' type='submit' value='Confirm' />
                </Link>
                

            </form>
        
    </div>

  </div>;
};

export default ResetCode;
