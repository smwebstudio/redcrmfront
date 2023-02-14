import React, { Component, useEffect, useState } from "react";
import { Carousel } from "antd";
import EstateItem from "@/components/Estate/estate-item";
import NextArrow from "@/components/Carousel/NextArrow";
import PrevArrow from "@/components/Carousel/PrevArrow";
import { apiURL } from "@/constants";

const contentStyle = {
    margin: 0,
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
};

const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

export function EstateCarousel(props) {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const [estatesData, setEstatesData] = useState([]);
    useEffect(() => {
        fetch(apiURL+"/estates/" + props.type)
            .then(res => res.json())
            .then(data => {
                setEstatesData(data);
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    return (
            <Carousel className="mt-3 " slidesToShow={3} centerPadding={"0px"}  centerMode={true}  afterChange={onChange} arrows {...settings}>
                {estatesData.data?.map((item, index) => (
                    <EstateItem key={index} item={item} />
                ))}
            </Carousel>
    );
};

export default EstateCarousel;
