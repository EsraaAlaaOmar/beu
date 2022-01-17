import React from 'react'
import { Link } from 'react-router-dom'

const PhoneConfirmation = () => {
  
    return (
        <div className='log_box'>
                <div className='title'>Confirm your phone number</div>
                <p>
                Enter the confirmation code sent to your phone number
                </p>
            <form>
                <input placeholder='6 digit numbers' type='text' />
                <div className='time'>
                01:23
                <span>Resend</span>

                </div>
               
                
                <input className='submit' type='submit' value='Continue' />
            </form>
         
    </div>
    )
}

export default PhoneConfirmation
