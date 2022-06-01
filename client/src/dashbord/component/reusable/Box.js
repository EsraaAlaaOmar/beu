import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Box = ({clearstate,product,editeLink='/collections', products=true}) => {
  const dispatch = useDispatch()
  const  productColors =product.galleries.length >0 && product.galleries.map(galary=>{
    return <span className="color" style={{backgroundColor:galary.color_hex}}></span>

  })
  return (
    <div className='box_component'>
        <img
         src={product.galleries[0]&&product.galleries[0].image}
          />
          <div className='box-title'>
          {product.title}
          </div>
          <p>
              {product.description}
          </p>
          <div className='yello'>
        
              
              <div>Price : {product.unit_price} $</div>
              <div>Sizes :{product.sizes}</div>
              <div>Colors :{productColors}</div>
              
          </div>
          <div className='actions'>
             {products&& <span>View Products</span>}
            <Link to={ editeLink} state={{ product: product }}> <span onClick={()=>  dispatch(clearstate())}>Edit </span></Link> 
              <span>Delete</span>

          </div>
    </div>
  )
}

export default Box