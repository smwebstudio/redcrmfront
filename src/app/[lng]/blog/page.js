import React from 'react'
import BlogNavbar from '@/components/Blog/blog-navbar'
import BlogBanner from '@/components/Blog/blog-banner'
import BlogBlock from '@/components/Blog/blog-block'
import AppPage from '@/components/common/Layout/AppPage'

export default async function Blog({ params: { lng } }) {
    return (
        <AppPage>
            <BlogNavbar lng={lng} />
            <BlogBanner lng={lng} />
            <BlogBlock type="news" title="Նորություններ" lng={lng} />
            <BlogBlock type="articles" title="Հոդվածներ" lng={lng} />
            {/*<BlogBlock type="prices" title="Գներ" lng={lng} />*/}
            {/*<BlogBlock type="statistics" title="Հաշվետվություններ" lng={lng} />*/}
        </AppPage>
    )
}
