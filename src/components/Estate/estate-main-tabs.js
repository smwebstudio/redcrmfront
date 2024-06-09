'use client'
import { Col, Row } from 'antd'
import React from 'react'
import EstateCarousel from '@/components/Estate/estate-carousel'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { useTranslation } from '@/app/i18n/client'
import AppTabs from '@/components/common/Tabs/AppTabs'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'

function EstateMainTabs(props) {
    const { t } = useTranslation(props.lng, 'common')

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    return (
        <ContainerBoxed className="container  pt-5 mt-5 mb-5">
            <Row className={'main-featured min-h-fit mt-5'}>
                <Col xs={24} sm={12}>
                    <DarkHeading2
                        className={
                            isTabletOrMobile
                                ? 'text-center text-dark  font-bold pb-3'
                                : 'text-dark  font-bold pb-3'
                        }>
                        {t('label.hotOffer')}
                    </DarkHeading2>
                </Col>
                <Col sm={24} xs={24}>
                    <AppTabs
                        defaultActiveKey="1"
                        centered={true}
                        className={isTabletOrMobile ? '' : 'mt-n5'}
                        items={[
                            {
                                label: t('button.sale'),
                                key: '1',
                                children: (
                                    <EstateCarousel
                                        type="sale"
                                        estates={props.saleEstates}
                                    />
                                ),
                            },
                            {
                                label: t('button.rent'),
                                key: '2',
                                children: (
                                    <EstateCarousel
                                        type="rent"
                                        estates={props.rentEstates}
                                    />
                                ),
                            },
                            // {
                            //     label: t('label.title.fee.normal'),
                            //     key: '3',
                            //     children: (
                            //         <EstateCarousel
                            //             type="daily"
                            //             estates={props.dailyEstates}
                            //         />
                            //     ),
                            // },
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={24} className={'text-center sm:text-right'}>
                    <Link href="/estates" className="text-main text-underline">
                        {t('label.seeAll')}
                    </Link>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default EstateMainTabs
