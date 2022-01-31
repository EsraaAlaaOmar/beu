import React from 'react';
import { Link } from 'react-router-dom';

const Contactus = () => {
    return (
        <div className='log_box'>
                <div className='title'>Contact Us</div>
            <form>
                <input placeholder='Full name' />
                <br/>
                <input placeholder='@ email' type='email' />
                <br/>
                <input  type='tel' placeholder='Phone Number'/>
                <br/>
               
               <textarea placeholder='Feel free to tell us about the problem ..' />
                
              
              
                <Link to='/'>
                <input className='submit' type='submit' value='Send' />
                </Link>
                

            </form>
          
    </div>
    )
};

export default Contactus;
