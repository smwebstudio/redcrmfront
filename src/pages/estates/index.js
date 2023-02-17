import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import EstateTabs from "@/components/Estate/estate-tabs";
import Topbar from "@/components/React/global-components/topbar";
import { apiURL } from "@/constants";
import LanguageSwitcher from "@/components/Language/language-switcher";

const Estates = ({ estatesData, pageDataURL, filtersData }) => {
    return <div>
        <Topbar />
        <Navbar />
        <EstateTabs estatesData={estatesData} pageDataURL={pageDataURL} filtersData={filtersData}/>
        <Footer />
    </div>
}

export async function getServerSideProps(context) {
    const data = await  fetch(apiURL+"/estates/all");
    const estatesData = await data.json();
    const pageDataURL = apiURL+"/estates/all";

    const filtersDataRequest = await fetch(apiURL+"/filters/");
    const filtersData = await filtersDataRequest.json();

    console.error(filtersData);

    return { props: { estatesData, pageDataURL, filtersData } };
}


export default Estates
