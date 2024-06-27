'use client'
import React from 'react'
import Link from 'next/link'
import { Col, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import AppImage from '@/components/common/Image/AppImage'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { fallbackImg } from '@/components/Estate/fallbackImg'
import StyledEstateItemGrid from '@/components/Estate/List/EstateItemGrid/style'
import { CompareEstateButton } from '@/components/Estate/CompareEstateButton'
import { LikeEstateButton } from '@/components/Estate/LikeEstateButton'
import DarkText from '@/components/common/Typography/Text/DarkText'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

export function EstateItemGrid({ estate }) {
    return (
        <StyledEstateItemGrid>
            <div
                key={estate.id}
                className={' mb-5  cat' + estate.contract_type_id}>
                <div className="single-feature">
                    <div className="thumb">
                        <Link
                            href={'/estates/' + estate.id}
                            style={{ width: '100%', display: 'block' }}>
                            <AppImage
                                alt={'Red Group'}
                                src={estate.image}
                                preview={false}
                                rootClassName={'w-100'}
                                style={{ width: '100%', objectFit: 'cover' }}
                                fallback={fallbackImg}
                                placeholder={
                                    <div
                                        className={
                                            'flex justify-center items-center'
                                        }>
                                        <Spin indicator={antIcon} />
                                    </div>
                                }
                            />
                        </Link>
                    </div>
                    <div className="details">
                        <Row className="mb-3">
                            <Col xs={18}>
                                <h6 className="price">{estate.price}</h6>
                            </Col>
                            <Col
                                xs={6}
                                className="flex flex-row gap-4 justify-end">
                                <CompareEstateButton estate={estate} />
                                <LikeEstateButton estate={estate} />
                            </Col>
                        </Row>

                        <Row>
                            <Col
                                xs={24}
                                className={'flex flex-row estates-center'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/location.svg'}
                                />
                                <SmallParagraph className="ml-2">
                                    {estate.full_address}
                                </SmallParagraph>
                            </Col>
                        </Row>

                        <Row gutter={12} className={'mt-4'}>
                            {estate.room_count && (
                                <Col className={'flex items-center'}>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/doors.svg'}
                                    />
                                    <DarkText className={'ml-2'}>
                                        {estate.room_count}
                                    </DarkText>
                                </Col>
                            )}
                            {estate.floor && (
                                <Col className={'flex items-center'}>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/floor.svg'}
                                    />
                                    <DarkText className={'ml-2'}>
                                        {estate.floor} /{' '}
                                        {estate.building_floor_count}
                                    </DarkText>
                                </Col>
                            )}
                            {estate.area_total && (
                                <Col className={'flex items-center'}>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/area.svg'}
                                    />
                                    <DarkText className={'ml-2'}>
                                        {Math.round(estate.area_total)} քմ
                                    </DarkText>
                                </Col>
                            )}
                        </Row>
                    </div>
                </div>
            </div>
        </StyledEstateItemGrid>
    )
}

export default EstateItemGrid
