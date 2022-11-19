import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import Topbar from "@/components/React/global-components/topbar";
import ProfessionalTabs from "@/components/Professionals/professional-tabs";

const Professionals = () => {
    return <div>
        <Topbar />
        <Navbar />
        <ProfessionalTabs />
        <Footer />
    </div>
}

export default Professionals
