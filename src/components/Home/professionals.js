'use client'
import React, { useState } from 'react'
import Professional from '@/components/Professionals/professional'
import Link from 'next/link'
import { Col, Row } from 'antd'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import { useTranslation } from '@/app/i18n/client'

function Professionals({ bestBrokers, lng }) {
    console.log(lng)
    const { t } = useTranslation(lng, 'common')
    const [professionalsData, setProfessionalsData] = useState(bestBrokers)

    let professionals = professionalsData.data

    return (
        <ContainerBoxed className="mt-10 mb-20">
            <DarkHeading1 className="text-dark font-bold mb-3 text-left">
                {t('label.bestAgents')}
            </DarkHeading1>
            <Row gutter={32}>
                {professionals?.map((item, i) => (
                    <Col xs={24} sm={8} className="" key={i}>
                        <div className={'border border-light'}>
                            <Professional professional={item} key={i} />
                        </div>
                    </Col>
                ))}
                <Col xs={24} className="mt-3 text-right">
                    <Link
                        href="/professionals"
                        className="text-main text-underline">
                        {t('label.seeAll')}
                    </Link>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default Professionals
