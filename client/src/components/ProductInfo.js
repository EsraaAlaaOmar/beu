import React from 'react'
import {addFav,deletefav} from '../dashbord/store/clientSide/favouriteSlice'
import { useDispatch } from 'react-redux'
import {BsHeart,BsFillHeartFill} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const ProductInfo = ({fav,product}) => {
    const dispatch= useDispatch()
    return (
        <div className='product_info'>
            <div>
            {product&&product.title}
            </div>
            <div className='last-line'>
            <span className={product&&product.offer && 'oldprice'}>{product&&product.unit_price}$</span>  &nbsp;
            {product&&product.offer && product.price_in_offer+'$'}
            <span className='oposite_direction' >
            <span onClick={()=>dispatch(fav? deletefav({product_id:product.id}):addFav({product_id:product.id}))}>{ fav ? <span> <BsFillHeartFill /> </span>:<span> <BsHeart /> </span>}</span>
            <Link to='/product' state={{product:product,fav:fav}} >
                <span> <FiShoppingCart />  <span className='add'><AiFillPlusCircle/></span> </span>
            </Link>    
             
            </span>
            </div>
        </div>
    )
}

export default ProductInfo
