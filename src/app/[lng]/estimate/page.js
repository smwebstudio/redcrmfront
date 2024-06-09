import React from 'react'
import EstimateForm from '@/components/Forms/estimate'
import AppPage from '@/components/common/Layout/AppPage'
import fetchApi from '@/hooks/fetchApi'

export default async function EstimateViewPage({ params: { lng } }) {
    const evaluationOptions = await fetchApi(lng).post(
        'api/evaluationOptions',
        {
            next: { revalidate: 3600 },
        },
    )

    return (
        <AppPage>
            <EstimateForm
                lng={lng}
                evaluationOptionsData={evaluationOptions.data}
            />
        </AppPage>
    )
}
