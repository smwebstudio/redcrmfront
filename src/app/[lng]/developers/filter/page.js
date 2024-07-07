import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import BannerDevelopers from '@/components/pages/Developers/DevelopersBanner'
import fetchDevelopersApi from '@/hooks/fetchDevelopersApi'
import BuildingList from '@/components/Buildings/List'
import DeveloperFilterSection from '@/components/Developers/DeveloperFilterSection'

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

    const filtersResponse = await fetchDevelopersApi(lng).get('api/projects/', {
        next: { revalidate: 0 },
    })
    const filtersData = filtersResponse
    const queryData = ''
    return (
        <AppPage>
            <BannerDevelopers />
            <DeveloperFilterSection
                filtersData={filtersData}
                queryData={queryData}
                lng={lng}
            />
            <BuildingList buildingsData={buildings} lng={lng} />
        </AppPage>
    )
}
