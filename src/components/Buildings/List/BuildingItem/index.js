import React from 'react'
import { Col, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import AppImage from '@/components/common/Image/AppImage'
import { fallbackImg } from '@/components/Estate/fallbackImg'
import StyledBuildingItem from '@/components/Buildings/List/BuildingItem/style'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

export function BuildingItem({ lng, building }) {
    return (
        <StyledBuildingItem>
            <Row>
                <Col xs={24}>
                    <AppImage
                        alt={'Red Group'}
                        src={building.image}
                        preview={false}
                        rootClassName={'w-100'}
                        style={{
                            width: '100%',
                            height: '275px',
                            objectFit: 'cover',
                        }}
                        fallback={fallbackImg}
                        placeholder={
                            <div
                                className={
                                    'flex justify-content-center align-items-center'
                                }>
                                <Spin indicator={antIcon} />
                            </div>
                        }
                    />
                </Col>
                <Col xs={24}>
                    <Row className={'p-4'}>
                        <Col xs={24}>
                            <DarkHeading3 style={{ minHeight: '50px' }}>
                                {building.title}
                            </DarkHeading3>
                        </Col>
                        <Col xs={24}>
                            <Row align={'middle'} gutter={8} wrap={false}>
                                <Col>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/location.svg'}
                                    />
                                </Col>
                                <Col>
                                    <SmallParagraph>
                                        {building.address}
                                    </SmallParagraph>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </StyledBuildingItem>
    )
}

export default BuildingItem
