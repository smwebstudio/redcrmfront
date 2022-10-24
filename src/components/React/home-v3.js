import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import Bannerv3 from '@/components/React/section-components/banner-v3';
import FeaturedProperties from '@/components/React/section-components/featured-properties';
import Dream from '@/components/React/section-components/dream';
import PopularProperty from '@/components/React/section-components/popular-property';
import TeamV2 from '@/components/React/section-components/team-v2';
import Client from '@/components/React/section-components/client';
import OurPartner from '@/components/React/section-components/our-partner';
import Footer from '@/components/React/global-components/footer-v2';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Bannerv3 />
        <FeaturedProperties Customclass="pd-top-90" />
        <Dream />
        <PopularProperty />
        <TeamV2 />
        <Client PaddingTop="pd-top-60" PaddingBottom="0"/>
        <OurPartner />
        <Footer />
    </div>
}

export default Home_V1

