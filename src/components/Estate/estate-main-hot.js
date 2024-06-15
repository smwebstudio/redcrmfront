'use client'
import { Col, Row } from 'antd'
import React from 'react'
import Link from 'next/link'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { useTranslation } from '@/app/i18n/client'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import EstateCarousel from '@/components/Estate/EstateCarousel'

function EstateMainHot({ hotEstates, lng }) {
    const { t } = useTranslation(lng, 'common')
    return (
        <ContainerBoxed className={'pt-10 pb-10'}>
            <Row className="row main-featured min-h-fit">
                <Col xs={24}>
                    <DarkHeading2 className="mb-5 text-dark text-left font-bold">
                        {t('label.urgentAd')}
                    </DarkHeading2>
                    <EstateCarousel type="hot" estates={hotEstates} />
                </Col>
                <Col xs={24} className={'text-right'}>
                    <Link href="/estates" className="text-main text-underline">
                        {t('label.seeAll')}
                    </Link>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default EstateMainHot
