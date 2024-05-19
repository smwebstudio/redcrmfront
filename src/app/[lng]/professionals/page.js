import React from 'react'
import ProfessionalTabs from '@/components/Professionals/professional-tabs'
import AppPage from '@/components/common/Layout/AppPage'

export default async function ProfessionalsPage({ params: { lng } }) {
    return (
        <AppPage>
            <ProfessionalTabs />
        </AppPage>
    )
}
