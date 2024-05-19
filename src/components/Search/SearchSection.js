'use client'
import React from 'react'
import MainSearch from '@/components/Filters/main-search'
import { Col } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import Link from 'next/link'
import MainFilter from '@/components/Filters/main-filter'

function SearchSection(props) {
    const { t } = useTranslation(props.lng, 'common')

    const filtersData = props.filtersData.data

    console.log('SearchSection lng')
    console.log(props.lng)

    console.log(filtersData)

    return (
        <ContainerBoxed className={'container -mt-44'}>
            <div className="main-search-tabs">
                <div className="banner-search-wrap">
                    <Col xs={0} sm={24}>
                        <ul className="nav nav-tabs rld-banner-tab overflow-hidden">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    data-toggle="tab"
                                    href="#tabs_1">
                                    {t('button.sale')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#tabs_2">
                                    {t('button.rent')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#tabs_3">
                                    {t('label.title.fee.normal')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="btn btn-main"
                                    href="/estates/map">
                                    {t('label.searchMap')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#tabs_4">
                                    {t('label.search')}
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tabs_1">
                            <div className="pt-4 pl-3 bg-white pr-4">
                                <MainFilter filtersData={filtersData} />
                            </div>
                        </div>
                        {/*<div className="tab-pane fade" id="tabs_2">*/}
                        {/*    <div className="pt-4 pl-3 bg-white">*/}
                        {/*        <MainFilter filtersData={filtersData} />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="tab-pane fade" id="tabs_3">*/}
                        {/*    <div className="pt-4 pl-3 bg-white">*/}
                        {/*        <MainFilter filtersData={filtersData} />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="tab-pane fade" id="tabs_4">
                            <div className="pt-4 pl-3 bg-white pr-4">
                                <MainSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerBoxed>
    )
}

export default SearchSection
