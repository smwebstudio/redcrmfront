'use client'
import React, { useState } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import { Col, Collapse, Row, Select } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import { EnvironmentOutlined, EyeOutlined } from '@ant-design/icons'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import PreviewImage from '@/components/common/Image/PreviewImage'
import StyledBuildingView from '@/components/Buildings/BuildingView/style'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import FontIcon from '@/components/common/Icons/FontIcon'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const { Option } = Select

export const BuildingMobileView = ({ lng, building }) => {
    const { t } = useTranslation(lng, 'common')

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

    const collapseItems = [
        {
            key: '1',
            label: <DarkHeading3>Ընդհանուր</DarkHeading3>,
            children: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: building.project.content[0].description,
                    }}
                    className={'project_short_description'}
                />
            ),
        },
        {
            key: '2',
            label: <DarkHeading3>Կառուցապատման ընթացք</DarkHeading3>,
            children: (
                <Row gutter={8}>
                    {imagesData
                        .filter(img => img.block_id === 'bottom_gallery_img')
                        .map((img, idx) => (
                            <Col key={'col-' + idx}>
                                <PreviewImage
                                    alt={'Red Group'}
                                    key={idx}
                                    width={100}
                                    height={100}
                                    src={img.image}
                                />
                            </Col>
                        ))}
                </Row>
            ),
        },
    ]

    return (
        <StyledBuildingView>
            <ContainerFluid>
                <Row className={'mb-4'}>
                    <Col xs={24}>
                        <ImageGallery
                            items={images}
                            showNav={true}
                            showThumbnails={false}
                            showPlayButton={false}
                        />
                    </Col>
                </Row>
            </ContainerFluid>
            <ContainerBoxed>
                <Row className={'mb-4'}>
                    <Col xs={24} className={'mb-4'}>
                        <DarkHeading1>{building.project.title}</DarkHeading1>
                    </Col>
                    <Col xs={24}>
                        <Row
                            align={'middle'}
                            justify={'start'}
                            wrap={false}
                            className={'mb-4'}>
                            <Col>
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
                            </Col>
                            <Col>
                                <span
                                    className={
                                        'ml-6 bg-orange-400 text-white rounded-md p-2 font-size-12'
                                    }>
                                    Եկամտահարկի վերադարձ
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} className={'flex align-center mt-4'}>
                        <EnvironmentOutlined
                            style={{
                                fontSize: 24,
                                marginRight: 10,
                            }}
                        />{' '}
                        {building.project.address}
                    </Col>
                </Row>
            </ContainerBoxed>

            <ContainerBoxed>
                <Row gutter={64} className={'pt-5 '}>
                    <Col xs={24} className={'pt-3  bg-white'}>
                        <div className={'text-left mb-2'}>
                            <Row className={'mb-1'}>
                                <Col xs={24} sm={24}>
                                    {building.project.content[0]
                                        .videoDescList && (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    building.project.content[0]
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
                    <Col xs={24}>
                        <Collapse
                            items={collapseItems}
                            expandIcon={({ isActive }) => (
                                <FontIcon
                                    icon={
                                        isActive ? faChevronUp : faChevronDown
                                    }
                                    size={'2x'}
                                    color={'#D8002C'}
                                />
                            )}
                            expandIconPosition={'end'}
                        />
                    </Col>
                </Row>
            </ContainerBoxed>
        </StyledBuildingView>
    )
}

export default BuildingMobileView
