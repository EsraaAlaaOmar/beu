import React,{useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {addProduct} from '../../store/productSlice'
import { Link , useNavigate} from 'react-router-dom'
import Images from './Images';
import{getSizes} from '../../store/sizesSlice'
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg'
const AddProduct = ({collectionId,setErrorFlashmsg, clearstate}) => {
    
    let navigate =useNavigate()
    const dispatch = useDispatch()
    //Api data from redux
    const {sizsList} =useSelector((state)=> state.sizes)
    const {prodectAdded, error} =useSelector((state)=> state.product)
    //page state
    const [color, setColor] = useState(null);
    const [colors, setColors]=useState([])
   
    const [formData, setFormData] = useState({
        category_id: collectionId,
        title: '',
        description : '',
        unit_price:'', 
        quantity:'',
        galleries : [],
        sizes : [],
        
       
    
      
    })
    
    const { title, description, unit_price, quantity, galleries,sizes, gain_points}=formData
    //rendered colors 
    const renderedColors=colors.map((color) =><span className="color" style={{backgroundColor:color}}></span>)
    //on input change
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    //add image 
    const addImg=data=>setFormData({...formData, galleries: [...galleries , data]})
    //submit
    const onSubmit=async e=>{
        e.preventDefault()
        dispatch(addProduct(formData))
        setErrorFlashmsg(true)
       
    


   
    
}

//add or remove  sizes to size array  from checkbox
const changeSizes=(e,size)=>{
if(e.target.checked){
    setFormData({...formData, sizes: [...sizes, {id:size.id}] })
}
else{
    setFormData({...formData, sizes:  sizes.filter((sizeElement)=>sizeElement.id != size.id)})
    console.log(size.id)
   
}
}
 
useEffect(() =>{
    dispatch(getSizes())
  

  },[dispatch])
  return (
        <div className='addpage'>
        <div className='opacity'>
            <div className='choose-product'>
             
            <form  onSubmit={(e)=> onSubmit(e)}>
                <Row>
        
                    <Col sm={12} md={6} lg={4}>
                        <div className='inputs'>
                        <h4 onClick={()=>{ console.log(formData)}}>New Product</h4>
                     
                        <div className='input-div'>
                                <label> Product Title</label>
                                <input type='text' placeholder='title' name='title' value={title} onChange={e=>onChange(e)} required />
                                
                            </div>
                            <div className='input-div'>
                                <label> Price</label>
                                <input type='number'  min={1} placeholder='Price' name='unit_price' value={unit_price} onChange={e=>onChange(e)} required />
                               
                            </div>
                            <div className='input-div'>
                                <label> Quantity</label>
                                <input type='number' min={1} placeholder='Quantity' name='quantity' value={quantity} onChange={e=>onChange(e)} required />
                               
                            </div>
  
                            <div className='input-div'>
                                <label>Colors</label>
                                <div className='colorList'>

                                    {renderedColors}               
                                    <span className='oposite' onClick={()=>document.getElementById("color").click()}>
                                        +
                                    </span>
                                    <input id='color' type='color' onChange={e => {setColor(e.target.value)}
                                } />
                                </div>
                                { color &&<div className='add-color'>
                                    <span className='selected' style={{backgroundColor:color}}></span>
                                     <button onClick={()=>setColors([...colors,color])}>Add</button>
                                </div>}
                                
                                <div>

                                </div>
                            </div>
                            <div className='input-div'>
                                <label>Sizes</label>
                                <Row>
                           
                                    { 
                                       sizsList.map(size=>{return(
                                       <Col>
                                          <input  className='check-box' type="checkbox" id={size.size} name={size.size} value={size.id} onClick={(e)=>changeSizes(e,size)}/>
                                          <label className='check-box-label' for={size.size}>{size.size}</label>
                                       </Col>
                                       
                                       )}
                                      )}
                                    
                                    
                                 
                                
                                </Row>
                            
                            </div>
                            <div className='input-div'>
                                <label>Description</label>
                                <textarea  onChange={e=>onChange(e)}name='description' value={description} required placeholder='Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. Pellentesque rhoncus lectus se'/> 
                            </div>
                            
                           
                          
                        </div>

                    </Col>
                    <Col sm={12} md={6} lg={8}>
                        <Images colors={colors} collectionId={collectionId} clearstate={clearstate} addImg={addImg} galleries={galleries}/>
                    </Col>
                   
                    </Row>
                    </form>
                
              </div>
        </div>
{prodectAdded && navigate(`/dashbord/products/${collectionId}`)}
    </div>
  )
}

export default AddProduct