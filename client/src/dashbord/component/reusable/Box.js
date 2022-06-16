import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const Box = ({clearstate,product,editeLink='/dashbord/collections',viewProducts, products=true, deleteFuction, offer_id,collectionid}) => {
  const dispatch = useDispatch()
  const  productColors =product.galleries.length >0 && product.galleries.map(galary=>{
    return <span className="color" style={{backgroundColor:galary.color_hex}}></span>

  })
  return (
    <div className='box_component'>
        <img
         src={product.galleries[0]&&`https://thebeauwow.me/${product.galleries[0].image}`}
          />
          <div className='box-title'>
          {product.title}
          </div>
          <p>
              {product.description}
          </p>
          <div className='yello'>
        
              
              <div>Price : {product.unit_price} $</div>
              <div>Sizes :{product.sizes}</div>
              <div>Colors :{productColors}</div>
              
          </div>
          <div className='actions'>
             {!viewProducts&&products&& <span>View Products</span>}
             {!viewProducts&&<Link to={`/dashbord/products/${collectionid}/galaries/${product.id}`} state={{ galleries: product.galleries }}> <span onClick={()=>  dispatch(clearstate())}>Gallaries </span></Link>}  
            {!viewProducts&&<Link to={ editeLink} state={{ product: product }}> <span onClick={()=>  dispatch(clearstate())}>Edit </span></Link>}
              <span onClick={()=>deleteFuction&& dispatch(deleteFuction({remove_products:[{product_id: product.id}],offer_id:offer_id}))} >Delete</span>

          </div>
    </div>
  )
}

export default Box