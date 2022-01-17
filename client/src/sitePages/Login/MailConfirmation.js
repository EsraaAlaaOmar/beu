import React from 'react'

const MailConfirmation = () => {
    return (
        <div>
              <div className='log_box'>
                <div className='title'>Confirm your email</div>
                <p>
                Enter the confirmation code sent to your email
                </p>
            <form>
                <input placeholder='6 digit numbers' type='text' />
                <div className='time'>
                01:23
                <span>Resend</span>

                </div>
               
                
                <input className='submit' type='submit' value='Confirm' />
            </form>
         
    </div>
        </div>
    )
}

export default MailConfirmation
