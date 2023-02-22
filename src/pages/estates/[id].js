import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import EstateDetailsSection from "@/components/Estate/estate-details-section";
import Topbar from "@/components/React/global-components/topbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function EstateDetails(props) {
    return <div>
        <Topbar />
        <Navbar />
        <EstateDetailsSection />
        <Footer />
    </div>;
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
export default EstateDetails;

