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
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import AppImage from '@/components/common/Image/AppImage'
import { assetsUrl } from '@/constants'
import ContactBlockWrapper from '@/components/common/Wrappers/ContactBlockWrapper'
import ContactMap from '@/components/pages/Contact/ContactMap'
import ContactSimpleForm from '@/components/Forms/contact-simple-form'
import SimpleWrapper from '@/components/common/Wrappers/SimpleWrapper'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'

export const ContactDetails = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')
    return (
        <ContainerBoxed className={'pt-10 pb-10'}>
            <Row gutter={[60, 40]}>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <AppImage
                            height={25}
                            src={assetsUrl + 'img/svg/location-red.svg'}
                        />
                        <DarkParagraph>{t('label.red.address')}</DarkParagraph>
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <AppImage
                            height={25}
                            src={assetsUrl + 'img/svg/mobile.svg'}
                        />
                        <DarkParagraph>+374 11 970 908</DarkParagraph>
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
                        <Link href="#" target="_blank">
                            <FontIcon
                                icon={faFacebook}
                                size={'2x'}
                                color={'#D8002C'}
                            />
                        </Link>

                        <Link href="#" target="_blank">
                            <FontIcon
                                icon={faInstagram}
                                size={'2x'}
                                color={'#D8002C'}
                            />
                        </Link>

                        <Link href="#" target="_blank">
                            <FontIcon
                                icon={faTwitter}
                                size={'2x'}
                                color={'#D8002C'}
                            />
                        </Link>

                        <Link href="#" target="_blank">
                            <FontIcon
                                icon={faLinkedin}
                                size={'2x'}
                                color={'#D8002C'}
                            />
                        </Link>

                        <Link href="#" target="_blank">
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
                        <ContactSimpleForm />
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <DarkParagraph>
                            Կառուցապատողից բնակարանների ձեռքբերման համար
                        </DarkParagraph>
                        <SimpleWrapper
                            className={
                                'flex flex-row items-center justify-start gap-3'
                            }>
                            <AppImage
                                height={25}
                                src={assetsUrl + 'img/svg/mobile.svg'}
                            />
                            <SmallParagraph>
                                +374 98 908 908
                                <br /> +374 98 908 910
                            </SmallParagraph>
                        </SimpleWrapper>
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <DarkParagraph>
                            Անշարժ գույքի երկրորդական շուկայից վարձակալության և
                            գնման հարցերով
                        </DarkParagraph>
                        <SimpleWrapper
                            className={
                                'flex flex-row items-center justify-start gap-3'
                            }>
                            <AppImage
                                height={25}
                                src={assetsUrl + 'img/svg/mobile.svg'}
                            />
                            <SmallParagraph>
                                +374 98 908 908
                                <br /> +374 98 908 910 <br />
                                +374 11 970 908
                            </SmallParagraph>
                        </SimpleWrapper>
                    </ContactBlockWrapper>
                </Col>
                <Col xs={24} md={6}>
                    <ContactBlockWrapper>
                        <DarkParagraph>
                            Արսեն Ավետիսյան
                            <br /> Գլխավոր տնօրեն
                        </DarkParagraph>
                        <SimpleWrapper
                            className={
                                'flex flex-row items-center justify-start gap-3'
                            }>
                            <AppImage
                                height={25}
                                src={assetsUrl + 'img/svg/mobile.svg'}
                            />
                            <SmallParagraph>+374 98 908 908</SmallParagraph>
                        </SimpleWrapper>
                    </ContactBlockWrapper>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}
