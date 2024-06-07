'use client'
import React, { useState } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import { Checkbox, Col, Divider, Form, Row, Select } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import { EnvironmentOutlined, EyeOutlined } from '@ant-design/icons'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import RedText from '@/components/Typography/text/RedText'
import PlanItem from '@/components/Buildings/PlanItem'
import AppImage from '@/components/common/Image/AppImage'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import LoanCalculator from '@/components/Estate/LoanCalculator'

const { Option } = Select

function BuildingDetails(props) {
    const { t } = useTranslation(props.lng, 'common')
    const developerData = props.developerData

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

    let imagesData = developerData.images

    let building_attributes = []
    if (developerData) {
        building_attributes = Object.entries(developerData.building_attributes)
    }

    const waitTime = (time = 100) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
            }, time)
        })
    }

    const [form] = Form.useForm()

    const onFinish = values => {}

    const renderVideo = item => {
        return (
            <div className="video-wrapper">
                <iframe
                    width="100%"
                    height="510px"
                    src={item.embedUrl}
                    frameBorder="0"
                    allowFullScreen
                    title="ex"
                />
            </div>
        )
    }

    let images = []
    if (imagesData) {
        imagesData.forEach(item => {
            if (item === '/assets/img/theview/video.png') {
                images.push({
                    original: item,
                    thumbnail: item,
                    embedUrl: 'https://www.youtube.com/embed/FuVbRdhCZLk',
                    renderItem: renderVideo.bind(this),
                })
            } else {
                images.push({ original: item, thumbnail: item })
            }
        })
    }

    const plans = {
        data: [
            {
                id: 66,
                saled: 1,
                price: '50.000 $',
                price_monthly: ' / ամսական 465 $',
                area_total: 45,
                building_floor_count: 7,
                floor: 3,
                room_count: 4,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/1.png',
            },
            {
                id: 66,
                price: '160.000 $',
                price_monthly: ' / ամսական 465 $',
                area_total: 72,
                building_floor_count: 7,
                floor: 3,
                room_count: 4,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/2.png',
            },
            {
                id: 66,
                price: '500.000 $',
                price_monthly: ' / ամսական 465 $',
                area_total: 86,
                building_floor_count: 7,
                floor: 3,
                room_count: 4,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/3.png',
            },
            {
                id: 66,
                saled: 1,
                price: '230.000 $',
                price_monthly: ' / ամսական 465 $',
                area_total: 86,
                building_floor_count: 7,
                floor: 3,
                room_count: 3,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/4.png',
            },
            {
                id: 66,
                price: '130.000 $',
                price_monthly: ' / ամսական 465 $',
                area_total: 86,
                building_floor_count: 7,
                floor: 3,
                room_count: 1,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/5.png',
            },
            {
                id: 66,
                saled: 1,
                price: '110.000 $',
                price_monthly: ' / ամսական 465 $',
                area_total: 86,
                building_floor_count: 7,
                floor: 3,
                room_count: 5,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/1.png',
            },
            {
                id: 66,
                price: '58.000 $',
                price_monthly: ' / ամսական 465 $',
                area_total: 250,
                building_floor_count: 7,
                floor: 3,
                room_count: 2,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/2.png',
            },
            {
                id: 66,
                price: '12.000 $',
                price_monthly: ' / ամսական 465 $',
                area_total: 45,
                building_floor_count: 7,
                floor: 3,
                room_count: 3,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/3.png',
            },
            {
                id: 66,
                price: '75.000 $',
                saled: 1,
                price_monthly: ' / ամսական 465 $',
                area_total: 102,
                building_floor_count: 7,
                floor: 3,
                room_count: 4,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/4.png',
            },
            {
                id: 66,
                saled: 1,
                price: '80.000 $',
                price_monthly: ' / ամսական 465 $',
                area_total: 145,
                building_floor_count: 7,
                floor: 3,
                room_count: 4,
                full_address: '1-ին մ-շ | 1-ին մուտք ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/img/theview/plans/5.png',
            },
        ],
        links: {
            first:
                'http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=1',
            last:
                'http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=321',
            prev: null,
            next:
                'http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=2',
        },
    }

    const [sortOption, setSortOption] = useState('price-asc')
    const [filterArea, setFilterArea] = useState('')
    const [filterRoomCount, setFilterRoomCount] = useState('')
    const [hideSaled, setHideSaled] = useState(false)

    const handleSortChange = value => {
        setSortOption(value)
    }

    const sortedPlans = [...plans.data].sort((a, b) => {
        const [property, order] = sortOption.split('-')
        const valA = parseInt(a[property])
        const valB = parseInt(b[property])

        if (order === 'asc') {
            return valA - valB
        } else if (order === 'desc') {
            return valB - valA
        }
        return 0
    })

    const handleHideSaledChange = e => {
        setHideSaled(e.target.checked)
    }

    const handleAreaChange = value => {
        setFilterArea(value)
    }

    const handleRoomCountChange = value => {
        setFilterRoomCount(value)
    }

    const areaOptions = [...new Set(sortedPlans.map(item => item.area_total))]
    const roomCountOptions = [
        ...new Set(sortedPlans.map(item => item.room_count)),
    ]

    const filteredPlans = sortedPlans.filter(item => {
        const areaMatch = filterArea
            ? item.area_total === parseInt(filterArea)
            : true
        const roomCountMatch = filterRoomCount
            ? item.room_count === parseInt(filterRoomCount)
            : true
        const saledMatch = hideSaled ? item.saled !== 1 : true
        return areaMatch && roomCountMatch && saledMatch
    })

    return (
        <ContainerBoxed>
            <div className="property-details-area">
                <div className="bg-gray  pd-bottom-90">
                    <div className={'container-fluid bg-white pt-5 pb-1'}>
                        <div className={'container'}>
                            <Row className={'mb-4'}>
                                <Col sm={16} className={'mb-4'}>
                                    <h3>
                                        <span className="font-bold mr-5 font-size-24">
                                            The View Պրեմիում դասի բնակելի
                                            համալիր
                                        </span>
                                    </h3>
                                </Col>
                                <Col sm={8}>
                                    <div
                                        className={
                                            'flex justify-end align-center'
                                        }>
                                        <EyeOutlined
                                            style={{
                                                fontSize: 24,
                                                marginRight: 10,
                                            }}
                                        />{' '}
                                        <span className={'p-2'}>1362</span>
                                        <span
                                            className={
                                                'ml-6 bg-orange-400 text-white rounded-md p-2'
                                            }>
                                            Եկամտահարկի վերադարձ
                                        </span>
                                    </div>
                                </Col>
                                <Col
                                    sm={24}
                                    className={'flex align-center mb-4'}>
                                    <EnvironmentOutlined
                                        style={{
                                            fontSize: 24,
                                            marginRight: 10,
                                        }}
                                    />{' '}
                                    {developerData.full_address}
                                </Col>

                                <Col sm={24}>
                                    <Row
                                        gutter={32}
                                        className="flex flex-row align-center mt-2 mb-2">
                                        <Col className="flex flex-row">
                                            <AppImage
                                                alt={'Red Group'}
                                                src={
                                                    '/assets/img/svg/developer.svg'
                                                }
                                            />
                                            <span className="ml-2">
                                                Կառուցապատող: «Օմեգա Պլյուս» ՍՊԸ
                                            </span>
                                        </Col>

                                        <Col className="flex flex-row">
                                            <AppImage
                                                alt={'Red Group'}
                                                src={
                                                    '/assets/img/svg/builder.svg'
                                                }
                                            />
                                            <span className="ml-2">
                                                Շինարար: «Միդիս Քնսթրաքշն» ՍՊԸ
                                            </span>
                                        </Col>

                                        <Col
                                            className="flex flex-row"
                                            key={'col-area-total'}>
                                            <AppImage
                                                alt={'Red Group'}
                                                src={
                                                    '/assets/img/svg/controller.svg'
                                                }
                                            />
                                            <span className="ml-2">
                                                Նախագծի կառավարում: «1SQ» ՍՊԸ
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="container">
                        <Row gutter={64} className={'pt-5 '}>
                            <Col xs={18}>
                                <ImageGallery
                                    items={images}
                                    showNav={true}
                                    thumbnailPosition={'right'}
                                    showPlayButton={false}
                                />
                            </Col>

                            <Col xs={6} className={'pt-3  bg-white'}>
                                <div className={'text-left mb-2'}>
                                    <Row className={'mb-1'}>
                                        <Col xs={24} sm={24}>
                                            <DarkHeading3>
                                                <AppImage
                                                    alt={'Red Group'}
                                                    preview={false}
                                                    src={
                                                        '/assets/img/svg/redCalendar.svg'
                                                    }
                                                />
                                                <span className={'ml-4'}>
                                                    {' '}
                                                    Շինարարության մեկնարկ
                                                </span>
                                            </DarkHeading3>
                                            <SmallParagraph>
                                                01.12.2021թ
                                            </SmallParagraph>
                                            <DarkHeading3 className={'mt-4'}>
                                                Շինարարության ավարտ
                                            </DarkHeading3>
                                            <SmallParagraph>
                                                12.12.2024թ.
                                            </SmallParagraph>
                                            <Divider />
                                            <DarkHeading3>
                                                <AppImage
                                                    alt={'Red Group'}
                                                    preview={false}
                                                    src={
                                                        '/assets/img/svg/redBank.svg'
                                                    }
                                                />
                                                <span className={'ml-4'}>
                                                    Գործընկեր բանկեր{' '}
                                                </span>
                                            </DarkHeading3>
                                            <SmallParagraph>
                                                Արցախ բանկ, ID Bank, AEB
                                            </SmallParagraph>
                                            <Divider />
                                            <DarkHeading3>
                                                <AppImage
                                                    alt={'Red Group'}
                                                    preview={false}
                                                    src={
                                                        '/assets/img/svg/redSale.svg'
                                                    }
                                                />
                                                <span className={'ml-4'}>
                                                    Վաճառքի բացառիկ իրավունք{' '}
                                                </span>
                                            </DarkHeading3>
                                            <SmallParagraph>
                                                «ՌԷԴ Ինվեսթ Գրուպ» ՍՊԸ
                                            </SmallParagraph>
                                            <Divider />
                                            <DarkHeading3>
                                                <AppImage
                                                    alt={'Red Group'}
                                                    preview={false}
                                                    src={
                                                        '/assets/img/svg/mobile.svg'
                                                    }
                                                />
                                                <span className={'ml-4'}>
                                                    Կարեն Ավետիսյան
                                                </span>
                                            </DarkHeading3>
                                            <SmallParagraph>
                                                Վաճառքի պատասխանատու
                                            </SmallParagraph>
                                            <SmallParagraph>
                                                <RedText>
                                                    +37495 908 909
                                                </RedText>
                                            </SmallParagraph>
                                            <Divider />
                                            <DarkHeading3>
                                                <AppImage
                                                    alt={'Red Group'}
                                                    preview={false}
                                                    src={
                                                        '/assets/img/svg/mobile.svg'
                                                    }
                                                />
                                                <span className={'ml-4'}>
                                                    Վաճառքի գրասենյակ
                                                </span>
                                            </DarkHeading3>
                                            <SmallParagraph>
                                                <RedText>
                                                    +37495 908 909
                                                </RedText>
                                            </SmallParagraph>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <Row className="property-news-single-card pt-5 border-bottom-yellow">
                            <Row>
                                <Col xs={24}>
                                    <DarkHeading2 className={'mt-10'}>
                                        Ընդհանուր
                                    </DarkHeading2>
                                </Col>

                                <Col xs={24}>
                                    {developerData.public_text_arm}
                                </Col>
                                <Col xs={24}>
                                    <DarkHeading2 className={'mt-10'}>
                                        Կառուցապատման ընթացք
                                    </DarkHeading2>
                                </Col>
                                <Col xs={24} className={'flex flex-row'}>
                                    {imagesData.map((img, idx) => (
                                        <div
                                            className={'mr-4'}
                                            key={'col-' + idx}>
                                            <AppImage
                                                alt={'Red Group'}
                                                key={idx}
                                                width={100}
                                                height={100}
                                                src={img}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Divider />
                                <Col xs={24}>
                                    <DarkHeading2 className={'mt-10 mb-10'}>
                                        Հատակագծեր
                                    </DarkHeading2>
                                </Col>
                                <Col
                                    xs={24}
                                    className={
                                        'flex flex-row justify-content-between items-center mb-10'
                                    }>
                                    <div>
                                        <Checkbox
                                            checked={hideSaled}
                                            onChange={handleHideSaledChange}
                                            style={{ marginLeft: '1rem' }}>
                                            <SmallParagraph>
                                                Թաքցնել վաճառվածները
                                            </SmallParagraph>
                                        </Checkbox>

                                        <Select
                                            defaultValue=""
                                            onChange={handleAreaChange}
                                            style={{
                                                width: 200,
                                                marginLeft: '1rem',
                                            }}>
                                            <Option value="">Մակերես</Option>
                                            {areaOptions.map((area, index) => (
                                                <Option
                                                    key={index}
                                                    value={area}>
                                                    {area}
                                                </Option>
                                            ))}
                                        </Select>
                                        <Select
                                            defaultValue=""
                                            onChange={handleRoomCountChange}
                                            style={{
                                                width: 200,
                                                marginLeft: '1rem',
                                            }}>
                                            <Option value="">Սենյակներ</Option>
                                            {roomCountOptions.map(
                                                (roomCount, index) => (
                                                    <Option
                                                        key={index}
                                                        value={roomCount}>
                                                        {roomCount} սենյակ
                                                    </Option>
                                                ),
                                            )}
                                        </Select>
                                    </div>
                                    <div
                                        className={
                                            'flex flex-row justify-end items-center'
                                        }>
                                        <SmallParagraph className={'mr-4 mb-0'}>
                                            Դասավորել ըստ։{' '}
                                        </SmallParagraph>
                                        <Select
                                            defaultValue="price-asc"
                                            onChange={handleSortChange}
                                            style={{ width: 200 }}>
                                            <Option value="price-asc">
                                                Գնի աճման
                                            </Option>
                                            <Option value="price-desc">
                                                Գնի նվազման
                                            </Option>
                                            <Option value="area_total-asc">
                                                Մակերեսի աճման
                                            </Option>
                                            <Option value="area_total-desc">
                                                Մակերեսի նվազման
                                            </Option>
                                        </Select>
                                    </div>
                                </Col>
                                <Col xs={24}>
                                    <Row gutter={32}>
                                        {filteredPlans.map((item, index) => (
                                            <Col span={8} key={'col-' + index}>
                                                <PlanItem
                                                    key={index}
                                                    item={item}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                </div>

                <div className="bg-gray  pd-10 pt-10">
                    <div className={'container'}>
                        <LoanCalculator price={developerData.price} lng={lng} />
                    </div>
                </div>
            </div>
        </ContainerBoxed>
    )
}

export default BuildingDetails
