import Topbar from '@/components/React/global-components/topbar'
import Navbar from '@/components/React/global-components/navbar'
import React from 'react'
import Footer from '@/components/React/global-components/footer'
import ScrollToTop from '@/components/Global/scroll-to-top'

const AppSecondaryLayout = ({ header, children }) => {
    return (
        <>
            <Topbar />
            <Navbar />
            <main className="container">{children}</main>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default AppSecondaryLayout
