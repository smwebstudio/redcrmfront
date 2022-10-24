import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import AddNew from '@/components/React/section-components/add-new';
import Footer from '@/components/React/global-components/footer';

const AddProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Add Property" />
        <AddNew />
        <Footer />
    </div>
}

export default AddProperty

