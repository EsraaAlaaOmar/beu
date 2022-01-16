import React from 'react'

import {BsHeart} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
const ProductInfo = () => {
    return (
        <div className='product_info'>
            <div>
            Product title goes here ..
            </div>
            <div className='color'>
            150 $
            <span className='oposite_direction' >
              <span> <BsHeart /> </span>
              <span> <FiShoppingCart />  <span className='add'><AiFillPlusCircle/></span> </span>
             
            </span>
            </div>
        </div>
    )
}

export default ProductInfo
