import React, { useState } from 'react'
import Box from '../reusable/Box'

const SelectProduct = ({product, addProduct, removeProduct}) => {
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
  //select product function 
  const select =() =>{
    setSelected(!selected);
     addProduct({product_id : product.id, title:product.title })
  }
  const deleteProduct =() =>{
    setSelected(!selected);
    removeProduct( product.id )
  }
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
           {selected?<button onClick={()=>deleteProduct()}>delet</button>:<button  onClick={()=>select()}>ADD</button>}
    </div>
  )
}

export default SelectProduct