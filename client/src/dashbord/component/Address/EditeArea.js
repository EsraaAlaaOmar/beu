import React,{useState} from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { editeArea } from '../../store/Address/counteriesSlice';

const EditeArea = ({cityId,countryId}) => {
  let location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
      name: '',
      country_id: location.state.countryId,  
      city_id: location.state.cityId,  
      area_id: location.state.area.id,
  })

  const {name  }=formData
  const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit= async e => {
      e.preventDefault()
     dispatch( editeArea(formData))
    
  }

  return (
    <div className='addpage'>
        {console.log(`id is`)}
        <div className='opacity'>
          <div className='add'>
          <h4>Edite area</h4>
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
          </div>
        </div>

    </div>
  )
}



export default EditeArea