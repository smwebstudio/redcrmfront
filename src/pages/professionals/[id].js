import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import Topbar from "@/components/React/global-components/topbar";
import ProfessionalDetails from "@/components/Professionals/professional-details";
import ProfessionalBanner from "@/components/Professionals/professional-banner";
import { useRouter } from "next/router";
import { apiURL } from "@/constants";

function ProfessionalItem({professionalItem}) {
    return <div>
        <Topbar />
        <Navbar />
        <ProfessionalBanner />
        <ProfessionalDetails professionalItem={professionalItem} />
        <Footer />
    </div>
}

export async function getServerSideProps(context) {

    const { id } = context.query;

    console.log("id");
    console.log(id);
    // Fetch data from external API
    const data = await fetch(apiURL+"/professionals/" + id);
    const professionalItem = await data.json();

    // Pass data to the page via props
    return { props: { professionalItem } };
}

export default ProfessionalItem
