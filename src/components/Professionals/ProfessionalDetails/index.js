import React from 'react'
import { Col, Divider, Rate, Row } from 'antd'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import DarkParagraph from '@/components/common/Typography/Paragraph/DarkParagraph'

export function ProfessionalDetails({ professional }) {
    const messages = professional?.messages
    const communities = professional?.communities
    const estateTypes = professional?.estateTypes
    const messagesCount = professional?.messages.length

    return (
        <div className="mt-6">
            <Row gutter={[24, 16]}>
                {estateTypes && (
                    <Col xs={24}>
                        <Row gutter={48} wrap={false}>
                            <Col xs={24} md={4}>
                                <DarkHeading3 className={'font-bold text-dark'}>
                                    Գույքի տեսակ
                                </DarkHeading3>
                            </Col>
                            <Col>
                                <DarkParagraph>
                                    {estateTypes?.map(
                                        (estateType, index, row) =>
                                            index === row.length - 1
                                                ? estateType.name_arm
                                                : estateType.name_arm + ', ',
                                    )}
                                </DarkParagraph>
                            </Col>
                        </Row>
                    </Col>
                )}
                {communities && (
                    <Col xs={24}>
                        <Row gutter={48} wrap={false}>
                            <Col xs={24} md={4}>
                                <DarkHeading3 className={'font-bold text-dark'}>
                                    Համայնք
                                </DarkHeading3>
                            </Col>
                            <Col>
                                <DarkParagraph>
                                    {communities?.map((community, index, row) =>
                                        index === row.length - 1
                                            ? community.name_arm
                                            : community.name_arm + ', ',
                                    )}
                                </DarkParagraph>
                            </Col>
                        </Row>
                    </Col>
                )}
            </Row>
            <Divider />
            <Row>
                <h3 className={'mb-5'}>
                    Հաճախորդների գնահատականներ ({messagesCount})
                </h3>
            </Row>

            {messages?.map((message, index) => (
                <Row key={index}>
                    <Col span={24}>
                        <h3>{message.sender_name}</h3>
                    </Col>
                    <Col span={6}>
                        <Rate defaultValue={message.overall_rating} />
                    </Col>
                    <Col span={18} className={'d-flex align-items-center'}>
                        <p className={'mb-0'}>{message.service_name}</p>
                    </Col>
                    <Col span={24} className={'mt-3'}>
                        <p>{message.message_text}</p>
                    </Col>
                    <Divider />
                </Row>
            ))}
        </div>
    )
}

export default ProfessionalDetails
