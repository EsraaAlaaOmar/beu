import React,{useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {editeProduct} from '../../store/productSlice'
import { Link ,useParams, useLocation, useNavigate} from 'react-router-dom'
import Images from './Images';
import{getSizes} from '../../store/sizesSlice'
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';

const EditeProduct = ({collectionId,setErrorFlashmsg, clearstate}) => {
    let { id }  = useParams();
    let location = useLocation()
    let navigate= useNavigate()
    const dispatch = useDispatch()
    //Api data from redux
    const {sizsList} =useSelector((state)=> state.sizes)
    const {productupdated, error} =useSelector((state)=> state.product)
    //page state
    const [color, setColor] = useState(null);
    const selectedsizes =location.state.product.size.map(s=>({id: s.id}))

     
      //form data state
    const [formData, setFormData] = useState({
        category_id: collectionId,
        title:location.state.product.title,
        description : location.state.product.description,
        unit_price:location.state.product.unit_price, 
        quantity:location.state.product.quantity,
        galleries : location.state.product.galleries,
        sizes : selectedsizes,
      
        id : location.state.product.id,
        product_id:location.state.product.id
      
    })
    console.log(formData.sizes)
    const { title, description, unit_price, quantity, galleries,sizes}=formData
   //set colors array  
    const [colors, setColors]=useState(galleries.map((galary) =>galary.color_hex))
   
    const renderedColors=galleries.map((galary) =><span className="color" style={{backgroundColor:galary.color_hex}}></span>)
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const addImg=data=>setFormData({...formData, galleries: [...galleries , data]})
    const onSubmit=async e=>{
        e.preventDefault()
       dispatch(editeProduct(formData))
     
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
        {console.log(formData)}
                    <Col sm={12} md={6} lg={4}>
                        <div className='inputs'>
                        <h4 onClick={()=>{ console.log(formData)}}>Edite Product</h4>
                     
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
                              sizsList.map(sizeitem=>{return(
                              <Col>
                                 <input  className='check-box' type="checkbox" id={sizeitem.size} name={sizeitem.size} checked={sizes.find(s=>s.id == sizeitem.id) && true} onClick={(e)=>changeSizes(e,sizeitem)}/>
                                 <label className='check-box-label' for={sizeitem.size}>{sizeitem.size}</label>
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
        {productupdated && navigate(`/dashbord/products/${collectionId}`)}
    </div>
  )
}

export default EditeProduct