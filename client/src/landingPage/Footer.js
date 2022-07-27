import React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import {BsInstagram,BsFacebook,BsTwitter, BsHeart} from'react-icons/bs'
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return <div className='footer'>
    <Row>
      <Col md={2}>
      <div className='logo_section'>
        <img  src='/images/Landingpage/logo.png' />  
     </div>
      
      </Col>
      <Col md={8}>
        <div className='quick_links'>
        <Row>
     <Col>
      
       <div className='link'>
         <Link to='/'> DELIVERY AND RETURNS</Link>
       </div>
       <div className='link'>
         <Link to='/'> Terms of Conditions</Link>
       </div>
      

     </Col>
    <Col>
    <div className='link'>
         <Link to='/log/learnmore'> Privacy Policy</Link>
       </div>
       <div className='link'>
         <Link to='/log/aboutus'> About Us</Link>
       </div>
       
     

     </Col>
    <Col>
        <div className='link'>
            <Link to='/search'> Newest</Link>
       </div>
      
       <div className='link'>
         <Link to='/log/contactus'> Contact Us</Link>
       </div>
      

     </Col>
     </Row>
     </div>
      </Col>
      <Col md={2}>
        
    <div className='inline'>
     
      <span className='icon'> <BsFacebook /> </span>
      <span className='icon'> <BsInstagram /> </span>
      <span className='icon'> <BsTwitter /> </span>

    </div>
      
      </Col>
    </Row>
    
   
    <div className='algorithimia'>
    Designed & Developed with <span> <BsHeart /> </span> by || Algorithimia
    </div>
    <div className='beau'>
    All Rights Reserved || Beau Wow
    </div>

  </div>;
};

export default Footer;
