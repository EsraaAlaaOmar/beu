import React from 'react';

const ResetCode = () => {
  return <div>
       <div className='log_box forget'>
                <div className='title'>Reset your Password</div>
                <p>Enter the confirmation code sent to your email</p>
            <form>
                <input placeholder='6 digit numbers' />
                
               
             
            
              
                <div className='time'>
                01:23
                <span>Resend</span>

                </div>
                <input className='submit' type='submit' value='Confirm' />
                

            </form>
        
    </div>

  </div>;
};

export default ResetCode;
