import styled from 'styled-components'
import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'
import { Col, Divider, Row } from 'antd'
import EstatePrice from '@/components/Estate/EstatePrice'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import EstateViewCount from '@/components/Estate/EstateViews'
import { CompareEstateButton } from '@/components/Estate/CompareEstateButton'
import { LikeEstateButton } from '@/components/Estate/LikeEstateButton'
import AppImage from '@/components/common/Image/AppImage'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { formatNumberPrice } from '@/lib/helper'
import { useTranslation } from '@/app/i18n/client'
import AppText from '@/components/common/Typography/Text/AppText'
import Link from 'next/link'
import DarkParagraph from '@/components/common/Typography/Paragraph/DarkParagraph'

const EstateMobileIntroStyled = styled.div`
    &&& {
        padding: 24px 0 0 0;
    }
`

const EstateMobileIntro = ({ estate, lng }) => {
    const { t } = useTranslation(lng, 'common')
    const formattedPrice = formatNumberPrice(estate.price)
    return (
        <EstateMobileIntroStyled>
            <ContainerBoxed className={'pb-4'}>
                <Row gutter={[16, 16]}>
                    <Col xs={24}>
                        <Row justify={'space-between'} gutter={[24, 24]}>
                            <Col xs={24}>
                                <Row
                                    gutter={16}
                                    align={'middle'}
                                    justify={'space-between'}>
                                    <Col>
                                        <EstatePrice
                                            className={
                                                'text-xl md:text-2xl font-bold'
                                            }>
                                            {formattedPrice}
                                        </EstatePrice>
                                    </Col>
                                    <Col>
                                        <Row align={'middle'} gutter={[16]}>
                                            <Col>
                                                <EstateViewCount
                                                    viewCount={
                                                        estate.visits_count
                                                    }
                                                />
                                            </Col>
                                            <Col>
                                                <CompareEstateButton
                                                    estate={estate}
                                                />
                                            </Col>
                                            <Col>
                                                <LikeEstateButton
                                                    estate={estate}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24}>
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
                    <Col xs={24}>
                        <Divider />
                        <Row align={'middle'} gutter={8} wrap={false}>
                            <Col>
                                <EnvironmentOutlined
                                    style={{
                                        fontSize: 20,
                                    }}
                                />
                            </Col>
                            <Col>
                                <DarkParagraph>
                                    {estate.short_description}
                                </DarkParagraph>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24}>
                        <Row
                            gutter={[16, 16]}
                            justify={'space-between'}
                            align={'middle'}>
                            <Col>
                                <Row gutter={[16, 16]} align={'middle'}>
                                    {estate.room_count && (
                                        <Col
                                            xs={12}
                                            className="flex flex-row  gap-2 items-center">
                                            <AppImage
                                                alt={'Red Group'}
                                                src={
                                                    '/assets/img/svg/doors.svg'
                                                }
                                            />
                                            <AppText>
                                                {estate.room_count}{' '}
                                                {t('common:label.design.room')}
                                            </AppText>
                                        </Col>
                                    )}

                                    {estate.floor && (
                                        <Col
                                            xs={12}
                                            className="flex  gap-2 flex-row">
                                            <AppImage
                                                alt={'Red Group'}
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
                                        <Col
                                            xs={12}
                                            className="flex flex-row gap-4  items-center">
                                            <AppImage
                                                alt={'Red Group'}
                                                src={'/assets/img/svg/area.svg'}
                                            />
                                            <AppText>
                                                {Math.round(estate.area_total)}{' '}
                                                քմ
                                            </AppText>
                                        </Col>
                                    )}

                                    <Col xs={24}>
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
                        </Row>
                    </Col>
                </Row>
            </ContainerBoxed>
        </EstateMobileIntroStyled>
    )
}

export default EstateMobileIntro
