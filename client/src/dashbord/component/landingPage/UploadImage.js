import React,{useState,useCallback} from 'react'
import { Link } from 'react-router-dom'
import Cropper from 'react-easy-crop'

const UploadImage = () => {

  const [imageUrl,setImageUrl] = useState('https://img.freepik.com/free-photo/portrait-cheerful-middle-aged-35-woman-showing-thumbs-up-approval-likes-agree-praise-great-work-nice-job-recommending-smth-standing-against-white-background_176420-45725.jpg?t=st=1652347028~exp=1652347628~hmac=aae0584d838ad7f69a24358d78930a3a4b1e1ecd986e35b21844def401447838&w=996')
  //preview uploaded image

  const changeImage = e => {
      const [file] =e.target.files
      if (file) {
     
        setImageUrl(URL.createObjectURL(file))
      }
    }

  //return croped image data
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])
  return (
    <div  className="upload-page addpage">
        <div className='opacity'></div>
      <div className='add'>
          <div className='title'>Preview Photo Before Uploading</div>
          <div className='change-image' onClick={()=> document.getElementById("my_file").click()}>Change Image</div>
        <input type="file" id="my_file" style={{display: "none"}}  onChange={(e)=>{changeImage(e)}} />
             <div className='img-container'>
       <Cropper
          image={imageUrl}
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