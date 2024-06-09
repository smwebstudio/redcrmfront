'use client'
import { Col, Row } from 'antd'
import React from 'react'
import { useTranslation } from '@/app/i18n/client'
import StyledBuildingAttribute from '@/components/Estate/View/BuildingAttribute/style'
import AppText from '@/components/common/Typography/Text/AppText'

export const BuildingAttribute = ({ lng, attribute }) => {
    const { t } = useTranslation(lng, 'common')

    return (
        <StyledBuildingAttribute>
            <Row className={'w-full'}>
                <Col xs={12} className={'flex flex-row items-center'}>
                    <AppText className={'list-dot'}></AppText>
                    <AppText type="secondary" className={'ml-2'}>
                        {attribute[1]['label']}:
                    </AppText>
                </Col>
                <Col xs={12}>
                    <AppText strong>{attribute[1]['value']}</AppText>
                </Col>
            </Row>
        </StyledBuildingAttribute>
    )
}
export default BuildingAttribute
