import React from 'react'

const Welcome = ({name}) => {
  return (
    <div className='welcome'>
        <div className='msg'>Welcome back {name}!</div>
        <div className='info'>
        Since your last login on the system, there were:
        <div><span className='dot'></span> 21 new orders </div>
        <div><span className='dot'></span>  15 new payment</div>
        
       
           
        </div>
        <img src='/images/dashbordfile.svg' />

    </div>
  )
}

export default Welcome