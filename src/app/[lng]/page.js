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
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

export const metadata = {
    title: 'Health',
    description: 'RED Group',
}

export const revalidate = 0

export default async function HomePage({ params: { lng } }) {
    const filtersResponse = await api(lng).post('/api/filters', {})
    const filters = filtersResponse.data

    const saleEstatesResponse = await api(lng).get('api/estates/sale')
    const rentEstatesResponse = await api(lng).get('api/estates/rent')
    const dailyEstatesResponse = await api(lng).get(
        apiURL + 'api/estates/daily',
    )
    const hotEstatesResponse = await api(lng).get('api/estates/hot')
    const saleEstates = saleEstatesResponse.data
    const rentEstates = rentEstatesResponse.data
    const dailyEstates = dailyEstatesResponse.data
    const hotEstates = hotEstatesResponse.data

    const bestBrokersResponse = await api(lng).get('api/brokers/best')
    const bestBrokers = bestBrokersResponse.data

    return (
        <AppPage>
            <Banner />
            <ContainerBoxed>
                <SearchSection filtersData={filters} lng={lng} />
                <EstateMainTabs
                    saleEstates={saleEstates}
                    rentEstates={rentEstates}
                    dailyEstates={dailyEstates}
                    lng={lng}
                />
                <EstateEstimate filtersData={filters} lng={lng} />
                <Professionals bestBrokers={bestBrokers} lng={lng} />
                <EstateMainHot hotEstates={hotEstates} lng={lng} />
            </ContainerBoxed>
            <WhyChooseUs lng={lng} />
        </AppPage>
    )
}
