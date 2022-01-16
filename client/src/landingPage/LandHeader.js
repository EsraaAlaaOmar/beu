import React from 'react'

import {Carousel} from 'react-bootstrap'
import Navbar from './Navbar'
import HeaderButtons from './HeaderButtons'
const LandHeader = () => {
    return (

        <div>
              <Carousel >
                <Carousel.Item>
                <div className='land_head'>
                <Navbar />
                <HeaderButtons />
               </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='land_head'>
                <Navbar />
                <HeaderButtons />
                </div>
                   
                </Carousel.Item>
                <Carousel.Item>
                <div className='land_head'>
                <Navbar />
                <HeaderButtons />
               </div>
                </Carousel.Item>
            </Carousel>
        </div>
       
    )
}

export default LandHeader
