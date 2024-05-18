'use client';
import React, { useEffect, useState } from "react";
import Professional from "@/components/Professionals/professional";
import Link from "next/link";
import { apiURL } from "@/constants";
import { Col, Row } from "antd";
import ContainerBoxed from "@/components/Containers/ContainerBoxed";



function Professionals(props) {
    const [professionalsData, setProfessionalsData] = useState([]);
    useEffect(() => {
        fetch(apiURL + "api/brokers/best")
            .then(res => res.json())
            .then(data => {
                setProfessionalsData(data);
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    let professionals = professionalsData.data;

    return (
        <ContainerBoxed className="mt-10 mb-20">
            <h5 className="text-dark font-bold mb-3text-left">Առաջատար մասնագետներ</h5>
            <Row gutter={32}>
                {professionals?.map((item, i) =>
                    <Col xs={24} sm={8} className="" key={i}>
                        <div className={"border border-light"}>
                            <Professional professional={item} key={i} />
                        </div>
                    </Col>
                )
                }
                <Col xs={24} className="mt-3 text-right">
                    <Link href="/estates" className="text-main text-underline">Տեսնել բոլորը</Link>
                </Col>
            </Row>
        </ContainerBoxed>
    );
}

export default Professionals;
