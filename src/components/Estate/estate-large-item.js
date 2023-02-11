import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import { Col, Row } from "antd";


export function EstateLargeItem(props) {

    let item = props.item;

    return (
        <div className="">
            <div key={item.id} className={" mb-5  cat" + item.contract_type_id}>
                <Row className="large-estate single-feature">
                    <Col span={6} className="thumb">
                        <Link href={"/estates/" + item.id}>
                            <a><img className={"estate-image"}  src={item.image} alt="img" /></a>
                        </Link>
                    </Col>
                    <Col span={18} className="details">
                        <div className="row mb-3">
                            <div className="col-6">
                                <h6 className="price">{item.price}</h6>
                                <del>{item.old_price}</del>
                            </div>
                            <div className="col-6 text-right justify-content-end d-flex">
                                <Link className="p-3" href="/">
                                    <a className="ml-3"><img src={"/assets/img/svg/compare.svg"} alt="logo" /></a>
                                </Link>
                                <Link className="p-3" href="/">
                                    <a className="ml-3"><img src={"/assets/img/svg/favorites.svg"} alt="logo" /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <p className="address d-flex">
                                    <span><img src={"/assets/img/svg/location.svg"} alt="logo" /></span>
                                    <span className="ml-2">{item.full_address}</span>
                                </p>
                            </div>
                        </div>

                        <ul className="info-list">
                            <li className="mr-4"><img src={"/assets/img/svg/doors.svg"} alt="logo" />{item.floor}</li>
                            <li className="mr-4"><img src={"/assets/img/svg/floor.svg"} alt="logo" />{item.floor} / {item.building_floor_count}</li>
                            <li className="mr-3"><img src={"/assets/img/svg/area.svg"} alt="logo" />{Math.round(item.area_total)} քմ</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );


};


export default EstateLargeItem;
