import React from 'react'
import {Link} from 'react-router-dom'
const HeaderButtons = () => {
    return (
        <div className='land_head_buttons'>
            <div className='explore'>
               Explore new collections
            </div>
          <Link to='/log/sign'>
          <div className='signup'>
               Signup Now
            </div>
          </Link>
            
        </div>      
    )
}

export default HeaderButtons
