import React, { useState } from 'react'
import Box from '../reusable/Box'

const SelectProduct = ({title='Product Title', p='Supporting description for the card goes here like a breeze.', }) => {
   const [activeIndex,setActiveIndex]=useState(0)
   const [activecolor,setActivecolor]=useState(0)
   const handleClick=(index) =>{
    setActiveIndex(index);
  }
  const handleColor=(index) =>{
    setActivecolor(index);
  }
  const sizes=['S', 'M', "L"]
  const colors=['red', 'yellow', 'black']
   const renderedSizes=sizes.map((size,index)=>{  
   const  className = activeIndex === index ? 'active' : '';  
   return (
    <span className={className} key={index} onClick={()=>handleClick( index)}>
      {size}
    </span>
)
   })
   const renderedColors=colors.map((color,index)=>{  
    const  className = activecolor === index ? 'active' : '';  
    return (
     <span className={className} style={{backgroundColor:color}} key={index} onClick={()=>handleColor( index)}>
       
     </span>
 )
    })

  return (
    <div className='box_component'>
        <img
         src='https://img.freepik.com/free-photo/galaxy-system-millions-billions-stars-together-with-gas-dust_39386-369.jpg?w=1060'
          />
          <div className='box-title'>
          {title}
          </div>
          <p>
              {p}
              <br/>
              Price : 100 $
          </p>
          <div className='yello'>
              <div className='sizes'>Sizes : 
                  &nbsp;
            {renderedSizes}
              
              </div>
              <div className='colors'> Colors : 
                {renderedColors}
              </div>
              <div className='num'> <span > +</span> 1 Items <span> - </span></div>
          </div>
           <button>ADD</button>
    </div>
  )
}

export default SelectProduct