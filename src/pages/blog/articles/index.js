import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import Topbar from "@/components/React/global-components/topbar";
import ProfessionalTabs from "@/components/Professionals/professional-tabs";
import BlogNavbar from "@/components/Blog/blog-navbar";
import BlogList from "@/components/Blog/blog-list";

const News = () => {
    return <div>
        <Topbar />
        <Navbar />
        <BlogNavbar />
        <BlogList type="articles" title="Հոդվածներ"/>
        <Footer />
    </div>
}

export default News
