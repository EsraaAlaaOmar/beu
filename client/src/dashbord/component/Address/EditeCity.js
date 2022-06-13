import React, { useState, useEffect } from 'react'
import{editeCity} from '../../store/Address/counteriesSlice'
import { Link, useNavigate,useLocation, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const EditeCity = ({setFlashmsg}) => {
  let location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {cityUpdated} =useSelector((state)=>state.countries)
    const {countriesList} =useSelector((state)=>state.countries)
    const cities=countriesList.find(country=>country.id==location.state.countryId)
  
    const [formData, setFormData] = useState({
        name: location.state.city.name,
        oldName: location.state.city.name,
        country_id: location.state.countryId,  
        city_id:location.state.city.id, 
        cities:cities
        
    })
  console.log(formData)
    const {name, country_id }=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
       dispatch(editeCity(formData))
       setFlashmsg(true)
  
    }
  return (
    <div className='addpage'>
        {console.log(`id is`)}
        <div className='opacity'>
          <div className='add'>
          <h4>Edite city</h4>
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
            {cityUpdated && <Navigate to='/dashbord/addresses' />}
          </div>
        </div>

    </div>
  )
}

export default EditeCity
