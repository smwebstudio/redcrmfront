'use client'
import React from 'react'
import StyledDeveloperFilterSection from '@/components/Developers/DeveloperFilterSection/style'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { Col, Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import DeveloperFilters from '@/components/Developers/DeveloperFilters'

export const DeveloperFilterSection = ({ filtersData, lng, queryData }) => {
    const { t } = useTranslation(lng, 'common')
    const filters = [
        {
            key: '1',
            label: t('label.buildDevelopers'),
            children: <DeveloperFilters filtersData={filtersData} lng={lng} />,
        },
    ]

    return (
        <StyledDeveloperFilterSection>
            <ContainerBoxed className={'mt-4'}>
                <Col xs={24} sm={24}>
                    <Tabs type="card" defaultActiveKey={1}>
                        {filters.map(filter => (
                            <TabPane tab={filter.label} key={filter.key}>
                                {filter.children}
                            </TabPane>
                        ))}
                    </Tabs>
                </Col>
            </ContainerBoxed>
        </StyledDeveloperFilterSection>
    )
}

export default DeveloperFilterSection
