import React, { Component } from "react";
import Link from "next/link";
import MainFilter from "@/components/Filters/main-filter";
import MainSearch from "@/components/Filters/main-search";
import { Col } from "antd";
import { useTranslation } from "next-i18next";
import ContainerBoxed from "@/components/Containers/ContainerBoxed";
import ContainerFluid from "@/components/Containers/ContainerFluid";
import WhiteHeading1 from "@/components/Typography/Heading1/WhiteHeading1";

function Banner(props) {
    const { t } = useTranslation("common");

    let publicUrl = process.env.PUBLIC_URL + "/";

    const inlineStyle = {
        backgroundImage: "url(" + publicUrl + "/assets/img/banner/main-banner.jpg)"
    };


    return (
        <ContainerFluid>
            <div className="banner-area pd-top-100" style={inlineStyle}>

                <ContainerBoxed>
                    <div className="banner-inner-wrap">
                        <div className="banner-inner text-center align-self-center mt-5">
                            <WhiteHeading1 className="text-center text-white">Լավագույն առաջարկները մեզ մոտ</WhiteHeading1>
                            <h6 className="title text-center text-white mb-5">Վաճառեք տներ, հողատարածքներ,
                                բնակարաններ,
                                ձեզ
                                հարմար տարբերակով</h6>
                            <Col xs={0} sm={24}>
                                <Link href="/estates"><a
                                    className="btn btn-main-transparent-dark pr-3 pl-3">{t("button.learnMore")}</a></Link>
                            </Col>
                        </div>
                    </div>
                </ContainerBoxed>
            </div>


        </ContainerFluid>
    );


}

export default Banner;
