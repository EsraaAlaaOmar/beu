import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {editeProduct} from '../../store/productSlice'
const SingleGalaryImage = ({galary,productId}) => {
  console.log(editeProduct)
    const dispatch = useDispatch()
    const [gallary,setGallary] =  useState( { image:null,
                                                priority :galary.priority,
                                                color_hex:galary.color_hex,
                                                imageUrl:galary.image,
                                                gallery_id:galary.id
                                            }
                                            ) 
    const {image,imageUrl, priority,color_hex, gallery_id}=gallary
    const[change,setChange] = useState(false)
    const onChange=e=>setGallary({...gallary, [e.target.name]: e.target.value})
    const imgChange=e=>setGallary({...gallary, image: e.target.files[0]})
    console.log(gallary)
  return (
    <div className='box_component single-galary-image'>
        <img src={imageUrl}/>
        <span className="color" style={{backgroundColor:color_hex}}></span>
        <span>priority :{priority}</span>
        <div className='changeClick' onClick={()=>setChange(!change)}>{change? 'hide change': 'Change' } galary data </div>
       {change&&<div className='change'> 
            <input type="file"   name={image}  onChange={(e)=>imgChange(e)}/>
            <input className="inline-block" type="color" name={color_hex}  onChange={(e)=>onChange(e)}/>
            <input  className="inline-block" placeholder="priority" name={priority}  onChange={(e)=>onChange(e)}/>
                <button onClick={()=>dispatch(editeProduct({update_galleries:[gallary],product_id:productId}))}>Save</button>
               
        </div>
        
        }
         <button className="delete" onClick={()=>dispatch(editeProduct({delete_galleries:[{gallery_id:gallery_id}],product_id:productId}))}>Delete</button>
        

    </div>
  )
}

export default SingleGalaryImage