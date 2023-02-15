import React, { useEffect, useState } from "react";
import Professional from "@/components/Professionals/professional";
import Link from "next/link";
import { apiURL } from "@/constants";
import { Col, Row } from "antd";



function Professionals(props) {
    const [professionalsData, setProfessionalsData] = useState([]);
    useEffect(() => {
        fetch(apiURL + "/brokers/best")
            .then(res => res.json())
            .then(data => {
                setProfessionalsData(data);
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    let professionals = professionalsData.data;

    return (
        <div className="container mt-5 mb-5">
            <h5 className="text-dark font-bold mb-3 text-center text-sm-left">Առաջատար մասնագետներ</h5>
            <Row gutter={32}>
                {professionals?.map((item, i) =>
                    <Col xs={24} sm={8} className="" key={i}>
                        <div className={"border border-light"}>
                            <Professional professional={item} key={i} />
                        </div>
                    </Col>
                )
                }
                <div className="col-12 mt-3 text-center text-right">
                    <Link href="/estates"><a className="text-main text-underline">Տեսնել բոլորը</a></Link>
                </div>
            </Row>
        </div>
    );
}

export default Professionals;
