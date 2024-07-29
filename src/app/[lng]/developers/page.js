import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import fetchDevelopersApi from '@/hooks/fetchDevelopersApi'
import BuildingList from '@/components/Buildings/List'
import DeveloperFilterSection from '@/components/Developers/DeveloperFilterSection'
import BuildingListMap from '@/components/Buildings/List/BuildingListMap'

export default async function DeveloperListPage({
    params: { lng, slug },
    searchParams,
}) {
    const buildings = await fetchDevelopersApi(lng).get('api/projects/', {
        next: { revalidate: 3600 },
    })

    const filtersResponse = await fetchDevelopersApi(lng).get('api/projects/', {
        next: { revalidate: 0 },
    })

    const withCoordinates = await fetchDevelopersApi(lng).get(
        'api/projects/allCoordinates',
        {
            next: { revalidate: 3600 },
        },
    )

    const filtersData = filtersResponse
    const queryData = ''
    return (
        <AppPage>
            <DeveloperFilterSection
                filtersData={filtersData}
                queryData={queryData}
                lng={lng}
            />
            <BuildingList buildingsData={buildings} lng={lng} />
            <BuildingListMap buildingsData={withCoordinates.data} />
        </AppPage>
    )
}
