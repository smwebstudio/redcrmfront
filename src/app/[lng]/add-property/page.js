import React from 'react'
import Navbar from '@/components/React/global-components/navbar'
import Footer from '@/components/React/global-components/footer'
import Topbar from '@/components/React/global-components/topbar'
import AddPropertyForm from '@/components/Forms/add-property'

export default async function AddPropertyPage({ params: { lng, slug } }) {
    return (
        <div>
            <Topbar />
            <Navbar />
            <AddPropertyForm />
            <Footer />
        </div>
    )
}
