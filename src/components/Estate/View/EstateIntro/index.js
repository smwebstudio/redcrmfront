import styled from 'styled-components'
import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import EstatePrice from '@/components/Estate/EstatePrice'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import EstateViewCount from '@/components/Estate/EstateViews'
import { CompareEstateButton } from '@/components/Estate/CompareEstateButton'
import { LikeEstateButton } from '@/components/Estate/LikeEstateButton'
import AppImage from '@/components/common/Image/AppImage'
import PriceOffer from '@/components/Estate/PriceOffer'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { formatNumberPrice } from '@/lib/helper'
import { useTranslation } from '@/app/i18n/client'
import AppText from '@/components/common/Typography/Text/AppText'
import Link from 'next/link'

const EstateIntroStyled = styled.div`
    &&& {
    }
`

const EstateIntro = ({ estate, lng }) => {
    const { t } = useTranslation(lng, 'common')
    const formattedPrice = formatNumberPrice(estate.price)
    return (
        <EstateIntroStyled>
            <ContainerBoxed className={'pb-4'}>
                <Row gutter={[16, 16]}>
                    <Col xs={24}>
                        <Row justify={'space-between'}>
                            <Col>
                                <Row gutter={16} align={'middle'}>
                                    <Col>
                                        <EstatePrice
                                            className={'text-2xl font-bold'}>
                                            {formattedPrice}
                                        </EstatePrice>
                                    </Col>
                                    <Col>
                                        <DarkHeading3>
                                            <span className="estate-code border p-2 pl-3 pr-3">
                                                {estate.code}
                                            </span>
                                            <span className="estate-code p-2 pl-5 pr-5 border-orange text-white bg-orange">
                                                {t('common:button.sale')}
                                            </span>
                                        </DarkHeading3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row align={'middle'}>
                                    <Col>
                                        <EstateViewCount
                                            viewCount={estate.visits_count}
                                        />
                                    </Col>
                                    <Col>
                                        <CompareEstateButton estate={estate} />
                                    </Col>
                                    <Col>
                                        <LikeEstateButton estate={estate} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24}>
                        <EnvironmentOutlined
                            style={{
                                fontSize: 24,
                                marginRight: 10,
                            }}
                        />
                        {estate.short_description}
                    </Col>
                    <Col xs={24}>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col>
                                <Row gutter={32} align={'middle'}>
                                    {estate.room_count && (
                                        <Col className="flex flex-row gap-4 items-center">
                                            <AppImage
                                                alt={'Red Group'}
                                                src={
                                                    '/assets/img/svg/doors.svg'
                                                }
                                            />
                                            <span>
                                                {estate.room_count}{' '}
                                                {t('common:label.design.room')}
                                            </span>
                                        </Col>
                                    )}

                                    {estate.floor && (
                                        <Col className="mr-4 flex flex-row">
                                            <AppImage
                                                alt={'Red Group'}
                                                className="mr-2"
                                                src={
                                                    '/assets/img/svg/floor.svg'
                                                }
                                            />
                                            <AppText>
                                                {estate.floor} /
                                                {estate.building_floor_count}
                                            </AppText>
                                        </Col>
                                    )}

                                    {estate.area_total && (
                                        <Col className="flex flex-row  gap-4 items-center">
                                            <AppImage
                                                alt={'Red Group'}
                                                className="mr-2"
                                                src={'/assets/img/svg/area.svg'}
                                            />
                                            <AppText>
                                                {Math.round(estate.area_total)}{' '}
                                                քմ
                                            </AppText>
                                        </Col>
                                    )}

                                    <Col>
                                        <Link
                                            href={'#estate-loan-anchor'}
                                            className="flex flex-row gap-4 items-center">
                                            <AppImage
                                                alt={'Red Group'}
                                                src={
                                                    '/assets/img/svg/hypotec-calc.svg'
                                                }
                                            />
                                            <AppText className={'text-red-400'}>
                                                {t('label.mortgage')}
                                            </AppText>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <PriceOffer />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContainerBoxed>
        </EstateIntroStyled>
    )
}

export default EstateIntro
