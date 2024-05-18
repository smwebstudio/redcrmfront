import React from 'react'
import Navbar from '@/components/React/global-components/navbar'
import Footer from '@/components/React/global-components/footer'
import Topbar from '@/components/React/global-components/topbar'
import ProfessionalBanner from '@/components/Professionals/professional-banner'
import { apiURL } from '@/constants'
import ProfessionalDetails from '@/components/Professionals/professional-details'

export default async function ProfessionalPage({ params: { lng, slug } }) {
    const data = await fetch(apiURL + 'api/professionals/' + slug)
    const professionalItem = await data.json()
    return (
        <div>
            <Topbar />
            <Navbar />
            <ProfessionalBanner />
            <ProfessionalDetails professionalItem={professionalItem} />
            <Footer />
        </div>
    )
}
