'use client'
import React from 'react'
import Link from 'next/link'
import { Col, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import AppImage from '@/components/common/Image/AppImage'
import { fallbackImg } from '@/components/Estate/fallbackImg'
import EstatePrice from '@/components/Estate/EstatePrice'
import AppText from '@/components/common/Typography/Text/AppText'
import DarkText from '@/components/common/Typography/Text/DarkText'
import { formatNumberPrice } from '@/lib/helper'
import { CompareEstateButton } from '@/components/Estate/CompareEstateButton'
import { LikeEstateButton } from '@/components/Estate/LikeEstateButton'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

export function EstateItemList({ estate }) {
    function sliceStringMax(str) {
        // Ensure the string doesn't exceed the maxLength
        if (str && str.length > 200) {
            return str.slice(0, 200)
        }
        return str
    }

    const formattedPrice = formatNumberPrice(estate.price)

    return (
        <Row
            key={estate.id}
            gutter={[0, 0]}
            className={'mb-8 border border-gray-300'}>
            <Col xs={24} md={8} className={'flex items-center pr-8'}>
                <Link href={'estates/' + estate.id} style={{ width: '100%' }}>
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
                                    'flex justify-content-center align-estates-center'
                                }>
                                <Spin indicator={antIcon} />
                            </div>
                        }
                    />
                </Link>
            </Col>
            <Col xs={24} md={16} className={'p-4'}>
                <Row className="mb-6">
                    <Col xs={18}>
                        <EstatePrice className="price">
                            {formattedPrice}
                        </EstatePrice>
                    </Col>
                    <Col xs={6} className="flex flex-row gap-4 justify-end">
                        <CompareEstateButton estate={estate} />
                        <LikeEstateButton estate={estate} />
                    </Col>
                </Row>
                <Row className={'mb-4'}>
                    <Col xs={24}>
                        <AppText>
                            {sliceStringMax(estate.public_text)}...
                        </AppText>
                    </Col>
                </Row>
                <Row className={'mb-4'}>
                    <Col xs={24} className={'flex flex-row estates-center'}>
                        <AppImage
                            alt={'Red Group'}
                            src={'/assets/img/svg/location.svg'}
                        />
                        <DarkText className="ml-2">
                            {estate.full_address}
                        </DarkText>
                    </Col>
                </Row>

                <Row gutter={48}>
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
                                {estate.floor} / {estate.building_floor_count}
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
            </Col>
        </Row>
    )
}

export default EstateItemList
