'use client'
import React from 'react'
import Link from 'next/link'
import { Col, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import AppImage from '@/components/common/Image/AppImage'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { fallbackImg } from '@/components/Estate/fallbackImg'
import StyledEstateItemGrid from '@/components/Estate/List/EstateItemGrid/style'
import { toggleEstateComparison } from '@/lib/helper'

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
                            href={'estates/' + estate.id}
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
                                className="text-right justify-end content-end flex flex-row">
                                <span
                                    className={'cursor-pointer'}
                                    key={'compare_' + estate.id}
                                    onClick={() =>
                                        toggleEstateComparison(estate)
                                    }>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/compare.svg'}
                                    />
                                </span>
                                <span
                                    className={'ml-4 cursor-pointer'}
                                    key={'add_to_favorites_' + estate.id}>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/favorites.svg'}
                                    />
                                </span>
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

                        <ul className="info-list">
                            {estate.room_count && (
                                <li className="mr-4">
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/doors.svg'}
                                    />
                                    {estate.room_count}
                                </li>
                            )}

                            {estate.floor && (
                                <li className="mr-4">
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/floor.svg'}
                                    />
                                    {estate.floor} /{' '}
                                    {estate.building_floor_count}
                                </li>
                            )}

                            {estate.area_total && (
                                <li className="mr-3">
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/area.svg'}
                                    />
                                    {Math.round(estate.area_total)} քմ
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </StyledEstateItemGrid>
    )
}

export default EstateItemGrid
