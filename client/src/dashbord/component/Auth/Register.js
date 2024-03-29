import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import {adminRegister} from '../../store/authslice'
const Register = () => {
  const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password:'',
        avatar:''
    })
    const {name, email, password, confirm_password,avatar}=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
        if(password !== confirm_password){
            alert('password do not match', 'danger')
        }
        else{
           dispatch(adminRegister(formData))
          
        }
    }
    
  return (
    <div className='box'>
     <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit = {e=>onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="file" placeholder="upload image" name="avatar" value={avatar} onChange={e=>onChange(e)} />
         
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            minLength="6"
            value={confirm_password} onChange={e=>onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
      Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  )
}

export default Register