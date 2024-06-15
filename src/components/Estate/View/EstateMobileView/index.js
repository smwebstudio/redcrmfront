'use client'
import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Col, Collapse, Divider, Row } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import EstateCarousel from '@/components/Estate/EstateCarousel'
import EstatesGoogleMapSingle from '@/components/Estate/estatesGoogleMapSingle'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import StyledEstateMobileView from '@/components/Estate/View/style'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import LoanCalculator from '@/components/Estate/LoanCalculator'
import EstateAgent from '@/components/Estate/View/EstateAgent'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import ImageGallery from 'react-image-gallery'
import BuildingAttribute from '@/components/Estate/View/BuildingAttribute'
import EstateFacility from '@/components/Estate/View/EstateFacility'
import AppText from '@/components/common/Typography/Text/AppText'
import EstateMobileIntro from '@/components/Estate/View/EstateMobileView/EstateMobileIntro'
import PriceOffer from '@/components/Estate/PriceOffer'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'

const EstateMobileView = ({ estateData, hotEstates, lng }) => {
    const { t } = useTranslation(lng, 'common')

    let estate = estateData

    const building_attributes = Object.entries(estate.building_attributes)
    const estate_facilities = Object.entries(estate.estate_facilities)

    const imagesData = estate.images
    const images = imagesData.map(item => ({
        original: item,
        thumbnail: item,
    }))

    const descriptionItems = [
        {
            key: '1',
            label: <DarkHeading3>{t('label.building')}</DarkHeading3>,
            children: (
                <Row>
                    <Col xs={24}>
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
                    </Col>
                </Row>
            ),
        },
        {
            key: '2',
            label: <DarkHeading3>{t('label.utility.facilities')}</DarkHeading3>,
            children: (
                <Row>
                    <Col xs={24}>
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
                    </Col>
                </Row>
            ),
        },
        {
            key: '3',
            label: (
                <DarkHeading3 id={'estate-loan-anchor'}>
                    {t('label.menuGeneralInformation')}
                </DarkHeading3>
            ),
            children: (
                <Row className="mb-3 mb-sm-0 ">
                    {estate.public_text && (
                        <Col xs={24}>
                            <AppText>{estate.public_text}</AppText>
                        </Col>
                    )}
                </Row>
            ),
        },
        {
            key: '4',
            label: <DarkHeading3>Տեղը քարտեզով</DarkHeading3>,
            children: <EstatesGoogleMapSingle marker={estate} />,
        },
        {
            key: '5',
            label: <DarkHeading3>{t('label.mortgage')}</DarkHeading3>,
            children: <LoanCalculator estatePrice={estate.price} lng={lng} />,
        },
    ]

    return (
        <StyledEstateMobileView>
            <ImageGallery
                items={images}
                showNav={false}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
            />
            <EstateMobileIntro estate={estate} lng={lng} />
            <Divider />
            <ContainerFluid className={'bg-gray '}>
                <ContainerBoxed>
                    <Row gutter={[24, 24]}>
                        <Col xs={24} className={'pt-3  bg-white'}>
                            <EstateAgent estate={estate} lng={lng} />
                        </Col>
                        <Col xs={24} className={'pb-6'}>
                            <PriceOffer />
                        </Col>
                    </Row>
                </ContainerBoxed>
            </ContainerFluid>
            <ContainerBoxed className={'py-10'}>
                <Row>
                    <Col xs={24}>
                        <Collapse
                            ghost={true}
                            defaultActiveKey={1}
                            items={descriptionItems}
                            expandIconPosition={'end'}
                        />
                    </Col>
                </Row>
            </ContainerBoxed>

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
        </StyledEstateMobileView>
    )
}

export default EstateMobileView
