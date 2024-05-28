import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiURL } from '@/constants'
import AppImage from '@/components/common/Image/AppImage'

export function EstateItems(props) {
    const changeEstatesFoundCount = props.changeEstatesFoundCount
    const [estatesData, setEstatesData] = useState([])
    useEffect(() => {
        fetch(apiURL + 'api/estates/' + props.type)
            .then(res => res.json())
            .then(data => {
                setEstatesData(data)
                changeEstatesFoundCount(data.meta.total)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return (
        <>
            {estatesData.data?.map((item, i) => (
                <div
                    key={i}
                    className={
                        'col-lg-4 col-sm-6 mb-5 cat' + item.contract_type_id
                    }>
                    <div className="single-feature">
                        <div className="thumb">
                            <Link href={'estates/' + item.id}>
                                <AppImage alt={'Red Group'} src={item.image} />
                            </Link>
                        </div>
                        <div className="details">
                            <div className="row mb-3">
                                <div className="col-6">
                                    <h6 className="price">{item.price}</h6>
                                    <del>{item.old_price}</del>
                                </div>
                                <div className="col-6 text-right">
                                    <Link className="p-3" href="/">
                                        <AppImage
                                            alt={'Red Group'}
                                            src={'/assets/img/svg/compare.svg'}
                                        />
                                    </Link>
                                    <Link className="p-3" href="/">
                                        <AppImage
                                            alt={'Red Group'}
                                            src={
                                                '/assets/img/svg/favorites.svg'
                                            }
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-9">
                                    <p className="address d-flex">
                                        <span>
                                            <AppImage
                                                alt={'Red Group'}
                                                src={
                                                    '/assets/img/svg/location.svg'
                                                }
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
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/doors.svg'}
                                    />
                                    {item.floor}
                                </li>
                                {item.floor && (
                                    <li className="mr-4">
                                        <AppImage
                                            alt={'Red Group'}
                                            src={'/assets/img/svg/floor.svg'}
                                        />
                                        {item.floor} /{' '}
                                        {item.building_floor_count}
                                    </li>
                                )}
                                <li className="mr-3">
                                    <AppImage
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/area.svg'}
                                    />
                                    {Math.round(item.area_total)} քմ
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default EstateItems
