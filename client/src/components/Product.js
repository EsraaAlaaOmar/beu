import React from 'react'

import ProductInfo from './ProductInfo'
const Product = ({product, img,fav}) => {
    return (
        <div className='product'>
       
        
                <div className='img_div'>
            <img  src={img} />  
        
            </div>
            <ProductInfo fav={fav} product={product} />
           
        
         
        </div>
    )
}

export default Product
 