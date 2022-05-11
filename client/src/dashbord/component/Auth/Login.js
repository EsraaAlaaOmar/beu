import React,{useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {login} from '../../store/authslice'


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loggedIn}= useSelector((state)=>state.auth)
    const [formData, setFormData] = useState({
  
        email: '',
        password: '',
      
    })
    const { email, password}=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit=async e=>{
        e.preventDefault()
       
        dispatch(login(formData))
        !sessionStorage.token && navigate('/')
        

       
        
    }
  return (
    <div className="box">
          <h1 className="large text-primary">Sign in</h1>
      
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
        
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>onChange(e)} />
         
            
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} onChange={e=>onChange(e)}
          />
        </div>
        
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>

    </div>
  )
}

export default Login