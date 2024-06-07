'use client'
import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ShareButtons from '@/components/Global/share-buttons'
import { Col, Divider, Row, Typography } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import { CheckOutlined } from '@ant-design/icons'
import ContactSimpleForm from '@/components/Forms/contact-simple-form'
import EstateCarousel from '@/components/Estate/estate-carousel'
import EstatesGoogleMapSingle from '@/components/Estate/estatesGoogleMapSingle'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import StyledEstateView from '@/components/Estate/View/style'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import LoanCalculator from '@/components/Estate/LoanCalculator'
import EstateIntro from '@/components/Estate/View/EstateIntro'
import EstateAgent from '@/components/Estate/View/EstateAgent'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import ImageGallery from 'react-image-gallery'

const { Text } = Typography

const EstateView = ({ estateData, hotEstates, lng }) => {
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
        <StyledEstateView>
            <EstateIntro estate={estate} lng={lng} />

            <ContainerFluid className={'bg-gray'}>
                <ContainerBoxed>
                    <div className="bg-gray  pd-bottom-90">
                        <div className="container">
                            <Row gutter={64} className={'pt-5 '}>
                                <Col xs={18}>
                                    <ShareButtons />
                                    <ImageGallery
                                        items={images}
                                        showNav={true}
                                        thumbnailPosition={'right'}
                                        showPlayButton={false}
                                    />
                                </Col>

                                <Col xs={6} className={'pt-3  bg-white'}>
                                    <EstateAgent estate={estate} lng={lng} />

                                    <Divider />
                                    <ContactSimpleForm />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </ContainerBoxed>
            </ContainerFluid>
            <ContainerBoxed>
                <div className="col-lg-9">
                    <Row className="property-news-single-card pt-5 border-bottom-yellow flex flex-row flex-wrap">
                        <Row>
                            <Col xs={24}>
                                <DarkHeading1 className={'mb-10'}>
                                    {t('label.building')}
                                </DarkHeading1>
                            </Col>

                            {building_attributes?.map(
                                (item, i) =>
                                    item[1]['value'] && (
                                        <Col
                                            xs={24}
                                            sm={12}
                                            key={'col-' + item[1]['value']}
                                            className={
                                                'pr-1 flex  items-center font-size-13 mb-3'
                                            }>
                                            <Row className={'w-full'}>
                                                <Col
                                                    xs={12}
                                                    className={
                                                        'flex flex-row items-center'
                                                    }>
                                                    <span
                                                        style={{
                                                            width: '7px',
                                                            height: '7px',
                                                            borderRadius: '50%',
                                                            background:
                                                                '#D8002C',
                                                        }}></span>
                                                    <Text
                                                        type="secondary"
                                                        className={'ml-2'}>
                                                        {item[1]['label']}:
                                                    </Text>
                                                </Col>
                                                <Col xs={12}>
                                                    <Text strong>
                                                        {item[1]['value']}
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    ),
                            )}
                        </Row>
                        <Divider />
                        <Row className="mb-3 mb-sm-0  flex flex-row flex-wrap">
                            <Col xs={24}>
                                <DarkHeading1 className={'mb-10'}>
                                    {t('label.utility.facilities')}
                                </DarkHeading1>
                            </Col>
                            {estate_facilities?.map(
                                (item, i) =>
                                    item[1]['value'] && (
                                        <Col
                                            xs={24}
                                            sm={12}
                                            key={'col-' + i}
                                            className={'flex  items-center'}>
                                            <Row className={'w-full mb-2'}>
                                                <Col xs={12}>
                                                    <Text type="secondary">
                                                        {item[1]['label']}:
                                                    </Text>
                                                </Col>
                                                <Col xs={12}>
                                                    <CheckOutlined />
                                                </Col>
                                            </Row>
                                        </Col>
                                    ),
                            )}
                        </Row>
                        <Divider />
                        {estate.public_text_arm && (
                            <>
                                <DarkHeading1 className={'mb-10'}>
                                    {t('label.menuGeneralInformation')}
                                </DarkHeading1>
                                <Row>{estate.public_text_arm}</Row>
                                <Divider />
                            </>
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
                </div>

                <Row className={'bg-gray p-4'}>
                    <Col xs={24}>
                        <LoanCalculator estatePrice={estate.price} lng={lng} />
                    </Col>
                </Row>

                <Row gutter={32}>
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
        </StyledEstateView>
    )
}

export default EstateView
