import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import PropertySection from '@/components/React/section-components/properties-by-city';
import TopAuthor from '@/components/React/section-components/top-author';
import Footer from '@/components/React/global-components/footer';

const AvailableProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Properties by Cities"/>
        <PropertySection />
        <TopAuthor />
        <Footer />
    </div>
}

export default AvailableProperty

