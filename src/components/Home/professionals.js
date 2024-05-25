'use client'
import React, { useState } from 'react'
import Professional from '@/components/Professionals/professional'
import Link from 'next/link'
import { Col, Row } from 'antd'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

function Professionals({ bestBrokers }) {
    const [professionalsData, setProfessionalsData] = useState(bestBrokers)

    let professionals = professionalsData.data

    return (
        <ContainerBoxed className="mt-10 mb-20">
            <h5 className="text-dark font-bold mb-3 text-left">
                Առաջատար մասնագետներ
            </h5>
            <Row gutter={32}>
                {professionals?.map((item, i) => (
                    <Col xs={24} sm={8} className="" key={i}>
                        <div className={'border border-light'}>
                            <Professional professional={item} key={i} />
                        </div>
                    </Col>
                ))}
                <Col xs={24} className="mt-3 text-right">
                    <Link
                        href="/professionals"
                        className="text-main text-underline">
                        Տեսնել բոլորը
                    </Link>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default Professionals
