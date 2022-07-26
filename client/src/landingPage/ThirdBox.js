import React from 'react'

const ThirdBox = ({backgroundColor, title , secondLine}) => {
  return (
    <div className='box' style={{backgroundColor: backgroundColor}}>
        <img src='/images/Landingpage/C2.png' />
        <div className='box-title'>{title}</div>
        <div className='box-secondLine'>{secondLine}</div>
    
    </div>
  )
}

export default ThirdBox