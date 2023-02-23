import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import EstateDetailsSection from "@/components/Estate/estate-details-section";
import Topbar from "@/components/React/global-components/topbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import api from "@/hooks/api";
import { apiURL } from "@/constants";

function EstateDetails(estateData) {
    return <div>
        <Topbar />
        <Navbar />
        <EstateDetailsSection  estateData={estateData}/>
        <Footer />
    </div>;
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const estateDataResponse = await api(context.locale).get(apiURL + "api/estates/" + id);
    const estateData = estateDataResponse.data;

    console.error(estateData);

    return {
        props: {
            ...(await serverSideTranslations(context.locale, [
                'common',
                'footer',
            ])), estateData
            // Will be passed to the page component as props
        },
    }
}
export default EstateDetails;

