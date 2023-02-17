import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import Footer from '@/components/React/global-components/footer';
import AboutBanner from "@/components/About/about-banner";
import Topbar from "@/components/React/global-components/topbar";
import AboutContent from "@/components/About/about-content";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
    return <div>
        <Topbar />
        <Navbar />
        <AboutBanner />
        <AboutContent />
        {/*<AboutUs />*/}
        {/*<Team />*/}
        <Footer />
    </div>
}

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
            // Will be passed to the page component as props
        },
    }
}

export default About

