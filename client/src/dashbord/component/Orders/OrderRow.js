import React,{useState,useEffect,useRef} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import  {IoCloseCircleOutline}  from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ProductsList from './ProductsList';


// use ref  function 
function useOutsideAlerter(ref,setShowlist) {
  useEffect(() =>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
          setShowlist(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    
  }}, [ref]);
}
const OrderRow = ({order}) => {
    const [showlist,setShowlist] =useState(false)
    const [showproducts,setShowProducts]= useState(false)
       // close list when click any where
   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef,setShowlist);

   const renderedProducts = order.products.map(product =>{
    return <ProductsList product={product} />
   })
  return (
    <tr>
    <td className='align_dir'>
        <img 
            src={order.customer.avatar}
        />
        <span>{order.customer.name}</span>
    </td>
    <td>{order.id}</td>
    {/* <td className='align_dir'>
            <img src='https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?w=996' />
            <br/>
            {order.text}
   </td> */}
    <td style={{width:'50%'}}>
    {showproducts ?<div className='single-product'>

      <table>
         <span className='close' onClick={()=>setShowProducts(false)}> <IoCloseCircleOutline/> </span>
        <thead>
        <th>Image</th>
        <th > Quantity </th>
        <th> size</th>
        <th > Color</th>
          </thead>
          {renderedProducts}
      
      </table>
    
    </div>:<div className='show-products' onClick={()=>{setShowProducts(true)}}>details ..</div>}
 
      </td>
    {/* <td></td>
    <td></td> */}
    <td>{order.order_status}</td>
    <td>{order.total_price}$</td>
    <td>{order.payment_option} </td>
    
          <td>
                { showlist && <div className='hiddenlist' ref={wrapperRef}>
            
                    <div className='delete-inlist'>Delete</div>
                </div>}
                <span className='icon' onClick={()=>setShowlist(!showlist)} ref={wrapperRef}><BsThreeDotsVertical /></span>
            </td>
</tr>
  )
}

export default OrderRow