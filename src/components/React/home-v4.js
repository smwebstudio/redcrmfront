import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import Bannerv4 from '@/components/React/section-components/banner-v4';
import AppermentSlider from '@/components/React/section-components/appertment-slider';
import About from '@/components/React/section-components/aboutv2';
import RoomSpacing from '@/components/React/section-components/room-spacing';
import CalltoAction from '@/components/React/section-components/calltoaction';
import Client from '@/components/React/section-components/client';
import OurPartner from '@/components/React/section-components/our-partner';
import Footer from '@/components/React/global-components/footer-v2';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Bannerv4 />
        <AppermentSlider />
        <About />
        <RoomSpacing />
        <CalltoAction />
        <Client PaddingTop="pd-top-60" PaddingBottom="0"/>
        <OurPartner />
        <Footer />
    </div>
}

export default Home_V1

