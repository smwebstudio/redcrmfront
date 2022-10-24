import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import Bannerv2 from '@/components/React/section-components/banner-v2';
import Explore from '@/components/React/section-components/explore';
import FeaturedProperties from '@/components/React/section-components/featured-properties';
import Ads from '@/components/React/section-components/ads';
import PropertiesByCities from '@/components/React/section-components/properties-by-cities';
import RecentProperties from '@/components/React/section-components/recent-properties';
import FeaturedPorject from '@/components/React/section-components/featured-project';
import WhyChooseUs from '@/components/React/section-components/why-choose-us';
import OurPartner from '@/components/React/section-components/our-partner';
import Footer from '@/components/React/global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Bannerv2 />
        <Explore />
        <FeaturedProperties />
        <Ads />
        <PropertiesByCities />
        <RecentProperties />
        <FeaturedPorject />
        <WhyChooseUs />
        <OurPartner />
        <Footer />
    </div>
}

export default Home_V1

