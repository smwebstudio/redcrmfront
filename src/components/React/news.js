import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import PageHeader from '@/components/React/global-components/page-header';
import PopularPost from './blog-components/popular-post';
import PostList from './blog-components/post-list';
import Footer from '@/components/React/global-components/footer';

const News = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property News" subheader="News" />
        <PopularPost />
        <PostList />
        <Footer />
    </div>
}

export default News

