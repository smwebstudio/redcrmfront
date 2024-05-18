import React from 'react'
import Navbar from '@/components/React/global-components/navbar'
import Footer from '@/components/React/global-components/footer'
import EstateDetailsSection from '@/components/Estate/estate-details-section'
import Topbar from '@/components/React/global-components/topbar'
import api from '@/hooks/api'
import { apiURL } from '@/constants'

export default async function EstateViewPage({
    params: { lng, slug },
    searchParams,
}) {
    const estateDataResponse = await api(lng).get(
        apiURL + 'api/estates/' + slug,
    )
    const estateData = estateDataResponse.data

    return (
        <div>
            <Topbar />
            <Navbar />
            <EstateDetailsSection estateData={estateData} />
            <Footer />
        </div>
    )
}
