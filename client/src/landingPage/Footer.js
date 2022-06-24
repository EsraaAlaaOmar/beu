import React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import {BsInstagram,BsFacebook,BsTwitter, BsHeart} from'react-icons/bs'
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return <div className='footer'>
    <Row>
      <Col md={3}>
      <div className='logo_section'>
     <img  src='/images/landingpage/logo.png' />
     <div className='text'>
          <ShowMoreText
                      /* Default options */
                      lines={4}
                      more="Show more"
                      less="Show less"
                      className="content-css"
                      anchorClass="my-anchor-css-class"
                      expanded={false}
                      width={280}
                      truncatedEndingComponent={"... "}
                  >
                      Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum, in volutpat sem ex in ligula. Nunc purus est, consequat condimentum faucibus sed, iaculis sit amet massa. Fusce ac condimentum turpis. Ut consequat lacinia augue, vitae aliquam sapien ullamcorper at. Donec efficitur, ligula ut lacinia viverra, lorem lacus condimentum leo, eu luctus dolor ex at quam. Fusce a nisi at erat dapibus posuere eget sed nulla. Nam sem odio, hendrerit vel mi ut, pharetra viverra massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc placerat ante vel eros semper bibendum. Donec ultricies vestibulum interdum.
                </ShowMoreText>
     </div>     
     </div>
      
      </Col>
      <Col md={6}>
        <div className='quick_links'>
        <Row>
     <Col>
       <div className='title'>Quick Links</div>
       <div className='link'>
         <Link to='/search'> Search</Link>
       </div>
       <div className='link'>
         <Link to='/'> Newest</Link>
       </div>
       <div className='link'>
         <Link to='/'> Sales</Link>
       </div>

     </Col>
    <Col>
       <div className='title'>Resources</div>
       <div className='link'>
         <Link to='/log/aboutus'> About Us</Link>
       </div>
       <div className='link'>
         <Link to='/log/learnmore'> Learn More</Link>
       </div>
       <div className='link'>
         <Link to='/log/contactus'> Contact Us</Link>
       </div>

     </Col>
    <Col>
       <div className='title'>Others</div>
       <div className='link'>
         <Link to='/'> Terms of Conditions</Link>
       </div>
       <div className='link'>
         <Link to='/log/privacypolicy'>Privacy Policy</Link>
       </div>
      

     </Col>
     </Row>
     </div>
      </Col>
      <Col md={3}>
        
    <div className='inline'>
      <input type='email' placeholder='@ email' />
      <br/>
      <button>Subscribe</button>
      <br/>
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
