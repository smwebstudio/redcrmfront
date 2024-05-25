'use client'
import React, { useEffect, useState } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import ShareButtons from '@/components/Global/share-buttons'
import {
    Button,
    Col,
    Divider,
    Form,
    Input,
    Modal,
    notification,
    Popover,
    Row,
    Select,
    Typography,
} from 'antd'
import { useTranslation } from '@/app/i18n/client'
import TextArea from 'antd/lib/input/TextArea'
import {
    CheckOutlined,
    EnvironmentOutlined,
    EyeOutlined,
    HeartOutlined,
    InfoCircleFilled,
    SwapOutlined,
} from '@ant-design/icons'
import ContactSimpleForm from '@/components/Forms/contact-simple-form'
import LoanCalculator from '@/components/Forms/loan-calculator'
import EstateCarousel from '@/components/Estate/estate-carousel'
import EstatesGoogleMapSingle from '@/components/Estate/estatesGoogleMapSingle'
import AppImage from '@/components/common/Image/AppImage'
import api from '@/hooks/api'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'

const { Text, Link } = Typography

function EstateDetailsSection(props) {
    const { t } = useTranslation(props.lng, 'common')
    const estateData = props.estateData.data

    useEffect(() => {}, [])

    console.log(estateData)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = async () => {
        console.log('lng')
        console.log(props.lng)
        const estate = await api(props.lng).get('api/estates/' + 61141)
        console.log(estate)
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    let publicUrl = process.env.PUBLIC_URL + '/'
    let estate = estateData
    let imagesData = estate.images

    let building_attributes = []
    let estate_facilities = []
    if (estate) {
        building_attributes = Object.entries(estate.building_attributes)

        console.log(building_attributes)

        estate_facilities = Object.entries(estate.estate_facilities)
    }

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

    const formattedPrice = formatNumber(estate.price)

    const waitTime = (time = 100) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
            }, time)
        })
    }

    const [form] = Form.useForm()

    const onFinish = values => {
        console.log('Success:', values)
    }

    let images = []
    if (imagesData) {
        imagesData.forEach(item => {
            images.push({ original: item, thumbnail: item })
        })
    }

    let currencies = [
        { value: 'AMD', label: 'AMD' },
        { value: 'USD', label: 'USD' },
        { value: 'RUR', label: 'RUR' },
    ]

    const content = <p>{t('common:label.SetAdHotOffersent1_2')}</p>

    function compare(item) {
        let compareEstates =
            JSON.parse(localStorage.getItem('compareEstates')) || []
        const index = compareEstates.indexOf(item.id)

        if (index === -1) {
            compareEstates.push(item.id)
            notification.open({
                message: 'Ավելացվել է համեմատության համար',
                duration: 1,
            })
        } else {
            compareEstates.splice(index, 1)
            notification.open({
                message: 'Հանվել է համեմատելու ցանկից',
                duration: 1,
            })
        }

        localStorage.setItem('compareEstates', JSON.stringify(compareEstates))
    }

    return (
        <ContainerBoxed>
            <div className="property-details-area">
                <Divider />
                <div className="bg-gray  pd-bottom-90">
                    <div className={'container-fluid bg-white pt-5 pb-1'}>
                        <div className={'container'}>
                            <Row className={'mb-4'}>
                                <Col sm={16} className={'mb-4'}>
                                    <Row align={'middle'}>
                                        <Col>
                                            <h3>
                                                <span className="text-main font-bold mr-5 font-size-24">
                                                    {formattedPrice}
                                                </span>
                                            </h3>
                                        </Col>
                                        <Col>
                                            <h3>
                                                <span className="estate-code border p-1 pl-3 pr-3">
                                                    {estate?.code}
                                                </span>
                                                <span className="estate-code p-1 pl-5 pr-5 border-orange text-white bg-orange">
                                                    {t('common:button.sale')}
                                                </span>
                                            </h3>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={8}>
                                    <div
                                        className={
                                            'flex flex-row justify-content-end items-center'
                                        }>
                                        <EyeOutlined
                                            style={{
                                                fontSize: 24,
                                                marginRight: 10,
                                            }}
                                        />{' '}
                                        1362
                                        <SwapOutlined
                                            style={{
                                                fontSize: 24,
                                                marginRight: 30,
                                                marginLeft: 30,
                                            }}
                                            onClick={() => compare(estate)}
                                        />
                                        <HeartOutlined
                                            style={{ fontSize: 24 }}
                                        />
                                    </div>
                                </Col>
                                <Col
                                    sm={24}
                                    className={'flex items-center mb-10 mt-10'}>
                                    <EnvironmentOutlined
                                        style={{
                                            fontSize: 24,
                                            marginRight: 10,
                                        }}
                                    />
                                    {estate.short_description}
                                </Col>

                                <Col sm={20}>
                                    <Row
                                        gutter={32}
                                        className="flex flex-row items-center">
                                        {estate.room_count && (
                                            <Col className="mr-4 flex flex-row">
                                                <AppImage
                                                    alt={'Red Group'}
                                                    className="mr-2"
                                                    src={
                                                        '/assets/img/svg/doors.svg'
                                                    }
                                                />
                                                {estate.room_count}{' '}
                                                {t('common:label.design.room')}
                                            </Col>
                                        )}

                                        {estate.floor && (
                                            <Col className="mr-4 flex flex-row">
                                                <AppImage
                                                    alt={'Red Group'}
                                                    className="mr-2"
                                                    src={
                                                        '/assets/img/svg/floor.svg'
                                                    }
                                                />
                                                {estate.floor} /{' '}
                                                {estate.building_floor_count}
                                            </Col>
                                        )}

                                        {estate.area_total && (
                                            <Col className="mr-3 flex flex-row">
                                                <AppImage
                                                    alt={'Red Group'}
                                                    className="mr-2"
                                                    src={
                                                        '/assets/img/svg/area.svg'
                                                    }
                                                />
                                                {Math.round(estate.area_total)}{' '}
                                                քմ
                                            </Col>
                                        )}
                                    </Row>
                                </Col>
                                <Col sm={4} className={''}>
                                    <Popover content={content}>
                                        <Button
                                            type="primary"
                                            onClick={showModal}
                                            className={'flex items-center'}>
                                            {t('common:label.offerANewPrice')}{' '}
                                            <InfoCircleFilled />
                                        </Button>
                                    </Popover>
                                    <Modal
                                        title={t('common:label.offerANewPrice')}
                                        open={isModalOpen}
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                        width={700}
                                        footer={[
                                            <Col key={'modal'}>
                                                <Button
                                                    key="back"
                                                    onClick={handleCancel}>
                                                    {t('common:button.cancel')}
                                                </Button>
                                                <Button
                                                    form="priceOffer"
                                                    type="primary"
                                                    key="submit"
                                                    htmlType="submit">
                                                    {t('common:button.send')}
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
                                            <Row gutter={24}>
                                                <Col xs={24} sm={12}>
                                                    <Form.Item
                                                        label={t(
                                                            'common:label.firstLastName',
                                                        )}
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
                                                        label={t(
                                                            'common:label.email',
                                                        )}
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
                                                        label={t(
                                                            'common:label.phone',
                                                        )}
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
                                                        label={t(
                                                            'common:label.offeringPrice',
                                                        )}
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
                                                        label={t(
                                                            'common:label.currency',
                                                        )}
                                                        name="offer_currency">
                                                        <Select
                                                            defaultValue={'AMD'}
                                                            options={currencies}
                                                        />
                                                    </Form.Item>
                                                </Col>

                                                <Col xs={24} sm={24}>
                                                    <Form.Item
                                                        label={t(
                                                            'common:label.messageContact',
                                                        )}
                                                        name="message">
                                                        <TextArea />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Modal>
                                </Col>
                            </Row>
                        </div>
                    </div>

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
                                <div className={'text-center mb-2'}>
                                    {estate.contact && (
                                        <Row className={'mb-1'}>
                                            <Col xs={24} sm={8}>
                                                <AppImage
                                                    alt={'Red Group'}
                                                    className={''}
                                                    style={{
                                                        borderRadius: '50%',
                                                        width: 60,
                                                        height: 60,
                                                    }}
                                                    src={
                                                        estate.contact
                                                            .profile_picture
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                xs={24}
                                                sm={16}
                                                className={'text-left'}>
                                                <h5 className="mt-2 ">
                                                    {estate.contact.full_name}
                                                </h5>
                                                <p className="">
                                                    {t('common:label.broker')}
                                                </p>
                                            </Col>
                                            <Col
                                                xs={24}
                                                className={'flex flex-col'}>
                                                <Text className="flex flex-row mb-1 justify-content-start text-dark font-size-12">
                                                    <AppImage
                                                        alt={'Red Group'}
                                                        className="mr-2"
                                                        src={
                                                            publicUrl +
                                                            'assets/img/svg/envelope.svg'
                                                        }
                                                    />
                                                    <span className="align-self-center">
                                                        {estate.contact.email}
                                                    </span>
                                                </Text>
                                                <Text className="flex flex-row justify-content-start text-dark font-size-12">
                                                    <AppImage
                                                        alt={'Red Group'}
                                                        className="mr-2"
                                                        src={
                                                            publicUrl +
                                                            'assets/img/svg/mobile.svg'
                                                        }
                                                    />
                                                    <span className="align-self-center">
                                                        {estate.contact.phone_1}
                                                    </span>
                                                </Text>
                                            </Col>
                                        </Row>
                                    )}
                                </div>

                                <Divider />
                                <ContactSimpleForm />
                            </Col>
                        </Row>
                    </div>
                </div>

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
                        <DarkHeading1 className={'mb-10'}>
                            {t('label.menuGeneralInformation')}
                        </DarkHeading1>
                        <Row>{estate.public_text_arm}</Row>
                        <Divider />

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
                        <LoanCalculator price={estate.price} />
                    </Col>
                </Row>

                <Row gutter={32} className="main-featured min-h-fit ">
                    <Col xs={24}>
                        <h5 className="mb-5 text-dark text-left font-bold mt-20">
                            Վերջին դիտվածներ
                        </h5>
                        <EstateCarousel type="hot" />
                    </Col>

                    <Col xs={24}>
                        <h5 className="mb-5 text-dark text-left font-bold mt-20">
                            Նմատատիպ գույքեր
                        </h5>
                        <EstateCarousel type="hot" />
                    </Col>
                </Row>
            </div>
        </ContainerBoxed>
    )
}

export default EstateDetailsSection
