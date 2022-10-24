import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import Mission from '@/components/React/section-components/mission-two';
import Professional from '@/components/React/section-components/professional';
import SellHome from '@/components/React/section-components/sellhome';
import Process from '@/components/React/section-components/process';
import BuyOrSell from '@/components/React/section-components/buy-or-sell';
import Footer from '@/components/React/global-components/footer';

const Advisor = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="We are Real Estate Advisors" subheader="Advisors" />
        <Mission />
        <Professional />
        <SellHome />
        <Process />
        <BuyOrSell />
        <Footer />
    </div>
}

export default Advisor

