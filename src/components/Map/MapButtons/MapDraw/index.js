'use client'
import React, { useState } from 'react'
import { Col, Popover, Row } from 'antd'
import StyledMapDraw from '@/components/Map/MapButtons/MapDraw/style'
import { RedOutlinedButton } from '@/components/common/Buttons/RedOutlinedButton'
import AppImage from '@/components/common/Image/AppImage'
import { RedButton } from '@/components/common/Buttons/RedButton'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { GreyButton } from '@/components/common/Buttons/GreyButton'

export function MapDraw({
    handleDrawingMode,
    resetDrawnShape,
    drawingMode,
    readyDelete,
}) {
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
                                    <RedButton
                                        onClick={() => {
                                            handleDrawingMode()
                                            hide()
                                        }}>
                                        Սկսել
                                    </RedButton>
                                </Col>
                                <Col>
                                    <GreyButton onClick={hide}>
                                        Փակել
                                    </GreyButton>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                }
                trigger="click"
                placement={'bottomRight'}
                open={open}
                close={hide}
                onOpenChange={handleOpenChange}>
                {!readyDelete ? (
                    <RedOutlinedButton className={'map-start-draw'}>
                        <AppImage
                            alt={'Map Shape'}
                            preview={false}
                            src={'/assets/img/svg/pencil.svg'}
                        />
                        Շրջագծել
                    </RedOutlinedButton>
                ) : (
                    <RedOutlinedButton
                        className={'map-start-draw'}
                        onClick={resetDrawnShape}>
                        <AppImage
                            alt={'Map Shape'}
                            preview={false}
                            src={'/assets/img/svg/cross-remove.svg'}
                        />
                        Ջնջել
                    </RedOutlinedButton>
                )}
            </Popover>
        </StyledMapDraw>
    )
}

export default MapDraw
