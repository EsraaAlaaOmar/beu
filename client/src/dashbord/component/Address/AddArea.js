import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const AddArea = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
      name: '',
      country_id: '',  
  })

  const {name, country_id }=formData
  const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit= async e => {
      e.preventDefault()
    //  dispatch(addCity(formData))
       navigate("/dashbord/addresses")
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
          </div>
        </div>

    </div>
  )
}

export default AddArea