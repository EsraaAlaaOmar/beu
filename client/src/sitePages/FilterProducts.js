import React, { useState,useEffect } from 'react'
import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useDispatch } from 'react-redux'
const FilterProducts = ({setFilterData,getFilteredProducts,brands}) => {
  const dispatch = useDispatch()
  const [brand,setBrand] = useState()
  const [min,setMin] = useState()
  const [max,setMax] = useState()
  const[fetch,setFetch] = useState(false)
  const [data,setData]=useState({
    brand_id:'',
    has_offer:false,
    max_price:'',
    min_price:'',
    
  })
  const {brand_id, has_offer,max_price, min_price}=data
  useEffect(() =>{
    fetch && dispatch(getFilteredProducts(data))
  

  },[data])
  console.log(data)
  const onChange=e=>{
    setData({...data, [e.target.name]: e.target.value})
    setFilterData(data)
  
  }
  const offerChange =e=>{
    setData({...data,'has_offer': !has_offer})
    setFilterData(data)
  
}
const renderedBrands =brands&& brands.map(brand=>{
 return  <div className='selectLine'>  
            <input type="radio" id={brand.id} name='brand_id' value={brand.id}  onChange={e=>onChange(e)} />
            <label for={brand.id}> {brand.title} </label>
        </div>
})
  return (
    <div>
        <div className='filter-products' onClick={()=>setFetch(true)} >
          
           <div className='section' >
            <div className='toggle' onClick={()=>setBrand(!brand)}> brands <span className='right'>
             {brand ?  <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
              
              </span></div>  
              {  brand && <>
                    {renderedBrands}
                 </>}
                 
           </div>
           <div className='section' >
           <div className='toggle' onClick={()=>setMin(!min)}>Min Price <span className='right'>
             {min ?  <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
              
              </span></div>  
              {  min && <>
                 <input className='input'  placeholder='0$' name='min_price' value={min_price}  onChange={e=>onChange(e)}/>
             </>}
            

           </div>
           <div className='section' >
           <div className='toggle' onClick={()=>setMax(!max)}>Max Price <span className='right'>
             {max ?  <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
              
              </span></div>  
             
              {  max && <>
                 <input className='input' placeholder='1000$'  name='max_price' value={max_price}  onChange={e=>onChange(e)}/>
             </>}

           </div>
           <div className='section' >
           
              <div className='selectLine'>
                        <input type="checkbox" id="Offers" value={has_offer}   onChange={e=>offerChange(e)} />
                        <label for="Offers">Has Offers </label><br/>  
                    </div>

           </div>
           
           
          

        </div>
    </div>
  )
}

export default FilterProducts