import React from 'react'
import BlogNavbar from '@/components/Blog/blog-navbar'
import AppPage from '@/components/common/Layout/AppPage'
import { BlogSingle } from '@/components/Blog/View/BlogSingle'
import api from '@/hooks/api'
import { apiURL } from '@/constants'

export default async function BlogViewPage({ params: { lng, slug } }) {
    const blogDataResponse = await api(lng).get(apiURL + 'api/blog/' + slug)
    const article = blogDataResponse.data.data

    return (
        <AppPage lng={lng}>
            <BlogNavbar lng={lng} />
            <BlogSingle lng={lng} article={article} />
        </AppPage>
    )
}
