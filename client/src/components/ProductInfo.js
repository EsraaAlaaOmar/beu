import React from 'react'

import {BsHeart,BsFillHeartFill} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
const ProductInfo = ({fav}) => {
    return (
        <div className='product_info'>
            <div>
            Product title goes here ..
            </div>
            <div className='last-line'>
            150 $
            <span className='oposite_direction' >
            { fav ? <span> <BsFillHeartFill /> </span>:<span> <BsHeart /> </span>}
              <span> <FiShoppingCart />  <span className='add'><AiFillPlusCircle/></span> </span>
             
            </span>
            </div>
        </div>
    )
}

export default ProductInfo
