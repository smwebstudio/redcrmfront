import React from 'react'
import ProfessionalBanner from '@/components/Professionals/professional-banner'
import AppPage from '@/components/common/Layout/AppPage'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import ProfessionalView from '@/components/Professionals/ProfessionalView'
import fetchApi from '@/hooks/fetchApi'

export default async function ProfessionalPage({ params: { lng, slug } }) {
    const data = await fetchApi(lng).get('api/professionals/' + slug, {
        next: { revalidate: 0 },
    })
    const professionalItem = data
    return (
        <AppPage>
            <ProfessionalBanner />
            <ContainerBoxed>
                <ProfessionalView
                    professionalItem={professionalItem}
                    lng={lng}
                />
            </ContainerBoxed>
        </AppPage>
    )
}
