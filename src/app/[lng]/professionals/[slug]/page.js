import React from 'react'
import ProfessionalBanner from '@/components/Professionals/professional-banner'
import { apiURL } from '@/constants'
import ProfessionalDetails from '@/components/Professionals/professional-details'
import AppPage from '@/components/common/Layout/AppPage'

export default async function ProfessionalPage({ params: { lng, slug } }) {
    const data = await fetch(apiURL + 'api/professionals/' + slug)
    const professionalItem = await data.json()
    return (
        <AppPage>
            <ProfessionalBanner />
            <ProfessionalDetails professionalItem={professionalItem} />
        </AppPage>
    )
}
