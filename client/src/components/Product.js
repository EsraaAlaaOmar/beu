import React from 'react'

import ProductInfo from './ProductInfo'
const Product = ({productid, sale, img}) => {
    return (
        <div className='product'>
            {productid==2  ?
            <>
            <ProductInfo />
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
            <ProductInfo />
           </>
           }
         
        </div>
    )
}

export default Product
 