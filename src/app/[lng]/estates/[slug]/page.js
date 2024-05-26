import React from 'react'
import EstateDetailsSection from '@/components/Estate/estate-details-section'
import api from '@/hooks/api'
import AppPage from '@/components/common/Layout/AppPage'

export default async function EstateViewPage({
    params: { lng, slug },
    searchParams,
}) {
    const estateDataResponse = await api(lng).get('api/estates/' + slug)
    const estateData = estateDataResponse.data

    return (
        <AppPage>
            <EstateDetailsSection estateData={estateData} lng={lng} />
        </AppPage>
    )
}
