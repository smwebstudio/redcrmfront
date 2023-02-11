import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import Topbar from "@/components/React/global-components/topbar";
import ProfessionalDetails from "@/components/Professionals/professional-details";
import ProfessionalBanner from "@/components/Professionals/professional-banner";

function ProfessionalItem(props) {
    return <div>
        <Topbar />
        <Navbar />
        <ProfessionalBanner />
        <ProfessionalDetails />
        <Footer />
    </div>
}

export default ProfessionalItem
