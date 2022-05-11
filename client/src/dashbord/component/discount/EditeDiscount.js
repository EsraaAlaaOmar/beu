import React,{useState} from 'react'
import { Link ,useNavigate, useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addDiscount } from '../../store/discountslice';
import {editeDiscount} from '../../store/discountslice'

const EditeDiscount = () => {
  let location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    start_at: location.state.discont.start_at,
    end_at: location.state.discont.end_at,
    code: location.state.discont.code,
    limit:location.state.discont.limit, 
    percentage:location.state.discont.percentage.replace("%", ""),
    discount_id:location.state.discont.id,
    id:location.state.discont.id
  
})

const {start_at, end_at, code,limit, percentage}=formData
const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
const onSubmit=async e=>{
    e.preventDefault()
   
    dispatch(editeDiscount(formData))
    navigate("/dashbord/discount")

   
    
}
  return (
    <div className='addpage'>
    <div className='opacity'>
      <div className='add'>
        <form onSubmit={(e)=>onSubmit(e)}>
        <h4>Update Discount</h4>
        <div className='input-div'>
            <label> Promo Code</label>
            <input type='text' placeholder='Promo Code' name='code' value={code}  onChange={e=>onChange(e)} required/>
           
        </div>
        <div className='input-div'>
            <label> percentage</label>
            <input type='text' placeholder='percentage' name='percentage' value={percentage}  onChange={e=>onChange(e)} required/>
           
        </div>
        
        <div className='input-div'>
            <label>limit</label>
            <input type='text' placeholder='limit' name='limit' value={limit}  onChange={e=>onChange(e)} required/>
           
        </div>
        
        
        <div className='input-div'>
            <label> Start Date </label>
            <input type='text'  placeholder="Start Date" onFocus={(e)=>e.target.type='date'} name='start_at' value={start_at}  onChange={e=>onChange(e)}  required/>
        </div>
        <div className='input-div'>
            <label>End Date </label>
            <input type='text' placeholder='End Date' onFocus={(e)=>e.target.type='date'} name='end_at' value={end_at}   onChange={e=>onChange(e)} required/>
        </div>
        <div className='buttons'>
            
                <input className='confrim' type='submit' value='Confirm' />
        
            <Link to='/dashbord/discount'>
                  <button className='discard'>Discard</button>
            </Link>
        </div>
      </form> 
      </div>
    </div>

</div>
  )
}

export default EditeDiscount