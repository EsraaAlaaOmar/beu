import React,{useEffect} from 'react'
import { useRef } from 'react';
import { Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';
import FavouriteProduct from './FavouriteProduct';
// use ref  function 
function useOutsideAlerter(ref,navigate) {
    useEffect(() =>{
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          
            navigate(`/dashbord/users/`)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      
    }}, [ref]);
  }
const UserFavourites = () => {
    
    let navigate =useNavigate()
   // call useref function
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, navigate);
  return (
    <div className='addpage'>
    <div className='opacity'>
        <div className='choose-product'  ref={wrapperRef}>
          <div className='page-title'>
            <span className='bold'>Favourite</span> 
            <img 
              src='data:image/jpeg;base64,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'
              />
              <span className="name">Josh Brolin</span>
            </div>
          <div className="sentence">all controls are disabled for you in this page</div>
          <Col md={6} lg={4}>
              <FavouriteProduct />
          </Col>
            
          <div className='rating'>
                    <ReactStars
                        count={5}
                        onChange={'ratingChanged'}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                    />
                    </div>
         </div>
         </div>
    
</div>
  )
}

export default UserFavourites