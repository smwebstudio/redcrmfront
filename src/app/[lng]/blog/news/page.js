import React from 'react'
import BlogList from '@/components/Blog/blog-list'
import AppPage from '@/components/common/Layout/AppPage'

export default async function BlogNewsPage({ params: { lng } }) {
    return (
        <AppPage>
            <BlogList type="news" title="Նորություններ" />
        </AppPage>
    )
}
