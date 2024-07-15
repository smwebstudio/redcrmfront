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
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'

const { Option } = Select

export const BuildingDesktopView = ({ lng, building }) => {
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

    const [visibleCount, setVisibleCount] = useState(9)

    const renderVideo = item => {
        return (
            <div className="video-wrapper">
                <iframe
                    width="100%"
                    height="510px"
                    src={item.embedUrl}
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

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 9)
    }

    const visiblePlans = filteredPlans.slice(0, visibleCount)

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
            <ContainerBoxed>
                <Row className={'mb-4'}>
                    <Col sm={16} className={'mb-4'}>
                        <DarkHeading1>{building.project.title}</DarkHeading1>
                    </Col>
                    <Col sm={8}>
                        <div className={'flex justify-end align-center'}>
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
                    <Col sm={24} className={'flex align-center mb-4'}>
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
            <ContainerBoxed className={'bg-gray pd-bottom-10'}>
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
                </Row>
            </ContainerBoxed>
            <ContainerBoxed>
                <Row className={'my-10'}>
                    <Col xs={24}>
                        <Collapse
                            items={showGeneralInfoItem}
                            expandIconPosition={'end'}
                            ghost
                        />
                    </Col>
                </Row>
            </ContainerBoxed>
        </StyledBuildingView>
    )
}

export default BuildingDesktopView
