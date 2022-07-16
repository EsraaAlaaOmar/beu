import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const SingleBrand = ({brand, clearstate,setDeletedBrand,setInfoFlashmsg}) => {
  const dispatch = useDispatch()
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
 
         <Link to={`/dashbord/brands/1/edite`} state={{brand:brand}} >   <span onClick={()=> { dispatch(clearstate())}} >Edit </span> </Link>
          <span  onClick={()=> { dispatch(clearstate());setInfoFlashmsg(true); setDeletedBrand({id:brand.id , name:brand.title});}}>Delete</span>

      </div>
</div>
  )
}

export default SingleBrand