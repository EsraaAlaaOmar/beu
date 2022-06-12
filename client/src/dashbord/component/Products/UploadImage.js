import React,{useState} from 'react'

const UploadImage = ({color,index,addImg,id, update}) => {
    const [imgInfo, setImgInfo] = useState(
       { image:'',
        priority :'',
        color_hex:color,
        imageUrl:'',
        gallery_id:id
      }
    ) 
    const {image, priority}=imgInfo
console.log(imgInfo)

    const onChange=e=>setImgInfo({...imgInfo, [e.target.name]: e.target.value})
    const imgChange=e=>setImgInfo({...imgInfo, [e.target.name]: e.target.files[0],imageUrl:URL.createObjectURL(e.target.files[0])})
    const addimage=(e)=>{
      e.preventDefault()
      addImg(imgInfo) 
    }
  return (
   
            <div className='img-color'>
                    
                            <span>
                            
                            
                                    <span  className="color" style={{backgroundColor:color}}></span>
                                    <span className='add-img' onClick={()=>document.getElementById(`color${index}`).click()}>

                                        +
                                    </span>
                                    <input type='number' className='priority' placeholder='Priority' min="1" name='priority' value={priority} onChange={e=>onChange(e)}  />
                                    <input id={`color${index}`} className='none' type='file' name='image'  onChange={e=>imgChange(e)}  />
                                

                                
                                
                            </span>
                            <button className='action' onClick={(e)=>addimage(e)}>{update?'Update' : 'Add'}</button>
                           

                    
            </div>
  

  )
}

export default UploadImage