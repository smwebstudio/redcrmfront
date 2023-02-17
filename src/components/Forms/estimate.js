import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Radio,
    Row,
    Select,
    Divider, Steps, Affix
} from "antd";
import React, { useEffect, useState } from "react";
import UploadBlock from "@/components/Uploader/uploadBlock";
import { apiURL } from "@/constants";
import { CheckCircleOutlined, CheckOutlined } from "@ant-design/icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const { Option } = Select;


const filter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);


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

    const communitiesOptions = [];
    let evaluationOptionsData = [];

    const [form] = Form.useForm();
    const [communities, setCommunities] = useState([communitiesOptions]);
    const [evaluationOptions, setEvaluationOptions] = useState([]);
    useEffect(() => {

        fetch(apiURL + "/evaluationOptions")
            .then(res => res.json())
            .then(response => {
                response.data.evaluationOptionsData.locationCommunity.forEach((community) => {
                    communitiesOptions.push({
                        value: community.value,
                        label: community.label
                    });
                });

                evaluationOptionsData = Object.entries(response.data.evaluationOptionsData).map(([name, values]) => ({
                    name,
                    values
                }));

                let evaluationOptions = [];

                evaluationOptionsData.forEach((list) => {
                    evaluationOptions.push({
                        name: list.name,
                        options: list.values
                    });
                });

                console.table(evaluationOptions);

                setCommunities([...communitiesOptions]);
                setEvaluationOptions([...evaluationOptions]);


            }).catch((e) => {
            console.log(e);
        });


    }, []);


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
        console.error("values");
        console.error(JSON.stringify(values));
        console.table(values);

        const data = new FormData();
        data.append("json", JSON.stringify(values));

        fetch(apiURL + "/evaluate", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
            .then(response => {
                console.error("response");
                console.table(response);
                setShowResult(true);
                console.error(showResult);
                return response.json();
            }).then(jsonResponse => {
            console.table(jsonResponse);
            let priceAMD = jsonResponse * 400;
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
                    <h3 className={"text-dark font-bold"}>Բնակարանի գնահատում Երևանում</h3>
                    <p>Անշարժ գույքի գնահատման լավագույն մասնագետների կողմից ստեղծված այս հաշվիչը, հնարավորություն է
                        տալիս որոշել Ձեր բնակարանի Վաճառքի/Շուկայական գինը</p>
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
                                    <h4 className={"mb-3 font-bold font-size-13"}>Հիմնական</h4>

                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="locationCommunity"
                                        label={"Համայնք"}
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
                                            placeholder="Ընտրել"
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
                                                placeholder="Ընտրել"
                                                dropdownMatchSelectWidth={false}
                                                options={item.options}
                                            />
                                        </Form.Item>
                                    </Col>

                                ))}


                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="area"
                                        label="Մակերես"
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
                                    <h4 className={"mb-3 font-bold font-size-13"}>Բնակարան</h4>
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
                                                placeholder="Ընտրել"
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
                                                Ուղարկել
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
                                                Շուկայական արժեք
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
                                        Հաշվարկը կատարելիս հաշվի են առնվել վերջին եռամսյակի՝ Երևան քաղաքում բնակարանների
                                        վաճառքի գների պաշտոնական տվյալները, ինչպես նաև՝ Red Invest Group թիմի
                                        վերլուծությունների արդյունքում ստացված տվյալները:
                                    </p>
                                    <p>
                                        Ձեր բնակարանի վաճառքի / վարձակալության հայտը կայքում գրանցելու համար սեղմե՛ք
                                        հղման վրա:
                                    </p>
                                    <p>
                                        Ձեր բնակարանի արժեքի հետ կապված ավելի մանրամասն հարցեր կարող եք քննարկել կայքում
                                        գրանցված ՝
                                        <Link href={'/professionals'}><a className={'text-main'}>գնահատման գրասենյակների մասնագետների </a></Link>
                                        հետ:
                                    </p>
                                    <p>
                                        Հարցերի համար կարող եք կապվել կայքի ադմինիստրատորի հետ հետադարձ կապի միջոցով :
                                        Շնորհակալություն Red Invest Group համակարգից օգտվելու համար:
                                    </p>
                                    <Divider />
                                </Col>

                                <Col xs={24} className={"d-flex justify-content-end"}>
                                    <Button type="primary" onClick={onRenew}>
                                        Նորից գնահատել
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
                                    title: "Հիմնական",
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title: "Բնակարան",
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title: "Շուկայական արժեք",
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
