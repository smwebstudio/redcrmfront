'use client'
import { Col, Row } from 'antd'
import React from 'react'
import { useRouter } from 'next/navigation'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { useTranslation } from '@/app/i18n/client'
import { RedButton } from '@/components/common/Buttons/RedButton'

export default function EvaluationSimpleForm({ filtersData, lng }) {
    const { t } = useTranslation(lng, 'common')
    const router = useRouter()

    return (
        <>
            <Row className={'bg-white p-3 align-items-center'} gutter={24}>
                <Col xs={24} sm={17}>
                    <SmallParagraph className="small text-white">
                        {t('label.evaluation.smallText')}
                    </SmallParagraph>
                </Col>

                <Col xs={24} sm={7}>
                    <RedButton
                        onClick={() => router.push('/estimate')}
                        className="btn btn-main w-100"
                        size="large">
                        {t('label.button.evaluation')}
                    </RedButton>
                </Col>
            </Row>
        </>
    )
}
