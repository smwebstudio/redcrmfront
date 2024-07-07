'use client'
import React, { useState } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import { Checkbox, Col, Collapse, Divider, Row, Select } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import { EnvironmentOutlined, EyeOutlined } from '@ant-design/icons'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import LoanCalculator from '@/components/Estate/LoanCalculator'
import PreviewImage from '@/components/common/Image/PreviewImage'
import StyledBuildingView from '@/components/Buildings/BuildingView/style'
import PlanView from '@/components/Buildings/Plan/PlanView'

const { Option } = Select

function BuildingDetails({ lng, building }) {
    const { t } = useTranslation(lng, 'common')

    console.log('building')
    console.log(building)
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

    let imagesData = building.files

    let building_attributes = []
    // if (building) {
    //     building_attributes = Object.entries(building.building_attributes)
    // }

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
        images = imagesData
            .filter(image => image.block_id === 'top_gallery_img') // Adjust this condition as needed to filter your imagesData
            .map(image => {
                if (image.image === '/assets/img/theview/video.png') {
                    return {
                        original: image.image,
                        thumbnail: image.image,
                        embedUrl: 'https://www.youtube.com/embed/FuVbRdhCZLk',
                        renderItem: renderVideo.bind(this),
                    }
                } else {
                    return {
                        original: image.image,
                        thumbnail: image.small_image,
                    }
                }
            })
    }

    if (building.project.content[0].descriptionVideo) {
        images.unshift({
            original: '/assets/img/theview/video.png',
            thumbnail: '/assets/img/theview/video.png',
            embedUrl: building.project.content[0].descriptionVideo,
            renderItem: renderVideo.bind(this),
        })
    }

    const plans = building.products

    const [sortOption, setSortOption] = useState('price-asc')
    const [filterArea, setFilterArea] = useState('')
    const [filterRoomCount, setFilterRoomCount] = useState('')
    const [hideSaled, setHideSaled] = useState(false)

    const handleSortChange = value => {
        setSortOption(value)
    }

    const sortedPlans = [...plans].sort((a, b) => {
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

    const areaOptions = [...new Set(sortedPlans.map(item => item.area))]
    const roomCountOptions = [...new Set(sortedPlans.map(item => item.rooms))]

    const filteredPlans = sortedPlans.filter(item => {
        const areaMatch = filterArea ? item.area === parseInt(filterArea) : true
        const roomCountMatch = filterRoomCount
            ? item.rooms === parseInt(filterRoomCount)
            : true
        const saledMatch = hideSaled ? item.status !== 'sold' : true
        return areaMatch && roomCountMatch && saledMatch
    })

    function sliceStringMax(str) {
        // Ensure the string doesn't exceed the maxLength
        if (str && str.length > 500) {
            return str.slice(0, 500)
        }
        return str
    }

    const showGeneralInfoItem = [
        {
            key: '1',
            label: (
                <div
                    dangerouslySetInnerHTML={{
                        __html:
                            sliceStringMax(
                                building.project.content[0].description,
                            ) + '...',
                    }}
                    className={'project_short_description'}
                />
            ),
            children: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: building.project.content[0].description,
                    }}
                    className={'project_short_description'}
                />
            ),
        },
    ]

    return (
        <StyledBuildingView>
            <ContainerBoxed>
                <div className="property-details-area">
                    <div className="bg-gray  pd-bottom-90">
                        <div className={'container-fluid bg-white pt-5 pb-1'}>
                            <div className={'container'}>
                                <Row className={'mb-4'}>
                                    <Col sm={16} className={'mb-4'}>
                                        <h3>
                                            <span className="font-bold mr-5 font-size-24">
                                                {building.project.title}
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
                                            <span className={'p-2'}>
                                                {' '}
                                                {building.project.viewed}
                                            </span>
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
                                        {building.project.address}
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
                                                {building.project.content[0]
                                                    .videoDescList && (
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                building.project
                                                                    .content[0]
                                                                    .videoDescList,
                                                        }}
                                                        className={
                                                            'project_short_description'
                                                        }
                                                    />
                                                )}
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
                                        {building.project.content[0]
                                            .description && (
                                            <Collapse
                                                items={showGeneralInfoItem}
                                                expandIconPosition={'end'}
                                                ghost
                                            />
                                        )}
                                    </Col>
                                    <Col xs={24}>
                                        <DarkHeading2 className={'mt-10'}>
                                            Կառուցապատման ընթացք
                                        </DarkHeading2>
                                    </Col>
                                    <Col xs={24} className={'flex flex-row'}>
                                        {imagesData
                                            .filter(
                                                img =>
                                                    img.block_id ===
                                                    'bottom_gallery_img',
                                            )
                                            .map((img, idx) => (
                                                <div
                                                    className={'mr-4'}
                                                    key={'col-' + idx}>
                                                    <PreviewImage
                                                        alt={'Red Group'}
                                                        key={idx}
                                                        width={100}
                                                        height={100}
                                                        src={img.image}
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
                                    <Col xs={24} className={'mb-6'}>
                                        <Row
                                            gutter={0}
                                            justify={'space-between'}>
                                            <Col>
                                                <Row align={'middle'}>
                                                    <Col>
                                                        <Checkbox
                                                            checked={hideSaled}
                                                            onChange={
                                                                handleHideSaledChange
                                                            }
                                                            style={{
                                                                marginLeft:
                                                                    '1rem',
                                                            }}>
                                                            <SmallParagraph>
                                                                Թաքցնել
                                                                վաճառվածները
                                                            </SmallParagraph>
                                                        </Checkbox>
                                                    </Col>
                                                    <Col>
                                                        <Select
                                                            defaultValue=""
                                                            onChange={
                                                                handleAreaChange
                                                            }
                                                            style={{
                                                                width: 200,
                                                                marginLeft:
                                                                    '1rem',
                                                            }}>
                                                            <Option value="">
                                                                Մակերես
                                                            </Option>
                                                            {areaOptions.map(
                                                                (
                                                                    area,
                                                                    index,
                                                                ) => (
                                                                    <Option
                                                                        key={
                                                                            index
                                                                        }
                                                                        value={
                                                                            area
                                                                        }>
                                                                        {area}
                                                                    </Option>
                                                                ),
                                                            )}
                                                        </Select>
                                                    </Col>
                                                    <Col>
                                                        <Select
                                                            defaultValue=""
                                                            onChange={
                                                                handleRoomCountChange
                                                            }
                                                            style={{
                                                                width: 200,
                                                                marginLeft:
                                                                    '1rem',
                                                            }}>
                                                            <Option value="">
                                                                Սենյակներ
                                                            </Option>
                                                            {roomCountOptions.map(
                                                                (
                                                                    roomCount,
                                                                    index,
                                                                ) => (
                                                                    <Option
                                                                        key={
                                                                            index
                                                                        }
                                                                        value={
                                                                            roomCount
                                                                        }>
                                                                        {
                                                                            roomCount
                                                                        }{' '}
                                                                        սենյակ
                                                                    </Option>
                                                                ),
                                                            )}
                                                        </Select>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col>
                                                <div
                                                    className={
                                                        'flex flex-row justify-end items-center'
                                                    }>
                                                    <SmallParagraph
                                                        className={'mr-4 mb-0'}>
                                                        Դասավորել ըստ։{' '}
                                                    </SmallParagraph>
                                                    <Select
                                                        defaultValue="price-asc"
                                                        onChange={
                                                            handleSortChange
                                                        }
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
                                        </Row>
                                    </Col>
                                    <Col xs={24}>
                                        <Row gutter={32}>
                                            {filteredPlans.map(
                                                (plan, index) => (
                                                    <Col
                                                        xs={24}
                                                        md={8}
                                                        key={'col-' + index}>
                                                        <PlanView
                                                            key={index}
                                                            plan={plan}
                                                        />
                                                    </Col>
                                                ),
                                            )}
                                        </Row>
                                    </Col>
                                </Row>
                            </Row>
                        </div>
                    </div>

                    <div className="bg-gray  pd-10 pt-10">
                        <div className={'container'}>
                            <LoanCalculator price={building.price} lng={lng} />
                        </div>
                    </div>
                </div>
            </ContainerBoxed>
        </StyledBuildingView>
    )
}

export default BuildingDetails
