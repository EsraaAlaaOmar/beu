import React,{useRef,useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ProductsList from '../reusable/ProductsList'
import  {IoCloseCircleOutline}  from 'react-icons/io5'


// use ref  function 
function useOutsideAlerter(ref,navigate,link) {
    useEffect(() =>{
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          
            navigate(link)
        }
      } 
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      
    }}, [ref]);
  }

const OrderProducts = () => {
    const navigate = useNavigate()
    let location = useLocation()
    let products= location.state.products
    let link = location.state.link
    let orderId = location.state.orderId
    const renderedProducts = Array.isArray(products)?products.map(product =>{
        return <ProductsList product={product} />
       })
       :<ProductsList product={products} />

       const wrapperRef = useRef(null);
       useOutsideAlerter(wrapperRef, navigate,link);
  return (
    <div className='addpage'>
            <div className='opacity'>
                    <div className='add table-box' ref={wrapperRef}>
               <Link to={link} >    <span className='close'> <IoCloseCircleOutline/> </span></Link> 
                        
                 <h4>Products for Order {orderId} </h4>
                    <table className='Table' style={{  border: 'solid 0.5px #272D3B33'}} >
                 
                <thead className="head">
                <th>Image</th>
                <th > Quantity </th>
                <th> size</th>
                <th > Color</th>
                <th>unit Price</th>
                    </thead>
                    {renderedProducts}
                
                </table>
                </div>
        </div>
 </div>
  )
}

export default OrderProducts