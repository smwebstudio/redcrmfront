import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import FaqSection from '@/components/React/section-components/faq';
import Footer from '@/components/React/global-components/footer-v2';

const Faq = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Help Center" />
        <FaqSection />
        <Footer />
    </div>
}

export default Faq

