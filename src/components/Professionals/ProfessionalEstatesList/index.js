'use client'
import React from 'react'
import { Col, Row } from 'antd'
import EstateItemList from '@/components/Estate/List/EstateItemList'

export function ProfessionalEstatesList({ lng, estates }) {
    return (
        <div className="mt-4">
            <Row gutter={[24, 0]}>
                {estates.map((estate, index) => (
                    <Col span={24} key={'col-' + index}>
                        <EstateItemList estate={estate} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ProfessionalEstatesList
