import { Button, Col, Form, Input, Row, Select } from 'antd'
import { useEffect } from 'react'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'

const { Option } = Select

const filter = (inputValue, path) =>
    path.some(
        option =>
            option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    )

const residences = []
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 20,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
}

const ContactSimpleForm = () => {
    const [form] = Form.useForm()
    useEffect(() => {}, [])

    const onFinish = values => {
        console.log('Received values of form: ', values)
    }

    return (
        <Row>
            <Col span={24}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    layout="vertical"
                    onFinish={onFinish}
                    style={{}}
                    scrollToFirstError>
                    <Row>
                        <Col span={24}>
                            <DarkHeading3
                                className={'mb-3 font-bold font-size-13'}>
                                Հարցնել ավելին
                            </DarkHeading3>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="full_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your full name!',
                                        whitespace: true,
                                    },
                                ]}>
                                <Input placeholder="Անուն Ազգանուն *" />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message:
                                            'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}>
                                <Input placeholder="Էլ.հասցե *" />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your phone number!',
                                    },
                                ]}>
                                <Input placeholder="Հեռախոս" />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item name="message">
                                <Input.TextArea placeholder="Հաղորդագրություն" />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{
                                        width: '100%',
                                    }}>
                                    Ուղարկել
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}
export default ContactSimpleForm
