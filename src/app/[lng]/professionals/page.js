import React from 'react'
import ProfessionalTabs from '@/components/Professionals/professional-tabs'
import AppPage from '@/components/common/Layout/AppPage'
import { apiURL } from '@/constants'
import api from '@/hooks/api'

export const revalidate = 0
export default async function ProfessionalsPage({ params: { lng } }) {
    const allProfessionalsResponse = await api(lng).get(
        apiURL + 'api/brokers/profession/-1',
    )

    const allProfessionals = allProfessionalsResponse.data
    return (
        <AppPage>
            <ProfessionalTabs allProfessionals={allProfessionals} />
        </AppPage>
    )
}
