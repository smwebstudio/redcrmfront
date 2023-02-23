import React, { Component, useEffect, useState } from "react";
import EstateLargeItem from "@/components/Estate/estate-large-item";
import { Button, Col, Row } from "antd";
import { apiURL } from "@/constants";


export function EstateProfessionalList(props) {

    const changeEstatesFoundCount = props.changeEstatesFoundCount;
    const [estatesData, setEstatesData] = useState([]);
    const estatesCount = props.estatesCount;
    useEffect(() => {
        fetch(apiURL+"api/estates/professional/"+props.id)
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
                <Row className={"d-flex justify-content-center mt-3 mb-5"}>
                    {estatesCount > 0 &&
                        <Button className={"btn btn-main-transparent"} onClick={async () => {
                            const newPosts = await getNewPostsFromApi(props.id);
                            setEstatesData(...estatesData, ...newPosts);
                        }}>Բեռնել ավելին</Button>
                    }
                </Row>
            </div>
        </>
    );


};

export async function getNewPostsFromApi(id) {

console.error(id);
    // Fetch data from external API
    const data = await fetch(apiURL+"api/estates/professional/"+id)
        .then(res => res.json())
        .then(data => {
            return data;
        }).catch((e) => {
            console.log(e);
        });


}
export default EstateProfessionalList;
