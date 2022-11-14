import React, { Component, useEffect, useState } from "react";
import sectiondata from "data/sections.json";
import parse from "html-react-parser";
import Link from "next/link";
import api from "@/hooks/api";
import { Tabs } from "antd";

const onChange = (key) => {
    console.log(key);
};

export function EstatesSection(props) {

    console.log(props);
    console.log(54);
    console.log(props.estates);
    console.log(props.type);

    console.log('props');
    console.log(props);

    let mapState = props.mapState ? props.mapState : false;
    let colClass = mapState ? "col-12" : "col-lg-4 col-sm-6";

    const changeEstatesFoundCount = props.changeEstatesFoundCount;
    const [estatesData, setEstatesData] = useState([]);
    useEffect(() => {
        fetch("http://redoc/api/estates/"+props.type)
            .then(res => res.json())
            .then(data => {
                setEstatesData(data);
                changeEstatesFoundCount(data.meta.total)
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

console.log("mapState");
console.log(mapState);



    return (
        <>
            <div className="property-area min-vh-100 pt-5">
                <div className="">
                    {/*Property filter Start*/}
                    <div className="property-filter-area_changed row custom-gutter">
                        {/*property item Start*/}
                        {estatesData.data?.map((item, i) =>
                            <div key={i} className={"rld-filter-item  cat "+ colClass + " " + item.contract_type_id}>
                                <div className="single-feature">
                                    <div className="thumb">
                                        <Link href={"estates/" + item.id}>
                                            <a><img src={item.image} alt="img" /></a>
                                        </Link>
                                    </div>
                                    <div className="details">

                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <h6 className="price">{item.price}</h6>
                                                <del>{item.old_price}</del>
                                            </div>
                                            <div className="col-6 text-right">
                                                <Link className="p-3" href="/">
                                                    <a className="ml-3"><img src={"/assets/img/svg/compare.svg"} alt="logo" /></a>
                                                </Link>
                                                <Link className="p-3" href="/">
                                                    <a className="ml-3"><img src={"/assets/img/svg/favorites.svg"} alt="logo" /></a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9">
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

                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    );


};

// This gets called on every request
export async function getStaticProps({
                                         params,
                                         req,
                                         res,
                                         query,
                                         preview,
                                         previewData,
                                         resolvedUrl,
                                         locale,
                                         locales,
                                         defaultLocale
                                     }) {

    // Fetch data from external API
    const data = await fetch("http://redoc/api/estates");
    const estates = await data.json();

    // Pass data to the page via props
    return { props: { estates } };
}

export default EstatesSection;
