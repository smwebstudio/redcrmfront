import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Divider
} from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LoanData from "@/components/Tables/loanData";


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 24
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 22
        }
    }
};

const LoanSchedule = require("loan-schedule.js");

const loanSchedule = new LoanSchedule({
    DecimalDigit: 3,
    dateFormat: "DD.MM.YYYY",
    prodCalendar: "ru"
});
const LoanCalculator = (props) => {

    const { t } = useTranslation("common");
    const router = useRouter();
    const [form] = Form.useForm();



    const [payments, setPayments] = React.useState([]);
    const [deposit, setDeposit] = useState(0);
    const [price, setPrice] = useState(parseInt(props.price));

    const handlePrice = (event) => {
        const value = event.target.value;
        setPrice(value);
    };
    const handleDeposit = (event) => {
        const value = parseInt(event.target.value);

        form.setFieldValue('price', price);
        setDeposit(value);
    };


    useEffect(() => {
        const mortgageSum = parseInt(price) - parseInt(deposit);
        const depositPercent = parseInt(parseInt(deposit) * 100 / parseInt(price));
        form.setFieldsValue({ price:price, mortgageSum: mortgageSum, depositPercent: depositPercent });
    }, [price, deposit]);

    const onFinish = (values) => {
        console.log(values);
        console.log(values.price);

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const day = String(tomorrow.getDate()).padStart(2, "0");
        const month = String(tomorrow.getMonth() + 1).padStart(2, "0"); // Months are zero indexed
        const year = tomorrow.getFullYear();
        const currentDate = `${day}.${month}.${year}`;

        const newPayments = loanSchedule.calculateSchedule({
            amount: values.price - values.deposit,
            rate: values.percent,
            term: values.term * 12,
            paymentOnDay: 15,
            issueDate: currentDate,
            scheduleType: LoanSchedule.ANNUITY_SCHEDULE
        }).payments;

        setPayments(newPayments);
    };


    return (
        <div className={"container"}>
            <Row>
                <h3 className={"text-dark font-bold"}>{t("label.mortgage")}</h3>
            </Row>

            <Row gutter={32}>
                <Col span={24}>
                    <div className={"mt-10"}>

                        <Form
                            {...formItemLayout}
                            initialValues={{ price: price }}
                            form={form}
                            name="loan-calculate"
                            layout="vertical"
                            onFinish={onFinish}
                            style={{}}
                            scrollToFirstError
                        >

                            <Row>
                                <Col xs={24} sm={8}>

                                    <Form.Item
                                        name="price"
                                        label={t("label.estateMortgage.price")}

                                    >
                                        <Input onChange={handlePrice} value={price} />
                                    </Form.Item>

                                </Col>

                                <Col xs={24} sm={8}>


                                    <Form.Item
                                        name="percent"
                                        label={t("label.estateMortgage.percent")}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input percent!"
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                </Col>

                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="term"
                                        label={t("label.estateMortgage.term") + " / " + t("label.estateMortgage.termYear")}
                                        wrapperCol={24}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input term!"
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                </Col>
                            </Row>


                            <Row>
                                <Col xs={24} sm={8}>

                                    <Form.Item
                                        name="deposit"
                                        label={t("label.estateMortgage.deposit")}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input deposit!"
                                            }
                                        ]}
                                    >
                                        <Input onChange={handleDeposit} />
                                    </Form.Item>

                                </Col>

                                <Col xs={24} sm={8}>


                                    <Form.Item
                                        name="depositPercent"
                                        label={t("label.estateMortgage.deposit") + " " + t("label.estateMortgage.percent")}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input deposit!"
                                            }
                                        ]}
                                    >
                                        <Input disabled={true} />
                                    </Form.Item>

                                </Col>

                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name="mortgageSum"
                                        label={t("label.estateMortgage.mortgageSum")}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your E-mail!"
                                            }
                                        ]}
                                        wrapperCol={24}
                                    >
                                        <Input disabled={true} />
                                    </Form.Item>

                                </Col>
                                <Col span={24}>
                                    <Form.Item wrapperCol={{ sm: 24 }}>
                                        <Button type="primary" size="large" className={"w-100 h-50 mt-10"}
                                                htmlType="submit">
                                            {t("button.send")}
                                        </Button>
                                    </Form.Item>
                                </Col>

                                <Col xs={24}>
                                    {payments.length > 0 &&
                                        <LoanData payments={payments} />
                                    }
                                </Col>

                            </Row>


                        </Form>
                    </div>
                </Col>
            </Row>


        </div>
    );
};
export default LoanCalculator;
