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
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";

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


const AddProperyForm = () => {

    const { t } = useTranslation('common')

    const locationOptions = [];
    let estateOptionsData = [];
    let buildingOptionsData = [];

    const [form] = Form.useForm();
    const [location, setLocation] = useState([locationOptions]);
    const [estateOptions, setEstateOptions] = useState([]);
    const [buildingOptions, setBuildingOptions] = useState([]);
    useEffect(() => {

        fetch(apiURL + "/options")
            .then(res => res.json())
            .then(response => {

                response.data.locationData.forEach((value) => {
                    locationOptions.push({
                        value: value.id,
                        label: value.name,
                        children: value.cities
                    });
                });



                response.data.estateOptionsData.forEach((value) => {
                    estateOptionsData.push({
                        value: value.id,
                        label: value.label
                    });
                });


                buildingOptionsData = Object.entries(response.data.buildingOptionsData).map(([name, values]) => ({name,values}));

                let buildingLists = [];

                buildingOptionsData.forEach((list) => {
                    console.error('value');
                    console.error(list);

                    buildingLists.push({
                        name: list.name,
                        options: list.values
                    });

                });


                setLocation([...locationOptions]);
                setEstateOptions([...estateOptionsData]);
                setBuildingOptions([...buildingLists]);



            }).catch((e) => {
            console.log(e);
        });


    }, []);

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    const [current, setCurrent] = useState(0);
    const onStepChange = (value) => {
        setCurrent(value);
    };


    return (
        <div className={"container mt-5 mb-5"}>
            <Row>
                <h3 className={"text-dark font-bold"}>Նոր հայտ</h3>
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
                                    <h4 className={"mb-3 font-bold font-size-13"}>Անձնական տվյալներ</h4>

                                </Col>
                                <Col xs={24} sm={8}>

                                    <Form.Item
                                        name="full_name"
                                        label="Անուն Ազգանուն"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your full name!",
                                                whitespace: true
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                </Col>

                                <Col xs={24} sm={8}>


                                    <Form.Item
                                        name="phone"
                                        label="Հեռախոս"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your phone number!"
                                            }
                                        ]}
                                    >
                                        <Input
                                            addonBefore={"+" + 374}
                                            style={{
                                                width: "100%"
                                            }}
                                        />
                                    </Form.Item>

                                </Col>

                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="email"
                                        label="Էլ.հասցե"
                                        rules={[
                                            {
                                                type: "email",
                                                message: "The input is not valid E-mail!"
                                            },
                                            {
                                                required: true,
                                                message: "Please input your E-mail!"
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                </Col>
                                <Divider />
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>Գույքի տեսակ</h4>

                                </Col>
                                <Col span={24}>

                                    <Form.Item
                                        name="estate_type"
                                        label=""
                                        wrapperCol={{ sm: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                                whitespace: true
                                            }
                                        ]}
                                    >
                                        <Radio.Group buttonStyle="solid" size="large"
                                                     style={{ width: "100%" }}>
                                            <Radio.Button value="a" style={{
                                                width: "25%",
                                                textAlign: "center"
                                            }}>Բնակարան</Radio.Button>
                                            <Radio.Button value="b" style={{
                                                width: "25%",
                                                textAlign: "center"
                                            }}>Առանձնատուն</Radio.Button>
                                            <Radio.Button value="c" style={{
                                                width: "25%",
                                                textAlign: "center"
                                            }}>Կոմերցիոն</Radio.Button>
                                            <Radio.Button value="d" style={{
                                                width: "25%",
                                                textAlign: "center"
                                            }}>Հող</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>

                                </Col>

                                <Divider />
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>Կոնտրակտի տեսակ</h4>

                                </Col>
                                <Col span={24}>

                                    <Form.Item
                                        name="contract_type"
                                        label=""
                                        wrapperCol={{ sm: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                                whitespace: true
                                            }
                                        ]}
                                    >
                                        <Radio.Group buttonStyle="solid" size="large"
                                                     style={{ width: "100%" }}>
                                            <Radio.Button value="aa" style={{
                                                width: "33%",
                                                textAlign: "center"
                                            }}>Վաճառք</Radio.Button>
                                            <Radio.Button value="bb" style={{
                                                width: "33%",
                                                textAlign: "center"
                                            }}>Վարձակալություն</Radio.Button>
                                            <Radio.Button value="cc" style={{
                                                width: "33%",
                                                textAlign: "center"
                                            }}>Օրավարձ</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>

                                </Col>

                                <Divider />
                            </Row>


                            <Row gutter={24}>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>Հիմնական</h4>

                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        name="residence"
                                        label="Մարզ / քաղաք / փողոց"
                                        wrapperCol={{ sm: 24 }}
                                        rules={[
                                            {
                                                type: "array",
                                                required: true,
                                                message: "Please select!"
                                            }
                                        ]}
                                    >


                                        <Cascader
                                            options={location}
                                            showSearch={{ filter }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Form.Item name="building" label="Շենք"
                                               rules={[
                                                   {
                                                       required: true,
                                                       message: "Please input!",
                                                       whitespace: true
                                                   }
                                               ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Form.Item name="apartment" label="Բնակարան"
                                               rules={[
                                                   {
                                                       required: true,
                                                       message: "Please input!",
                                                       whitespace: true
                                                   }
                                               ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Form.Item name="floor" label="Հարկ">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Form.Item name="floor_count" label="Շենքի հարկ">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Form.Item name="ceil_height" label="Առաստաղ">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Form.Item name="area" wrapperCol={24} label="Մակերես">
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Divider />
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>Նկարներ</h4>

                                </Col>
                                <Col span={24}>
                                    <UploadBlock />
                                </Col>
                                <Divider />
                            </Row>

                            <Row gutter={24}>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>Շենք | Բնակարան</h4>
                                </Col>

                                    {buildingOptions.map((item, index) => (
                                        <Col sm={8} xs={24} key={index}>

                                        <Form.Item name={item.name} wrapperCol={24} label={t('label.'+item.name)} >
                                            <Select  options={item.options}/>
                                        </Form.Item>
                                        </Col>

                                    ))}
                                <Divider />
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>Այլ</h4>
                                </Col>
                                <Col span={24}>
                                    <Checkbox.Group options={estateOptions} />
                                </Col>
                                <Divider />
                            </Row>

                            <Row>
                                <Col span={4} offset={20}>
                                    <Form.Item
                                        wrapperCol={{ sm: 24 }}
                                    >
                                        <Button type="primary" htmlType="submit">
                                            Ուղարկել
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>

                        </Form>
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
                                    title: "Անձնական տվյալներ",
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title: "Գույքի տեսակ",
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title: "Կոնտրակտի տեսակ",
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title: "Հիմնական",
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title: "Շենք | Բնակարան",
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title: "Այլ",
                                    icon: <CheckCircleOutlined />
                                },
                                {
                                    title: "Քարտեզ",
                                    icon: <CheckCircleOutlined />
                                }
                            ]}
                        />
                        <Button className={"mt-5"} style={{ width: "100%" }}>Սկսել նորից</Button>
                    </Affix>
                </Col>
            </Row>


        </div>
    );
};
export default AddProperyForm;
