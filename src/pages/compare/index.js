import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import Topbar from "@/components/React/global-components/topbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Professionals = () => {
    return <div>
        <Topbar />
        <Navbar />
        <EstateCompareCarousel />
        <Footer />
    </div>
}

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'footer',
            ])),
        },
    }
}

export default Professionals
