import React,{useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {editeProduct} from '../../store/productSlice'
import { Link ,useParams, useLocation, useNavigate} from 'react-router-dom'
import Images from './Images';
import{getSizes} from '../../store/sizesSlice'

const EditeProduct = ({collectionId}) => {
    let { id }  = useParams();
    let location = useLocation()
    let navigate= useNavigate()
    const dispatch = useDispatch()
    const {sizsList} =useSelector((state)=> state.sizes)
    const [color, setColor] = useState(null);
    const [colors, setColors]=useState([])
    const [formData, setFormData] = useState({
        category_id: collectionId,
        title:location.state.product.title,
        description : location.state.product.description,
        unit_price:location.state.product.unit_price, 
        quantity:location.state.product.quantity,
        galleries : [],
        sizes : [{size_id:1}],
        gain_points :location.state.product.gain_points,
        id : location.state.product.id,
        product_id:location.state.product.id
      
    })
    
    const { title, description, unit_price, quantity, galleries,sizes, gain_points}=formData
    const renderedColors=colors.map((color) =><span className="color" style={{backgroundColor:color}}></span>)
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const addImg=data=>setFormData({...formData, galleries: [...galleries , data]})
    const onSubmit=async e=>{
        e.preventDefault()
       dispatch(editeProduct(formData))
       navigate(`/products/${collectionId}`)
    


    
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
                                <label> Points</label>
                                <input type='number' min={1} placeholder='points' name='gain_points' value={gain_points} onChange={e=>onChange(e)} required />
                               
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
                                
                                <select className='' name="sizes" value={sizes}   onChange={e=>{setFormData({...formData, sizes:{size_id : e.target.value}})}}  required>
                                    { 
                                       sizsList.map(size=>{return(<option value={size.id}>{size.size} </option>)})
                                    }
                                       
                                 
                                </select>
                            
                            </div>
                            <div className='input-div'>
                                <label>Description</label>
                                <textarea  onChange={e=>onChange(e)}name='description' value={description} required placeholder='Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. Pellentesque rhoncus lectus se'/> 
                            </div>
                            
                           
                          
                        </div>

                    </Col>
                    <Col sm={12} md={6} lg={8}>
                        <Images colors={colors} collectionId={collectionId} addImg={addImg} galleries={galleries}/>
                    </Col>
                   
                    </Row>
                    </form>
                
              </div>
        </div>

    </div>
  )
}

export default EditeProduct