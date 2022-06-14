import React, { useEffect } from 'react'
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
import {getSections} from '../../store/LandingPageSlice'
import { useDispatch, useSelector } from 'react-redux';
const LandingPage = ({setActiveIndex}) => {
  setActiveIndex()
  const {isLoading,sectionsList, error } =useSelector((state)=> state.landPage)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getSections())
  

  },[dispatch])
  
  return (
    <>
       <Nav  />
    
    {isLoading ? 
      <div  className="box loading"> <img src='/images/loading.gif' /></div> 
      :
      <div className="box landingPage"> 
      
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">   Land Page</span>
          <Section1  data={sectionsList[0]}/>
          <Section2 data={sectionsList[1]}/>
          <Section3 data={sectionsList[2]}/>
          <Section4/>
          <Section5 />
          <Section6 data={sectionsList[3]}/>
          <Routes>
              <Route path="/uploadimage/:id" element={<UploadImage />} exact /> 
             
          </Routes>

        </div>
      }
    
    
    
    </>
  
  )
} 

export default LandingPage