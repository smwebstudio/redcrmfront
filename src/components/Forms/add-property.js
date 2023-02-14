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
import { useEffect, useState } from "react";
import UploadBlock from "@/components/Uploader/uploadBlock";

const { Option } = Select;


const filter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);


const residences = [];
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

    const [form] = Form.useForm();

    const [location, setLocation] = useState([residences]);
    const [estateOptions, setEstateOptions] = useState([]);
    useEffect(() => {
        fetch("http://redoc/api/address_data")
            .then(res => res.json())
            .then(response => {
                response.data.forEach((value) => {
                    residences.push({
                        value: value.id,
                        label: value.name,
                        children: value.cities
                    });
                });
                setLocation([...residences]);
            }).catch((e) => {
            console.log(e);
        });

        fetch("http://redoc/api/estate_options")
            .then(res => res.json())
            .then(response => {
                let estateOptionsData = [];
                response.data.forEach((value) => {
                    estateOptionsData.push({
                        value: value.id,
                        label: value.label
                    });
                });

                setEstateOptions([...estateOptionsData]);
            }).catch((e) => {
            console.log(e);
        });
    }, []);


    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };


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
                            style={{}}
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
                                        wrapperCol={{ sm: 24 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input!",
                                                whitespace: true
                                            }
                                        ]}
                                    >
                                        <Radio.Group  buttonStyle="solid" size="large"
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
                                        <Radio.Group  buttonStyle="solid" size="large"
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


                            <Row>
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

                            <Row>
                                <Col span={24}>
                                    <h4 className={"mb-3 font-bold font-size-13"}>Այլ</h4>
                                </Col>
                                <Col span={24}>
                                    <Checkbox.Group options={estateOptions}  />
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
                <Col span={6}>

                </Col>
            </Row>


        </div>
    );
};
export default AddProperyForm;
