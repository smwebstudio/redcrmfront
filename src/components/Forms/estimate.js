import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Divider, Steps, Affix
} from "antd";
import React, { useEffect, useState } from "react";
import { CheckCircleOutlined, CheckOutlined } from "@ant-design/icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "@/hooks/api";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 20
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 20
        }
    }
};


const EstimateForm = () => {

    const { t, lang } = useTranslation("common");

    const router = useRouter();
    const { locale } = router;

    const communitiesOptions = [];
    let evaluationOptionsData = [];

    const [form] = Form.useForm();
    const [communities, setCommunities] = useState([communitiesOptions]);
    const [evaluationOptions, setEvaluationOptions] = useState([]);
    useEffect(() => {

        api(locale).post("/evaluationOptions", {})
            .then(response => {

                    const data = response.data.data;
                    let evaluationOptions = [];

                    data.evaluationOptionsData.locationCommunity.forEach((community) => {
                        communitiesOptions.push({
                            value: community.value,
                            label: community.label
                        });
                    });

                    evaluationOptionsData = Object.entries(data.evaluationOptionsData).map(([name, values]) => ({
                        name,
                        values
                    }));


                    evaluationOptionsData.forEach((list) => {
                        evaluationOptions.push({
                            name: list.name,
                            options: list.values
                        });
                    });

                    setCommunities([...communitiesOptions]);
                    setEvaluationOptions([...evaluationOptions]);
                }
            )
            .catch(error => {
                // if (error.response.status !== 422) throw error;
            });

    }, [locale]);


    const [showResult, setShowResult] = useState(false);
    const [price, setPrice] = useState(0);

    let publicUrl = process.env.PUBLIC_URL + "/";

    const resultBackground = {
        backgroundImage: "url(" + publicUrl + "/assets/img/bg/evaluation_result.png)",
        backgroundSize: "cover",
        height: "400px",
        width: "100%"
    };

    const onFinish = (values) => {

        const data = new FormData();
        data.append("json", JSON.stringify(values));

        api(locale).post("/evaluate", values)
            .then(response => {
                let priceAMD = response.data * 400;
                setPrice(priceAMD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
                setShowResult(true);
            }).catch((e) => {
            console.log(e);
        });
    };

    const onRenew = () => {
        setShowResult(false);
        form.resetFields();
    };
    const [current, setCurrent] = useState(0);
    const onStepChange = (value) => {
    };


    return (
        <div className={"container mt-5 mb-5"}>

            <Row>
                <Col xs={24} sm={16}>
                    <h3 className={"text-dark font-bold"}>{t('label.EvaluatHous')}</h3>
                    <p>{t('label.evaluation.smallText')}</p>
                </Col>
            </Row>

            <Row gutter={32}>

                <Col span={18}>
                    <div className={"add_property_wrapper mt-2"}>

                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            layout="vertical"
                            onFinish={onFinish}
                            style={{}}
                            scrollToFirstError
                        >

                            <Row>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>{t('label.general')}</h4>

                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="locationCommunity"
                                        label={t('label.locationCommunity')}
                                        rules={[
                                            {
                                                required: true,
                                                message: t("validation.evaluation.locationCommunity.required")
                                            }
                                        ]}
                                    >
                                        <Select
                                            showSearch
                                            options={communities}
                                            placeholder={t('button.pick')}
                                            style={{ width: "100%" }}
                                            dropdownMatchSelectWidth={false}
                                        />
                                    </Form.Item>
                                </Col>

                                {evaluationOptions.map((item, index) => (
                                    item.name === "buildingProject" &&
                                    <Col sm={8} xs={24} key={index}>
                                        <Form.Item
                                            name={item.name}
                                            label={t("label.evaluation." + item.name)}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: t("validation.evaluation." + item.name + ".required")
                                                }
                                            ]}
                                        >
                                            <Select
                                                placeholder={t('button.pick')}
                                                dropdownMatchSelectWidth={false}
                                                options={item.options}
                                            />
                                        </Form.Item>
                                    </Col>

                                ))}


                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="area"
                                        label={t('label.area')}
                                        rules={[
                                            {
                                                required: true,
                                                message: t("validation.evaluation.buildingArea.notZero")
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Divider />
                            </Row>


                            <Row gutter={24}>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>{t('label.apartment')}</h4>
                                </Col>
                                {evaluationOptions.map((item, index) => (
                                    item.name !== "buildingProject" &&
                                    item.name !== "locationCommunity" &&
                                    item.name !== "buildingArea" &&
                                    <Col sm={8} xs={24} key={index}>
                                        <Form.Item
                                            name={item.name}
                                            label={t("label.evaluation." + item.name)}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: t("validation.evaluation." + item.name + ".required")
                                                }
                                            ]}
                                        >
                                            <Select
                                                dropdownMatchSelectWidth={false}
                                                placeholder={t('button.pick')}
                                                options={item.options}
                                            />
                                        </Form.Item>
                                    </Col>

                                ))}
                                <Divider />
                            </Row>

                            <Row>
                                <Col span={4} offset={20}>
                                    <Form.Item
                                        wrapperCol={{ sm: 24 }}
                                    >
                                        {!showResult &&
                                            <Button type="primary" htmlType="submit">
                                                {t('button.send')}
                                            </Button>
                                        }
                                    </Form.Item>
                                </Col>
                            </Row>

                        </Form>

                        {showResult &&
                            <Row>
                                <Col xs={24}>
                                    <div className={"text-center"} style={resultBackground}>
                                        <div style={{
                                            position: "absolute",
                                            left: "150px",
                                            top: "60px"
                                        }}>
                                            <h3 style={{
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                color: "#414141"
                                            }}>
                                                {t('label.evaluation.buildingMarketValue')}
                                            </h3>
                                            <p style={{
                                                fontSize: "40px",
                                                fontWeight: "700",
                                                color: "#D8002C"
                                            }}
                                            >
                                                {price} ֏</p>
                                        </div>

                                    </div>
                                    <Divider />

                                </Col>
                                <Col xs={24}>
                                    <p>
                                        {t('label.Ev.to.newAnounc')}
                                    </p>
                                    <p>
                                        {t('label.Ev.to.newAnounc5')}
                                    </p>
                                    <p>
                                        {t('label.Ev.to.newAnounc3')}
                                        <Link href={"/professionals"}><a className={"text-main"}> {t('label.Ev.to.newAnounc3.1')} </a></Link>
                                    </p>
                                    <p>
                                        {t('label.Ev.to.newAnounc4')}
                                    </p>
                                    <Divider />
                                </Col>

                                <Col xs={24} className={"d-flex justify-content-end"}>
                                    <Button type="primary" onClick={onRenew}>
                                        {t('label.button.newEvaluation')}
                                    </Button>
                                </Col>
                            </Row>
                        }


                    </div>
                </Col>
                <Col span={6} className={"pt-5 shadow"}>
                    <Affix offsetTop={150}>
                        <Steps
                            direction="vertical"
                            onChange={onStepChange}
                            current={current}
                            items={[
                                {
                                    title: t('label.general'),
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title:  t('label.apartment'),
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title: t('label.evaluation.buildingMarketValue'),
                                    icon: <CheckCircleOutlined />
                                }
                            ]}
                        />
                    </Affix>
                </Col>
            </Row>


        </div>
    );
};
export default EstimateForm;
