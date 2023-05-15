import React, { Component } from "react";
import Link from "next/link";
import MainFilter from "@/components/Filters/main-filter";
import MainSearch from "@/components/Filters/main-search";
import { Col } from "antd";
import { useTranslation } from "next-i18next";

function SearchSection(props) {
    const { t } = useTranslation("common");


    const filtersData = props.filtersData;


    return (

        <div className={"container -mt-44"}>
            <div className="main-search-tabs">
                <div className="banner-search-wrap">
                    <Col xs={0} sm={24}>

                        <ul className="nav nav-tabs rld-banner-tab overflow-hidden">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tabs_1">{t("button.sale")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs_2">{t("button.rent")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab"
                                   href="#tabs_3">{t("label.title.fee.normal")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-main" href="/estates/map">{t("label.searchMap")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs_4">{t("label.search")}</a>
                            </li>
                        </ul>

                    </Col>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tabs_1">
                            <div className="pt-4 pl-3 bg-white">
                                <MainFilter filtersData={filtersData} />
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
        </div>
    );

}

export default SearchSection;
