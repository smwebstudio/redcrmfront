import React, { Component, useEffect, useState } from "react";
import EstateLargeItem from "@/components/Estate/estate-large-item";
import { Button, Col, Divider, Rate, Row } from "antd";


export function ProfessionalInfo(props) {

    const professional = props.professional;
    console.error(professional);
    const messages = professional?.messages;
    const communities = professional?.communities;
    const estateTypes = professional?.estateTypes;
    const messagesCount = professional?.messages.length;

    return (
        <>
            <div className="property-area mt-3">
                <Row>
                    <Col span={8}><p className={"font-bold text-dark"}>Գույքի տեսակ</p></Col>
                    <Col span={14}><p>
                        {estateTypes?.map((estateType, index, row) => (
                            (index === row.length - 1) ?
                                <span key={`${index}`}>{estateType.name_arm}</span> :
                                <span key={`${index}`}>{estateType.name_arm}, </span>
                        ))}
                    </p>
                    </Col>

                    <Col span={8}><p className={"font-bold text-dark"}>Կոնտրակտի տեսակ</p></Col>
                    <Col span={14}><p></p></Col>

                    <Col span={8}><p className={"font-bold text-dark"}>Մարզ</p></Col>
                    <Col span={14}><p></p></Col>

                    <Col span={8}><p className={"font-bold text-dark"}>Համայնք</p></Col>
                    <Col span={14}>
                        <p>
                            {communities?.map((community, index, row) => (
                                (index === row.length - 1) ?
                                    <span key={`${index}`}>{community.name_arm}</span> :
                                    <span key={`${index}`}>{community.name_arm}, </span>
                            ))}
                        </p>
                    </Col>
                </Row>
                <Divider />
                    <Row>
                        <h3 className={"mb-5"}>Հաճախորդների գնահատականներ ({messagesCount})</h3>
                    </Row>

                {messages?.map((message, index) => (
                    <Row key={index}>
                        <Col span={24}>
                            <h3>{message.sender_name}</h3>
                        </Col>
                        <Col span={6}>
                            <Rate defaultValue={message.overall_rating} />
                        </Col>
                        <Col span={18} className={"d-flex align-items-center"}>
                            <p className={"mb-0"}>{message.service_name}</p>
                        </Col>
                        <Col span={24} className={"mt-3"}>
                            <p>{message.message_text}</p>
                        </Col>
                        <Divider />
                    </Row>
                ))}

            </div>
        </>
    );


};

export default ProfessionalInfo;
