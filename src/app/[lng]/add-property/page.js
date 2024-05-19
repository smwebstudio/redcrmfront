import React from 'react'
import AddPropertyForm from '@/components/Forms/add-property'
import AppPage from '@/components/common/Layout/AppPage'

export default async function AddPropertyPage({ params: { lng, slug } }) {
    return (
        <AppPage>
            <AddPropertyForm />
        </AppPage>
    )
}
