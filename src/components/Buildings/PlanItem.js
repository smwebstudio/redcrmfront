import React from 'react'
import { Col, notification, Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import RedText from '@/components/Typography/text/RedText'
import AppImage from '@/components/common/Image/AppImage'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

export function PlanItem(props) {
    let item = props.item

    function compare(item) {
        let compareEstates =
            JSON.parse(localStorage.getItem('compareEstates')) || []
        const index = compareEstates.indexOf(item.id)

        if (index === -1) {
            compareEstates.push(item.id)
            notification.open({
                message: 'Ավելացվել է համեմատության համար',
                duration: 1,
            })
        } else {
            compareEstates.splice(index, 1)
            notification.open({
                message: 'Հանվել է համեմատելու ցանկից',
                duration: 1,
            })
        }

        localStorage.setItem('compareEstates', JSON.stringify(compareEstates))
    }

    return (
        <div
            key={item.id}
            className={' mb-10 border-solid  border-gray-200 border'}>
            {item.saled === 1 && (
                <div>
                    <span
                        className={'text-white'}
                        style={{
                            zIndex: '109',
                            fontWeight: 'bold',
                            width: '199px',
                            height: '77px',
                            minHeight: '50px',
                            objectFit: 'none',
                            position: 'absolute',
                            left: '40px',
                            top: '40px',
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
                        src={item.image}
                        preview={false}
                        rootClassName={'w-100'}
                        style={{ width: '100%', objectFit: 'cover' }}
                        fallback="data:image/png;base64,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"
                        placeholder={
                            <div
                                className={
                                    'd-flex justify-content-center align-items-center'
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
                                <RedText>{item.price}</RedText>{' '}
                                {item.price_monthly}
                            </h6>
                            {/*<del>{item.old_price}</del>*/}
                        </Col>
                        <Col
                            xs={12}
                            className="text-right justify-end content-end flex flex-row">
                            <span
                                className={'cursor-pointer'}
                                key={'compare_' + item.id}
                                onClick={() => compare(item)}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/compare.svg'}
                                />
                            </span>
                            <span
                                className={'ml-4 cursor-pointer'}
                                key={'add_to_favorites_' + item.id}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/favorites.svg'}
                                />
                            </span>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24}>
                            <p className="address flex flex-row ">
                                <span>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/location.svg'}
                                    />
                                </span>
                                <span className="ml-2">
                                    {item.full_address}
                                </span>
                            </p>
                        </Col>
                    </Row>

                    <ul className="info-list">
                        {item.room_count && (
                            <li className="mr-4">
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/doors.svg'}
                                />
                                {item.room_count}
                            </li>
                        )}

                        {item.floor && (
                            <li className="mr-4">
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/floor.svg'}
                                />
                                {item.floor} / {item.building_floor_count}
                            </li>
                        )}

                        {item.area_total && (
                            <li className="mr-3">
                                <AppImage
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/area.svg'}
                                />
                                {Math.round(item.area_total)} քմ
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlanItem
