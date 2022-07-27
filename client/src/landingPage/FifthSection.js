import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
const FifthSection = () => {
  return (
    <div className='fifth'>
      <div className='background'>
          <div className='slider'>
              <Carousel />
          </div>
      </div>
      <Link to='/'>
        <div className='button'>Tell Us How We're Doing !</div>
      </Link> 
    </div>
  )
} 

export default FifthSection