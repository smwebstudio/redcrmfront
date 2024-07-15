import React from 'react'
import BlogList from '@/components/Blog/blog-list'
import AppPage from '@/components/common/Layout/AppPage'
import BlogNavbar from '@/components/Blog/blog-navbar'

export default async function BlogNewsPage({ params: { lng } }) {
    return (
        <AppPage>
            <BlogNavbar lng={lng} />
            <BlogList type="articles" title="Հոդվածներ" lng={lng} />
        </AppPage>
    )
}
