import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import Topbar from "@/components/React/global-components/topbar";
import EstimateForm from "@/components/Forms/estimate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Estimate = () => {
    return <div>
        <Topbar />
        <Navbar />
        <EstimateForm />
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
            // Will be passed to the page component as props
        },
    }
}

export default Estimate
