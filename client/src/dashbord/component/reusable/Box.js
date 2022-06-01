import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Box = ({clearstate,title='Title',product, p='Supporting description for the card goes here like a breeze.', yello='133 product',editeLink='/collections', products=true}) => {
  const dispatch = useDispatch()
  return (
    <div className='box_component'>
        <img
         src={product.avatar}
          />
          <div className='box-title'>
          {product.title}
          </div>
          <p>
              {p}
          </p>
          <div className='yello'>{yello}</div>
          <div className='actions'>
             {products&& <span>View Products</span>}
            <Link to={ editeLink} state={{ product: product }}> <span onClick={()=>  dispatch(clearstate())}>Edit </span></Link> 
              <span>Delete</span>

          </div>
    </div>
  )
}

export default Box