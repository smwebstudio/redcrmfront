import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import NewsDetailsSection from './blog-components/news-details';
import Footer from '@/components/React/global-components/footer';

const NewsDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="News Details" />
        <NewsDetailsSection />
        <Footer />
    </div>
}

export default NewsDetails

