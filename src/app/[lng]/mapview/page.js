import AppPage from '@/components/common/Layout/AppPage'
import EstateMap from '@/components/Estate/estate-map'
import api from '@/hooks/api'
import { apiURL } from '@/constants'

export default async function MapSearchPage({
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

    const filtersDataRequest = await api(lng).get(apiURL + 'api/filters/', {})
    const filtersData = filtersDataRequest.data

    let estatesData = []
    if (queryURL) {
        const estatesResponse = await api(lng).get(
            'api/estates/geoFilter/estates?' + queryURL,
        )
        estatesData = estatesResponse.data.data
    }

    const pageDataURL = apiURL + 'api/estates/filter/estates'

    return (
        <AppPage>
            <EstateMap
                lng={lng}
                estatesData={estatesData}
                pageDataURL={pageDataURL}
                filtersData={filtersData}
                queryData={queryData}
                queryDataParams={queryDataParams}
            />
        </AppPage>
    )
}
