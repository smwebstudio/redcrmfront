'use client'

import { Col, Modal, Row } from 'antd'
import { GreyButton } from '@/components/common/Buttons/GreyButton'
import React, { useEffect } from 'react'
import { useTranslation } from '@/app/i18n/client'
import DarkParagraph from '@/components/common/Typography/Paragraph/DarkParagraph'

const SuccessModal = ({ lng, text, show, setShowModal }) => {
    const { t } = useTranslation(lng, 'common')

    useEffect(() => {
        if (show) {
            showModal()
        }
    }, [show])

    const showModal = async () => {
        setShowModal(true)
    }

    const handleOk = () => {
        setShowModal(false)
    }
    const handleCancel = () => {
        setShowModal(false)
    }

    return (
        <Modal
            title={t('notification.sendingMail.success')}
            open={show}
            onOk={handleOk}
            onCancel={handleCancel}
            width={700}
            footer={[
                <Row key={'modal'} gutter={16} justify={'end'}>
                    <Col>
                        <GreyButton key="back" onClick={handleCancel}>
                            {t('button.close')}
                        </GreyButton>
                    </Col>
                </Row>,
            ]}>
            <DarkParagraph>{text}</DarkParagraph>
        </Modal>
    )
}

export default SuccessModal
