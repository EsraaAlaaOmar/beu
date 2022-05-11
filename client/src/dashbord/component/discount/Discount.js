import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/discount.svg';
import {getDiscounts} from'../../store/discountslice'
import discounts from '../../data/discount.json'
import DiscountPagination from './DiscountPagination';
import AddDiscount from './AddDiscount';
import Nav from '../reusable/Nav';

const Discount = () => {
  const {discountList } =useSelector((state)=> state.discount)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getDiscounts())
  

  },[dispatch])

  return (
    <>
    
      <Nav  first_link='Active' second_link='All' />
      
      <div className="box">  
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">Discounts</span>
          <div className="table-box">
              <div className="oposite">
                  <Link to='/dashbord/discount/add' >
                  <button>+ Add New</button>
                  </Link>

              </div>
              <br/>
              
              <DiscountPagination maplist={discountList} />
              <Routes>
                <Route path="/add" element={<AddDiscount  />} exact /> 
            </Routes>

      </div>
  </div>
 </>
  )
}

export default Discount