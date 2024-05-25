import AppPage from '@/components/common/Layout/AppPage'
import EstateMap from '@/components/Estate/estate-map'
import api from '@/hooks/api'
import { apiURL } from '@/constants'

export default async function MapSearchPage({
    params: { lng, slug },
    searchParams,
}) {
    console.log('map ssr')

    let queryURL = ''
    const query = searchParams

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

    console.log(99999999)

    const filtersDataRequest = await api(lng).get(apiURL + 'api/filters/', {})
    const filtersData = filtersDataRequest.data

    const estatesResponse = await api(lng).get(
        apiURL +
            'api/estates/filter/estates?filter[contract_type_id]=1&' +
            queryURL,
    )
    const estatesData = estatesResponse.data.data
    const pageDataURL = apiURL + 'api/estates/filter/estates'

    console.log('estatesResponse')
    console.log(estatesData.length)

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
