import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import EstateTabs from "@/components/Estate/estate-tabs";
import Topbar from "@/components/React/global-components/topbar";

const Estates = () => {
    return <div>
        <Topbar />
        <Navbar />
        <EstateTabs />
        <Footer />
    </div>
}

export default Estates
