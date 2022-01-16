import React from 'react'

import ProductInfo from './ProductInfo'
const Product = () => {
    return (
        <div className='product'>
           <div className='img_div'>
           <img  src='/images/products/1.png' />  
           <div className='sale'>
              SALE
           </div>
           </div>
           <ProductInfo />
        </div>
    )
}

export default Product
 