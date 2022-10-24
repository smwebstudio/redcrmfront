import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import PricingSection from '@/components/React/section-components/pricing';
import Footer from '@/components/React/global-components/footer';

const Pricing = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Pricing" />
        <PricingSection />
        <Footer />
    </div>
}

export default Pricing

