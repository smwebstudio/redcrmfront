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

import nextConfig from "../../next.config";

export default function Home() {
    console.error('process.env');
    console.error(nextConfig.env.NEXT_PUBLIC_BACKEND_URL);

    console.error('publicRuntimeConfig');
    return (
        <>
            <Head>
                <title>RED Group</title>
            </Head>

            <div>
                <Topbar />
                <Navbar />
                <Banner />
                <EstateMainTabs />
                <EstateEstimate />
                <Professionals />
                <EstateMainHot />
                <WhyChooseUs />
                <Footer />
                <ScrollToTop />
            </div>
        </>
    )
}
