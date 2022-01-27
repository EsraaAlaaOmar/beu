import React from 'react';
import { Link } from 'react-router-dom';

const EdieProfile = () => {
  return <div className='opacity'>
       <div className='edite_box'>
          
           <form>
               <div className='inputs'>
                    <input placeholder='Full name' type='text' />
                    <br/>
                    <input placeholder='@ email' type='email' />
                    <br/>
                    <input placeholder='Phone Number' type='tel'/>
                    <br/>
                    <input placeholder='Address' type='text' />
               </div>
              
               <Link to='/profile/'>
                   <input className='butn' type='submit' value='Save' />
               </Link>
               <br/>
               <Link  to='/profile/'>
                 <button className='butn discard'>Discard</button>
               </Link>

               

           </form>
          
        </div>
  </div>;
};

export default EdieProfile;
