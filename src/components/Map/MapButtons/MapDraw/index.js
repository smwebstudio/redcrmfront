'use client'
import React, { useContext, useState } from 'react'
import { MapContext } from '@/providers/MapProvider'
import { Col, Popover, Row } from 'antd'
import StyledMapDraw from '@/components/Map/MapButtons/MapDraw/style'
import { RedOutlinedButton } from '@/components/common/Buttons/RedOutlinedButton'
import AppImage from '@/components/common/Image/AppImage'
import { RedButton } from '@/components/common/Buttons/RedButton'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { GreyButton } from '@/components/common/Buttons/GreyButton'

export function MapDraw({ ...props }) {
    const { openMap, toggleMapContainer } = useContext(MapContext)
    const [open, setOpen] = useState(false)
    const hide = () => {
        setOpen(false)
    }
    const handleOpenChange = newOpen => {
        setOpen(newOpen)
    }

    return (
        <StyledMapDraw>
            <Popover
                content={
                    <Row
                        gutter={[0, 16]}
                        justify={'center'}
                        className={'text-center w-80 p-4'}>
                        <Col xs={24}>
                            <AppImage
                                alt={'Map Shape'}
                                preview={false}
                                src={'/assets/img/svg/draw-shape.svg'}
                            />
                        </Col>
                        <Col xs={24}>
                            <SmallParagraph>
                                Շրջագծեք ձեր ուզած հատվածը և տեսեք տվյալ մասի
                                առաջարկները
                            </SmallParagraph>
                        </Col>
                        <Col xs={24}>
                            <Row gutter={16} justify={'center'}>
                                <Col>
                                    <RedButton>sdasd</RedButton>
                                </Col>
                                <Col>
                                    <GreyButton>sdasd</GreyButton>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                }
                trigger="click"
                placement={'bottomRight'}
                open={open}
                onOpenChange={handleOpenChange}>
                <RedOutlinedButton>Շրջագծել</RedOutlinedButton>
            </Popover>
        </StyledMapDraw>
    )
}

export default MapDraw
