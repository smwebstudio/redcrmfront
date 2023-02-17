import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import Topbar from "@/components/React/global-components/topbar";
import BlogNavbar from "@/components/Blog/blog-navbar";
import BlogBanner from "@/components/Blog/blog-banner";
import BlogBlock from "@/components/Blog/blog-block";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Blog = () => {
    return <div>
        <Topbar />
        <Navbar />
        <BlogNavbar />
        <BlogBanner />
        <BlogBlock type="news" title="Նորություններ"/>
        <BlogBlock type="articles" title="Հոդվածներ"/>
        <BlogBlock type="prices" title="Գներ"/>
        <BlogBlock type="statistics" title="Հաշվետվություններ"/>
        <Footer />
    </div>
}

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'footer',
            ])),
            // Will be passed to the page component as props
        },
    }
}

export default Blog
