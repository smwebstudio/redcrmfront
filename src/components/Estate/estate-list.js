import React, { Component, useEffect, useState } from "react";
import EstateLargeItem from "@/components/Estate/estate-large-item";
import { Col, Row } from "antd";
import { apiURL } from "@/constants";


export function EstateList(props) {

    let mapState = props.mapState ? props.mapState : false;
    let colClass = mapState ? "col-12" : "col-lg-4 col-sm-6";

    const changeEstatesFoundCount = props.changeEstatesFoundCount;
    const [estatesData, setEstatesData] = useState([]);
    useEffect(() => {
        fetch(apiURL+"api/estates/"+props.type)
            .then(res => res.json())
            .then(data => {
                setEstatesData(data);
                changeEstatesFoundCount(data.meta.total)
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    return (
        <>
            <div className="property-area ">
                    <Row >
                        {estatesData.data?.map((item, index) => (
                            <Col span={24}>
                                <EstateLargeItem key={index} item={item} />
                            </Col>
                        ))}
                    </Row>
            </div>
        </>
    );


};

export default EstateList;
