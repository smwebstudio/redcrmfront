import React from 'react'
import BlogNavbar from '@/components/Blog/blog-navbar'
import BlogBanner from '@/components/Blog/blog-banner'
import BlogBlock from '@/components/Blog/blog-block'
import AppPage from '@/components/common/Layout/AppPage'

export default async function Blog({ params: { lng } }) {
    return (
        <AppPage>
            <BlogNavbar />
            <BlogBanner />
            <BlogBlock type="news" title="Նորություններ" />
            <BlogBlock type="articles" title="Հոդվածներ" />
            <BlogBlock type="prices" title="Գներ" />
            <BlogBlock type="statistics" title="Հաշվետվություններ" />
        </AppPage>
    )
}
