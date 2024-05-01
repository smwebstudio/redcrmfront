import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import { Col, Image, Row } from "antd";


export function NotFound() {
    return (
        <div className="container text-center">
            <Row >
                <Col xs={24} className="mt-5 mb-5 text-center flex flex-col items-center">
                    <Image preview={false} src={"/assets/img/svg/404.svg"} alt="404" />
                    <h3 className={'mt-10 mb-4'}> Ցավոք էջը չի գտնվել</h3>
                    <Link href="/" className="btn btn-main">Գլխավոր </Link>
                </Col>
            </Row>

        </div>
    );


};


export default NotFound;
