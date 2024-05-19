import React from 'react'
import EstateCompareCarousel from '@/components/Estate/estate-compare-carousel'
import AppPage from '@/components/common/Layout/AppPage'

export default async function ComparePage({ params: { lng, slug } }) {
    return (
        <AppPage>
            <EstateCompareCarousel />
        </AppPage>
    )
}
