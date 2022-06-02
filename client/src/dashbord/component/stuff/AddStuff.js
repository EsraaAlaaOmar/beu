import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {adminRegister} from '../../store/authslice'

const AddStuff = ({setFlashmsg}) => {

  const dispatch = useDispatch()
  const {added} =useSelector((state)=> state.admins)
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirm_password:'',
      is_superuser:false
   
  })
  const {name, email,is_superuser, password, confirm_password}=formData
  const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
  const onCheckChange=e=>setFormData({...formData, [e.target.name]: e.target.checked})
  const onSubmit= async e => {
      e.preventDefault()
      setFlashmsg(true)
      if(password !== confirm_password){
          alert('password do not match', 'danger')
      }
      else{
         dispatch(adminRegister(formData))
      
        
      }
  }
  return (
    <div className='addpage'>
        <div className='opacity'>
          <div className='add'>
            <h4>New Stuff</h4>
            <form  onSubmit = {e=>onSubmit(e)}>
            <div className='input-div'>
                <label> Stuff Name</label>
                <input type='text' placeholder='Stuff Name' name='name' value={name} onChange={e=>onChange(e)} required/>
            </div>
            <div className='input-div'>
                <label> User Email </label>
                <input type='email'  placeholder='admin@mail'  name='email' value={email} onChange={e=>onChange(e)} required/>
            </div>
         
            
            <div className='input-div'>
                <label>Password </label>
                <input type='password'  minLength="6"  name='password' value={password} placeholder='●●●●●●●' onChange={e=>onChange(e)} required/>
            </div>
            <div className='input-div'>
                <label>Confirm Password </label>
                <input type='password'  minLength="6"  name='confirm_password' value={confirm_password} placeholder='●●●●●●●' onChange={e=>onChange(e)} required/>
            </div>
            <div className='input-div'>
               
               <input type='checkbox' className='checkbox' placeholder='Stuff Name' name='is_superuser' value={is_superuser} onChange={e=>onCheckChange(e)} />
               <label className='check-label'>superuser</label>        
           </div>
              
            <div className='buttons'>
                
                    <input type='submit' className='confrim' value='Confirm' />
                <Link to='/dashbord/stuff'>
                      <button className='discard'>Discard</button>
                </Link>
                
            </div>
            </form>
            {added && <Navigate to='/dashbord/stuff' />}
          </div>
        </div>

    </div>
  )
}

export default AddStuff