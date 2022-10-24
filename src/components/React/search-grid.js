import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import SearchGridSection from '@/components/React/section-components/search-grid';
import Footer from '@/components/React/global-components/footer';

const SearchGrid = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Apartment for rent in Gulshan" subheader="Apartment rent" />
        <SearchGridSection />
        <Footer />
    </div>
}

export default SearchGrid

