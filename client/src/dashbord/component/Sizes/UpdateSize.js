import React, { useState } from 'react'
import { Link, useNavigate,Navigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {editeSize} from '../../store/sizesSlice'

const UpdateSize = ({setFlashmsg}) => {
    let location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
  const {updated} =useSelector((state)=>state.sizes)
    const [size, setSize]=useState(location.state.size.size)
    const onChange=e=>setSize(e.target.value)
    const onSubmit= async e => {
        e.preventDefault()
        setFlashmsg(true)
       dispatch(editeSize({size:size,size_id:location.state.size.id}))
      
       
    }
  return (
    <div>
        <div className='addpage'>
        <div className='opacity'>
          <div className='add'>
          <h4>Update Size</h4>
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
            {updated&&<Navigate to='/dashbord/sizes' />}
          </div>
        </div>

    </div>
    </div>
  )
}

export default UpdateSize