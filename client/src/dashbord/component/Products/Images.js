import React,{useState} from 'react'
import {Carousel} from 'react-bootstrap'
import {AiFillCamera,AiOutlineCloseCircle, AiFillEdit} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import UploadImage from './UploadImage'
const Images = ({colors,collectionId,addImg,updateAddImg, galleries={galleries} , clearstate, removeImage}) => {
    const dispatch = useDispatch()
    // const [viewd,setViewed] = useState(null)
   const renderedColors=colors.map((color,index)=>{
      return(<UploadImage color={color} index={index}  addImg={addImg}  />)

    })
    const renderedImagesforCarousel= galleries.map((galary,index)=>{
        return(  <Carousel.Item interval={1000}>
          <span className="close" onClick={()=>removeImage(galary.image)}>  <AiOutlineCloseCircle /></span>
         {!galary.imageUrl&& <span className='update-icon'>Update <br/> <div>
            
         <UploadImage color={galary.color_hex} id={galary.id} index={index} update={true} addImg={updateAddImg} />
            </div> </span>}
           {console.log(galary)}
            <img
            className="d-block w-100"
            src={galary.imageUrl?galary.imageUrl:`https://thebeauwow.me/${galary.image}`}
            alt="first slide"
            
            />
           
        </Carousel.Item>)
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
            <Carousel>
                {/* <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="first slide"
                    
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />
        
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                </Carousel.Item> */}
                {renderedImagesforCarousel}
        </Carousel>
    </div>
    <div className='buttons'>
                            
    <input type='submit' className='confrim' value='Confirm' />
                                
                                <Link to={`/dashbord/products/${collectionId}`}>
                                     <button className='discard' onClick={() =>dispatch(clearstate()) } >Discard</button>
                                </Link>
                            </div>
            
        </div>
    </div>
  )
}

export default Images