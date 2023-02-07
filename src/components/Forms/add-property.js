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
    Divider
} from "antd";
import { useState } from "react";

const { Option } = Select;
const residences = [
    {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
            {
                value: "hangzhou",
                label: "Hangzhou",
                children: [
                    {
                        value: "xihu",
                        label: "West Lake"
                    }
                ]
            }
        ]
    },
    {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
            {
                value: "nanjing",
                label: "Nanjing",
                children: [
                    {
                        value: "zhonghuamen",
                        label: "Zhong Hua Men"
                    }
                ]
            }
        ]
    }
];
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
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
};

const AddProperyForm = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70
                }}
            >
                <Option value="+374">+374</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{
                    width: 70
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult([".com", ".org", ".net"].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website
    }));
    return (
        <div className={"container mt-5 mb-5"}>
            <Row>
                <h3 className={"text-dark font-bold"}>Նոր հայտ</h3>
            </Row>

            <Row>

                <Col span={18}>
                    <div className={"add_property_wrapper mt-2"}>


                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            layout="vertical"
                            onFinish={onFinish}
                            initialValues={{
                                residence: ["zhejiang", "hangzhou", "xihu"],
                                prefix: "865"
                            }}
                            style={{
                            }}
                            scrollToFirstError
                        >

                            <Row>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>Անձնական տվյալներ</h4>

                                </Col>
                                <Col span={8}>

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

                                <Col span={8}>


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

                                <Col span={8}>
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
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                                whitespace: true
                                            }
                                        ]}
                                    >
                                        <Radio.Group defaultValue="a"  buttonStyle='solid' size="large" style={{ width: '100%' }}>
                                            <Row>
                                                <Col span={6} className={"test"}>
                                                    <Radio.Button value="a">Բնակարան</Radio.Button>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio.Button value="b">Առանձնատուն</Radio.Button>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio.Button value="c">Կոմերցիոն</Radio.Button>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio.Button value="d">Հող</Radio.Button>
                                                </Col>
                                            </Row>

                                        </Radio.Group>
                                    </Form.Item>

                                </Col>

                                <Divider />
                            </Row>


                        </Form>
                    </div>
                </Col>
                <Col span={6}>

                </Col>
            </Row>



        </div>
    );
};
export default AddProperyForm;
