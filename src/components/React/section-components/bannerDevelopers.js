import React  from "react";
import Link from "next/link";
import { Col } from "antd";
import { useTranslation } from "next-i18next";
import WhiteHeading1 from "@/components/Typography/Heading1/WhiteHeading1";
import WhiteParagraph from "@/components/Typography/paragraph/WhiteParagraph";

function BannerDevelopers(props) {
    const { t } = useTranslation("common");

    let publicUrl = process.env.PUBLIC_URL + "/";

    const inlineStyle = {
        backgroundImage: "url(" + publicUrl + "/assets/img/banner/main-banner.jpg)"
    };


    return (
        <div className="banner-area pd-top-100" style={inlineStyle}>
            <div className="container">
                <div className="banner-inner-wrap">
                    <div className="banner-inner text-center align-self-center mt-5">
                        <WhiteHeading1 className="text-center ">Գնե՛ք բնակարաններ անմիջապես կառուցապատողից</WhiteHeading1>
                        <WhiteParagraph className="text-center mb-5">Մեզ մոտ կարող եք գտնել Ձեզ ամենահարմար առաջարկները</WhiteParagraph>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default BannerDevelopers;