import React from 'react'
import Topbar from '@/components/React/global-components/topbar'
import Navbar from '@/components/React/global-components/navbar'
import Banner from '@/components/React/section-components/banner'
import EstateMainTabs from '@/components/Estate/estate-main-tabs'
import Professionals from '@/components/Home/professionals'
import EstateMainHot from '@/components/Estate/estate-main-hot'
import ScrollToTop from '@/components/Global/scroll-to-top'
import WhyChooseUs from '@/components/React/section-components/why-choose-us'
import api from '@/hooks/api'
import Footer from '@/components/React/global-components/footer'
import EstateEstimate from '@/components/Home/estate-estimate'
import SearchSection from '@/components/Search/SearchSection'

export const metadata = {
    title: 'RED Group',
    description: 'RED Group',
}

export default async function HomePage({ params: { lng } }) {
    const response = await api(lng).post('/api/filters', {})
    const filters = response.data
    const query = ''

    return (
        <>
            <div>
                <Topbar />
                <Navbar />
                <Banner />
                <SearchSection filtersData={filters} queryData={query} />
                <EstateMainTabs />
                <EstateEstimate filtersData={filters} />
                <Professionals />
                <EstateMainHot />
                <WhyChooseUs />
                <Footer />
                <ScrollToTop />
            </div>
        </>
    )
}
