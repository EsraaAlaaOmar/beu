import React,{useState} from 'react'
import {AiFillCamera} from 'react-icons/ai'
const Images = ({colors}) => {
    const [viewd,setViewed] = useState(null)
   const renderedColors=colors.map((color,index)=>{
      return <div className='img-color'>
          <span>
           
                <span  className="color" style={{backgroundColor:color}}></span>
                <span className='add-img' onClick={()=>document.getElementById(`color${index}`).click()}>

                    +
                </span>
                <input id={`color${index}`} className='none' type='file' onChange={e => {setViewed(e.target.value); console.log(e.target.value)}} />
            
        </span>
    </div>

    })
  return (
    <div className='add-dev'>
        <div className='add-images'>
        <div className='title'>
            <span>
                <AiFillCamera />
            </span> 
             &nbsp; Images
            <span className='oposite'>
                you need to upload image for every color
            </span>
        </div>
        
            {renderedColors}
            
    <div className='img'>
        383×365
    </div>
            <img src={viewd} />
        </div>
    </div>
  )
}

export default Images