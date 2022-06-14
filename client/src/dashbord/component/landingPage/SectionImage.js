import React,{useState} from 'react'
import {BsFillCameraFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const SectionImage = ({img, sectionId, imageClass}) => {
    const [imageView,setImageView] = useState(img&&img.image)
  return (
    <div className={`img ${imageClass&&imageClass}`}>
   
    <div className='overlayer'>   </div>
    
    <div className='img-text'>
    <Link to={`/dashbord/landingpage/uploadimage/${sectionId}`} state={{img:img}}><BsFillCameraFill /></Link> 
      <div>385 * 478</div>
    </div>
      <img  alt='section 1 image'
      src={imageView}
      />
   
  </div>
  )
}

export default SectionImage