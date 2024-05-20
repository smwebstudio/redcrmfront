import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import EstateCompareCarousel from '@/components/Estate/estate-compare-carousel'

export default async function CompareListPage({ params: { lng } }) {
    return (
        <AppPage>
            <EstateCompareCarousel />
        </AppPage>
    )
}
