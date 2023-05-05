import React from 'react'
import LocationFind from '../Components/LocationFind/LocationFind'
import WhyChoose from '../Components/WhyChoose/WhyChoose'
import Banner from '../Components/Banner/Banner'
import Group from '../Components/Group/Group'
import Testimonial from '../Components/Testimonial/Testimonial'


const Home = () => {
    return (
        <div>
           <WhyChoose/>
           <LocationFind/>
           <Banner/>
           <Group/>
           <Testimonial/>
        </div>
    )
}

export default Home
