import React from 'react'
import { Link } from 'react-router-dom'

import ProductInfo from './ProductInfo'
const Product = ({product, img,fav}) => {
    return (
        <div className='product'>
            <Link to='/product' state={{product:product}}>
                    <div className='img_div'>
                     <img  src={img} />  
                    </div>
              </Link>
            <ProductInfo fav={fav} product={product} />
           
        
         
        </div>
    )
}

export default Product
 