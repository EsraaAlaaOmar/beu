import React, { useState } from 'react'
import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'
const FilterProducts = ({setFilterData}) => {

  const [brand,setBrand] = useState()
  const [min,setMin] = useState()
  const [max,setMax] = useState()

  return (
    <div>
        <div className='filter-products'>
          
           <div className='section' >
            <div className='toggle' onClick={()=>setBrand(!brand)}>    brands <span className='right'>
             {brand ?  <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
              
              </span></div>  
              {  brand && <>
                
                    <div className='selectLine'>  
                        <input type="checkbox" id="collection1" value="collection" />
                        <label for="collection1">  Brand Name </label>
                  </div>
                  <div className='selectLine'>
                     <input type="checkbox" id="collection2" value="collection" />
                     <label for="collection2">  Brand Name </label>
                  </div>
                    <div className='selectLine'>
                        <input type="checkbox" id="collection3" value="collection" />
                        <label for="collection3">  Brand Name </label><br/>  
                    </div>
                 </>}
                 
           </div>
           <div className='section' >
           <div className='toggle' onClick={()=>setMin(!min)}>Min Price <span className='right'>
             {min ?  <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
              
              </span></div>  
              {  min && <>
                 <input className='input'  placeholder='0$'/>
             </>}
            

           </div>
           <div className='section' >
           <div className='toggle' onClick={()=>setMax(!max)}>Max Price <span className='right'>
             {max ?  <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
              
              </span></div>  
             
              {  max && <>
                 <input className='input' placeholder='1000$'/>
             </>}

           </div>
           <div className='section' >
           
              <div className='selectLine'>
                        <input type="checkbox" id="Offers" value="offers" />
                        <label for="Offers">Has Offers </label><br/>  
                    </div>

           </div>
           
           
          

        </div>
    </div>
  )
}

export default FilterProducts