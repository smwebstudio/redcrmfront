import React, { Component, useEffect, useState } from "react";
import { Carousel } from "antd";
import EstateItem from "@/components/Estate/estate-item";
import NextArrow from "@/components/Carousel/NextArrow";
import PrevArrow from "@/components/Carousel/PrevArrow";
import { apiURL } from "@/constants";
import { useMediaQuery } from 'react-responsive'




export function EstateCarousel(props) {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const slidesToShow = isTabletOrMobile ? 1 : 3;

    const settings = {
        nextArrow: isTabletOrMobile ? '' : <NextArrow />,
        prevArrow: isTabletOrMobile ? '' : <PrevArrow />
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
            <Carousel className="mt-3 " slidesToShow={slidesToShow} centerPadding={"0px"}  centerMode={true}  afterChange={onChange} arrows {...settings}>
                {estatesData.data?.map((item, index) => (
                    <EstateItem key={index} item={item} />
                ))}
            </Carousel>
    );
};

export default EstateCarousel;
