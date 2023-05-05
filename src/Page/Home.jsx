import React from 'react'
import LocationFind from '../Components/LocationFind/LocationFind'
import WhyChoose from '../Components/WhyChoose/WhyChoose'
import Banner from '../Components/Banner/Banner'
import Group from '../Components/Group/Group'
import Testimonial from '../Components/Testimonial/Testimonial'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Network from '../Components/Network/Network'
import Community from '../Components/Community/Community'
import Member from '../Components/Member/Member'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Network/>
            <Community/>
            <Member/>
           <WhyChoose/>
           <Banner/>
           <Group/>
           <Testimonial/>
           <Footer/>
        </div>
    )
}

export default Home
