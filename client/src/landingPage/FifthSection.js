import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
const FifthSection = ({enLanguage}) => {
  return (
    <div className='fifth'>
      <div className='background'>
          <div className='slider'>
              <Carousel />
          </div>
      </div>
      <Link to='/log/feedback'>
        <div className='button'>
        {enLanguage ?  <>Tell Us How We're Doing !</>:' اخبرنا عن رأيك بنا'}
        
          </div>
      </Link> 
    </div>
  )
} 

export default FifthSection