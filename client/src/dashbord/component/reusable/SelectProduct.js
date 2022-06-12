import React, { useState } from 'react'
import Box from '../reusable/Box'

const SelectProduct = ({product, addProduct}) => {
  const [number,setNumber]=useState(0)
   const [activeIndex,setActiveIndex]=useState(0)
   const [activecolor,setActivecolor]=useState(0)
   const[selected,setSelected]=useState(false)
   const handleClick=(index) =>{
    setActiveIndex(index);
  }
  const handleColor=(index) =>{
    setActivecolor(index);
  }
  const sizes=['S', 'M', "L"]
  const colors=['red', 'yellow', 'black']
//    const renderedSizes=sizes.map((size,index)=>{  
//    const  className = activeIndex === index ? 'active' : '';  
//    return (
//     <span className={className} key={index} onClick={()=>handleClick( index)}>
//       {size}
//     </span>
// )
//    })
//    const renderedColors=colors.map((color,index)=>{  
//     const  className = activecolor === index ? 'active' : '';  
//     return (
//      <span className={className} style={{backgroundColor:color}} key={index} onClick={()=>handleColor( index)}>
       
//      </span>
//  )
//     })

  return (
    <div className='box_component'>
        <img
         src={product.galleries[0]&&`https://thebeauwow.me/${product.galleries[0].image}`}
          />
          <div className='box-title'>
          {product.title}
          </div>
          <p>
              {product.description}
              <br/>
              Price : {product.unit_price} $
          </p>
          <div className='yello'>
              {/* <div className='sizes'>Sizes : 
                  &nbsp;
            {renderedSizes}
              
              </div> */}
              {/* <div className='colors'> Colors : 
                {renderedColors}
              </div> */}
              <div className='num'> <span onClick={()=>setNumber(number+1)} > +</span> {number} Items <span onClick={()=>setNumber(number-1)}> - </span></div>
          </div>
           {selected?<button onClick={()=>{setSelected(!selected); addProduct(product.id)}}>delet</button>:<button  onClick={()=>{setSelected(!selected); addProduct(product.id)}}>ADD</button>}
    </div>
  )
}

export default SelectProduct