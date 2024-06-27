import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import fetchApi from '@/hooks/fetchApi'
import ProfessionalTabs from '@/components/Professionals/ProfessionalTabs'

export const revalidate = 0
export default async function ProfessionalsPage({ params: { lng } }) {
    // const allProfessionals = await fetchApi(lng).get(
    //     'api/brokers/profession/-1',
    //     {
    //         next: { revalidate: 3600 },
    //     },
    // )
    //
    // const brokers = await fetchApi(lng).get('api/brokers/profession/-2', {
    //     next: { revalidate: 3600 },
    // })
    //
    // const banks = await fetchApi(lng).get('api/brokers/profession/1', {
    //     next: { revalidate: 3600 },
    // })
    //
    // const estimators = await fetchApi(lng).get('api/brokers/profession/1', {
    //     next: { revalidate: 3600 },
    // })

    const allProfessionals = await fetchApi(lng).get('api/brokers/current', {
        next: { revalidate: 0 },
    })

    return (
        <AppPage>
            <ProfessionalTabs
                allProfessionals={allProfessionals}
                // brokers={brokers}
                // banks={banks}
                // estimators={estimators}
            />
        </AppPage>
    )
}
