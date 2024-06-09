'use client'
import { Button, Col, Row } from 'antd'
import React from 'react'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import WhiteHeading1 from '@/components/Typography/Heading1/WhiteHeading1'
import EvaluationSimpleForm from '@/components/Filters/evaluation--simple-form'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'

function EstateEstimate({ lng, filtersData }) {
    const router = useRouter()
    const { t } = useTranslation(lng, 'common')
    return (
        <ContainerBoxed>
            <Row>
                <Col xs={0} sm={24}>
                    <div className="estate-estimate flex flex-col justify-end pl-10 pr-10 pb-10">
                        <Row className="mb-3">
                            <Col xs={12}>
                                <WhiteHeading1 className={'mb-2'}>
                                    {t('label.EvaluatHous')}
                                </WhiteHeading1>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col xs={12}>
                                <EvaluationSimpleForm
                                    filtersData={filtersData}
                                    lng={lng}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={24} sm={0}>
                    <div
                        className="estate-estimate flex"
                        style={{
                            height: 'auto',
                            paddingTop: '200px',
                            backgroundPositionX: 'right',
                        }}>
                        <div className="pt-3 pb-3 pl-3 pr-3  bg-main">
                            <h3 className="text-white">
                                {t('label.EvaluatHous')}
                            </h3>
                            <p className="small text-white mb-4">
                                {t('label.evaluation.smallText')}
                            </p>
                            <Button
                                size="large"
                                className={'w-full'}
                                onClick={() => router.push('/estimate')}>
                                {t('label.button.evaluation')}
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default EstateEstimate
