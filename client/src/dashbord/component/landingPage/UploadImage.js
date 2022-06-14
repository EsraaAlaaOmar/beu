import React,{useState,useCallback} from 'react'
import { Link, useLocation ,useParams } from 'react-router-dom'
import Cropper from 'react-easy-crop'
import resizeImage from './CropImage'
import {editeSection} from '../../store/LandingPageSlice'
import { useDispatch, useSelector } from 'react-redux';
const UploadImage = () => {
  const {isLoading,sectionsList, error } =useSelector((state)=> state.landPage)
  const dispatch = useDispatch()
  const {id}=useParams()
  let location = useLocation()
  const [imageUrl,setImageUrl] = useState( location.state.img.image )
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
  const[desigredWidth, setDesigredWidth] = useState(200)
  const[desigredHeight, setDesigredHeight] = useState(200)

  const[file,setFile]=useState(null)
  console.log(file)
  const callback=(dataURL)=> {console.log( dataURL)}
  
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
  
    resizeImage(imageUrl, croppedAreaPixels.width, croppedAreaPixels.height,croppedAreaPixels.x,croppedAreaPixels.y,desigredWidth,desigredHeight,setFile,callback);
  
  
  }, [imageUrl])
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
          cropSize=	{{width: desigredWidth, height: desigredHeight} }
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
            <button onClick={()=>dispatch(editeSection({section_id:id, 
                                                        updategallery:{id:location.state.img.id,image:file} }))} >
                                                          
                                                          Confirm</button>
           <Link to='/dashbord/landingpage'><button className='discard'>Discard</button></Link>
        </div>
      
      
      </div>
   
    </div>
  
  )
}

export default UploadImage