import { Button, Col, Form, Input, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import SuccessModal from '@/components/common/Modals/SuccessModal'
import { useTranslation } from '@/app/i18n/client'

const ContactSimpleForm = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')
    const [form] = Form.useForm()
    useEffect(() => {}, [])

    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    const onFinish = values => {
        handleModal()
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <Form
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
                                    {t('label.contactUs')}
                                </DarkHeading3>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    name="full_name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your full name!',
                                            whitespace: true,
                                        },
                                    ]}>
                                    <Input
                                        placeholder={t('label.firstLastName')}
                                    />
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
                                            message:
                                                'Please input your E-mail!',
                                        },
                                    ]}>
                                    <Input placeholder={t('label.email')} />
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
                                    <Input placeholder={t('label.phone')} />
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item name="message">
                                    <Input.TextArea
                                        placeholder={t('label.messageContact')}
                                    />
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
                                        {t('button.send')}
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <SuccessModal
                lng={lng}
                text={t('label.tankYouForUsingOurServices')}
                show={showModal}
                setShowModal={setShowModal}
            />
        </>
    )
}
export default ContactSimpleForm
