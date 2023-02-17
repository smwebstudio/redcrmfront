import { Col, Row, Tabs } from "antd";
import React  from "react";
import EstateCarousel from "@/components/Estate/estate-carousel";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";


const onChange = (key) => {
    console.log(key);
};

function EstateMainTabs(props) {
    const { t } = useTranslation('common');

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    return (

        <div className="container  pt-5 mt-5 mb-5">
            <Row className={"main-featured min-h-fit mt-5"}>
                <Col xs={24} sm={4}>
                    <h5 className={isTabletOrMobile ? "text-center text-dark  font-bold pb-3" : "text-dark  font-bold pb-3"}>{t('label.hotOffer')}</h5>
                </Col>
                <Col sm={24} xs={24}>
                    <Tabs
                        defaultActiveKey="1"
                        centered={true}
                        className={isTabletOrMobile ? '' : 'mt-n5'}
                        onChange={onChange}
                        items={[
                            {
                                label: t('button.sale'),
                                key: "1",
                                children: <EstateCarousel type="sale" />
                            },
                            {
                                label: t('button.rent'),
                                key: "2",
                                children: <EstateCarousel type="rent" />
                            },
                            {
                                label: t('label.title.fee.normal'),
                                key: "3",
                                children: <EstateCarousel type="daily" />
                            }
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={24} className={"text-center text-sm-right"}>
                    <Link href="/estates"><a className="text-main text-underline">Տեսնել բոլորը</a></Link>
                </Col>
            </Row>
        </div>
    );

}

export default EstateMainTabs;
