import React from 'react'
import Link from 'next/link'
import { Col, Image, Row } from 'antd'

export function EstateLargeItem(props) {
    let item = props.item

    return (
        <div className="">
            <div key={item.id} className={' mb-5  cat' + item.contract_type_id}>
                <Row className="large-estate single-feature">
                    <Col span={6} className="thumb">
                        <Link href={'/estates/' + item.id}>
                            <Image
                                alt={'Red Group'}
                                className={'estate-image'}
                                src={item.image}
                            />
                        </Link>
                    </Col>
                    <Col span={18} className="details">
                        <div className="row mb-3">
                            <div className="col-6">
                                <h6 className="price">{item.price}</h6>
                                <del>{item.old_price}</del>
                            </div>
                            <div className="col-6 text-right justify-content-end d-flex">
                                <Link className="p-3" href="/">
                                    <Image
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/compare.svg'}
                                    />
                                </Link>
                                <Link className="p-3" href="/">
                                    <Image
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/favorites.svg'}
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <p className="address d-flex">
                                    <span>
                                        <Image
                                            alt={'Red Group'}
                                            src={'/assets/img/svg/location.svg'}
                                        />
                                    </span>
                                    <span className="ml-2">
                                        {item.full_address}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <ul className="info-list">
                            <li className="mr-4">
                                <Image
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/doors.svg'}
                                />
                                {item.floor}
                            </li>
                            <li className="mr-4">
                                <Image
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/floor.svg'}
                                />
                                {item.floor} / {item.building_floor_count}
                            </li>
                            <li className="mr-3">
                                <Image
                                    alt={'Red Group'}
                                    src={'/assets/img/svg/area.svg'}
                                />
                                {Math.round(item.area_total)} քմ
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default EstateLargeItem
