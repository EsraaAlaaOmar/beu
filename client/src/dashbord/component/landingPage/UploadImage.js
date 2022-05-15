import React from 'react'
import { Link } from 'react-router-dom'
const UploadImage = () => {
  return (
    <div  className="upload-page addpage">
        <div className='opacity'></div>
      <div className='add'>
          <div className='title'>Preview Photo Before Uploading</div>
          <div className='img-container'>
                    <img  alt='section 1 image'
                      src='https://img.freepik.com/free-photo/portrait-cheerful-middle-aged-35-woman-showing-thumbs-up-approval-likes-agree-praise-great-work-nice-job-recommending-smth-standing-against-white-background_176420-45725.jpg?t=st=1652347028~exp=1652347628~hmac=aae0584d838ad7f69a24358d78930a3a4b1e1ecd986e35b21844def401447838&w=996'
                      />
                      <div className='box-border top-left'></div>
                      <div className='box-border top-right'></div>
                      <div className='box-border bottom-left'></div>
                      <div className='box-border bottom-right'></div>
          </div>
          <div className='buttons'>
            <Link to='/dashbord/landingpage'> <button >Confirm</button></Link>  
            <Link to='/dashbord/landingpage'>  <button className='discard'>Discard</button></Link> 
        </div>
      </div>
    </div>
  )
}

export default UploadImage