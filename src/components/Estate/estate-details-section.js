import React, { Component, useEffect, useState } from "react";
import sectiondata from "data/sections.json";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import ShareButtons from "@/components/Global/share-buttons";
import { Button, Card, Col, Divider, Form, Input, message, Modal, Popover, Row, Select } from "antd";
import { Space, Typography } from "antd";
import { apiURL } from "@/constants";
import { useTranslation } from "next-i18next";
import TextArea from "antd/lib/input/TextArea";
import {
    EnvironmentOutlined,
    EyeOutlined,
    HeartOutlined,
    InfoCircleFilled,
    InfoCircleOutlined,
    SwapOutlined
} from "@ant-design/icons";
import ContactSimpleForm from "@/components/Forms/contact-simple-form";

const { Text, Link } = Typography;


function EstateDetailsSection(props) {

    const { t } = useTranslation("common");
    const estateData = props.estateData;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    let publicUrl = process.env.PUBLIC_URL + "/";
    let estate = estateData.estateData.data;
    let imagesData = estate.images;

    console.log('estate');
    console.log(estate);

    let building_attributes = [];
    if (estate) {
        building_attributes = Object.entries(estate.building_attributes);
    }

    const waitTime = (time = 100) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    let images = [];
    if (imagesData) {
        imagesData.forEach(item => {
            images.push({ original: item, thumbnail: item });
        });
    }

    let currencies = [
        { value: "AMD", label: "AMD" },
        { value: "USD", label: "USD" },
        { value: "RUR", label: "RUR" }
    ];

    const content = (
        <p>{t("common\:label.SetAdHotOffersent1_2")}</p>
    );


    return <div className="property-details-area">
        <div className="bg-gray  pd-bottom-90">

            <div className={"container-fluid bg-white pt-5 pb-1"}>
                <div className={"container"}>
                    <Row className={"mb-4"}>
                        <Col sm={16} className={"mb-4"}>
                            <h3>
                                <span className="text-main font-bold mr-5 font-size-24">{estate?.price}</span>
                                <span className="estate-code border p-1 pl-3 pr-3">{estate?.code}</span>
                                <span
                                    className="estate-code p-1 pl-5 pr-5 border-orange text-white bg-orange">{t("common\:button.sale")}</span>
                            </h3>
                        </Col>
                        <Col sm={8}>
                            <div className={"d-flex justify-content-end align-items-center"}>
                                <EyeOutlined style={{ fontSize: 24, marginRight: 10 }} /> 1362
                                <SwapOutlined style={{ fontSize: 24, marginRight: 30, marginLeft: 30 }} />
                                <HeartOutlined style={{ fontSize: 24 }} />
                            </div>

                        </Col>
                        <Col sm={24} className={"d-flex align-items-center mb-4"}>
                            <EnvironmentOutlined style={{ fontSize: 24, marginRight: 10 }} />{estate.public_text_arm} {estate.full_address}
                        </Col>

                            <Col sm={20}>
                                <Row gutter={32} className="d-flex flex-row align-items-center">
                                    {estate.room_count &&
                                        <Col className="mr-4"><img className="mr-2" src={"/assets/img/svg/doors.svg"}
                                                                   alt="logo" />{estate.room_count} {t('common\:label.design.room')}
                                        </Col>
                                    }

                                    {estate.floor &&
                                        <Col className="mr-4"><img className="mr-2" src={"/assets/img/svg/floor.svg"}
                                                                   alt="logo" />{estate.floor} / {estate.building_floor_count}
                                        </Col>
                                    }

                                    {estate.area_total &&

                                        <Col className="mr-3"><img className="mr-2" src={"/assets/img/svg/area.svg"}
                                                                   alt="logo" />{Math.round(estate.area_total)} քմ
                                        </Col>
                                    }
                                </Row>

                            </Col>
                            <Col sm={4} className={""}>
                                <Popover content={content}>
                                    <Button type="primary" onClick={showModal} className={"d-flex align-items-center"}>
                                        {t("common\:label.offerANewPrice")} <InfoCircleFilled />
                                    </Button>
                                </Popover>
                                <Modal
                                    title={t("common\:label.offerANewPrice")}
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    width={700}
                                    footer={[
                                        <Col>
                                            <Button key="back" onClick={handleCancel}>
                                                {t("common\:button.cancel")}
                                            </Button>
                                            <Button form="priceOffer" type="primary" key="submit" htmlType="submit">
                                                {t("common\:button.send")}
                                            </Button>
                                        </Col>
                                    ]}>


                                    <Form
                                        name="priceOffer"
                                        layout="vertical"
                                        style={{
                                            maxWidth: 800
                                        }}
                                        onFinish={onFinish}
                                    >
                                        <Row gutter={24}>

                                            <Col xs={24} sm={12}>
                                                <Form.Item
                                                    label={t("common\:label.firstLastName")}
                                                    name="full_name"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: t("common\:validation.firstLastName.required")
                                                        }
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} sm={12}>
                                                <Form.Item
                                                    label={t("common\:label.email")}
                                                    name="e_mail"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: t("common\:validation.email.required")
                                                        }
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} sm={12}>
                                                <Form.Item
                                                    label={t("common\:label.phone")}
                                                    name="e_mail"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: t("common\:validation.phone.fixed.required")
                                                        }
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>

                                            <Col xs={18} sm={8}>
                                                <Form.Item
                                                    label={t("common\:label.offeringPrice")}
                                                    name="offer_price"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: t("common\:validation.price.required")
                                                        }
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>

                                            <Col xs={6} sm={4}>
                                                <Form.Item
                                                    label={t("common\:label.currency")}
                                                    name="offer_currency"
                                                >
                                                    <Select
                                                        defaultValue={"AMD"}
                                                        options={currencies}
                                                    />
                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} sm={24}>
                                                <Form.Item
                                                    label={t("common\:label.messageContact")}
                                                    name="message"
                                                >
                                                    <TextArea />
                                                </Form.Item>
                                            </Col>

                                        </Row>
                                    </Form>


                                </Modal>
                            </Col>


                    </Row>
                </div>
            </div>


            <div className="container">

                <Row gutter={64} className={"pt-5 "}>
                    <Col xs={18}>

                        <ShareButtons />
                        <ImageGallery
                            items={images}
                            showNav={true}
                            thumbnailPosition={"right"}
                            showPlayButton={false}
                        />
                    </Col>

                    <Col xs={6} className={"pt-3  bg-white"}>

                        <div className={"text-center mb-2"}>
                            <Row className={"mb-1"}>
                                <Col xs={24} sm={8}>
                                    <img className={""} style={{borderRadius: '50%', width: 60, height: 60}}   src={estate.contact.profile_picture}  />
                                </Col>
                                <Col xs={24} sm={16} className={"text-left"}>
                                    <h5  className="mt-2 ">{estate.contact.full_name}</h5>
                                    <p  className="">{t('common\:label.broker')}</p>
                                </Col>
                            </Row>


                            <Text className="d-flex mb-1 justify-content-start text-dark font-size-12">
                                <img className="mr-2" src={publicUrl + "assets/img/svg/envelope.svg"} />
                                <span className="align-self-center">{estate.contact.email}</span></Text>
                            <Text className="d-flex justify-content-start text-dark font-size-12">
                                <img className="mr-2" src={publicUrl + "assets/img/svg/mobile.svg"} />
                                <span className="align-self-center">{estate.contact.phone_1}</span>
                            </Text>
                        </div>

                        <Divider />
                        <ContactSimpleForm />
                    </Col>
                </Row>


            </div>
        </div>
        <div className="container">
            <div className="col-lg-9">
                <Row className="property-news-single-card pt-5 border-bottom-yellow">
                    <h4>Շենք</h4>
                    <Row className="mb-3 mb-sm-0  d-flex flex-row flex-wrap">
                        {building_attributes?.map((item, i) =>
                            item[1]["value"] &&
                            <Col xs={24} sm={12} className={"pr-1 d-flex  align-items-center font-size-13 mb-3"}>
                                <Col xs={12} className={"d-flex flex-row align-items-center"}>
                                    <span style={{
                                        display: "flex",
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        background: "#D8002C"
                                    }}></span>
                                    <Text type="secondary" className={"ml-2 pr-1 d-flex"}> {item[1]["label"]}:</Text>
                                </Col>
                                <Col xs={12}>
                                    <Text strong className={"d-flex align-items-center"}>{item[1]["value"]}</Text>
                                </Col>
                            </Col>
                        )}
                    </Row>
                    <Divider />
                    <h4>Ընդհանուր</h4>
                    <Row>
                        {estate.public_text_arm}
                    </Row>
                    <Divider />
                    <h4>Տեղը քարտեզով</h4>
                    <Row>
                        {estate.public_text_arm}
                    </Row>
                </Row>


            </div>
        </div>
    </div>;

}

export default EstateDetailsSection;
