import React from 'react'
import { Link } from 'react-router-dom'

const MailConfirmation = () => {
    return (
        <div>
              <div className='log_box'>
                <div className='title'>CONFIRM YOUR EMAIL</div>
                <p>
                Enter the confirmation code sent to your email
                </p>
            <form>
                <input placeholder='6 digit numbers' type='text' />
                <div className='time'>
                01:23
                <span>Resend</span>

                </div>
               
                <Link to='/'>
                  <input className='submit' type='submit' value='Confirm' />
                </Link>
            </form>
         
    </div>
        </div>
    )
}

export default MailConfirmation
