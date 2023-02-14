import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import Professional from "@/components/Professionals/professional";
import { apiURL } from "@/constants";
import { Col } from "antd";

export function ProfessionalSection(props, type) {

    const [profData, setProfData] = useState([]);
    useEffect(() => {
        fetch(apiURL + "/brokers/profession/"+props.type)
            .then(res => res.json())
            .then(data => {
                setProfData(data);
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    return (
        <>
            <div className="property-area min-vh-100 pt-5">
                <div className="">

                    <div className="property-filter-area_changed row custom-gutter">

                        {profData.data?.map((item, i) =>
                            <Col sm={12} xs={24} key={i} className={item.contract_type_id}>
                                <Professional professional={item} />
                            </Col>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    );


};

export async function getStaticProps({}) {

    // Fetch data from external API
    const data = await fetch(apiURL + "/brokers");
    const professionals = await data.json();

    // Pass data to the page via props
    return { props: { professionals } };
}

export default ProfessionalSection;