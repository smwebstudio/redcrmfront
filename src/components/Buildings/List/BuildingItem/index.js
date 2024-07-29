import React from 'react'
import { Badge, Col, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import AppImage from '@/components/common/Image/AppImage'
import { fallbackImg } from '@/components/Estate/fallbackImg'
import StyledBuildingItem from '@/components/Buildings/List/BuildingItem/style'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import FontIcon from '@/components/common/Icons/FontIcon'
import { useTranslation } from '@/app/i18n/client'
import { isWithinLast90Days } from '@/lib/helper'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

export function BuildingItem({ lng, building }) {
    const { t } = useTranslation(lng, 'common')
    return (
        <StyledBuildingItem>
            <Row>
                <Col xs={24}>
                    {building.top === 1 && (
                        <Badge.Ribbon
                            text={
                                <FontIcon
                                    icon={faStar}
                                    size={'xs'}
                                    color={'#FFFFFF'}
                                />
                            }
                            showZero={false}
                            className={'z-30'}
                            color={'red'}></Badge.Ribbon>
                    )}

                    {isWithinLast90Days(building.created_at) && (
                        <Badge.Ribbon
                            text={t('label.newItem')}
                            showZero={false}
                            className={'z-30'}
                            placement={'start'}
                            color={'orange'}></Badge.Ribbon>
                    )}
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
