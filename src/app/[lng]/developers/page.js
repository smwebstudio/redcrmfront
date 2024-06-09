import React from 'react'
import api from '@/hooks/api'
import SearchSectionDevelopers from '@/components/Search/SearchSectionDevelopers'
import AppPage from '@/components/common/Layout/AppPage'
import BannerDevelopers from '@/components/pages/Developers/DevelopersBanner'
import fetchDevelopersApi from '@/hooks/fetchDevelopersApi'
import BuildingList from '@/components/Buildings/List'

export default async function DeveloperListPage({
    params: { lng, slug },
    searchParams,
}) {
    const buildingsResponse = await fetchDevelopersApi(lng).get(
        'api/projects/',
        {
            next: { revalidate: 0 },
        },
    )
    const buildings = buildingsResponse

    const response = await api(lng).post('/api/filters', {})
    const filtersData = response.data
    const queryData = ''
    return (
        <AppPage>
            <BannerDevelopers />
            <SearchSectionDevelopers
                filtersData={filtersData}
                queryData={queryData}
                lng={lng}
            />
            <BuildingList buildingsData={buildings} lng={lng} />
        </AppPage>
    )
}
