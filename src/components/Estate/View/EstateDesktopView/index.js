'use client'
import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ShareButtons from '@/components/Global/share-buttons'
import { Col, Divider, Row } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import ContactSimpleForm from '@/components/Forms/contact-simple-form'
import EstateCarousel from '@/components/Estate/EstateCarousel'
import EstatesGoogleMapSingle from '@/components/Estate/estatesGoogleMapSingle'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import StyledEstateDesktopView from '@/components/Estate/View/style'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import LoanCalculator from '@/components/Estate/LoanCalculator'
import EstateIntro from '@/components/Estate/View/EstateIntro'
import EstateAgent from '@/components/Estate/View/EstateAgent'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import ImageGallery from 'react-image-gallery'
import BuildingAttribute from '@/components/Estate/View/BuildingAttribute'
import EstateFacility from '@/components/Estate/View/EstateFacility'
import AppText from '@/components/common/Typography/Text/AppText'
import { isMobile } from 'react-device-detect'

const EstateDesktopView = ({ estateData, hotEstates, lng }) => {
    const { t } = useTranslation(lng, 'common')

    let estate = estateData

    const building_attributes = Object.entries(estate.building_attributes)
    const estate_facilities = Object.entries(estate.estate_facilities)

    const imagesData = estate.images
    const images = imagesData.map(item => ({
        original: item,
        thumbnail: item,
    }))

    return (
        <StyledEstateDesktopView>
            {isMobile && (
                <ImageGallery
                    items={images}
                    showNav={false}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                />
            )}
            <EstateIntro estate={estate} lng={lng} />
            <ContainerFluid className={'bg-gray pt-6 pb-6'}>
                <ContainerBoxed>
                    <Row gutter={64}>
                        {!isMobile && (
                            <Col xs={18}>
                                <ShareButtons />
                                <ImageGallery
                                    items={images}
                                    showNav={true}
                                    thumbnailPosition={'right'}
                                    showPlayButton={false}
                                />
                            </Col>
                        )}

                        <Col xs={6} className={'pt-3  bg-white'}>
                            <EstateAgent estate={estate} lng={lng} />
                            <Divider className={'mt-2 mb-2'} />
                            <ContactSimpleForm lng={lng} />
                        </Col>
                    </Row>
                </ContainerBoxed>
            </ContainerFluid>
            <ContainerBoxed className={'py-10'}>
                <Row>
                    <Row>
                        <Col xs={24}>
                            <DarkHeading1 className={'mb-5'}>
                                {t('label.building')}
                            </DarkHeading1>
                        </Col>

                        {building_attributes?.map(
                            (attribute, index) =>
                                attribute[1]['value'] && (
                                    <Col xs={24} sm={12} key={index}>
                                        <BuildingAttribute
                                            key={index}
                                            attribute={attribute}
                                        />
                                    </Col>
                                ),
                        )}
                    </Row>
                    <Divider />
                    <Row className="mb-3 mb-sm-0 ">
                        <Col xs={24}>
                            <DarkHeading1 className={'mb-5'}>
                                {t('label.utility.facilities')}
                            </DarkHeading1>
                        </Col>
                        {estate_facilities?.map(
                            (facility, index) =>
                                facility[1]['value'] && (
                                    <Col xs={24} sm={12} key={index}>
                                        <EstateFacility
                                            key={index}
                                            facility={facility}
                                        />
                                    </Col>
                                ),
                        )}
                    </Row>
                    <Divider />
                    {estate.public_text && (
                        <Row className="mb-3 mb-sm-0 ">
                            <Col xs={24}>
                                <DarkHeading1 className={'mb-5'}>
                                    {t('label.menuGeneralInformation')}
                                </DarkHeading1>
                            </Col>
                            <Col xs={24}>
                                <AppText>{estate.public_text}</AppText>
                            </Col>
                        </Row>
                    )}

                    <Row>
                        <Col xs={24} className={'mb-4 mt-4'}>
                            <DarkHeading1>Տեղը քարտեզով</DarkHeading1>
                        </Col>
                        <Col xs={24}>
                            <EstatesGoogleMapSingle marker={estate} />
                        </Col>
                    </Row>
                </Row>
            </ContainerBoxed>

            <ContainerFluid
                className={'bg-gray py-8'}
                id={'estate-loan-anchor'}>
                <ContainerBoxed>
                    <Row>
                        <Col xs={24}>
                            <LoanCalculator
                                estatePrice={estate.price}
                                lng={lng}
                            />
                        </Col>
                    </Row>
                </ContainerBoxed>
            </ContainerFluid>
            <ContainerBoxed className={'py-8'}>
                <Row gutter={[32, 60]}>
                    <Col xs={24}>
                        <DarkHeading2>Վերջին դիտվածներ</DarkHeading2>
                        <EstateCarousel lng={lng} estates={hotEstates} />
                    </Col>
                    <Col xs={24}>
                        <DarkHeading2>Նմատատիպ գույքեր</DarkHeading2>
                        <EstateCarousel lng={lng} estates={hotEstates} />
                    </Col>
                </Row>
            </ContainerBoxed>
        </StyledEstateDesktopView>
    )
}

export default EstateDesktopView
