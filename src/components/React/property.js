import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import PropertySection from '@/components/React/section-components/property';
import TopAuthor from '@/components/React/section-components/top-author';
import Footer from '@/components/React/global-components/footer';

const Property = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property" />
        <PropertySection />
        <TopAuthor />
        <Footer />
    </div>
}

export default Property

