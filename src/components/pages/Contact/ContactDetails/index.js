import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { Col, Row } from 'antd'
import DarkParagraph from '@/components/common/Typography/Paragraph/DarkParagraph'
import { useTranslation } from '@/app/i18n/client'
import Link from 'next/link'
import FontIcon from '@/components/common/Icons/FontIcon'
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import AppImage from '@/components/common/Image/AppImage'
import { assetsUrl } from '@/constants'
import ContactBlockWrapper from '@/components/common/Wrappers/ContactBlockWrapper'
import ContactMap from '@/components/pages/Contact/ContactMap'
import ContactSimpleForm from '@/components/Forms/contact-simple-form'

export const ContactDetails = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')
    return (
        <ContainerBoxed className={'pt-10 pb-10'}>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <AppImage
                            height={25}
                            src={assetsUrl + 'img/svg/location-red.svg'}
                        />
                        <DarkParagraph>
                            {t('label.red.addressOffice')}
                        </DarkParagraph>
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <AppImage
                            height={25}
                            src={assetsUrl + 'img/svg/mobile.svg'}
                        />
                        <DarkParagraph>+374 98 908 908</DarkParagraph>
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <AppImage
                            height={25}
                            src={assetsUrl + 'img/svg/envelope.svg'}
                        />
                        <DarkParagraph>info@redinvest.am</DarkParagraph>
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper className={'flex-row pt-6'}>
                        <Link
                            href="https://www.facebook.com/groups/573996579357491"
                            target="_blank">
                            <FontIcon
                                icon={faFacebook}
                                size={'2x'}
                                color={'#D8002C'}
                            />
                        </Link>

                        <Link
                            href="https://www.instagram.com/redinvestgroup/"
                            target="_blank">
                            <FontIcon
                                icon={faInstagram}
                                size={'2x'}
                                color={'#D8002C'}
                            />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/red-invest-group-real-estate-company-9377b82b6/"
                            target="_blank">
                            <FontIcon
                                icon={faLinkedin}
                                size={'2x'}
                                color={'#D8002C'}
                            />
                        </Link>

                        <Link
                            href="https://www.youtube.com/@REDInvestGroup"
                            target="_blank">
                            <FontIcon
                                icon={faYoutube}
                                size={'2x'}
                                color={'#D8002C'}
                            />
                        </Link>
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={18}>
                    <ContactMap />
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <ContactSimpleForm lng={lng} />
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <AppImage
                            height={25}
                            src={assetsUrl + 'img/svg/location-red.svg'}
                        />
                        <DarkParagraph>
                            655 N CENTRAL AVE 1758, Glendale, CA, United States,
                            California
                        </DarkParagraph>
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <AppImage
                            height={25}
                            src={assetsUrl + 'img/svg/mobile.svg'}
                        />
                        <DarkParagraph>+ 1 747 238 3050</DarkParagraph>
                    </ContactBlockWrapper>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}
