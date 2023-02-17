import React from 'react';
import Navbar from '@/components/React/global-components/navbar';
import Footer from '@/components/React/global-components/footer';
import Topbar from "@/components/React/global-components/topbar";
import AddPropertyForm from "@/components/Forms/add-property";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const AddProperty = ({}) => {
    return <div>
        <Topbar />
        <Navbar />
        <AddPropertyForm />
        <Footer />
    </div>
}

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ]))},
    }
}

export default AddProperty
