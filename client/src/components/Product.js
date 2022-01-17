import React from 'react'

import ProductInfo from './ProductInfo'
const Product = ({productid, sale, img,fav}) => {
    return (
        <div className='product'>
            {productid==2  ?
            <>
            <ProductInfo fav={fav} />
           <div className='img_div'>
           <img  src={img} />  
          {sale && <div className='sale'>
              SALE
           </div>}
           </div>
           </>
           :
           <>
                <div className='img_div'>
            <img  src={img} />  
            {sale && <div className='sale'>
                SALE
            </div>}
            </div>
            <ProductInfo fav={fav} />
           </>
           }
         
        </div>
    )
}

export default Product
 