import React from 'react'
import AboutBanner from '@/components/About/about-banner'
import AboutContent from '@/components/About/about-content'
import AppPage from '@/components/common/Layout/AppPage'
import AboutContentEnglish from '@/components/pages/About/AbountContentEnglish'

export default async function AboutUsPage({ params: { lng, slug } }) {
    return (
        <AppPage>
            <AboutBanner />
            {lng === 'hy' && <AboutContent />}
            {lng === 'en' && <AboutContentEnglish />}
            {lng === 'ru' && <AboutContent />}
        </AppPage>
    )
}
