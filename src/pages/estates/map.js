import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import EstateTabs from "@/components/Estate/estate-tabs";
import Topbar from "@/components/React/global-components/topbar";
import { apiURL } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import api from "@/hooks/api";
import axios from "axios";
import EstateMap from "@/components/Estate/estate-map";

const EstatesMap = ({ estatesData, pageDataURL, filtersData }) => {
    return <div>
        <Topbar />
        <Navbar />
        <EstateMap estatesData={estatesData} pageDataURL={pageDataURL} filtersData={filtersData}/>
        <Footer />
    </div>
}

export async function getServerSideProps({ locale }) {


    const filtersDataRequest = await api(locale).post(apiURL+"api/filters/", {});
    const filtersData = filtersDataRequest.data;

    const data = await  api(locale).get(apiURL+"api/estates/filter/estates?sort=created_on");
    const estatesData = data.data;
    const pageDataURL = apiURL+"api/estates/filter/estates";



    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])), estatesData, pageDataURL, filtersData},
    }
}

export default EstatesMap
