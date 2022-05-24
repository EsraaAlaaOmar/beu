import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='log_box'>
            <div className='title'>SIGN UP</div>
           <form>
               <input placeholder='Full name' type='text' />
               <br/>
               <input placeholder='@ email' type='email' />
               <br/>
               <input placeholder='Phone Number' type='tel'/>
               <br/>
               <input placeholder='Address' type='text' />
               <br/>
               <input placeholder='Password' type='password' />
               <br/>
               <input placeholder='Confirm Password' type='password' />
               <div className='log_privacy'>
               By signing up, you agree to our <Link to='/'><span> privacy policy <span> &#38;  </span> terms of conditions</span></Link>
               </div>
               <Link to='/log/phoneconfirmation'>
                   <input className='submit' type='submit' value='Signup' />
               </Link>
               

           </form>
           <div className='option'>
                <Link to='/log/login'>
                Have Account ? LOGIN
                </Link>
           </div>
        </div>
    )
}

export default SignUp
