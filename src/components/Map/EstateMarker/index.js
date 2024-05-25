'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Col, Popover, Row } from 'antd'
import AppImage from '@/components/common/Image/AppImage'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'

export function EstateMarker({ estate }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const estateContent = (
        <Row gutter={16} className={'bg-white p-2 w-80'}>
            <Col xs={8}>
                <Link href={'estates/' + estate.id}>
                    <AppImage
                        alt={'Red Group'}
                        src={estate.image}
                        height={'70px'}
                        width={'100px'}
                        preview={false}
                    />
                </Link>
            </Col>
            <Col xs={16}>
                <Row>
                    <Col xs={24}>
                        <DarkHeading3 className="price">
                            {estate.price}
                        </DarkHeading3>
                    </Col>
                    <Col xs={24}>
                        <SmallParagraph>{estate.full_address}</SmallParagraph>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

    return (
        <>
            <Popover content={estateContent}>
                <Button type="primary" className={'text-white'}>
                    {estate.price}
                </Button>
            </Popover>
        </>
    )
}

export default EstateMarker
