import React from 'react'
import Topbar from '@/components/React/global-components/topbar'
import Navbar from '@/components/React/global-components/navbar'

export const metadata = {
    title: 'RED Group',
    description: 'RED Group',
}

export default function Home({ filtersData, queryData }) {
    return (
        <>
            <div>
                <Topbar />
                <Navbar />
                {/*<Banner />*/}
                {/*<SearchSection filtersData={filtersData} queryData={queryData} />*/}
                {/*<EstateMainTabs />*/}
                {/*<EstateEstimate filtersData={filtersData} />*/}
                {/*<Professionals />*/}
                {/*<EstateMainHot />*/}
                {/*<WhyChooseUs />*/}
                {/*<Footer />*/}
                {/*<ScrollToTop />*/}
            </div>
        </>
    )
}

// export async function getServerSideProps({ locale }) {
//
//     const response = await api(locale).post("/api/filters", {});
//     const filtersData = response.data;
//     const queryData = "";
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, [
//                 "common",
//                 "footer"
//             ])), filtersData, queryData
//         }
//     };
// }
