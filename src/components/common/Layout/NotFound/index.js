'use client'
import React from 'react'
import Link from 'next/link'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { Col, Row } from 'antd'
import AppImage from '@/components/common/Image/AppImage'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'

export const NotFound = () => {
    return (
        <ContainerBoxed className="container text-center">
            <Row justify={'center'}>
                <Col xs={24} className={'text-center m-12'}>
                    <AppImage src={'/assets/img/svg/404.svg'} alt="404" />
                </Col>
                <Col xs={24}>
                    <DarkHeading1>Ցավոք էջը չի գտնվել</DarkHeading1>
                </Col>
                <Col xs={24}>
                    <Link href="/">Գլխավոր</Link>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default NotFound
