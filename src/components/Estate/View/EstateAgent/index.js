import styled from 'styled-components'
import React from 'react'
import { Col, Row, Typography } from 'antd'
import AppImage from '@/components/common/Image/AppImage'
import { useTranslation } from '@/app/i18n/client'

const EstateAgentStyled = styled.div`
    text-align: center;
    margin-bottom: 0.5rem;

    .contact-info {
        margin-bottom: 0.25rem;

        .profile-col {
            text-align: left;
            margin-top: 0.5rem;

            h5 {
                margin-top: 0.5rem;
            }

            p {
                margin: 0;
            }
        }

        .contact-details {
            display: flex;
            flex-direction: column;
            margin-top: 16px;

            .contact-detail {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 0.25rem;
                font-size: 0.75rem;
                color: #000;

                span {
                    margin-left: 8px;
                }
            }
        }
    }
`

const { Text } = Typography

const EstateAgent = ({ estate, lng }) => {
    const { t } = useTranslation(lng, 'common')
    return (
        <EstateAgentStyled>
            {estate.contact && (
                <Row className="contact-info">
                    <Col xs={6} sm={8}>
                        <AppImage
                            alt={'Red Group'}
                            style={{
                                borderRadius: '50%',
                                width: 60,
                                height: 60,
                            }}
                            src={estate.contact.profile_picture}
                        />
                    </Col>
                    <Col xs={14} sm={16} className="profile-col">
                        <h5>{estate.contact.full_name}</h5>
                        <p>{t('common:label.broker')}</p>
                    </Col>
                    <Col xs={24} sm={24} className="contact-details">
                        <Row>
                            <Col xs={24}>
                                <Text className="contact-detail">
                                    <AppImage
                                        alt={'Email Icon'}
                                        className="icon"
                                        height={12}
                                        src={'/assets/img/svg/envelope.svg'}
                                    />
                                    <span>{estate.contact.email}</span>
                                </Text>
                            </Col>
                            <Col xs={24}>
                                <Text className="contact-detail">
                                    <AppImage
                                        alt={'Phone Icon'}
                                        className="icon"
                                        height={16}
                                        src={'/assets/img/svg/mobile.svg'}
                                    />
                                    <span>{estate.contact.phone_1}</span>
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )}
        </EstateAgentStyled>
    )
}

export default EstateAgent
