import React,{useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate,useParams } from 'react-router-dom'
import {getProducts} from '../../store/productSlice'
import SingleGalaryImage from './SingleGalaryImage';
import {Row,Col} from 'react-bootstrap'
// use ref  function 
function useOutsideAlerter(ref,navigate,id) {
  useEffect(() =>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        
          navigate(`/dashbord/products/${id}`)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    
  }}, [ref]);
}

const ProductGalaries = ({collectionId}) => {
  let navigate= useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const{productId}=useParams()
    const galleries= location.state.galleries
    const {products} =useSelector((state)=>state.product)
    const product = products.find(product=>product.id==productId)

    const renderedGalaries= product.galleries.map((gallary)=>
 {   return(
     <Col md={6}> <SingleGalaryImage galary={gallary} productId={productId} /></Col>
    )})
    //use Ref func 
const wrapperRef = useRef(null);
useOutsideAlerter(wrapperRef, navigate,collectionId);
  return (
    <div className='addpage'>
      <div className='opacity'>
            <div className='choose-product' ref={wrapperRef}>
              <Row>
                 {renderedGalaries}
              </Row> 
               
            </div>
            {console.log(product.galleries)}
      </div>
   </div>)


}

export default ProductGalaries