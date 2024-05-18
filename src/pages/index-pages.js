import Head from "next/head";

import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import api from "@/hooks/api";
import Topbar from "@/components/React/global-components/topbar";
import SearchSection from "@/components/Search/SearchSection";
import EstateMainTabs from "@/components/Estate/estate-main-tabs";
import EstateEstimate from "@/components/Home/estate-estimate";
import Professionals from "@/components/Home/professionals";
import EstateMainHot from "@/components/Estate/estate-main-hot";
import Navbar from "@/components/React/global-components/navbar";
import Banner from "@/components/React/section-components/banner";
import WhyChooseUs from "@/components/React/section-components/why-choose-us";
import Footer from "@/components/React/global-components/footer";
import ScrollToTop from "@/components/Global/scroll-to-top";


export default function Home({ filtersData, queryData }) {
    return (
        <>
            <Head>
                <title>RED Group</title>
            </Head>

            <div>
                <Topbar />
                <Navbar />
                <Banner />
                <SearchSection filtersData={filtersData} queryData={queryData} />
                <EstateMainTabs />
                <EstateEstimate filtersData={filtersData} />
                <Professionals />
                <EstateMainHot />
                <WhyChooseUs />
                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}

export async function getServerSideProps({ locale }) {

    const response = await api(locale).post("/api/filters", {});
    const filtersData = response.data;
    const queryData = "";
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "footer"
            ])), filtersData, queryData
        }
    };
}
