import React,{useState} from 'react'
import {BsFillCameraFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {clearstate} from '../../store/LandingPageSlice'
import { useDispatch } from 'react-redux';
const SectionImage = ({img, sectionId, imageClass}) => {
  const dispatch = useDispatch()
    const [imageView,setImageView] = useState(img&&img.image)
  return (
    <div className={`img ${imageClass&&imageClass}`}>
   
    <div className='overlayer'>   </div>
    
    <div className='img-text'>
    <Link to={`/dashbord/landingpage/uploadimage/${sectionId}`} state={{img:img}}><span onClick={() => dispatch(clearstate())}><BsFillCameraFill /></span></Link> 
      <div>385 * 478</div>
    </div>
      <img  alt='section 1 image'
      src={imageView}
      />
   
  </div>
  )
}

export default SectionImage