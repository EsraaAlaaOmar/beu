import React, { useState, useEffect } from 'react'
import{addCity} from '../../store/Address/counteriesSlice'
import { Link, useNavigate,useLocation, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const AddCity = ({setFlashmsg}) => {
  let location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {cityadded} =useSelector((state)=>state.countries)
  //  const[countryIdd,setCountryIdd] =useState(countryId.countryId)
    const [formData, setFormData] = useState({
        name: '',
        country_id: location.state.countryId,  
    })
  
    const {name, country_id }=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
       dispatch(addCity(formData))
       setFlashmsg(true)
  
    }
  return (
    <div className='addpage'>
        {console.log(`id is`)}
        <div className='opacity'>
          <div className='add'>
          <h4>New city</h4>
            <form  onSubmit = {e=>onSubmit(e)}>
            <div className='input-div'>
                <label>City</label>
                <input type='text' placeholder='City' name='name' value={name} onChange={e=>onChange(e)} required/>
            </div>
           
            <div className='buttons'>
               
                    <input type='submit' className='confrim' value='Confirm' />
                <Link to='/dashbord/addresses'>
                      <button className='discard'>Discard</button>
                </Link>
                
            </div>
            </form>
            {cityadded && <Navigate to='/dashbord/addresses' />}
          </div>
        </div>

    </div>
  )
}

export default AddCity