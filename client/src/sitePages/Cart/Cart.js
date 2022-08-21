import React,{useEffect,useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import ContactSection from '../components/ContactSection'
import ProductInCart from './ProductInCart'
import {getCard, editeCard,deleteFromCard} from '../../dashbord/store/clientSide/cardSlice'
import {applyDiscount} from '../../dashbord/store/clientSide/discountSlice'
import {getAddresses} from '../../dashbord/store/clientSide/adressesSlice'
import { useDispatch,useSelector } from 'react-redux'
import DropDownList from './DropDownList'
import { Link,Navigate } from 'react-router-dom'

const Cart = () => {
     const dispatch= useDispatch()
     const {userInfo,loggedIn} =useSelector((state)=> state.auth)
     const {CardList,cardLoading,totalPrice,edited,CardDeleted} =useSelector((state)=> state.card)
     const {afterApplying,discountLoading} =useSelector((state)=> state.clientdiscount)
     const {addresses} =useSelector((state)=> state.clientaddresses)

     const [discountCode,setDiscountCode] = useState()

     const [selectedCountry, setSelectedCountry] =useState(null)
     const [selectedCity, setSelectedCity] =useState(null)
     const [selectedArea, setSelectedArea] =useState(null)

     const [showCountry,setShowCountry] =useState(false)
     const [showCity,setShowCity] =useState(false)
     const [showArea,setShowArea] =useState(false)

     const [formData, setFormData] = useState({
      name: '',
      phone: '',  
      street_name: '',
      nearest_landmark:''  
  })

  const {name, phone , street_name ,  nearest_landmark}=formData
  const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})

const onSubmit= async e => {
      e.preventDefault()
     dispatch( getAddresses({...formData,area_id:selectedArea.id}))
   
    
  }

     useEffect(() =>{
            dispatch(getCard())
        },[dispatch,edited,CardDeleted])
        useEffect(() =>{
         dispatch(getAddresses())
     },[dispatch])
       
const renderedProducts = CardList.length>0?CardList.map(product=><ProductInCart product={product} editeCard={editeCard} deleteFromCard={deleteFromCard}/>)
:'No Products Added to Card'
  return (
     <>
      {cardLoading || discountLoading ? <div  className="clientloading loading"> <img src='/images/client_loading.gif' /></div>:
      <div className='cart'>
      <Row>
          <Col md={6}>
           <div className='left'>
              <div className='title'>
              SHIPPING INFORMATION

              </div>
              <form  onSubmit = {e=>onSubmit(e)}>
                     <div className='input'>
                           <input  placeholder='Custommer name' name='name' value={name} onChange={onChange}/>
                     </div>
                  
                     <div className='input' onClick={()=>setShowCountry(!showCountry)}>
                           <input  placeholder={selectedCountry?selectedCountry.name :'Country'} disabled={true}  />
                     </div>
                    {showCountry&& <DropDownList  list={addresses} setSelected={setSelectedCountry}/>}
                     {console.log(formData)}
                     <div className='input'  onClick={()=>setShowCity(!showCity)}>
                     <input  placeholder={selectedCity?selectedCity.name :'City'} disabled={true} />
                     </div>
                    {showCity && <DropDownList  list={selectedCountry?selectedCountry.cities:[]} setSelected={setSelectedCity}/>}
                     <div className='input'  onClick={()=>setShowArea(!showArea)}>
                           <input    placeholder={selectedArea?selectedArea.name :'Area'} disabled={true}/>
                     </div>
                     {showArea && <DropDownList  list={selectedCity?selectedCity.areas:[]} setSelected={setSelectedArea}/>}
                     <div className='input'>
                           <input  placeholder='Street' name='street_name' value={street_name} onChange={onChange}/>
                     </div>
                     <div className='input'>
                           <input  placeholder='Landmark' name='nearest_landmark' value={nearest_landmark} onChange={onChange}/>
                     </div>
                     <div className='input'>
                           <input type='tel' placeholder='Phone number' name='phone' value={phone} onChange={onChange}/>
                     </div>
                  
                     <div className='submit'>
                           <input type='submit' value='Add delivery Location' />
                           <Link to='/pay'>
                                    <button className='submit'> Continue To Payment</button>
                              </Link>
                     </div>
                     
              </form>
             
                 <ContactSection />
           </div>
          </Col>
          <Col  md={6}>
          <div className='right' > 
             <div className='title'>
                YOUR CART
             </div>
            {renderedProducts}
             <div className='discount'>
                <input  placeholder='enter discount code' onChange={e=>setDiscountCode(e.target.value)}/>
                <button onClick={()=>{dispatch(applyDiscount({discount_code:discountCode}))}}>APPLY</button>
             </div>
             <div className='price-dev'>
                 <div className='priceLine'>
                  <span className='name'> SubTotal Cost</span>
                  <span className={  afterApplying ? 'old-price price' :'price'   } > {totalPrice} $</span>
                 </div>
                 {afterApplying && <div className='priceLine'>
                  <span className='name'> After Discount</span>
                   <span className='price'> {afterApplying} $</span>
                 </div>}
                 <div className='priceLine'>
                  <span className='name'>Shipping Cost </span>
                  <span className='price'> 150 $</span>
                 </div>
             </div>
             <div className='priceLine bold'>
                  <span className='name'>Total Cost </span>
                  <span className='price'> {afterApplying? afterApplying+150 :totalPrice +150} $</span>
           </div>

          </div>
          </Col>
      </Row>
      {userInfo&&!userInfo.is_customer && <Navigate to='/log/login' />}
            {!loggedIn&& <Navigate to='/log/login' />}
      
  </div>}
     </>
    
  )
}

export default Cart