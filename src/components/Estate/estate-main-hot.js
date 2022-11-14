import { Tabs } from "antd";
import React, { Component, useState } from "react";
import EstateCarousel from "@/components/Estate/estate-carousel";


const onChange = (key) => {
    console.log(key);
};

function EstateMainHot(props) {
    return (

        <div className="container  pt-5 mt-5">
            <div className="row main-featured min-h-fit">
                <div className="col-12">
                    <h5 className="mb-5"><strong>Շտապ առաջարկներ</strong></h5>
                    <EstateCarousel type="hot"/>
                </div>
            </div>
        </div>
    );

}

export default EstateMainHot;
