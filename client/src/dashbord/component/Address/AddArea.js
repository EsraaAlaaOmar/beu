import React,{useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addArea } from '../../store/Address/counteriesSlice';

const AddArea = ({cityId,countryId,setFlashmsg}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {areaAdded} =useSelector((state)=>state.countries)
  const [formData, setFormData] = useState({
      name: '',
      country_id: countryId,  
      city_id: cityId,  
  })

  const {name  }=formData
  const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit= async e => {
      e.preventDefault()
     dispatch( addArea(formData))
     setFlashmsg(true)
    
  }

  return (
    <div className='addpage'>
        {console.log(`id is`)}
        <div className='opacity'>
          <div className='add'>
          <h4>New area</h4>
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
            {areaAdded&& <Navigate to='/dashbord/addresses' />}
          </div>
        </div>

    </div>
  )
}

export default AddArea