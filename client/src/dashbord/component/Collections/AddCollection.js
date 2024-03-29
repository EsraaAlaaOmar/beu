import React,{useState,useEffect, useRef} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addCollection} from '../../store/collectionsSlice'
import {AiFillCamera} from 'react-icons/ai'
import { useSelector } from 'react-redux';
// use ref  function 
function useOutsideAlerter(ref,navigate) {
  useEffect(() =>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        
          navigate(`/dashbord/collections`)
      }
    } 
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    
  }}, [ref]);
}

const AddCollection = ({setFlashmsg}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {collectionadded} =useSelector((state)=>state.collections)
    //use ref 
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, navigate);
    
    const [formData, setFormData] = useState({
       title:'',
       image:null
     
    })
    const {title, image} =formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const imgChange=e=>setFormData({...formData, image: e.target.files[0]})
    const onSubmit= async e => {
        e.preventDefault()
        dispatch(addCollection(formData))
        setFlashmsg(true)
     
    }
  return (
    <div className='addpage'>
        <div className='opacity'>
          <div className='add'  ref={wrapperRef}>
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
                {!image?'add photo':'photo Added '}
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
            {  collectionadded &&   <Navigate to="/dashbord/collections" />}
          </div>
        </div>

    </div>
  )
}

export default AddCollection