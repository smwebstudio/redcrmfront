import Head from "next/head";
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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import api from "@/hooks/api";
import { useAuth } from "@/hooks/auth";
import SearchSection from "@/components/Search/SearchSection";
import BannerDevelopers from "@/components/React/section-components/bannerDevelopers";
import SearchSectionDevelopers from "@/components/Search/SearchSectionDevelopers";
import BuildingList from "@/components/Buildings/BuildingList";


export default function Developers({ filtersData, queryData, buildings }) {
    return (
        <>
            <Head>
                <title>RED Group</title>
            </Head>

            <div>
                <Topbar />
                <Navbar />
                <BannerDevelopers />
                <SearchSectionDevelopers filtersData={filtersData} queryData={queryData} />
                <BuildingList buildings={buildings}/>
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
    const buildings = {
        "data": [
            {
                "id": 66,
                "full_address": "Նոր-Նորքի 1-ին զանգված, Լվովյան 108/2 ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/developers/d1.png"
            },
            {
                "id": 66,
                "full_address": "Փոքր կենտրոն, Խանջյան 9/3",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "ԱՐԵՎ Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/developers/d2.png"
            },
            {
                "id": 66,
                "full_address": "Դավթաշեն",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "Bridgeview բազմաֆունկցիոնալ ընտանեկան բնակելի համալիր",
                "image": "/assets/developers/d3.png"
            },
            {
                "id": 66,
                "full_address": "Արաբկիր",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "Գրիբոյեդով պարկ : Էլիտար բազմաֆունկցիոնալ բնակելի համալիր",
                "image": "/assets/developers/d4.png"
            },
            {
                "id": 66,
                "full_address": "Աջափնյակ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "Level 16 ։ Նոր բնակելի համալիր ",
                "image": "/assets/developers/d5.png"
            },
            {
                "id": 66,
                "full_address": "Բագրևանդ 49",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "Սմարթ Սիթի",
                "image": "/assets/developers/d6.png"
            },
            {
                "id": 66,
                "full_address": "Նոր-Նորքի 1-ին զանգված, Լվովյան 108/2 ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/developers/d1.png"
            },
            {
                "id": 66,
                "full_address": "Փոքր կենտրոն, Խանջյան 9/3",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "ԱՐԵՎ Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/developers/d2.png"
            },
            {
                "id": 66,
                "full_address": "Դավթաշեն",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "Bridgeview բազմաֆունկցիոնալ ընտանեկան բնակելի համալիր",
                "image": "/assets/developers/d3.png"
            },
            {
                "id": 66,
                "full_address": "Արաբկիր",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "Գրիբոյեդով պարկ : Էլիտար բազմաֆունկցիոնալ բնակելի համալիր",
                "image": "/assets/developers/d4.png"
            },
            {
                "id": 66,
                "full_address": "Աջափնյակ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "Level 16 ։ Նոր բնակելի համալիր ",
                "image": "/assets/developers/d5.png"
            },
            {
                "id": 66,
                "full_address": "Բագրևանդ 49",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "Սմարթ Սիթի",
                "image": "/assets/developers/d6.png"
            },
        ],
        "links": {
            "first": "http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=1",
            "last": "http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=321",
            "prev": null,
            "next": "http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 2,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=1",
                    "label": "1",
                    "active": true
                },

                {
                    "url": "http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=2",
                    "label": "Next &raquo;",
                    "active": false
                }
            ],
            "path": "http://redoc/api/estates/filter/estates",
            "per_page": 12,
            "to": 12,
            "total": 3843
        }
    };


    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "footer"
            ])), filtersData, queryData, buildings
        }
    };
}
