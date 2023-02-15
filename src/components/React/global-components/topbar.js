import React, { Component } from "react";
import Link from "next/link";
import { Col, Row, Select } from "antd";
import AuthCard from "@/components/AuthCard";
import ApplicationLogo from "@/components/ApplicationLogo";
import AmOption from "@/components/Global/Languages/am-option";
import EnOption from "@/components/Global/Languages/en-option";
import RuOption from "@/components/Global/Languages/ru-option";

class Topbar extends Component {

    render() {

        return (
            <div className="">
                <div className="topbar-area">
                    <div className="container nav-container">
                        <Row gutter={8} justify="center" align="middle">
                            <Col xs={4} sm={1}  >
                                <img src={"/assets/img/svg/phone.svg"} alt="logo" />
                            </Col>
                            <Col xs={0} sm={11} >
                                <span>37496 908 900, 37411 970 908</span>
                            </Col>

                            <Col xs={4} sm={3} className={"border-right"}>
                                <Row gutter={4} justify="center" align="middle">
                                    <Col xs={24} sm={4} className={"text-center"}>
                                        <img src={"/assets/img/svg/compare.svg"} alt="logo" />
                                    </Col>
                                    <Col xs={0} sm={20}>
                                        <a >Համեմատել</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4} sm={3} className={"border-right"} >
                                <Row gutter={4} justify="center" align="middle">
                                    <Col  xs={24} sm={4} flex="auto"  className={"text-center"}>
                                        <img src={"/assets/img/svg/favorites.svg"} alt="logo" />
                                    </Col>
                                    <Col xs={0} sm={16}>
                                        <a >Հիշվածներ</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4} sm={4} className={"border-right"}>
                                <Row gutter={4} justify="center" align="middle">
                                    <Col  xs={24} sm={4}  className={"text-center"}>
                                        <img src={"/assets/img/svg/login.svg"} alt="logo" />
                                    </Col>
                                    <Col xs={0} sm={19}>
                                        <span className="ml-1 pr-3 border-right">
                                        <Link href="/login">Մուտք</Link>
                                    </span>
                                        <span className="ml-1 pl-1"><Link href="/register">Գրանցում</Link></span>
                                    </Col>

                                </Row>
                            </Col>
                            <Col sm={2} className="justify-content-end">
                                <Select
                                    defaultValue="am"
                                    bordered={false}
                                    labelInValue={true}
                                    style={{ width: 100, zIndex: 200 }}
                                    options={[
                                        {
                                            value: "am",
                                            label: <AmOption />
                                        },
                                        {
                                            value: "en",
                                            label: <EnOption />
                                        },
                                        {
                                            value: "ru",
                                            label: <RuOption />
                                        }
                                    ]}
                                />
                            </Col>


                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}


export default Topbar;
