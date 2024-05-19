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

export const metadata = {
    title: 'RED Group',
    description: 'RED Group',
}

export default async function HomePage({ params: { lng } }) {
    const response = await api(lng).post('/api/filters', {})
    const filters = response.data
    const query = ''

    return (
        <AppPage>
            <Banner />
            <SearchSection filtersData={filters} queryData={query} lng={lng} />
            <EstateMainTabs />
            <EstateEstimate filtersData={filters} lng={lng} />
            <Professionals />
            <EstateMainHot />
            <WhyChooseUs />
        </AppPage>
    )
}
