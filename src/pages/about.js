import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import Mission from '@/components/React/section-components/mission';
import AboutUs from '@/components/React/section-components/about-us';
import ServiceTwo from '@/components/React/section-components/service-two';
import Team from '@/components/React/section-components/team';
import Client from '@/components/React/section-components/client';
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

