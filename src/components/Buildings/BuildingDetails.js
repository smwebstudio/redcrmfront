import React, { Component, useEffect, useState } from "react";
import sectiondata from "data/sections.json";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import ShareButtons from "@/components/Global/share-buttons";
import { Button, Image, Col, Divider, Form, Input, message, Modal, Popover, Row, Select } from "antd";
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
import LoanCalculator from "@/components/Forms/loan-calculator";
import EstateCarousel from "@/components/Estate/estate-carousel";
import DarkHeading2 from "@/components/Typography/Heading2/DarkHeading2";
import DarkHeading3 from "@/components/Typography/Heading3/DarkHeading3";
import SmallParagraph from "@/components/Typography/paragraph/SmallParagraph";
import RedText from "@/components/Typography/text/RedText";
import EstatesGoogleMapSingle from "@/components/Estate/estatesGoogleMapSingle";
import EstateLargeItem from "@/components/Estate/estate-large-item";
import EstateItem from "@/components/Estate/estate-item";
import PlanItem from "@/components/Buildings/PlanItem";

const { Text, Link } = Typography;


function BuildingDetails(props) {

    const { t } = useTranslation("common");
    const developerData = props.developerData.developerData;

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

    let imagesData = developerData.images;

    console.log("developerData");
    console.log(developerData);
    console.log(developerData.building_attributes);

    let building_attributes = [];
    if (developerData) {
        building_attributes = Object.entries(developerData.building_attributes);
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


    const renderVideo = (item) => {
        return (
            <div className="video-wrapper">
                <iframe
                    width="100%"
                    height="510px"
                    src={item.embedUrl}
                    frameBorder="0"
                    allowFullScreen
                    title="ex"
                />
            </div>
        );
    };

    let images = [];
    if (imagesData) {
        imagesData.forEach(item => {

            if(item === '/assets/img/theview/video.png') {
                images.push({ original: item, thumbnail: item,  embedUrl: 'https://www.youtube.com/embed/FuVbRdhCZLk', renderItem: renderVideo.bind(this) });
            } else {
                images.push({ original: item, thumbnail: item,  });
            }
        });
    }

    let currencies = [
        { value: "AMD", label: "AMD" },
        { value: "USD", label: "USD" },
        { value: "RUR", label: "RUR" }
    ];

    const plans = {
        "data": [
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/1.png"
            },
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/2.png"
            },
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/3.png"
            },
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/4.png"
            },
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/5.png"
            },
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/1.png"
            },
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/2.png"
            },
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/3.png"
            },
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/4.png"
            },
            {
                "id": 66,
                "price": '50.000 $',
                "price_monthly": ' / ամսական 465 $',
                'area_total': 86,
                'building_floor_count': 7,
                'floor': 3,
                'room_count': 4,
                "full_address": "1-ին մ-շ | 1-ին մուտք ",
                "native_coords": [
                    44.5247957,
                    40.1780461
                ],
                "name_arm": "The View Պրեմիում դասի բնակելի համալիր",
                "image": "/assets/img/theview/plans/5.png"
            },
        ],
        "links": {
            "first": "http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=1",
            "last": "http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=321",
            "prev": null,
            "next": "http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=2"
        },
    };



    return <div className="property-details-area">
        <div className="bg-gray  pd-bottom-90">
            <div className={"container-fluid bg-white pt-5 pb-1"}>
                <div className={"container"}>
                    <Row className={"mb-4"}>
                        <Col sm={16} className={"mb-4"}>
                            <h3>
                                <span className="font-bold mr-5 font-size-24">The View Պրեմիում դասի բնակելի համալիր</span>
                            </h3>
                        </Col>
                        <Col sm={8}>
                            <div className={"d-flex justify-content-end align-items-center"}>
                                <EyeOutlined style={{ fontSize: 24, marginRight: 10 }} /> 1362
                                <Button className={'ml-6 bg-orange-400 text-white rounded-md'}>Եկամտահարկի վերադարձ</Button>
                            </div>

                        </Col>
                        <Col sm={24} className={"d-flex align-items-center mb-4"}>
                            <EnvironmentOutlined style={{
                                fontSize: 24,
                                marginRight: 10
                            }} /> {developerData.full_address}
                        </Col>

                        <Col sm={20}>
                            <Row gutter={32} className="flex flex-row align-items-center">
                                {developerData.room_count &&
                                    <Col className="mr-4 flex flex-row"><img className="mr-2" src={"/assets/img/svg/developer.svg"}
                                                               alt="logo" />Կառուցապատող: «Օմեգա Պլյուս» ՍՊԸ
                                    </Col>
                                }

                                {developerData.floor &&
                                    <Col className="mr-4 flex flex-row"><img className="mr-2" src={"/assets/img/svg/builder.svg"}
                                                               alt="logo" />Շինարար: «Միդիս Քնսթրաքշն» ՍՊԸ
                                    </Col>
                                }

                                {developerData.area_total &&

                                    <Col className="mr-3 flex flex-row"><img className="mr-2" src={"/assets/img/svg/controller.svg"}
                                                               alt="logo" />Նախագծի կառավարում: «1SQ» ՍՊԸ
                                    </Col>
                                }
                            </Row>

                        </Col>


                    </Row>
                </div>
            </div>

            <div className="container">

                <Row gutter={64} className={"pt-5 "}>
                    <Col xs={18}>

                        <ImageGallery
                            items={images}
                            showNav={true}
                            thumbnailPosition={"right"}
                            showPlayButton={false}
                        />
                    </Col>

                    <Col xs={6} className={"pt-3  bg-white"}>

                        <div className={"text-left mb-2"}>
                                <Row className={"mb-1"}>
                                    <Col xs={24} sm={24}>
                                        <DarkHeading3><Image preview={false}  src={'/assets/img/svg/redCalendar.svg'} /><span className={'ml-4'}> Շինարարության մեկնարկ</span></DarkHeading3>
                                        <SmallParagraph>01.12.2021թ</SmallParagraph>
                                        <DarkHeading3 className={'mt-4'}>Շինարարության ավարտ</DarkHeading3>
                                        <SmallParagraph>12.12.2024թ.</SmallParagraph>
                                        <Divider />
                                        <DarkHeading3><Image preview={false}  src={'/assets/img/svg/redBank.svg'} /><span className={'ml-4'}>Գործընկեր բանկեր </span></DarkHeading3>
                                        <SmallParagraph>Արցախ բանկ, ID Bank, AEB</SmallParagraph>
                                        <Divider />
                                        <DarkHeading3><Image preview={false}  src={'/assets/img/svg/redSale.svg'} /><span className={'ml-4'}>Վաճառքի բացառիկ իրավունք </span></DarkHeading3>
                                        <SmallParagraph>«ՌԷԴ Ինվեսթ Գրուպ» ՍՊԸ</SmallParagraph>
                                        <Divider />
                                        <DarkHeading3><Image preview={false}  src={'/assets/img/svg/mobile.svg'} /><span className={'ml-4'}>Կարեն Ավետիսյան</span></DarkHeading3>
                                        <SmallParagraph>Վաճառքի պատասխանատու</SmallParagraph>
                                        <SmallParagraph><RedText>+37495 908 909</RedText></SmallParagraph>
                                        <Divider />
                                        <DarkHeading3><Image preview={false}  src={'/assets/img/svg/mobile.svg'} /><span className={'ml-4'}>Վաճառքի գրասենյակ</span></DarkHeading3>
                                        <SmallParagraph><RedText>+37495 908 909</RedText></SmallParagraph>
                                    </Col>
                                </Row>
                        </div>

                    </Col>
                </Row>


            </div>
        </div>
        <div className="container">
            <div>
                <Row className="property-news-single-card pt-5 border-bottom-yellow">
                    <Row>

                        <Col xs={24}>
                            <DarkHeading2 className={'mt-10'}>Ընդհանուր</DarkHeading2>
                        </Col>

                        <Col xs={24}>
                            {developerData.public_text_arm}
                        </Col>
                       <Col xs={24}>

                           <DarkHeading2 className={'mt-10'}>Կառուցապատման ընթացք</DarkHeading2>
                       </Col>
                        <Col xs={24} className={'flex flex-row'}>
                            {imagesData.map((img, idx) => (
                                <div className={'mr-4'}>
                                <Image
                                    key={idx}
                                    width={100}
                                    height={100}
                                    src={img}
                                    alt={`Image ${idx + 1}`}
                                />


                                </div>
                            ))}
                        </Col>
                        <Divider />
                        <Col xs={24}>
                            <DarkHeading2 className={'mt-10 mb-10'}>Հատակագծեր</DarkHeading2>
                        </Col>
                        <Col xs={24}>
                            <Row gutter={32}>
                                {plans.data.map((item, index) => (
                                    <Col span={8}>
                                        <PlanItem key={index} item={item} />
                                    </Col>
                                ))}
                            </Row>
                        </Col><Col xs={24}>
                            <DarkHeading2 className={'mt-10'}>Տեղը քարտեզով</DarkHeading2>
                        </Col>
                        <Col xs={24}>
                            <EstatesGoogleMapSingle marker={developerData} />
                        </Col>

                    </Row>
                </Row>


            </div>
        </div>

        <div className="bg-gray  pd-10 pt-10">
            <div className={"container"}>
                <LoanCalculator price={developerData.price} />
            </div>
        </div>

    </div>;

}

export default BuildingDetails;
