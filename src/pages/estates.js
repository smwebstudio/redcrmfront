import Navbar from "@/components/React/global-components/navbar";
import PageHeader from "@/components/React/global-components/page-header";
import PropertySection from "@/components/React/section-components/property";
import TopAuthor from "@/components/React/section-components/top-author";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import EstatesSection from "@/components/Estate/estates";
import EstateTabs from "@/components/Estate/estate-tabs";

const Estates = () => {
    return <div>
        <Navbar />
        <EstateTabs />
        <TopAuthor />
        <Footer />
    </div>
}

export default Estates
