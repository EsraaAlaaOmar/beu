import React from 'react'
import Nav from '../reusable/Nav'
import SingleBrand from './SingleBrand'

const Brands = ({setActiveIndex}) => {
    setActiveIndex()
    return (
    <>
       <Nav />
       <div className='box'>
          <span className="title-text">Brands</span>

          <SingleBrand />
       </div>
    </>
    
  )
}

export default Brands