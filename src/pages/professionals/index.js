import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import Topbar from "@/components/React/global-components/topbar";
import ProfessionalTabs from "@/components/Professionals/professional-tabs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Professionals = () => {
    return <div>
        <Topbar />
        <Navbar />
        <ProfessionalTabs />
        <Footer />
    </div>
}

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'footer',
            ])),
            // Will be passed to the page component as props
        },
    }
}

export default Professionals
