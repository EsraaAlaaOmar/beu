import React,{useState, useEffect, useRef} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {editeProduct} from '../../store/productSlice'
import { Link ,useParams, useLocation, useNavigate, Navigate} from 'react-router-dom'
import Images from './Images';
import{getSizes} from '../../store/sizesSlice'
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';

// use ref  function 
function useOutsideAlerter(ref,navigate,brandId) {
    useEffect(() =>{
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          
            navigate(`/dashbord/products/${brandId}`)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      
    }}, [ref]);
  }


const EditeProduct = ({brandId,setErrorFlashmsg, clearstate}) => {
    let { id }  = useParams();
    let location = useLocation()
    let navigate= useNavigate()
    const dispatch = useDispatch()
    //Api data from redux
    const {sizsList} =useSelector((state)=> state.sizes)
    const {productupdated} =useSelector((state)=> state.product)
    //page state
    const [color, setColor] = useState(null);
    const selectedsizes =location.state.product.size&&location.state.product.size.map(s=>({id: s.id}))

     
      //form data state
    const [formData, setFormData] = useState({
        category_id: brandId,
        title:location.state.product.title,
        description : location.state.product.description,
        unit_price:location.state.product.unit_price, 
        quantity:location.state.product.quantity,
        add_galleries : [],
        update_galleries:[],
        sizes : selectedsizes,

      
        id : id,
        product_id:location.state.product.id
      
    })
    console.log(formData.sizes)
    const { title, description, unit_price, quantity, add_galleries, update_galleries, sizes}=formData
   //set colors array  
    const [colors, setColors]=useState([])
    const selectedColors=location.state.product.galleries&&location.state.product.galleries.map((galary) =>galary.color_hex)
    
   //rendered selected colors 
   const renderedSelectedColors=selectedColors&&selectedColors.map((color) =><span className="color" style={{backgroundColor:color}}></span>)
   //rendered colors 
   const renderedColors=colors.map((color) =><span className="color" style={{backgroundColor:color}}></span>)
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    //add image
    const addImg=data=>setFormData({...formData, add_galleries: [...add_galleries , data]})
    
// update  current galary
    // const updateAddImg=(data)=>{
    //     setFormData('')
    //     const index =add_galleries.findIndex(galary => galary.id == data.gallery_id);                                                            
    //     const newArray = [...galleries]; 
    //     if(index)
    //     {  newArray[index] = data;}
    //     setFormData({...formData, galleries: newArray});
    
    // console.log(data);
    // console.log(formData);
        
    //     }
        
    
 //remove image
      const removeImage=image=> setFormData({...formData, add_galleries: add_galleries.filter(g=>g.image!==image)})
      console.log(formData.galleries)

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
// call useref function
const wrapperRef = useRef(null);
useOutsideAlerter(wrapperRef, navigate, brandId);
  return (
        <div className='addpage'>
        <div className='opacity'>
            <div className='choose-product'   ref={wrapperRef}>
           
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
                                    {renderedSelectedColors}
                                    {renderedColors}               
                                    <span className='oposite' onClick={()=>document.getElementById("color").click()}>
                                        +
                                    </span>
                                    <input id='color' type='color' onChange={e => {setColor(e.target.value)}
                                } />
                                </div>
                                { color &&<div className='add-color'>
                                    <span className='selected' style={{backgroundColor:color}}></span>
                                     <span className='add-button' onClick={()=>setColors([...colors,color])}>Add</span >
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
                                 <input  className='check-box' type="checkbox" id={sizeitem.size} name={sizeitem.size} checked={sizes&&sizes.find(s=>s.id == sizeitem.id) && true} onClick={(e)=>changeSizes(e,sizeitem)}/>
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
                        <Images colors={colors}   brandId={brandId} removeImage={removeImage} clearstate={clearstate} addImg={addImg} galleries={add_galleries}/>
                     {  console.log(add_galleries)}
                    </Col>
                   
                    </Row>
                    </form>
                   {productupdated && <Navigate to={`/dashbord/products/${brandId}`} />}
              </div>
        </div>
     
    </div>
  )
}

export default EditeProduct