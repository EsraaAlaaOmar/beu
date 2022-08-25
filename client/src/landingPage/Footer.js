import React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import {BsInstagram,BsFacebook,BsTwitter, BsHeart} from'react-icons/bs'
import { Col, Row } from 'react-bootstrap';

const Footer = ({enLanguage}) => {
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
         <Link to='/'>  {enLanguage ?'DELIVERY AND RETURNS':'التسليم والإسترجاع'}</Link>
       </div>
       <div className='link'>
         <Link to='/'> {enLanguage ?'Terms of Conditions':'الأحكام والشروط'} </Link>
       </div>
      

     </Col>
    <Col>
    <div className='link'>
         <Link to='/log/learnmore'> {enLanguage ?'Privacy Policy':'سياسة الخصوصية'}</Link>
       </div>
       <div className='link'>
         <Link to='/log/aboutus'>{enLanguage ?'About Us':'نحن'} </Link>
       </div>
       
     

     </Col>
    <Col>
        <div className='link'>
            <Link to='/search'>{enLanguage ?'Newest':'الاجدد'} </Link>
       </div>
      
       <div className='link'>
         <Link to='/log/contactus'>{enLanguage ?'Contact Us':'اتصل بنا'} </Link>
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
