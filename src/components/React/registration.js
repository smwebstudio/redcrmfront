import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import RegistraionSection from '@/components/React/section-components/registration';
import Footer from '@/components/React/global-components/footer';

const Registration = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Registetion" />
        <RegistraionSection />
        <Footer />
    </div>
}

export default Registration

