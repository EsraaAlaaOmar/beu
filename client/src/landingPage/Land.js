import React from 'react'
import LandHeader from './LandHeader';
import FirstSection from './FirstSection';
import Products from './Products';
import ThirdSection from './ThirdSection';
import Footer from './Footer';
import Navbar from './Navbar';
const Land = () => {
    return (
        <div>
            <Navbar />
            <LandHeader />
            <FirstSection />
            <Products />
            <ThirdSection />
            <Footer />

        </div>
    )
}

export default Land
