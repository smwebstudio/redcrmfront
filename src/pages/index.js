import Head from 'next/head'
import Navbar from "@/components/React/global-components/navbar";
import Banner from "@/components/React/section-components/banner";
import Footer from "@/components/React/global-components/footer";
import WhyChooseUs from "@/components/React/section-components/why-choose-us";
import Topbar from "@/components/React/global-components/topbar";
import EstateMainTabs from "@/components/Estate/estate-main-tabs";
import React from "react";
import EstateMainHot from "@/components/Estate/estate-main-hot";
import EstateEstimate from "@/components/Home/estate-estimate";
import Professionals from "@/components/Home/professionals";
import ScrollToTop from "@/components/Global/scroll-to-top";
import { apiURL } from "@/constants";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import api from "@/hooks/api";
import { useAuth } from "@/hooks/auth";

export default function Home({filtersData}) {
    return (
        <>
            <Head>
                <title>RED Group</title>
            </Head>

            <div>
                <Topbar />
                <Navbar />
                <Banner filtersData={filtersData}/>
                <EstateMainTabs />
                <EstateEstimate filtersData={filtersData}/>
                <Professionals />
                <EstateMainHot />
                <WhyChooseUs />
                <Footer />
                <ScrollToTop />
            </div>
        </>
    )
}

export async function getServerSideProps({ locale }) {

    const response = await api(locale).post("/api/filters", {})
    const filtersData =response.data;

    return { props: { ...(await serverSideTranslations(locale, [
                'common',
                'footer',
            ])),filtersData } };
}
