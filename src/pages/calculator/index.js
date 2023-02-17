import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import EstateTabs from "@/components/Estate/estate-tabs";
import Topbar from "@/components/React/global-components/topbar";
import { Button, Form, Input } from "antd";
import LoanSchedule from "loan-schedule.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";





const Calculator = () => {
    const [form] = Form.useForm();
    const loanSchedule = new LoanSchedule({});
    const onFinish = (values) => {
        console.log(values);

        loanSchedule.calculateSchedule({
            amount: values.amount,
            rate: 11.5,
            term: 12,
            paymentAmount: 40000,
            paymentOnDay: 25,
            issueDate: "25.10.2016",
            scheduleType: LoanSchedule.ANNUITY_SCHEDULE
        }).payments.forEach((pay) => {
            console.log(pay.paymentDate + "\t|\t\t"
                + pay.initialBalance + "\t|\t\t"
                + pay.paymentAmount + "\t|\t\t"
                + pay.principalAmount + "\t|\t\t"
                + pay.interestAmount + "\t|\t\t"
                + pay.finalBalance
            );
        });

    };
    return <div>
        <Topbar />
        <Navbar />
        <Form form={form} onFinish={onFinish}>
            <Form.Item  name='amount'>
                <Input>

                </Input>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        <Footer />
    </div>;
};

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'footer',
            ])),
            // Will be passed to the page component as props
        },
    }
}

export default Calculator;
