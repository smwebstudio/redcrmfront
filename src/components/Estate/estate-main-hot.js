import { Tabs } from "antd";
import React, { Component, useState } from "react";
import EstateCarousel from "@/components/Estate/estate-carousel";
import Link from "next/link";


const onChange = (key) => {
    console.log(key);
};

function EstateMainHot(props) {
    return (

        <div className="container   mt-5 mb-5">
            <div className="row main-featured min-h-fit">
                <div className="col-12">
                    <h5 className="mb-5 text-dark font-bold">Շտապ առաջարկներ</h5>
                    <EstateCarousel type="hot"/>
                </div>
                <div className="col-12 text-right">
                    <Link href="/estates"><a className="text-main text-underline">Տեսնել բոլորը</a></Link>
                </div>
            </div>
        </div>
    );

}

export default EstateMainHot;
