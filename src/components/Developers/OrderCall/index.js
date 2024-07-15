import React, { useState } from 'react'
import { Button, Checkbox, Col, Form, Input, Modal, Row, Select } from 'antd'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import StyledOrderCall from '@/components/Developers/OrderCall/style'
import { useTranslation } from '@/app/i18n/client'
import { GreyButton } from '@/components/common/Buttons/GreyButton'
import SuccessModal from '@/components/common/Modals/SuccessModal'

const { Option } = Select

export const OrderCall = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const [showModalOk, setShowModalOk] = useState(false)

    const onFinish = values => {
        setShowModalOk(!showModalOk)
    }

    const hours = Array.from({ length: 10 }, (_, index) => index + 9) // Generate hours between 9 and 18

    return (
        <StyledOrderCall>
            <GreyButton onClick={showModal}>Պատվիրել զանգ</GreyButton>
            <Modal
                title="Պատվիրել զանգ"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                onClose={handleCancel}
                width={700}
                footer={[
                    <Col key={'modal2'}>
                        <Button
                            form="priceOffer"
                            type="primary"
                            key="submit"
                            htmlType="submit">
                            Պատվիրել զանգ
                        </Button>
                    </Col>,
                ]}>
                <Form
                    name="priceOffer"
                    layout="vertical"
                    style={{
                        maxWidth: 800,
                    }}
                    onFinish={onFinish}>
                    <Row className={'mb-10'}>
                        <Col xs={16}>
                            <SmallParagraph className={'mb-10'}>
                                Ողջույն հարգելի հաճախորդ: Այս հայտը լրացնելուց
                                հետո մեր մասնագետները կկապվեն Ձեզ հետ։
                            </SmallParagraph>
                        </Col>
                    </Row>
                    <Row gutter={[24, 16]}>
                        <Col xs={24} sm={6}>
                            <Form.Item
                                label={t('label.name')}
                                name="full_name"
                                rules={[
                                    {
                                        required: true,
                                        message: t('notification.required'),
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={8}>
                            <Form.Item
                                label={t('label.phone')}
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: t('notification.required'),
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={10}>
                            <Row gutter={8}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        label={' '}
                                        name="hours_from"
                                        rules={[
                                            {
                                                required: true,
                                                message: t(
                                                    'notification.required',
                                                ),
                                            },
                                        ]}>
                                        <Select>
                                            {hours.map(hour => (
                                                <Option key={hour} value={hour}>
                                                    {hour
                                                        .toString()
                                                        .padStart(2, '0')}
                                                    :00
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        label={' '}
                                        name="hours_to"
                                        rules={[
                                            {
                                                required: true,
                                                message: t(
                                                    'notification.required',
                                                ),
                                            },
                                        ]}>
                                        <Select>
                                            {hours.map(hour => (
                                                <Option key={hour} value={hour}>
                                                    {hour
                                                        .toString()
                                                        .padStart(2, '0')}
                                                    :00
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Checkbox>
                                <SmallParagraph>
                                    Համաձայն եմ տրամադրել անձնական տվյալներս
                                </SmallParagraph>
                            </Checkbox>
                        </Col>
                    </Row>
                </Form>
            </Modal>

            <SuccessModal
                lng={lng}
                text={t('label.tankYouForUsingOurServices')}
                show={showModalOk}
                setShowModal={setShowModalOk}
            />
        </StyledOrderCall>
    )
}
