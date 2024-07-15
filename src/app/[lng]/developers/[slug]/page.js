import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import fetchDevelopersApi from '@/hooks/fetchDevelopersApi'
import BuildingView from '@/components/Buildings/BuildingView'

export default async function DeveloperViewPage({
    params: { lng, slug },
    searchParams,
}) {
    const buildingResponse = await fetchDevelopersApi(lng).get(
        'api/projects/' + slug,
        {
            next: { revalidate: 0 },
        },
    )
    return (
        <AppPage>
            <BuildingView building={buildingResponse} lng={lng} />
        </AppPage>
    )
}
