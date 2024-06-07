import React from 'react'
import Navbar from '@/components/React/global-components/navbar'
import Footer from '@/components/React/global-components/footer'
import Topbar from '@/components/React/global-components/topbar'
import BlogNavbar from '@/components/Blog/blog-navbar'
import BlogDetails from '@/components/Blog/blog-details'

function BlogItem(props) {
    return (
        <div>
            <Topbar />
            <Navbar />
            <BlogNavbar />
            <BlogDetails />
            <Footer />
        </div>
    )
}

export default BlogItem
