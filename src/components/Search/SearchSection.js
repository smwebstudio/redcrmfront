'use client'
import React, { useState } from 'react'
import MainSearch from '@/components/Filters/main-search'
import { Col, Tabs } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import MainFilter from '@/components/Filters/main-filter'
import TabPane from 'antd/es/tabs/TabPane'
import { useRouter } from 'next/navigation'

function SearchSection(props) {
    const { t } = useTranslation(props.lng, 'common')
    const [activeKey, setActiveKey] = useState('1')
    const filtersData = props.filtersData
    const router = useRouter()
    const filters = [
        {
            key: '1',
            label: t('button.sale'),
            children: <MainFilter filtersData={filtersData} contractType={1} />,
        },
        {
            key: '2',
            label: t('button.rent'),
            children: <MainFilter filtersData={filtersData} contractType={2} />,
        },
        {
            key: '3',
            label: t('label.title.fee.normal'),
            children: <MainFilter filtersData={filtersData} contractType={3} />,
        },
        {
            key: 'map',
            label: t('label.searchMap'),
            children: 'Content of Tab Pane 3',
        },
        {
            key: '5',
            label: t('label.search'),
            children: <MainSearch />,
        },
    ]

    const changeTab = activeKey => {
        if (activeKey === 'map') {
            router.push('/estates')
            return
        }

        setActiveKey(activeKey)
    }

    return (
        <ContainerBoxed className={'container -mt-44'}>
            <div className="main-search-tabs">
                <div className="banner-search-wrap">
                    <Col xs={24} sm={24}>
                        <Tabs
                            type="card"
                            activeKey={activeKey}
                            defaultActiveKey={activeKey}
                            tabBarGutter={4}
                            onChange={changeTab}>
                            {filters.map(filter => (
                                <TabPane
                                    tab={filter.label}
                                    key={filter.key}
                                    className={'test'}>
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

export default SearchSection
