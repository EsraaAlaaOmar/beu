import React, {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillCamera } from 'react-icons/ai';
import {FaRegEdit} from 'react-icons/fa';
import {IoIosLogOut} from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {getOrders} from '../dashbord/store/clientSide/ordersSlice'
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from '../landingPage/Navbar';
import EdieProfile from './components/EdieProfile';
import CurrentOrders from './components/orders&points/CurrentOrders';
import Orders from './components/orders&points/Orders';
import Points from './components/orders&points/Points';

const Profile = () => {
    const dispatch = useDispatch()
    const {ordersList, isLoading, error}=useSelector((state)=> state.clientOrders)
    const {userInfo} =useSelector((state)=> state.auth)
    useEffect(() =>{
        dispatch(getOrders())
      
    
      },[]) 
      
      const deliveryLocations = ordersList&&ordersList.map(order=>order.delivery_location)
      //unique delivery_locations
     const ubiqueDeliveryLocations= deliveryLocations&& deliveryLocations.reduce((unique, o) => {
        if(!unique.some(obj => obj.id === o.id && obj.value === o.value)) {
          unique.push(o);
        }
        return unique;
    },[]);
    console.log(ubiqueDeliveryLocations)
    const AdressesAndPhone= ubiqueDeliveryLocations&&ubiqueDeliveryLocations.map(location=>{
       return( <>
           <div>({location.country.phone_code}){location.phone}</div>
           <div>{location.country.name}, &nbsp; {location.city.name}, &nbsp;{location.area.name}, &nbsp;{location.street_name}</div>
        </>)
    })
    //   .reduce((value, object) => {
    //     if (value[object.x]) {
    //       value[object.x].y += object.y; 
    //       value[object.x].count++;
      
    //   } else {
    //       value[object.x] = { ...object , count : 1
    //       };
    //     }
    //     return value;
    //   }
    return <>
     <Navbar />
     <div className='profile'>
      
      <Container>
          
          <Row>
              <Col md={6}>
              <div className='first_col'>
                  <div className='img'>
                      <img
                       src={userInfo.avatar}
                      />
                      <span> <AiFillCamera /></span>
                      <div className='name'>{userInfo.name.charAt(0).toUpperCase() + userInfo.name.slice(1)}</div>

                  </div>
                  <div className='main_info'>
                  <span>
                  {userInfo.email}
                  </span>
                  <Link to='/profile/edite'>
                    <span className='icon'>
                        <FaRegEdit />
                    </span>
                  </Link>
                 

               {AdressesAndPhone}
              </div>
              <div className='account_actions'>
              <span className='reset' > <Link to='/log/resetcode'>Reset Password</Link></span>
                    <span className='icon'>
                    Logout <IoIosLogOut />
                    </span>
              </div>


              </div>
             
              
              </Col>
              <Col md={6}>
              <div className='second_col'>
                
           
               <Routes>
               <Route path="/*" element={<Orders  ordersList={ordersList}/>} exact />
              
              
               </Routes>
               </div>
              </Col>
          </Row>
      </Container>
               <Routes> 
                  <Route path="/edite" element={<EdieProfile />} exact />
               </Routes>
  </div>
    </>
 
};

export default Profile;
