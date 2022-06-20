import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const ProductInCard = () => {
  const dispatch = useDispatch()
//   const  productColors =product.galleries.length >0 && product.galleries.map(galary=>{
//     return <span className="color" style={{backgroundColor:galary.color_hex}}></span>

//   })
  return (
    <div className='box_component'>
        <img
         src={``}
          />
          <div className='box-title'>
          fffffffffffffff
          </div>
          <p>
              eeeeeeeeeeee
          </p>
          <div className='yello'>
        
              
              <div>Price : <span className='price'> ww $</span></div>
              <div className='sizes'>Sizes :<span className='size'> 22</span></div>
              <div>Colors :<span className="color"> </span></div>
              number items
              
          </div>
          <div className='actions'>
             {/* {!viewProducts&&products&& <span>View Products</span>}
             {!viewProducts&&<Link to={`/dashbord/products/${collectionid}/galaries/${product.id}`} state={{ galleries: product.galleries }}> <span onClick={()=>  dispatch(clearstate())}>Gallaries </span></Link>}  
            {!viewProducts&&<Link to={ editeLink} state={{ product: product }}> <span onClick={()=>  dispatch(clearstate())}>Edit </span></Link>}
              <span onClick={()=>deleteFuction&& dispatch(deleteFuction({remove_products:[{product_id: product.id}],offer_id:offer_id}))} >Delete</span> */}

          </div>
    </div>
  )
}

export default ProductInCard