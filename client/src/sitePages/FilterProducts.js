import React, { useState } from 'react'
import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'
const FilterProducts = () => {
  const [collection,setCollection] = useState()
  const [brand,setBrand] = useState()
  const [size,setSize] = useState()
  const [color,setColor] = useState()
  return (
    <div>
        <div className='filter-products'>
           <div className='section' >
             <div className='toggle' onClick={()=>setCollection(!collection)}>  Collections <span className='right'>
             { collection ?  <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
              
              </span></div>  
                
              {  collection && <>
                    <div className='selectLine'>  
                        <input type="checkbox" id="collection1" value="collection" />
                        <label for="collection1">  Collection Name </label>
                  </div>
                  <div className='selectLine'>
                     <input type="checkbox" id="collection2" value="collection" />
                     <label for="collection2">  Collection Name </label>
                  </div>
                    <div className='selectLine'>
                        <input type="checkbox" id="collection3" value="collection" />
                        <label for="collection3">  Collection Name </label><br/>  
                    </div>
                 </>}
                 
           </div>
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
            <div className='toggle' onClick={()=>setSize(!size)}>    Sizes <span className='right'>
             { size ?  <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
              
              </span></div>  
              {  size && <>
                    <div className='selectLine'>  
                        <input type="checkbox" id="collection1" value="collection" />
                        <label for="collection1">  size Name </label>
                  </div>
                  <div className='selectLine'>
                     <input type="checkbox" id="collection2" value="collection" />
                     <label for="collection2">  size Name </label>
                  </div>
                    <div className='selectLine'>
                        <input type="checkbox" id="collection3" value="collection" />
                        <label for="collection3">  size Name </label><br/>  
                    </div>
                 </>}
                 
           </div>
           <div className='section' >
            <div className='toggle' onClick={()=>setColor(!color)}>    Colors <span className='right'>
             { color ?  <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
              
              </span></div>  
              {  color && <>
                  <div className='selectLine'>  
                        <input type="checkbox" id="collection1" value="collection" />
                        <label for="collection1"> color Name </label>
                  </div>
                  <div className='selectLine'>
                     <input type="checkbox" id="collection2" value="collection" />
                     <label for="collection2"> color Name </label>
                  </div>
                    <div className='selectLine'>
                        <input type="checkbox" id="collection3" value="collection" />
                        <label for="collection3"> color Name </label><br/>  
                    </div>
                   
                 </>}
                 
           </div>

        </div>
    </div>
  )
}

export default FilterProducts