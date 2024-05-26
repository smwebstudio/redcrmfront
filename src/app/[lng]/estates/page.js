import React from 'react'
import { apiURL } from '@/constants'
import api from '@/hooks/api'
import AppPage from '@/components/common/Layout/AppPage'
import EstateList from '@/components/Estate/List/EstateList'

export const dynamicParams = true

export default async function EstateListPage({
    params: { lng, slug },
    searchParams,
}) {
    let queryURL = ''

    const queryData = Object.entries(searchParams)

    const queryDataParamsInitial = queryData.reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: Number(value),
        }),
        {},
    )

    const queryDataParams = Object.entries(queryDataParamsInitial)
        .filter(([_, value]) => value !== 0)
        .reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: value,
            }),
            {},
        )

    queryData.forEach(function (param) {
        if (param[0] === 'prices' && param[1].length > 0) {
            let pricesRange = param[1].split('-')
            queryURL +=
                'filter[price_from]=' +
                pricesRange[0] +
                '&' +
                'filter[price_to]=' +
                pricesRange[1] +
                '&'
        } else {
            queryURL += 'filter[' + param[0] + ']' + '=' + param[1] + '&'
        }
    })

    const filtersDataRequest = await api(lng).post('api/filters/', {})
    const filtersData = filtersDataRequest.data.data

    const data = await api(lng).get('api/estates/filter/estates?' + queryURL)
    const estatesData = data.data
    const pageDataURL = apiURL + 'api/estates/filter/estates'

    return (
        <AppPage>
            <EstateList
                estatesData={estatesData}
                pageDataURLData={pageDataURL}
                filtersData={filtersData}
                queryData={queryData}
                queryDataParams={queryDataParams}
                lng={lng}
            />
        </AppPage>
    )
}
