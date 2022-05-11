import React from 'react'

const Box = ({title='Offer Title', p='Supporting description for the card goes here like a breeze.', yello='133 product' }) => {
  return (
    <div className='box_component'>
        <img
         src='https://img.freepik.com/free-photo/galaxy-system-millions-billions-stars-together-with-gas-dust_39386-369.jpg?w=1060'
          />
          <div className='box-title'>
          {title}
          </div>
          <p>
              {p}
          </p>
          <div className='yello'>{yello}</div>
          <div className='actions'>
              <span>View Products</span>
              <span>Edit </span>
              <span>Delete</span>

          </div>
    </div>
  )
}

export default Box