import React, { Component, useEffect, useState } from "react";
import EstateLargeItem from "@/components/Estate/estate-large-item";
import { Col, Pagination, Progress, Row, Skeleton } from "antd";
import EstateItem from "@/components/Estate/estate-item";
import axios from "axios";

export function EstateSearchList(props) {

    console.error(props);
    console.error(props);
    const searchDataURL = props.searchDataURL;

    console.error("searchDataURL1");
    console.error(searchDataURL);
    const [searchData, setSearchData] = useState(props.searchData);
    const [loading, setLoading] = useState(false);

    const totalCount = searchData.meta.total;
    const pageSize = searchData.meta.per_page;

    const handlePageChange = (page, pageSize) => {
        setLoading(true);
        console.error("searchDataURL");
        console.error(searchDataURL);
        const exactPageUrl = searchDataURL + "page=" + page+'&page_size='+pageSize;
        console.error("exactPageUrl");
        console.error(exactPageUrl);
        axios.get(exactPageUrl).then(response => {
            console.error("response");
            console.error(response.data);
            setSearchData(response.data);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        });
    };


    return (
        <>
            <div className="container mt-5">
                <Row>
                    {!loading &&
                        searchData.data.map((item, index) => (
                            <Col lg={8} md={12} sm={24} xs={24} className={"pr-3 pl-3"}>
                                <EstateItem key={index} item={item} />
                            </Col>
                        ))}

                </Row>
                    {loading &&
                        <Row className={"mt-5 mb-5"}>
                            <Col lg={8} md={12} sm={24} xs={24} className={"pr-3 pl-3"}>
                                <Skeleton />
                            </Col>

                            <Col lg={8} md={12} sm={24} xs={24} className={"pr-3 pl-3"}>
                                <Skeleton />
                            </Col>

                            <Col lg={8} md={12} sm={24} xs={24} className={"pr-3 pl-3"}>
                                <Skeleton />
                            </Col>
                        </Row>
                    }
                <Row className={"mb-5 d-flex align-items-center justify-content-center"}>
                    <Pagination
                        pageSize={pageSize}
                        defaultCurrent={1}
                        total={totalCount}
                        pageSizeOptions={[6, 9, 12, 24]}
                        locale={{ items_per_page: '' }}
                                onChange={handlePageChange} />
                </Row>
            </div>
        </>
    );


};

export default EstateSearchList;
