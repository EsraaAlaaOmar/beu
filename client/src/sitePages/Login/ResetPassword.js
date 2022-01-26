import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return <div>
       <div className='log_box reset'>
                <div className='title'>Reset your Password</div>
               
            <form>
                <input placeholder='Password' type='password' />
                <input placeholder='Confirm Password' type='password' />
                
               
             
            
              
               <Link to='/log'> 
                <input className='submit' type='submit' value='Confirm' />
                </Link>
                

            </form>
        
    </div>
  </div>;
};

export default ResetPassword;
