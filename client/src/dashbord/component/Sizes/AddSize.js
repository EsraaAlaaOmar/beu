import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addSize} from '../../store/sizesSlice'
const AddSize = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [size, setSize]=useState('')
    const onChange=e=>setSize(e.target.value)
    const onSubmit= async e => {
        e.preventDefault()
       dispatch(addSize({size:size}))
        navigate("/dashbord/sizes")
    }
  return (
    <div>
        <div className='addpage'>
        <div className='opacity'>
          <div className='add'>
          <h4>New Sizes</h4>
            <form  onSubmit = {e=>onSubmit(e)}>
            <div className='input-div'>
                <label>Size</label>
                <input type='text' placeholder='Size' name='Size' value={size} onChange={e=>onChange(e)} required/>
            </div>
         
            <div className='buttons'>
               
                    <input type='submit' className='confrim' value='Confirm' />
                <Link to='/dashbord/sizes'>
                      <button className='discard'>Discard</button>
                </Link>
                
            </div>
            </form>
          </div>
        </div>

    </div>
    </div>
  )
}

export default AddSize