import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import Mission from '@/components/React/section-components/mission';
import AboutUs from '@/components/React/section-components/about-us';
import ServiceTwo from '@/components/React/section-components/service-two';
import Team from '@/components/React/section-components/team';
import Client from '@/components/React/section-components/client';
import Footer from '@/components/React/global-components/footer';

const About = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About" />
        <Mission />
        <AboutUs />
        <ServiceTwo />
        <Team />
        <Client />
        <Footer />
    </div>
}

export default About

