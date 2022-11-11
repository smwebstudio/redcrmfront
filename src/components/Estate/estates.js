import React, { Component, useEffect, useState } from "react";
import sectiondata from "data/sections.json";
import parse from "html-react-parser";
import Link from "next/link";
import api from "@/hooks/api";
import { Tabs } from "antd";

const onChange = (key) => {
    console.log(key);
};

export function EstatesSection({ estates, type }) {

    console.log(54);
    console.log(estates);
    console.log(type);

    const [estatesData, setEstatesData] = useState([]);
    useEffect(() => {
        fetch("http://redoc/api/estates")
            .then(res => res.json())
            .then(data => {
                setEstatesData(data);
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.property;

    console.log(estatesData);
    console.log(data);


    return (
        <>
            <div className="property-area pd-top-100">
                <div className="container">
                    {/*Property filter Start*/}
                    <div className="property-filter-area_changed row custom-gutter">
                        {/*property item Start*/}
                        {estatesData.data?.map((item, i) =>
                            <div key={i} className={"rld-filter-item  col-lg-4 col-sm-6 cat" + item.contract_type_id}>
                                <div className="single-feature">
                                    <div className="thumb">
                                        <img src={item.image} alt="img" />
                                    </div>
                                    <div className="details">
                                        <a href="#" className="feature-logo">
                                            <img src={item.image} alt={"test"} />
                                        </a>

                                        <h6 className="price">{item.price}</h6>
                                        <del>{item.old_price}</del>
                                        <p className="author col-md-8"><i className="fa fa-map" /> {item.full_address}</p>
                                        <h6 className="title readeal-top"><Link
                                            href={"test"}><a>{item.id}</a></Link></h6>
                                        {/*<ul className="info-list">*/}
                                        {/*    {item.features.map((features, i) =>*/}
                                        {/*        <li key={i}><i className={features.icon} /> {features.title}</li>*/}
                                        {/*    )}*/}
                                        {/*    <li><img src={publicUrl + "/assets/img/icons/7.png"}*/}
                                        {/*             alt={imagealt} /> {item.area}*/}
                                        {/*    </li>*/}
                                        {/*</ul>*/}
                                        <ul className="contact-list">
                                            <li><a className="phone" href="#"><i className="fa fa-phone" /></a></li>
                                            <li><a className="message" href="#"><img
                                                src={publicUrl + "/assets/img/icons/8.png"}
                                                alt="img" /></a></li>
                                            <li className="readeal-top"><Link className="btn btn-yellow"
                                                                              href={"test"}><a>View
                                                Details</a></Link></li>
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
