import { Col, Row, Skeleton } from 'antd'
import React from 'react'

export const FullListSkeleton = () => {
    return (
        <Row className={'mt-5 mb-5'}>
            <Col lg={8} md={12} sm={24} xs={24} className={'pr-3 pl-3'}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </Col>

            <Col lg={8} md={12} sm={24} xs={24} className={'pr-3 pl-3'}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </Col>

            <Col lg={8} md={12} sm={24} xs={24} className={'pr-3 pl-3'}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </Col>
            <Col lg={8} md={12} sm={24} xs={24} className={'pr-3 pl-3'}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </Col>
            <Col lg={8} md={12} sm={24} xs={24} className={'pr-3 pl-3'}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </Col>
            <Col lg={8} md={12} sm={24} xs={24} className={'pr-3 pl-3'}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </Col>
        </Row>
    )
}
