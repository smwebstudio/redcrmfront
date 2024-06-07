import React from 'react'
import AboutBanner from '@/components/About/about-banner'
import AboutContent from '@/components/About/about-content'
import AppPage from '@/components/common/Layout/AppPage'

export default async function AboutUsPage({ params: { lng, slug } }) {
    return (
        <AppPage>
            <AboutBanner />
            <AboutContent />
        </AppPage>
    )
}
