import React, { Component, useEffect, useState } from "react";
import sectiondata from "data/sections.json";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import ShareButtons from "@/components/Global/share-buttons";
import { Col, Row } from "antd";
import { Space, Typography } from "antd";
import { apiURL } from "@/constants";

const { Text, Link } = Typography;

const images = [];

function EstateDetailsSection() {

    const router = useRouter();
    const [estateData, setEstateData] = useState([]);

    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query;
            if (!id) return null;
            fetch(apiURL + "/estates/" + id)
                .then(res => res.json())
                .then(data => {
                    setEstateData(data);

                }).catch((e) => {
                console.log(e);
            });
        }


    }, [router.isReady]);

    let publicUrl = process.env.PUBLIC_URL + "/";
    let publicCDN = "https://proinfo.am/uploadsWithWaterMark/";
    let imagealt = "image";

    let estate = estateData.data;
    let imagesData = estate?.images;


    let building_attributes = [];
    if (estate) {
        building_attributes = Object.entries(estate?.building_attributes);
        console.log(building_attributes);
    }


    let images = [];
    if (imagesData) {
        imagesData.forEach(item => {
            images.push({ original: publicCDN + item.path, thumbnail: publicCDN + item.path_thumb });
        });
    }
    return <div className="property-details-area pd-top-100">
        <div className="bg-gray pd-top-100 pd-bottom-90">
            <div className="container">
                <div className="row ">
                    <div className="col-12 mb-3">

                        <ShareButtons />
                        <h5>
                            <span className="text-main font-bold mr-5">{estate?.price}</span>
                            <span className="estate-code border p-1">{estate?.code}</span>
                            <span className="estate-code p-1 border-orange text-white bg-orange">Վաճառք</span>
                        </h5>
                    </div>
                    <div className="col-12 mb-5">
                        <img className="mr-2" src={"/assets/img/svg/location.svg"} alt="location" />Վաճառվում է 3
                        սենյականոց բնակարան {estate?.full_address}
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <ImageGallery
                            items={images}
                            showNav={true}
                            thumbnailPosition={"right"}
                            showPlayButton={false}
                        />

                    </div>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="col-lg-9">
                <Row className="property-news-single-card border-bottom-yellow">
                    <h4>Շենք</h4>
                    <Row className="mb-3 mb-sm-0  d-flex flex-row flex-wrap">
                        {building_attributes?.map((item, i) =>
                            item[1]['value'] &&
                            <Col xs={24} sm={12} className={"pr-1 d-flex  align-items-center font-size-13 mb-3"}>
                                <Col xs={12} className={"d-flex flex-row align-items-center"}>
                                    <span   style={{display: 'flex', width: '10px', height: '10px', borderRadius: '50%', background: '#D8002C'}}></span>
                                    <Text type="secondary" className={"ml-2 pr-1 d-flex"}> {item[1]["label"]}:</Text>
                                </Col>
                                <Col xs={12}>
                                    <Text strong className={"d-flex align-items-center"}>{item[1]["value"]}</Text>
                                </Col>
                            </Col>
                        )}
                    </Row>
                </Row>


            </div>
        </div>
    </div>;

}

export default EstateDetailsSection;
