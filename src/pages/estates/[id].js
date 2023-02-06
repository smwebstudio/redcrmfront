import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import RecomandProperties from "@/components/React/section-components/recomand-properties";
import Footer from "@/components/React/global-components/footer";
import EstateDetailsSection from "@/components/Estate/estate-details-section";
import Topbar from "@/components/React/global-components/topbar";

function EstateDetails(props) {
    return <div>
        <Topbar />
        <Navbar />
        <EstateDetailsSection />
        {/*<RecomandProperties />*/}
        <Footer />
    </div>;
}

export default EstateDetails;

