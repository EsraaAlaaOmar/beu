import React from 'react'
import { Link } from 'react-router-dom'

const SingleBrand = ({brand}) => {
  return (
    <div className='box_component'>
    <img
     src={brand.image}
      />
      <div className='box-title'>
      {brand.title}
      </div>
 
      
      <div className='actions'>
       <Link to={`/dashbord/products/${brand.id}`}> { <span>View Products</span>} </Link> 
 
         <Link to={`/dashbord/brands/1/edite`}>   <span>Edit </span> </Link>
          <span >Delete</span>

      </div>
</div>
  )
}

export default SingleBrand