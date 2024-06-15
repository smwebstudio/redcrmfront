import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import EstateCompare from '@/components/Estate/EstateCompare'

export default async function CompareListPage({ params: { lng } }) {
    return (
        <AppPage>
            <EstateCompare lng={lng} />
        </AppPage>
    )
}
