import React from 'react'
import EstateSearchList from '@/components/Estate/estate-search-list'
import { apiURL } from '@/constants'
import AppPage from '@/components/common/Layout/AppPage'

export async function SearchResultsPage({ lng }) {
    let queryURL = ''
    // queryData.forEach(function (param) {
    //     if (param[1]) {
    //         queryURL += 'filter[' + param[0] + ']' + '=' + param[1] + '&'
    //     }
    // })

    const data = await fetch(apiURL + 'api/estates/filter/estates?' + queryURL)
    const searchData = await data.json()
    const searchDataURL = apiURL + 'api/estates/filter/estates?' + queryURL

    return (
        <AppPage>
            <EstateSearchList
                searchData={searchData}
                searchDataURL={searchDataURL}
            />
        </AppPage>
    )
}

export default SearchResultsPage
