import React,{useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {userRegister} from '../../store/authslice'

const AddUser = ({setFlashmsg}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {added} =useSelector((state)=> state.users)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password:'',
     
    })
    const {name, email, password, confirm_password}=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
        setFlashmsg(true)
        if(password !== confirm_password){
            alert('password do not match', 'danger')
        }
        else{
           dispatch(userRegister(formData))
           
          
        }
    }
  return (
    <div className='addpage'>
    <div className='opacity'>
      <div className='add'>
        <h4>New User</h4>
        <form  onSubmit = {e=>onSubmit(e)}>
        <div className='input-div'>
            <label> User Name</label>
            <input type='text' placeholder='User Name' name='name' value={name} onChange={e=>onChange(e)} required/>
           
        </div>
        <div className='input-div'>
            <label> User Email </label>
            <input type='email'  placeholder='user@mail'  name='email' value={email} onChange={e=>onChange(e)} required/>
        </div>
        <div className='input-div'>
            <label>Password </label>
            <input type='password'  minLength="6"  name='password' value={password} placeholder='●●●●●●●' onChange={e=>onChange(e)} required/>
        </div>
        <div className='input-div'>
            <label>Confirm Password </label>
            <input type='password'  minLength="6"  name='confirm_password' value={confirm_password} placeholder='●●●●●●●' onChange={e=>onChange(e)} required/>
        </div>

        <div className='buttons'>
            
                <input type='submit' className='confrim' value='Confirm' />
            <Link to='/dashbord/users'>
                  <button className='discard'>Discard</button>
            </Link>
            
        </div>
        </form>
        {added && <Navigate to='/dashbord/users' />}
      </div>
    </div>

</div>
  )
}

export default AddUser