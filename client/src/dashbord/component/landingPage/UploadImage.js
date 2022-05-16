import React,{useState,useCallback} from 'react'
import { Link } from 'react-router-dom'
import Cropper from 'react-easy-crop'

const UploadImage = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
window.onload = function() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("scream");
  ctx.drawImage(img, 10, 10);
};
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])
  return (
    <div  className="upload-page addpage">
        <div className='opacity'></div>
      <div className='add'>
          <div className='title'>Preview Photo Before Uploading</div>
          {/* <div className='img-container'>
                    <img  alt='section 1 image'
                      src='https://img.freepik.com/free-photo/portrait-cheerful-middle-aged-35-woman-showing-thumbs-up-approval-likes-agree-praise-great-work-nice-job-recommending-smth-standing-against-white-background_176420-45725.jpg?t=st=1652347028~exp=1652347628~hmac=aae0584d838ad7f69a24358d78930a3a4b1e1ecd986e35b21844def401447838&w=996'
                      />
                   
          </div> */}
             <div className='img-container'>
       <Cropper
          image={'https://img.freepik.com/free-photo/portrait-cheerful-middle-aged-35-woman-showing-thumbs-up-approval-likes-agree-praise-great-work-nice-job-recommending-smth-standing-against-white-background_176420-45725.jpg?t=st=1652347028~exp=1652347628~hmac=aae0584d838ad7f69a24358d78930a3a4b1e1ecd986e35b21844def401447838&w=996'}
          crop={crop}
          cropSize=	{ {width: 200, height: 200 }}
          zoom={zoom}
          zoomWithScroll={true}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
        
    </div>
      <div className="controls">
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(e.target.value)
          }}
          className="zoom-range"
        />

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