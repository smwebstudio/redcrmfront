import React from 'react'
import SearchSection from '@/components/Search/SearchSection'
import AppPage from '@/components/common/Layout/AppPage'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import fetchApi from '@/hooks/fetchApi'
import EstateMainTabs from '@/components/Estate/estate-main-tabs'
import EstateEstimate from '@/components/Home/estate-estimate'
import Professionals from '@/components/Home/professionals'
import EstateMainHot from '@/components/Estate/estate-main-hot'
import HomeBanner from '@/components/pages/Home/HomeBanner'
import WhyChooseUs from '@/components/pages/Home/WhyChooseUs'

export const dynamicParams = true

export default async function HomePage({ params: { lng } }) {
    const filtersResponse = await fetchApi(lng).get('api/filters/', {
        next: { revalidate: 12400 },
    })

    const saleEstatesResponse = await fetchApi(lng).get('api/estates/sale/', {
        next: { revalidate: 12400 },
    })
    const rentEstatesResponse = await fetchApi(lng).get('api/estates/rent/', {
        next: { revalidate: 12400 },
    })
    const dailyEstatesResponse = await fetchApi(lng).get('api/estates/daily')
    const hotEstatesResponse = await fetchApi(lng).get('api/estates/hot/', {
        next: { revalidate: 12400 },
    })
    const bestBrokersResponse = await fetchApi(lng).get('api/brokers/best/', {
        next: { revalidate: 12400 },
    })

    const filters = filtersResponse.data
    const saleEstates = saleEstatesResponse
    const rentEstates = rentEstatesResponse
    const dailyEstates = dailyEstatesResponse
    const hotEstates = hotEstatesResponse
    const bestBrokers = bestBrokersResponse

    return (
        <AppPage>
            <HomeBanner />
            <ContainerBoxed>
                <SearchSection filtersData={filters} lng={lng} />
                <EstateMainTabs
                    saleEstates={saleEstates}
                    rentEstates={rentEstates}
                    dailyEstates={dailyEstates}
                    lng={lng}
                />
                <EstateEstimate filtersData={filters} lng={lng} />
                <Professionals bestBrokers={bestBrokers} lng={lng} />
                <EstateMainHot hotEstates={hotEstates} lng={lng} />
            </ContainerBoxed>
            <WhyChooseUs lng={lng} />
        </AppPage>
    )
}
