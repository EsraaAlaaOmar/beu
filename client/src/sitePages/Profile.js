import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillCamera } from 'react-icons/ai';
import {FaRegEdit} from 'react-icons/fa';
import {IoIosLogOut} from 'react-icons/io';

import { Link, Route, Routes } from 'react-router-dom';
import EdieProfile from './components/EdieProfile';
import CurrentOrders from './components/orders&points/CurrentOrders';
import Orders from './components/orders&points/Orders';
import Points from './components/orders&points/Points';

const Profile = () => {
  return <div className='profile'>

      <Container>
          
          <Row>
              <Col md={6}>
              <div className='first_col'>
                  <div className='img'>
                      <img
                       src='https://image.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg'
                      />
                      <span> <AiFillCamera /></span>
                      <div className='name'>Louisa Barnett</div>

                  </div>
                  <div className='main_info'>
                  <span>
                  Keanue.coleman@gmail.com
                  </span>
                  <Link to='/profile/edite'>
                    <span className='icon'>
                        <FaRegEdit />
                    </span>
                  </Link>
                  <div>(917)619-1527</div>
                  <div>Dominica,Budapest,12 street pla</div>


              </div>
              <div className='account_actions'>
              <span className='reset' > <Link to='/'>Reset Password</Link></span>
                    <span className='icon'>
                    Logout <IoIosLogOut />
                    </span>
              </div>


              </div>
             
              
              </Col>
              <Col md={6}>
              <div className='second_col'>
                
           
               <Routes>
               <Route path="/*" element={<Orders />} exact />
               <Route path="/points" element={<Points />} exact />
              
               </Routes>
               </div>
              </Col>
          </Row>
      </Container>
               <Routes> 
                  <Route path="/edite" element={<EdieProfile />} exact />
               </Routes>
  </div>;
};

export default Profile;
