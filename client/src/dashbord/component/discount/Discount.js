import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/discount.svg';
import {getDiscounts, clearstate} from'../../store/discountslice'
import discounts from '../../data/discount.json'
import DiscountPagination from './DiscountPagination';
import AddDiscount from './AddDiscount';
import Nav from '../reusable/Nav';
import EditeDiscount from './EditeDiscount';
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';

const Discount = ({setActiveIndex}) => {
  setActiveIndex()
  const {discountList,added, updated, isLoading, error } =useSelector((state)=> state.discount)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getDiscounts())
  

  },[added, updated])

  // error flashmsg state
  const[flashmsg,setFlashmsg] = useState(true)

  //info flashmsg state
  const[infoflashmsg,setInfoFlashmsg] = useState(false)

  return (
    <>
    
      <Nav  />
      {isLoading ? 
    <div  className="box loading"> <img src='/images/loading.gif' /></div> 
    :
      <div className="box">  
      
         {flashmsg && error && <FlashMsg 
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
        
               {flashmsg && added && <FlashMsg 
                    title={`discount Added successfully`}
                    img={'/images/msgIcons/success.svg'}
                    setFlashmsg={setFlashmsg}

                    icontype='success-icon'

              />}
             
               {flashmsg && updated && <FlashMsg 
                     title={`A discount has been updated successfully`}
                     img={'/images/msgIcons/success.svg'}
                     setFlashmsg={setFlashmsg}
                     icontype='success-icon'
              />}
                {infoflashmsg && <FlashMsg 
                title="Delete Still Under Development !"
                img={'/images/msgIcons/info.svg'}
                setFlashmsg={setInfoFlashmsg}
                icontype='info-icon'
                />}
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>  
        
          <span className="title-text">Discounts</span>
         
          <div className="table-box">
              <div className="oposite">
                  <Link to='/dashbord/discount/add' >
                  <button onClick={() =>dispatch(clearstate())}>+ Add New</button>
                  </Link>

              </div>
              <br/>
              
              <DiscountPagination maplist={discountList} clearstate={clearstate} setInfoFlashmsg={setInfoFlashmsg}/>
              <Routes>
  const[flashmsg,setFlashmsg] = useState(true)
                <Route path="/add" element={<AddDiscount setFlashmsg={setFlashmsg}  />} exact /> 
                <Route path="/edite" element={<EditeDiscount setFlashmsg={setFlashmsg} />} exact/> 
            </Routes>

      </div>
  </div>
  }
 </>
  )
}

export default Discount