'use client'
import { Button, Col, Row } from 'antd'
import React from 'react'
import { useRouter } from 'next/navigation'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'

const filter = (inputValue, path) =>
    path.some(
        option =>
            option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    )

export default function EvaluationSimpleForm(props) {
    const router = useRouter()

    return (
        <>
            <Row className={'bg-white p-3 align-items-center'}>
                <Col xs={24} sm={12}>
                    <SmallParagraph className="small text-white">
                        Այս հաշվիչը, հնարավորություն է տալիս որոշել Ձեր
                        բնակարանի վաճառքի շուկայական գինը:
                    </SmallParagraph>
                </Col>

                <Col xs={24} sm={12}>
                    <Button
                        onClick={() => router.push('/estimate')}
                        className="btn btn-main w-100"
                        size="large">
                        Գնահատել
                    </Button>
                </Col>
            </Row>
        </>
    )
}
