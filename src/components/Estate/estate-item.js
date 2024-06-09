'use client'
import React from 'react'
import Link from 'next/link'
import { Col, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import AppImage from '@/components/common/Image/AppImage'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { fallbackImg } from '@/components/Estate/fallbackImg'
import { CompareEstateButton } from '@/components/Estate/CompareEstateButton'
import { LikeEstateButton } from '@/components/Estate/LikeEstateButton'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

export function EstateItem(props) {
    let item = props.item

    return (
        <div className="">
            <div key={item.id} className={' mb-5  cat' + item.contract_type_id}>
                <div className="single-feature">
                    <div className="thumb">
                        <Link
                            href={'/estates/' + item.id}
                            style={{ width: '100%' }}>
                            <AppImage
                                alt={'Red Group'}
                                src={item.image}
                                preview={false}
                                rootClassName={'w-100'}
                                style={{ width: '100%', objectFit: 'cover' }}
                                fallback={fallbackImg}
                                placeholder={
                                    <div
                                        className={
                                            'd-flex justify-content-center align-items-center'
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
                                <h6 className="price">{item.price}</h6>
                            </Col>
                            <Col
                                xs={6}
                                className="flex flex-row gap-4 justify-end">
                                <CompareEstateButton estate={item} />
                                <LikeEstateButton estate={item} />
                            </Col>
                        </Row>

                        <Row>
                            <Col
                                xs={24}
                                className={'flex flex-row items-center'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/location.svg'}
                                />
                                <SmallParagraph className="ml-2">
                                    {item.full_address}
                                </SmallParagraph>
                            </Col>
                        </Row>

                        <ul className="info-list">
                            {item.room_count && (
                                <li className="mr-4">
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/doors.svg'}
                                    />
                                    {item.room_count}
                                </li>
                            )}

                            {item.floor && (
                                <li className="mr-4">
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/floor.svg'}
                                    />
                                    {item.floor} / {item.building_floor_count}
                                </li>
                            )}

                            {item.area_total && (
                                <li className="mr-3">
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/area.svg'}
                                    />
                                    {Math.round(item.area_total)} քմ
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstateItem
