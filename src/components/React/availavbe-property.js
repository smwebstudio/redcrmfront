import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import PropertySection from '@/components/React/section-components/available-peroperty';
import Footer from '@/components/React/global-components/footer';

const AvailableProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Availavbe Apartments" subheader="Availavbe" />
        <PropertySection />
        <Footer />
    </div>
}

export default AvailableProperty

