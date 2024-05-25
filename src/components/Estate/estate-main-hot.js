'use client'
import { Col, Row } from 'antd'
import React from 'react'
import EstateCarousel from '@/components/Estate/estate-carousel'
import Link from 'next/link'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'

function EstateMainHot({ hotEstates }) {
    return (
        <ContainerBoxed className={'pt-10 pb-10'}>
            <Row className="row main-featured min-h-fit">
                <Col xs={24}>
                    <DarkHeading3 className="mb-5 text-dark text-left font-bold">
                        Շտապ առաջարկներ
                    </DarkHeading3>
                    <EstateCarousel type="hot" estates={hotEstates} />
                </Col>
                <Col xs={24} className={'text-right'}>
                    <Link href="/estates" className="text-main text-underline">
                        Տեսնել բոլորը
                    </Link>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default EstateMainHot
