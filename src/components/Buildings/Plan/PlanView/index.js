import React from 'react'
import { Col, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import RedText from '@/components/Typography/text/RedText'
import AppImage from '@/components/common/Image/AppImage'
import { formatNumberPrice } from '@/lib/helper'
import { fallbackImg } from '@/components/Estate/fallbackImg'
import DarkParagraph from '@/components/common/Typography/Paragraph/DarkParagraph'
import { useTranslation } from '@/app/i18n/client'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

const PlanView = ({ lng, plan }) => {
    const { t } = useTranslation(lng, 'common')
    return (
        <div
            key={plan.id}
            className={' mb-10 border-solid  border-gray-200 border relative'}>
            {plan.status === 'sold' && (
                <div>
                    <span
                        className={'text-white'}
                        style={{
                            zIndex: '109',
                            fontWeight: 'bold',
                            width: 'auto',
                            height: 'auto',
                            padding: '8px 16px',
                            objectFit: 'none',
                            position: 'absolute',
                            left: '0px',
                            top: '0px',
                            background: '#D8002C',
                        }}>
                        ՎԱՃԱՌՎԱԾ
                    </span>
                    <AppImage
                        alt={'Red Group'}
                        src={'/assets/developers/saled.png'}
                        style={{
                            zIndex: '99',
                            width: '199px',
                            height: '77px',
                            minHeight: '50px',
                            objectFit: 'none',
                            position: 'absolute',
                            left: '0px',
                            top: '20px',
                        }}
                    />
                </div>
            )}
            <div className="single-feature mb-0">
                <div className="thumb relative">
                    <AppImage
                        alt={'Red Group'}
                        src={plan.image}
                        preview={false}
                        rootClassName={'w-100'}
                        style={{ width: '100%', objectFit: 'cover' }}
                        fallback={fallbackImg}
                        placeholder={
                            <div
                                className={
                                    'd-flex justify-content-center align-plans-center'
                                }>
                                <Spin indicator={antIcon} />
                            </div>
                        }
                    />
                </div>
                <div className="details bg-transparent border-solid  border-gray-200 border-t">
                    <Row className="mb-3">
                        <Col xs={12}>
                            <h6>
                                <RedText>
                                    {formatNumberPrice(plan.price)} AMD
                                </RedText>{' '}
                                {plan.price_monthly}
                            </h6>
                        </Col>
                    </Row>

                    <Row gutter={8} align={'middle'} wrap={false}>
                        <Col>
                            <AppImage
                                alt={'Red Group'}
                                src={'/assets/img/svg/location.svg'}
                            />
                        </Col>
                        <Col>
                            <DarkParagraph>
                                {plan?.block && (
                                    <>
                                        {' '}
                                        {plan.block} {t('developers.block')} |
                                    </>
                                )}

                                {plan?.entry && (
                                    <>
                                        {' '}
                                        {plan.entry} {t('developers.entry')} |
                                    </>
                                )}

                                {plan?.floor && (
                                    <>
                                        {' '}
                                        {plan.floor} {t('developers.floor')} |
                                    </>
                                )}

                                {plan?.area && (
                                    <>
                                        {' '}
                                        {plan.area} {t('developers.area_unit')}{' '}
                                        |
                                    </>
                                )}

                                {plan?.rooms && (
                                    <>
                                        {' '}
                                        {plan.rooms} {t('developers.room')}
                                    </>
                                )}
                            </DarkParagraph>
                        </Col>
                    </Row>

                    <Row gutter={16} className={'mt-4'}>
                        {plan.rooms && (
                            <Col>
                                <Row gutter={4} align={'middle'}>
                                    <Col>
                                        <AppImage
                                            alt={'Red Group'}
                                            src={'/assets/img/svg/doors.svg'}
                                        />
                                    </Col>
                                    <Col> {plan.rooms}</Col>
                                </Row>
                            </Col>
                        )}

                        {plan.floor && (
                            <Col>
                                <Row gutter={4} align={'middle'}>
                                    <Col>
                                        <AppImage
                                            alt={'Red Group'}
                                            src={'/assets/img/svg/floor.svg'}
                                        />
                                    </Col>
                                    <Col> {plan.floor}</Col>
                                </Row>
                            </Col>
                        )}

                        {plan.area && (
                            <Col>
                                <Row gutter={4} align={'middle'}>
                                    <Col>
                                        <AppImage
                                            alt={'Red Group'}
                                            src={'/assets/img/svg/area.svg'}
                                        />
                                    </Col>
                                    <Col>
                                        {' '}
                                        {Math.round(plan.area)}{' '}
                                        {t('developers.area_unit')}
                                    </Col>
                                </Row>
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default PlanView
