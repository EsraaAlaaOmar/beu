import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addCollection} from '../../store/collectionsSlice'
import {AiFillCamera} from 'react-icons/ai'
const AddCollection = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
       title:'',
       image:''
     
    })
    const {title, image} =formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const imgChange=e=>setFormData({...formData, image: e.target.files[0]})
    const onSubmit= async e => {
        e.preventDefault()
        dispatch(addCollection(formData))
        navigate("/dashbord/collections")
    }
  return (
    <div className='addpage'>
        <div className='opacity'>
          <div className='add'>
          <h4>New Collection</h4>
            <form  onSubmit = {e=>onSubmit(e)}>
            <div className='input-div'>
                <label>Collection Title</label>
                <input type='text' placeholder='Collection Title' name='title' value={title} onChange={e=>onChange(e)} required/>
            </div>
            <div className='input-div'>
                <label> collection photo </label>
                <input className='none' id='collection_img' type='file'  placeholder='add photo'  name='image'  onChange={e=>imgChange(e)} required/>
                <div className='img-box'>
                    add photo
                    <span className='oposite' onClick={()=>document.getElementById('collection_img').click()}><AiFillCamera /></span>
                </div>
            </div>
            <div className='buttons'>
               
                    <input type='submit' className='confrim' value='Confirm' />
                <Link to='/dashbord/collections'>
                      <button className='discard'>Discard</button>
                </Link>
                
            </div>
            </form>
          </div>
        </div>

    </div>
  )
}

export default AddCollection