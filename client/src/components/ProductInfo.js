import React from 'react'

import {BsHeart,BsFillHeartFill} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
const ProductInfo = ({fav,product}) => {
    return (
        <div className='product_info'>
            <div>
            {product&&product.title}
            </div>
            <div className='last-line'>
            {product&&product.unit_price}
            <span className='oposite_direction' >
            { fav ? <span> <BsFillHeartFill /> </span>:<span> <BsHeart /> </span>}
              <span> <FiShoppingCart />  <span className='add'><AiFillPlusCircle/></span> </span>
             
            </span>
            </div>
        </div>
    )
}

export default ProductInfo
