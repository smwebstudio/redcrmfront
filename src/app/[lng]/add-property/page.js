import React from 'react'
import AddPropertyForm from '@/components/Forms/add-property'
import AppPage from '@/components/common/Layout/AppPage'
import api from '@/hooks/api'

export default async function AddPropertyPage({ params: { lng, slug } }) {
    const evaluationDataResponse = await api(lng).post('/api/options', {})
    const evaluationData = evaluationDataResponse.data.data

    return (
        <AppPage>
            <AddPropertyForm lng={lng} evaluationData={evaluationData} />
        </AppPage>
    )
}
