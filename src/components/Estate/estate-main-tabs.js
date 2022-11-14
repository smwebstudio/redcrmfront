import { Tabs } from "antd";
import React, { Component, useState } from "react";
import EstatesSection from "@/components/Estate/estates";
import { Typography } from "antd";
import withTranslation from "next-translate/withTranslation";
import EstateItems from "@/components/Estate/EstateItems";
import EstateCarousel from "@/components/Estate/estate-carousel";


const onChange = (key) => {
    console.log(key);
};

function EstateMainTabs(props) {

    const [estatesCount, setEstatesCount] = useState([]);
    const changeEstatesFoundCount = (arg) => {
        setEstatesCount(arg);
    };

    return (

        <div className="container  pt-5 mt-5">
            <div className="row main-featured min-h-fit">
                <div className="col-12">
                    <h5 className=""><strong>Լավագույն առաջարկներ</strong></h5>
                        <Tabs
                            defaultActiveKey="1"
                            centered={true}
                            className="mt-n5"
                            onChange={onChange}
                            items={[
                                {
                                    label: `Վաճառք`,
                                    key: "1",
                                    children: <EstateCarousel  type="latest"/>
                                },
                                {
                                    label: `Վարձակալություն`,
                                    key: "2",
                                    children: <EstateCarousel type="most_hits"/>
                                },
                                {
                                    label: `Օրավարձ`,
                                    key: "3",
                                    children: <EstateCarousel  type="hot"/>
                                }
                            ]}
                        />
                </div>
            </div>
        </div>
    );

}

export default EstateMainTabs;
