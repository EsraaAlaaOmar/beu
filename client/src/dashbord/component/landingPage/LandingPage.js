import React from 'react'
import { ReactComponent as Logo } from '../../images/contact.svg';
import Nav from '../reusable/Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
const LandingPage = () => {
  return (
    <>
       <Nav  />
       <div className="box landingPage"> 
   
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">   Land Page</span>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4/>

        </div>
    
    
    </>
  
  )
} 

export default LandingPage