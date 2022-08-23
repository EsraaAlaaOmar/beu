import React, {useEffect} from 'react'
import LandHeader from './LandHeader';
import FirstSection from './FirstSection';
import Products from './Products';
import ThirdSection from './ThirdSection';
import Footer from './Footer';
import Navbar from './Navbar';
import Discover from './Discover';
import SecondSection from './SecondSection';
import FifthSection from './FifthSection';
import SixSection from './SixSection';
import FourthSection from './FourthSection';
import {getClientLanding} from '../dashbord/store/clientSide/landingSlice'
import { useDispatch, useSelector } from 'react-redux';
const Land = () => {
    const dispatch= useDispatch()

    const {sections , isLoading} =useSelector((state)=> state.clientLanding)
    const {enLanguage} =useSelector((state)=> state.lang)
    useEffect(() =>{
        dispatch(getClientLanding())
    },[dispatch])
    return (
        <>
         {isLoading ? <div  className="clientloading loading"> <img src='/images/client_loading.gif' /></div>:
         <div>
            <Navbar navigate={false}/>
            {/* <LandHeader  /> */}
            <FirstSection section={sections[0]} enLanguage={enLanguage} />
            <Discover  enLanguage={enLanguage}/>
            <SecondSection  section={sections[1]}  enLanguage={enLanguage}/>
            <ThirdSection  enLanguage={enLanguage}/>
            <FourthSection />
            <FifthSection  enLanguage={enLanguage}/>
            <SixSection  section={sections[3]}  enLanguage={enLanguage} />
            <Footer  enLanguage={enLanguage}/>

        </div>}
        </>
        
    )
}

export default Land
