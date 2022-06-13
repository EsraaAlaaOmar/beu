import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/contact.svg';
import Nav from '../reusable/Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import UploadImage from './UploadImage';
const LandingPage = ({setActiveIndex}) => {
  setActiveIndex()
  return (
    <>
       <Nav  />
       <div className="box landingPage"> 
       <div className='alert'>
        This Page not implemented yet 
        the content below is just a demo content to show the screen design
              </div>
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">   Land Page</span>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4/>
          <Section5 />
          <Section6 />
          <Routes>
              <Route path="/uploadimage" element={<UploadImage />} exact /> 
             
          </Routes>

        </div>
    
    
    
    </>
  
  )
} 

export default LandingPage