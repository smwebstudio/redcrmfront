import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import EstateTabs from "@/components/Estate/estate-tabs";
import Topbar from "@/components/React/global-components/topbar";
import { apiURL } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import api from "@/hooks/api";
import axios from "axios";

const Estates = ({ estatesData, pageDataURL, filtersData, queryData, queryDataParams }) => {
    return <div>
        <Topbar />
        <Navbar />
        <EstateTabs estatesData={estatesData} pageDataURL={pageDataURL} filtersData={filtersData} queryData={queryData} queryDataParams={queryDataParams} />
        <Footer />
    </div>;
};

export async function getServerSideProps(context) {

    let locale = context.locale;
    let queryURL = "";


    const query = context.query;
    const queryData = Object.entries(query);



    const queryDataParamsInitial = queryData.reduce((acc, [key, value]) => ({
        ...acc,
        [key]: Number(value)
    }), {});

    const queryDataParams = Object.entries(queryDataParamsInitial)
        .filter(([_, value]) => value !== 0)
        .reduce((acc, [key, value]) => ({
            ...acc,
            [key]: value
        }), {});

    queryData.forEach(function(param) {
        if (param[0] === "prices" && param[1].length > 0) {
            let pricesRange = param[1].split("-");
            queryURL += "filter[price_from]=" + pricesRange[0] + "&" + "filter[price_to]=" + pricesRange[1] + "&";
        } else {
            queryURL += "filter[" + param[0] + "]" + "=" + param[1] + "&";
        }
    });


    const filtersDataRequest = await api(locale).post(apiURL + "api/filters/", {});
    const filtersData = filtersDataRequest.data;


    const data = await api(locale).get(apiURL + "api/estates/filter/estates?&filter[contract_type_id]=1&" + queryURL);
    const estatesData = data.data;
    const pageDataURL = apiURL + "api/estates/filter/estates";


    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common"
            ])), estatesData, pageDataURL, filtersData, queryData, queryDataParams
        }
    };
}

export default Estates;
