import { Tabs } from "antd";
import React, { Component, useState } from "react";

import EstateCarousel from "@/components/Estate/estate-carousel";
import Link from "next/link";


const onChange = (key) => {
    console.log(key);
};

function EstateMainTabs(props) {

    const [estatesCount, setEstatesCount] = useState([]);
    const changeEstatesFoundCount = (arg) => {
        setEstatesCount(arg);
    };

    return (

        <div className="container  pt-5 mt-5 mb-5">
            <div className="row main-featured min-h-fit">
                <div className="col-12 ">
                    <h5 className="text-dark">Լավագույն առաջարկներ</h5>
                        <Tabs
                            defaultActiveKey="1"
                            centered={true}
                            className="mt-n5"
                            onChange={onChange}
                            items={[
                                {
                                    label: `Վաճառք`,
                                    key: "1",
                                    children: <EstateCarousel  type="sale"/>
                                },
                                {
                                    label: `Վարձակալություն`,
                                    key: "2",
                                    children: <EstateCarousel type="rent"/>
                                },
                                {
                                    label: `Օրավարձ`,
                                    key: "3",
                                    children: <EstateCarousel  type="daily"/>
                                }
                            ]}
                        />
                </div>
                <div className="col-12 text-right">
                    <Link href="/estates"><a className="text-main hover-underline">Տեսնել բոլորը</a></Link>
                </div>
            </div>
        </div>
    );

}

export default EstateMainTabs;
