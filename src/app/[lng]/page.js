import React from 'react'
import Banner from '@/components/React/section-components/banner'
import EstateMainTabs from '@/components/Estate/estate-main-tabs'
import Professionals from '@/components/Home/professionals'
import EstateMainHot from '@/components/Estate/estate-main-hot'
import WhyChooseUs from '@/components/React/section-components/why-choose-us'
import api from '@/hooks/api'
import EstateEstimate from '@/components/Home/estate-estimate'
import SearchSection from '@/components/Search/SearchSection'
import AppPage from '@/components/common/Layout/AppPage'
import { apiURL } from '@/constants'

export const metadata = {
    title: 'RED Group',
    description: 'RED Group',
}

export const revalidate = 3600

export default async function HomePage({ params: { lng } }) {
    const response = await api(lng).post('/api/filters', {})
    const filters = response.data
    const query = ''

    console.log(apiURL + '/api/estates/sale')
    const saleEstatesResponse = await fetch(apiURL + 'api/estates/sale')
    const rentEstatesResponse = await fetch(apiURL + 'api/estates/rent')
    const dailyEstatesResponse = await fetch(apiURL + 'api/estates/daily')
    const saleEstates = await saleEstatesResponse.json()
    const rentEstates = await rentEstatesResponse.json()
    const dailyEstates = await dailyEstatesResponse.json()

    console.log('saleEstates')
    console.log(saleEstates)
    return (
        <AppPage>
            <Banner />
            <SearchSection filtersData={filters} queryData={query} lng={lng} />
            <EstateMainTabs
                saleEstates={saleEstates}
                rentEstates={rentEstates}
                dailyEstates={dailyEstates}
            />
            <EstateEstimate filtersData={filters} lng={lng} />
            <Professionals />
            <EstateMainHot />
            <WhyChooseUs />
        </AppPage>
    )
}
