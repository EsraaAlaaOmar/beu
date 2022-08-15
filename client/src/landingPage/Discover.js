import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Discover = () => {
  const {brands} =useSelector((state)=> state.clientbrands)
  const renderedBrands = brands.map(brand=> <Link to={`brandproducts/${brand.id}`}><div>{brand.title}</div></Link> )
  return (
    <div className='discover'>
        <div className='title'>DISCOVER ALL OUR NEWEST ARRIVALS ..</div>
        <div className='collections'>
            {renderedBrands}
        
        </div>

        <div className='discover-line'></div>

    </div>
  )
}

export default Discover