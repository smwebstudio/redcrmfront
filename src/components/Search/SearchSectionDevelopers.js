import React, { Component } from "react";
import Link from "next/link";
import MainFilter from "@/components/Filters/main-filter";
import MainSearch from "@/components/Filters/main-search";
import { Col } from "antd";
import { useTranslation } from "next-i18next";
import ContainerBoxed from "@/components/Containers/ContainerBoxed";
import MainFilterBuilding from "@/components/Filters/MainFilterBuilding";

function SearchSectionDevelopers(props) {
    const { t } = useTranslation("common");


    const filtersData = props.filtersData;


    return (

        <ContainerBoxed className={"container -mt-44"}>
            <div className="main-search-tabs">
                <div className="banner-search-wrap">
                    <Col xs={0} sm={24}>

                        <ul className="nav nav-tabs rld-banner-tab overflow-hidden">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tabs_1">{t("label.apartment")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs_2">{t("label.house")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs_3">Թաունհաուս</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs_4">{t("label.commercial")}</a>
                            </li>
                        </ul>

                    </Col>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tabs_1">
                            <div className="pt-4 pl-3 pr-4 bg-white">
                                <MainFilterBuilding filtersData={filtersData} />
                            </div>
                        </div>
                        {/*<div className="tab-pane fade" id="tabs_2">*/}
                        {/*    <div className="pt-4 pl-3 bg-white">*/}
                        {/*        <MainFilter filtersData={filtersData} />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="tab-pane fade" id="tabs_3">*/}
                        {/*    <div className="pt-4 pl-3 bg-white">*/}
                        {/*        <MainFilter filtersData={filtersData} />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="tab-pane fade" id="tabs_4">*/}
                        {/*    <div className="pt-4 pl-3 bg-white">*/}
                        {/*        <MainSearch />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </ContainerBoxed>
    );

}

export default SearchSectionDevelopers;
