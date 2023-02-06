import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import Topbar from "@/components/React/global-components/topbar";
import BlogNavbar from "@/components/Blog/blog-navbar";
import BlogBanner from "@/components/Blog/blog-banner";

const Blog = () => {
    return <div>
        <Topbar />
        <Navbar />
        <BlogNavbar />
        <BlogBanner />
        <Footer />
    </div>
}

export default Blog
