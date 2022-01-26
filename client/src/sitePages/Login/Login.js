import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FiCheckSquare} from 'react-icons/fi'
import {ImCheckboxUnchecked} from 'react-icons/im'

const Login = () => {
    const[check,setCheck]=useState(false)
    return (
        <div className='log_box'>
                <div className='title'>Login</div>
            <form>
                <input placeholder='@ email' type='email' />
                <br/>
               
                <input placeholder='Password' type='password' />
                <div className='action'>
                   <span className='remember' onClick={()=>setCheck(!check)}>
                       <span className='icon'>{ check ?<FiCheckSquare /> :<ImCheckboxUnchecked />}</span>
                       Remember Me !
                       </span> 
                       <Link to='/log/forget'>
                       <span className='oposite'>
                       Forget Password !
                       </span>
                       </Link>
                </div>
              
                <div className='log_privacy'>
                By signing up, you agree to our <Link to='/'><span> privacy policy <span> &#38;  </span> terms of conditions</span></Link>
                </div>
                <input className='submit' type='submit' value='Login' />
                

            </form>
            <div className='option'>
                    <Link to='/log/sign'>
                    Don't have Account ? Signup
                    </Link>
            </div>
    </div>
    )
}

export default Login
