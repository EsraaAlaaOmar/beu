import React from 'react'
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
const Land = () => {
    return (
        <div>
            <Navbar />
            <LandHeader />
            <FirstSection />
            <Discover />
            <SecondSection />
            <ThirdSection />
            <FifthSection />
            <SixSection />
            <Footer />

        </div>
    )
}

export default Land
