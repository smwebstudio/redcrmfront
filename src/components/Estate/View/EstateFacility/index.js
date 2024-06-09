'use client'
import { Col, Row } from 'antd'
import React from 'react'
import { useTranslation } from '@/app/i18n/client'
import StyledEstateFacility from '@/components/Estate/View/EstateFacility/style'
import AppText from '@/components/common/Typography/Text/AppText'
import { CheckOutlined } from '@ant-design/icons'

export const EstateFacility = ({ lng, facility }) => {
    const { t } = useTranslation(lng, 'common')

    return (
        <StyledEstateFacility>
            <Row>
                <Col xs={12}>
                    <AppText type="secondary">{facility[1]['label']}:</AppText>
                </Col>
                <Col xs={12}>
                    <CheckOutlined />
                </Col>
            </Row>
        </StyledEstateFacility>
    )
}
export default EstateFacility
