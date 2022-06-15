import React, { useEffect, useState } from 'react'
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
import FlashMsg from '../../../sitePages/Flashmsgs/FlashMsg';
const LandingPage = ({setActiveIndex}) => {
  setActiveIndex()
  const {isLoading,sectionsList,updated, error } =useSelector((state)=> state.landPage)
  const dispatch = useDispatch()
  // error flashmsg state
  const[flashmsg,setFlashmsg] = useState(true)

  useEffect(() =>{
    dispatch(getSections())
  

  },[dispatch,updated])
  
  return (
    <>
       <Nav  />
    
    {isLoading ? 
      <div  className="box loading"> <img src='/images/loading.gif' /></div> 
      :
      <div className="box landingPage"> 
              {flashmsg && error && <FlashMsg 
                      title={` ${Object.values(error)} !  `}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setFlashmsg}

                      icontype='error-icon'
              />}
             
               {flashmsg && updated && <FlashMsg 
                     title={`Landing page has been updated successfully`}
                     img={'/images/msgIcons/success.svg'}
                     setFlashmsg={setFlashmsg}
                     icontype='success-icon'
              />}
          <span className="icon"><Logo  style= {{fill:'#000'}} /></span>    
          <span className="title-text">   Land Page</span>
          <Section1  data={sectionsList[0]}/>
          <Section2 data={sectionsList[1]}/>
          <Section3 data={sectionsList[2]}/>
          <Section4/>
          <Section5 />
          <Section6 data={sectionsList[3]}/>
          <Routes>
              <Route path="/uploadimage/:id" element={<UploadImage setFlashmsg={setFlashmsg}/>} exact /> 
             
          </Routes>

        </div>
      }
    
    
    
    </>
  
  )
} 

export default LandingPage