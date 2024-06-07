'use client'
import { Col, Form, Input, Modal, Row, Select } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from '@/app/i18n/client'
import { useRouter } from 'next/navigation'
import StyledPriceOffer from '@/components/Estate/PriceOffer/style'
import { InfoCircleFilled } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea'
import { globalCurrencies } from '@/lib/constants'
import { RedOutlinedButton } from '@/components/common/Buttons/RedOutlinedButton'
import { RedButton } from '@/components/common/Buttons/RedButton'
import { GreyButton } from '@/components/common/Buttons/GreyButton'

export const PriceOffer = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')
    const router = useRouter()
    const [form] = Form.useForm()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = async () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const onFinish = values => {
        console.log(values)
    }

    return (
        <StyledPriceOffer className={'container'}>
            <RedOutlinedButton onClick={showModal}>
                {t('common:label.offerANewPrice')} <InfoCircleFilled />
            </RedOutlinedButton>
            <Modal
                title={t('common:label.offerANewPrice')}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={700}
                footer={[
                    <Row key={'modal'} gutter={16} justify={'end'}>
                        <Col>
                            <GreyButton key="back" onClick={handleCancel}>
                                {t('common:button.cancel')}
                            </GreyButton>
                        </Col>
                        <Col>
                            <RedButton
                                form="priceOffer"
                                type="primary"
                                key="submit"
                                htmlType="submit">
                                {t('common:button.send')}
                            </RedButton>
                        </Col>
                    </Row>,
                ]}>
                <Form
                    name="priceOffer"
                    layout="vertical"
                    style={{
                        maxWidth: 800,
                    }}
                    onFinish={onFinish}>
                    <Row gutter={24}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label={t('common:label.firstLastName')}
                                name="full_name"
                                rules={[
                                    {
                                        required: true,
                                        message: t(
                                            'common:validation.firstLastName.required',
                                        ),
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label={t('common:label.email')}
                                name="e_mail"
                                rules={[
                                    {
                                        required: true,
                                        message: t(
                                            'common:validation.email.required',
                                        ),
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label={t('common:label.phone')}
                                name="e_mail"
                                rules={[
                                    {
                                        required: true,
                                        message: t(
                                            'common:validation.phone.fixed.required',
                                        ),
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col xs={18} sm={8}>
                            <Form.Item
                                label={t('common:label.offeringPrice')}
                                name="offer_price"
                                rules={[
                                    {
                                        required: true,
                                        message: t(
                                            'common:validation.price.required',
                                        ),
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col xs={6} sm={4}>
                            <Form.Item
                                label={t('common:label.currency')}
                                name="offer_currency">
                                <Select
                                    defaultValue={'AMD'}
                                    options={globalCurrencies}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24}>
                            <Form.Item
                                label={t('common:label.messageContact')}
                                name="message">
                                <TextArea />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </StyledPriceOffer>
    )
}
export default PriceOffer
