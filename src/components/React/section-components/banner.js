import React, { Component } from "react";
import Link from "next/link";
import sectiondata from "data/sections.json";
import withTranslation from "next-translate/withTranslation";
import SelectFilter from "@/components/Filters/select-filter";
import { Button, Cascader, Form, Input } from "antd";
import MainFilter from "@/components/Filters/main-filter";

function Banner(props) {

    let publicUrl = process.env.PUBLIC_URL + "/";

    const inlineStyle = {
        backgroundImage: "url(" + publicUrl + "/assets/img/banner/main-banner.jpg)"
    };


    const filtersData = props.filtersData;


    return <div className="banner-area pd-top-100" style={inlineStyle}>
        <div className="container">
            <div className="banner-inner-wrap">
                <div className="banner-inner text-center align-self-center mt-5">
                    <h2 className="text-center text-white">Լավագույն առաջարկները մեզ մոտ</h2>
                    <h6 className="title text-center text-white mb-5">Վաճառեք տներ, հողատարածքներ, բնակարաններ, ձեզ
                        հարմար տարբերակով</h6>
                    <Link href="/estates"><a className="btn btn-main-transparent-dark pr-3 pl-3">Տեսնել
                        ավելին</a></Link>
                </div>
            </div>
        </div>
        <div className={"container"}>
            <div className="col-12 main-search-tabs">
                <div className="banner-search-wrap">
                    <ul className="nav nav-tabs rld-banner-tab overflow-hidden">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tabs_1">Վաճառք</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs_2">Վարձակալություն</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs_3">Օրավարձ</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-main" href="/estates">Որոնել քարտեզով</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs_4">Որոնում</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tabs_1">
                            <div className="pt-4 pl-3 bg-white">
                                <MainFilter filtersData={filtersData} />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tabs_2">
                            <div className="pt-4 pl-3 bg-white">
                                <form className="bg-white d-flex  text-gray-50 justify-content-around">
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Տեսակ</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Քաղաք</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Համայնք</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Գին</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Արժույթ</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Սենյակ</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item">
                                        <Button
                                            className="btn  bg-white hover-primary border-0 h-100">
                                            Լրացուցիչ
                                        </Button>
                                    </div>
                                    <div className="field-item pr-2 pl-2 ml-3">
                                        <Button
                                            className="btn btn-main border-0 h-100 pr-5 pl-5">
                                            Փնտրել
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tabs_3">
                            <div className="pt-4 pl-3 bg-white">
                                <form className="bg-white d-flex  text-gray-50 justify-content-around">
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Տեսակ</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Քաղաք</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Համայնք</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Գին</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Արժույթ</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item d-flex flex-column">
                                        <small className="pl-2">Սենյակ</small>
                                        <SelectFilter type="evaluation_locations" />
                                    </div>
                                    <div className="field-item">
                                        <Button
                                            className="btn  bg-white hover-primary border-0 h-100">
                                            Լրացուցիչ
                                        </Button>
                                    </div>
                                    <div className="field-item pr-2 pl-2 ml-3">
                                        <Button
                                            className="btn btn-main border-0 h-100 pr-5 pl-5">
                                            Փնտրել
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tabs_4">
                            <div className="pt-4 pl-3 bg-white">
                                <form className="bg-white d-flex  text-gray-50 justify-content-around pr-3">
                                    <div className="field-item d-flex flex-column flex-grow-4">
                                        <Input
                                            size={"large"}
                                            bordered={false}
                                            placeholder={"Հասցե, կոդ"}
                                            type="evaluation_locations" />
                                    </div>
                                    <div className="field-item pr-2 pl-2 ml-3">
                                        <Button
                                            className="btn btn-main border-0 h-100 pr-5 pl-5 pt-3 pb-3">
                                            Փնտրել
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;


}

export default withTranslation(Banner, "home");
