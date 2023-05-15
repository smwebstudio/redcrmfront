import React, { Component, useEffect, useRef, useState } from "react";
import { Image, Col, Row, Table, Button } from "antd";
import NextArrow from "@/components/Carousel/NextArrow";
import PrevArrow from "@/components/Carousel/PrevArrow";
import { apiURL } from "@/constants";
import { useMediaQuery } from "react-responsive";
import api from "@/hooks/api";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { RightOutlined } from "@ant-design/icons";
import RedText from "@/components/Typography/text/RedText";


export function EstateCompareCarousel() {

    const router = useRouter();
    const { locale } = router;
    const { t } = useTranslation("common");

    const [estatesData, setEstatesData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [compareCount, setCompareCount] = useState(0);


    useEffect(async () => {
        const compareIds = JSON.parse(localStorage.getItem("compareEstates") || []);
        setCompareCount(compareIds.length);
        const params = {
            "filter[id]": compareIds.join(",")
        };

        const data = await api(locale).get(apiURL + "api/estates/filter/estates", { params });
        const estatesDataFromApi = data.data.data;

        console.log(estatesDataFromApi);

        const dataHeaders = {
            id: 1,
            price: t("label.price"),
            full_address: t("label.address"),
            room_count: t("label.roomCount"),
            area_total: t("label.area"),
            floor: t("label.floor"),
            ceilingHeight: t("label.ceilingHeight")
        };

        estatesDataFromApi.unshift(dataHeaders);
        setEstatesData(estatesDataFromApi);

        console.log(estatesDataFromApi);

        let columnsFromApi = [
            ...estatesDataFromApi.map((item) => ({
                dataIndex: item.id.toString(),
                key: item.id.toString(),
                width: 200,
                style: { padding: '0px 8px' },
                fixed: item.id === estatesDataFromApi[0].id ? "left" : null
            }))
        ];


        let dataSourceFromApi = [
            {
                key: "1",
                attribute: "image",
                ...Object.fromEntries(
                    estatesDataFromApi.map((item) => [item.id.toString(),
                        item.image ? <Image preview={false} src={item.image} width={'100%'} height={'auto'} style={{maxHeight: '100%', maxWidth: '100%'}} /> : ''])
                )
            },
            {
                key: "2",
                attribute: "price",
                ...Object.fromEntries(
                    estatesDataFromApi.map((item) => [item.id.toString(), item.price])
                )
            },
            {
                key: "3",
                attribute: "full_address",
                ...Object.fromEntries(
                    estatesDataFromApi.map((item) => [item.id.toString(), item.full_address])
                )
            },
            {
                key: "4",
                attribute: "area_total",
                ...Object.fromEntries(
                    estatesDataFromApi.map((item) => [item.id.toString(), item.area_total])
                )
            },
            {
                key: "5",
                attribute: "floor",
                ...Object.fromEntries(
                    estatesDataFromApi.map((item) => [item.id.toString(), item.floor])
                )
            },
            {
                key: "6",
                attribute: "ceilingHeight",
                ...Object.fromEntries(
                    estatesDataFromApi.map((item) => [item.id.toString(), item.ceilingHeight || "-"])
                )
            },
            {
                key: "7",
                attribute: "room_count",
                ...Object.fromEntries(
                    estatesDataFromApi.map((item) => [item.id.toString(), item.room_count])
                )
            }
        ];
        setColumns(columnsFromApi);
        setDataSource(dataSourceFromApi);


    }, []);


    const tableRef = useRef(null);

    const handleScrollRight = () => {
        const tableBody = document.querySelector(".ant-table-content");
        const tableFixedColumn = document.querySelector(".ant-table-cell-fix-left");
        if (tableBody) {
            console.log(12)
            const fixedColumnWidth = tableFixedColumn.clientWidth;
            tableBody.scrollTo({
                left: tableBody.scrollLeft + fixedColumnWidth,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className={"container pt-10 pb-20"}>
            <Row>

                <Col xs={24}>
                    <h1>{t('label.compare')} / <RedText className={'text-2xl'}>{compareCount}</RedText></h1>
                </Col>
                <Col xs={24}>
                    <Button type="primary" shape="circle" onClick={handleScrollRight}>
                        <RightOutlined />
                    </Button>
                    <Image />
                    {estatesData.length > 0 &&
                        <Table  dataSource={dataSource} columns={columns} pagination={false} scroll={{ x: 1300 }} ref={tableRef} />
                    }

                </Col>
            </Row>

        </div>
    );
};

export default EstateCompareCarousel;
