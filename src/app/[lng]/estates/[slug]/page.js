import React from 'react'
import EstateDetailsSection from '@/components/Estate/estate-details-section'
import api from '@/hooks/api'
import AppPage from '@/components/common/Layout/AppPage'
import { notFound } from 'next/navigation'

export default async function EstateViewPage({
    params: { lng, slug },
    searchParams,
}) {
    try {
        const estateDataResponse = await api(lng).get('api/estates/' + slug)
        const estateData = estateDataResponse.data
        return (
            <AppPage>
                <EstateDetailsSection estateData={estateData} lng={lng} />
            </AppPage>
        )
    } catch (e) {
        notFound()
    }
}
