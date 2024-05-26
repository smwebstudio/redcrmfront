import React from 'react'
import EstimateForm from '@/components/Forms/estimate'
import AppPage from '@/components/common/Layout/AppPage'

export default async function EstimateViewPage({ params: { lng } }) {
    return (
        <AppPage>
            <EstimateForm lng={lng} />
        </AppPage>
    )
}
