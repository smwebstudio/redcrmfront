import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import Footer from '@/components/React/global-components/footer';
import AboutBanner from "@/components/About/about-banner";
import Topbar from "@/components/React/global-components/topbar";
import AboutContent from "@/components/About/about-content";

const About = () => {
    return <div>
        <Topbar />
        <Navbar />
        <AboutBanner />
        <AboutContent />
        {/*<AboutUs />*/}
        {/*<Team />*/}
        <Footer />
    </div>
}

export default About
