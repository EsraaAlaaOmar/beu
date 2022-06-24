import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductsList from '../Orders/ProductsList'

const OrderProducts = () => {
    let location = useLocation()
    let products= location.state.products
    const renderedProducts = products.map(product =>{
        return <ProductsList product={product} />
       })
  return (
    <div className='addpage'>
            <div className='opacity'>
                    <div className='add'>
                    <table>
                    {/* <span className='close' onClick={()=>setShowProducts(false)}> <IoCloseCircleOutline/> </span> */}
                <thead>
                <th>Image</th>
                <th > Quantity </th>
                <th> size</th>
                <th > Color</th>
                <th>unit Price</th>
                    </thead>
                    {renderedProducts}
                
                </table>
                </div>
        </div>
 </div>
  )
}

export default OrderProducts