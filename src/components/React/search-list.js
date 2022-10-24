import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import SearchListSection from '@/components/React/section-components/search-list';
import Footer from '@/components/React/global-components/footer';

const SearchList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Apartment for rent in Gulshan" subheader="Apartment rent" />
        <SearchListSection />
        <Footer />
    </div>
}

export default SearchList

