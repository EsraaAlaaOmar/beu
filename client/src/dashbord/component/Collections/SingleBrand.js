import React from 'react'
import { Link } from 'react-router-dom'

const SingleBrand = () => {
  return (
    <div className='box_component'>
    <img
     src={`https://img.freepik.com/free-vector/brand-word-lettering-typography-design-illustration-with-line-icons_9233-177.jpg?w=996`}
      />
      <div className='box-title'>
      title
      </div>
 
      
      <div className='actions'>
         { <span>View Products</span>}
 
         <span>Edit </span>
          <span >Delete</span>

      </div>
</div>
  )
}

export default SingleBrand