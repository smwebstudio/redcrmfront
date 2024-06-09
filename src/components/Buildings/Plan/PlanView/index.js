import React from 'react'
import { Col, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import RedText from '@/components/Typography/text/RedText'
import AppImage from '@/components/common/Image/AppImage'
import { formatNumberPrice, toggleEstateComparison } from '@/lib/helper'
import { fallbackImg } from '@/components/Estate/fallbackImg'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

const PlanView = ({ lng, plan }) => {
    return (
        <div
            key={plan.id}
            className={' mb-10 border-solid  border-gray-200 border'}>
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
                            {/*<del>{plan.old_price}</del>*/}
                        </Col>
                        <Col
                            xs={12}
                            className="text-right justify-end content-end flex flex-row">
                            <span
                                className={'cursor-pointer'}
                                key={'compare_' + plan.id}
                                onClick={() => toggleEstateComparison(plan)}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/compare.svg'}
                                />
                            </span>
                            <span
                                className={'ml-4 cursor-pointer'}
                                key={'add_to_favorites_' + plan.id}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/favorites.svg'}
                                />
                            </span>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24}>
                            <p className="address flex flex-row items-center ">
                                <span>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/location.svg'}
                                    />
                                </span>
                                <span className="ml-2">{plan.title}</span>
                            </p>
                        </Col>
                    </Row>

                    <ul className="info-list">
                        {plan.rooms && (
                            <li className="mr-4">
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/doors.svg'}
                                />
                                {plan.rooms}
                            </li>
                        )}

                        {plan.floor && (
                            <li className="mr-4">
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/floor.svg'}
                                />
                                {plan.floor}
                            </li>
                        )}

                        {plan.area && (
                            <li className="mr-3">
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/area.svg'}
                                />
                                {Math.round(plan.area)} քմ
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlanView
