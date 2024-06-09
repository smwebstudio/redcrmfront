import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import api from '@/hooks/api'
import AddProperty from '@/components/pages/AddProperty'

export default async function AddPropertyPage({ params: { lng, slug } }) {
    const evaluationDataResponse = await api(lng).post('/api/options', {})
    const evaluationData = evaluationDataResponse.data.data

    return (
        <AppPage>
            <AddProperty lng={lng} evaluationData={evaluationData} />
        </AppPage>
    )
}
