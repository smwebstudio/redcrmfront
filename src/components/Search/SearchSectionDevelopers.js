'use client'
import React from 'react'
import { Col, Tabs } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import MainFilterBuilding from '@/components/Filters/MainFilterBuilding'
import TabPane from 'antd/es/tabs/TabPane'

function SearchSectionDevelopers({ filtersData, lng, queryData }) {
    const { t } = useTranslation(lng, 'common')
    const filters = [
        {
            key: '1',
            label: t('label.apartment'),
            children: (
                <MainFilterBuilding filtersData={filtersData} lng={lng} />
            ),
        },
        {
            key: '2',
            label: t('label.house'),
            children: (
                <MainFilterBuilding filtersData={filtersData} lng={lng} />
            ),
        },
        {
            key: '3',
            label: 'Թաունհաուս',
            children: (
                <MainFilterBuilding filtersData={filtersData} lng={lng} />
            ),
        },
        {
            key: '4',
            label: t('label.commercial'),
            children: (
                <MainFilterBuilding filtersData={filtersData} lng={lng} />
            ),
        },
    ]

    return (
        <ContainerBoxed className={'container -mt-44'}>
            <div className="main-search-tabs">
                <div className="banner-search-wrap">
                    <Col xs={24} sm={24}>
                        <Tabs type="card" defaultActiveKey={1} tabBarGutter={4}>
                            {filters.map(filter => (
                                <TabPane tab={filter.label} key={filter.key}>
                                    {filter.children}
                                </TabPane>
                            ))}
                        </Tabs>
                    </Col>
                </div>
            </div>
        </ContainerBoxed>
    )
}

export default SearchSectionDevelopers
