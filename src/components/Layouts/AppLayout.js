import Topbar from "@/components/React/global-components/topbar";
import Navbar from "@/components/React/global-components/navbar";
import React from "react";
import Footer from "@/components/React/global-components/footer";

const AppLayout = ({ header, children }) => {
    return (
        <>
            <Topbar />
            <Navbar />
            <main className="container">{children}</main>
            <Footer />
        </>

    );
};

export default AppLayout;
