import React from 'react'
import EstateTabs from '@/components/Estate/estate-tabs'
import { apiURL } from '@/constants'
import api from '@/hooks/api'
import AppPage from '@/components/common/Layout/AppPage'

export const dynamicParams = true

export default async function EstateListPage({
    params: { lng, slug },
    searchParams,
}) {
    let locale = lng
    let queryURL = ''
    const query = searchParams

    console.log('searchParams')
    console.log(searchParams)

    const queryData = Object.entries(query)

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

    const filtersDataRequest = await api(locale).post(
        apiURL + 'api/filters/',
        {},
    )
    const filtersData = filtersDataRequest.data

    const data = await api(locale).get(
        apiURL +
            'api/estates/filter/estates?&filter[contract_type_id]=1&' +
            queryURL,
    )
    const estatesData = data.data
    const pageDataURL = apiURL + 'api/estates/filter/estates'

    console.log('estatesData')
    console.log(estatesData)

    return (
        <AppPage>
            <EstateTabs
                estatesData={estatesData}
                pageDataURL={pageDataURL}
                filtersData={filtersData}
                queryData={queryData}
                queryDataParams={queryDataParams}
            />
        </AppPage>
    )
}
