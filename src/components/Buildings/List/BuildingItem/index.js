import React from 'react'
import Link from 'next/link'
import { Col, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import AppImage from '@/components/common/Image/AppImage'
import { fallbackImg } from '@/components/Estate/fallbackImg'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

export function BuildingItem({ lng, building }) {
    return (
        <div className="">
            <div key={building.id} className={'mb-5'}>
                <div className="single-feature">
                    <div className="thumb">
                        <Link
                            href={'developers/' + building.id}
                            style={{ width: '100%' }}>
                            <AppImage
                                alt={'Red Group'}
                                src={building.image}
                                preview={false}
                                rootClassName={'w-100'}
                                style={{
                                    width: '400px',
                                    height: '275px',
                                    objectFit: 'cover',
                                }}
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
                        <Row>
                            <Col xs={24}>
                                <DarkHeading3 style={{ minHeight: '50px' }}>
                                    {building.title}
                                </DarkHeading3>
                            </Col>
                            <Col xs={24}>
                                <SmallParagraph className="address flex mt-2">
                                    <span>
                                        <AppImage
                                            alt={'Red Group'}
                                            src={'/assets/img/svg/location.svg'}
                                        />
                                    </span>
                                    <SmallParagraph className="ml-2">
                                        {building.address}
                                    </SmallParagraph>
                                </SmallParagraph>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildingItem
