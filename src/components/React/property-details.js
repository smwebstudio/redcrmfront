import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import PropertyDetailsSection from '@/components/React/section-components/property-details';
import RecomandProperties from '@/components/React/section-components/recomand-properties';
import Footer from '@/components/React/global-components/footer';

const PropertyDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property Details" />
        <PropertyDetailsSection />
        <RecomandProperties />
        <Footer />
    </div>
}

export default PropertyDetails

