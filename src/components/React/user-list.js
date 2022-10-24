import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import UserListSection from '@/components/React/section-components/user-list';
import Footer from '@/components/React/global-components/footer';

const UserList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="User List" />
        <UserListSection />
        <Footer />
    </div>
}

export default UserList

