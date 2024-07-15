'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Col, Popover, Row } from 'antd'
import AppImage from '@/components/common/Image/AppImage'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import StyledBuildingMarker from '@/components/Buildings/BuildingMarker/style'
import FontIcon from '@/components/common/Icons/FontIcon'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

export function BuildingMarker({ building }) {
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
                <Link href={'developers/' + building.id}>
                    <AppImage
                        alt={'Red Group'}
                        src={building.image}
                        height={'70px'}
                        width={'80px'}
                        preview={false}
                    />
                </Link>
            </Col>
            <Col xs={16}>
                <Row>
                    <Col xs={24}>
                        <SmallParagraph>{building.title}</SmallParagraph>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

    return (
        <StyledBuildingMarker>
            <Popover content={estateContent} className={'marker-popover'}>
                <FontIcon icon={faLocationPin} size={'4x'} color={'#D8002C'} />
            </Popover>
        </StyledBuildingMarker>
    )
}

export default BuildingMarker
