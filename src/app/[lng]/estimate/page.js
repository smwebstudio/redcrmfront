import React from 'react'
import EstimateForm from '@/components/Forms/estimate'
import AppPage from '@/components/common/Layout/AppPage'

export default async function DeveloperViewPage({ params: { lng } }) {
    return (
        <AppPage>
            <EstimateForm />
        </AppPage>
    )
}
