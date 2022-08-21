import React, { useState } from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import { BsFillHeartFill, BsHeart, BsSearch } from 'react-icons/bs'

import {FiShoppingCart} from 'react-icons/fi'
import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { Navigate, Route, Routes,useLocation } from 'react-router-dom'
import Navbar from '../landingPage/Navbar'
import Call from './components/Call'
import ContactSection from './components/ContactSection'
import ProductTitleBox from './ProductTitleBox'
import { useDispatch, useSelector } from 'react-redux'
import {addToCard} from '../dashbord/store/clientSide/cardSlice'
import {addFav, deletefav} from '../dashbord/store/clientSide/favouriteSlice'
import FlashMsg from './Flashmsgs/FlashMsg'
const ProductPage = () => {
  const dispatch= useDispatch()
  const {CardAdded} =useSelector((state)=> state.card)
  const {loggedIn} =useSelector((state)=> state.auth)

    let location = useLocation()

    // error flashmsg state
    const[flashmsg,setFlashmsg] = useState(false)
    const[size,setSize] =useState(false)
    const[color,setColor] =useState(false)
    const[fav,setFav]=useState(false)
    const [nav,setNav] = useState(false)
    const [data,setData] = useState({
      product_id:location.state.product.id,
      quantity:1,
      size_id:'',
      color_hex:''
    })
    const {product_id, quantity, size_id, color_hex}=data
    const onChange=e=>setData({...data, [e.target.name]: e.target.value})
    const plusQuantity =()=>setData({...data, quantity: quantity+1})
    const minusQuantity =()=>setData({...data, quantity: quantity-1})
console.log(data)
    const renderedImages= location.state.product.galleries.map(gallary =>{
      return( <Col md={6} lg={4}>
        <img src={gallary.image} />
      </Col>)
    })
    const renderedSizes = location.state.product.size.map(size =>{
      return(
          <div className='option' >
             <input type="radio" id={size.id} name="size_id" value={size.id} onChange={(e)=>onChange(e)} />
            <label for={size.id}>S</label>
        </div>
    )
    })
    const renderedColors= location.state.product.galleries.map(gallary =>{
      return(  
        <div className='option'>
          <input type="radio" id={gallary.color_hex} name="color_hex" value={gallary.color_hex} onChange={(e)=>onChange(e)}/>
          <label className='color' for={gallary.color_hex} style={{backgroundColor:gallary.color_hex}}></label>
      </div>
    )
    })
    return (
        <>
           <Navbar navigate={false}/>
           <div className='productPage'>
            <div className='collections'>
            {flashmsg && !loggedIn && <FlashMsg 
                      title={`you must loggin to add products to cart !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
            <span className='search'>
                <input  placeholder='search any item ..' />   
                <span className='icon'> <BsSearch /> </span>
            </span>   
            </div>
             <Row>
               {renderedImages}
                <Col md={6} lg={4}>
                {console.log(location.state.product)}
                  <div className='product-info'>
                    <div className='text'>{ location.state.product.title}</div>
                    <div className='text'>{ location.state.product.description}</div>                    
                    <div className='property'>
                      <div className='toggle' onClick={() =>setSize(!size)}>
                        Size <span className='oposite'>{size?<MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}</span>
                       </div>
                       {size && <div className='list'>
                       {renderedSizes}
                       

                       </div>}


                    </div>
                    <div className='property'>
                      <div className='toggle' onClick={() =>setColor(!color)}>
                        Color <span className='oposite'>{color?<MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}</span>
                       </div>
                       {color && <div className='list'>
                        {renderedColors}

                       </div>}


                    </div>
                    <div className='property'>
                    <div className='toggle num'> 
                        <span className='change-num' onClick={()=>plusQuantity()}>+ </span> 
                        {quantity} items
                        <span className='change-num' onClick={()=>quantity>0&&minusQuantity()}>- </span>
                         </div>
                    </div>
                    <div className='text'>{ location.state.product.unit_price * quantity} $</div>
                    <div className='action' onClick={()=>{setFlashmsg(true);setNav(true);dispatch(addToCard(data))}}><span className='icon'><FiShoppingCart /></span>Add To Cart</div>
                    <div className='action fav' onClick={()=>dispatch(location.state.fav? deletefav({product_id:location.state.product.id}):addFav({product_id:location.state.product.id}))}>{location.state.fav?<span className='icon'><BsFillHeartFill /> Remove From FAVOURITE</span>:<span className='icon'><BsHeart/> ADD TO FAVOURITE</span> }</div>

                  </div>
                
                </Col>
             </Row>
             <div className='paragraphs'>
                  <div className='header'>
                     <span className='active'>DETAILS</span>
                     <span>DELIVERY & RETURNS</span>
                  </div>
             
          
             <Row>
              <Col lg={4} md={6}>
                 <ProductTitleBox />
              </Col>
              <Col lg={4} md={6}>
                 <ProductTitleBox />
              </Col>

             </Row>
             <Row>
              <Col lg={4} md={6}>
                 <ProductTitleBox />
                
              </Col>
              <Col lg={4} md={6}>
                <ProductTitleBox />
              </Col>

             </Row>
             </div>
             <ContactSection />
        
           </div>
           <Routes>
           <Route path="/call" element={<Call />} exact />
           </Routes>

           {nav && CardAdded && <Navigate to='/cart' />}
         
        </>

    )
}

export default ProductPage
