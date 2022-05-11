
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addCountry} from '../../store/Address/counteriesSlice'
const AddCountry = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        phone_code :'', 
        phone_length:''
      
    })
    const {name, code,phone_code, phone_length}=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
       dispatch(addCountry(formData))
        navigate("/dashbord/addresses")
    }
  return (
    <div className='addpage'>
        <div className='opacity'>
          <div className='add'>
          <h4>New Country</h4>
            <form  onSubmit = {e=>onSubmit(e)}>
            <div className='input-div'>
                <label>Country</label>
                <input type='text' placeholder='Country' name='name' value={name} onChange={e=>onChange(e)} required/>
            </div>
            <div className='input-div'>
                <label>country code</label>
                <input type='text' placeholder='Country code' name='code' value={code} onChange={e=>onChange(e)} required/>
            </div>
            <div className='input-div'>
                <label>Phone Code</label>
                <input type='text' placeholder='Phone Code' name='phone_code' value={phone_code} onChange={e=>onChange(e)} required/>
            </div>
            <div className='input-div'>
                <label>phone length</label>
                <input type='text' placeholder='phone length' name='phone_length' value={phone_length} onChange={e=>onChange(e)} required/>
            </div>
         
            <div className='buttons'>
               
                    <input type='submit' className='confrim' value='Confirm' />
                <Link to='/dashbord/addresses'>
                      <button className='discard'>Discard</button>
                </Link>
                
            </div>
            </form>
          </div>
        </div>

    </div>
  )
}

export default AddCountry