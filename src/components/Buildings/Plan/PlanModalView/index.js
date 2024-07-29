import React, { useEffect, useState } from 'react'
import { Badge, Col, Image, Row, Spin, Tooltip } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import AppImage from '@/components/common/Image/AppImage'
import { fallbackImg } from '@/components/Estate/fallbackImg'
import { useTranslation } from '@/app/i18n/client'
import PlanModalGlobalStyles from '@/components/Buildings/Plan/PlanModalView/style'
import FontIcon from '@/components/common/Icons/FontIcon'
import {
    faCalculator,
    faClose,
    faCopy,
    faDownload,
    faLocationPin,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import RedText from '@/components/Typography/text/RedText'
import { calculateMortgagePayment, formatNumberPrice } from '@/lib/helper'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import LoanCalculator from '@/components/Estate/LoanCalculator'
import SingleBuildingMap from '@/components/Buildings/BuildingView/SingleBuildingMap'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />

const PlanModalView = ({ lng, plan, building }) => {
    const { t } = useTranslation(lng, 'common')
    const [showLoan, setShowLoan] = useState(false)
    const [showMap, setShowMap] = useState(false)
    const [copy, setCopy] = useState(false)
    useEffect(() => {
        const newUrl = `/developers/${building.project.id}?plan=${plan.id}`
        history.replaceState(null, '', newUrl)
    }, [plan])

    const onDownload = imgUrl => {
        const link = document.createElement('a')
        link.href = imgUrl
        link.target = '_blank'
        link.download = 'image.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const copyToClipboard = () => {
        const url = window.location.href
        navigator.clipboard.writeText(url).then(
            () => {
                console.log('ok')
                setCopy(true)
            },
            err => {
                console.log('smth went wrong')
            },
        )
    }

    const toggleMap = () => {
        setShowLoan(false)
        setShowMap(prevState => !prevState)
    }

    const toggleLoan = () => {
        setShowMap(false)
        setShowLoan(prevState => !prevState)
    }

    const closeAll = () => {
        setShowMap(false)
        setShowLoan(false)
    }

    const callPhone = () => {
        const phoneNumber = '+37498908908' // Replace with the desired phone number
        const link = document.createElement('a')
        link.href = `tel:${phoneNumber}`
        link.click()
    }

    return (
        <div key={plan.id} className={'relative'}>
            <PlanModalGlobalStyles />
            <Row>
                <Col xs={24}>
                    <DarkHeading1 className={'font-size-16 md:font-size-24'}>
                        {building.project.title}
                    </DarkHeading1>
                </Col>
            </Row>
            <Row gutter={8} align={'middle'} wrap={false} className={'mb-2'}>
                <Col>
                    <AppImage
                        alt={'Red Group'}
                        src={'/assets/img/svg/location.svg'}
                    />
                </Col>
                <Col>
                    <DarkHeading2 className={'mb-0'}>
                        {plan?.block && (
                            <>
                                {' '}
                                {plan.block} {t('developers.block')} |
                            </>
                        )}
                        {plan?.entry && (
                            <>
                                {' '}
                                {plan.entry} {t('developers.entry')} |
                            </>
                        )}
                        {plan?.floor && (
                            <>
                                {' '}
                                {plan.floor} {t('developers.floor')} |
                            </>
                        )}
                        {plan?.area && (
                            <>
                                {' '}
                                {plan.area} {t('developers.area_unit')} |
                            </>
                        )}
                        {plan?.rooms && (
                            <>
                                {' '}
                                {plan.rooms} {t('developers.room')}
                            </>
                        )}
                    </DarkHeading2>
                </Col>
            </Row>

            {plan.status !== 'sold' && (
                <Row className={'mb-4'} gutter={16}>
                    <Col>
                        <RedText className={'font-size-18 md:font-size-24'}>
                            {formatNumberPrice(plan.price)} AMD
                        </RedText>
                    </Col>
                    <Col>
                        / {t('label.mortgage.monthlyFee')} -{' '}
                        {formatNumberPrice(
                            calculateMortgagePayment(plan.price),
                        )}{' '}
                        AMD
                    </Col>
                </Row>
            )}
            <Row className="mb-0">
                <Col xs={24} className="thumb ">
                    {plan.status === 'sold' ? (
                        <Badge.Ribbon text="ՎԱՃԱՌՎԱԾ">
                            <Image
                                alt={'Red Group'}
                                src={plan.image}
                                fallback={fallbackImg}
                                placeholder={
                                    <div>
                                        <Spin indicator={antIcon} />
                                    </div>
                                }
                            />
                        </Badge.Ribbon>
                    ) : (
                        <Image
                            alt={'Red Group'}
                            src={plan.image}
                            fallback={fallbackImg}
                            placeholder={
                                <div>
                                    <Spin indicator={antIcon} />
                                </div>
                            }
                        />
                    )}
                </Col>
            </Row>
            {(showLoan || showMap) && (
                <Row justify={'end'} className={'mt-4'}>
                    <Col>
                        <FontIcon
                            icon={faClose}
                            size={'2x'}
                            color={'#111111'}
                            onClick={() => closeAll()}
                        />
                    </Col>
                </Row>
            )}
            <Row>
                {showLoan && (
                    <Col xs={24}>
                        <LoanCalculator estatePrice={plan.price} lng={lng} />
                    </Col>
                )}

                {showMap && building.project.coordinates && (
                    <Col xs={24}>
                        <SingleBuildingMap building={building} />
                    </Col>
                )}
            </Row>
            <Row gutter={32} className={'mt-12'} justify={'center'}>
                <Col>
                    <Tooltip title={t('label.mortgage')}>
                        <FontIcon
                            icon={faCalculator}
                            size={'2x'}
                            color={'#D8002C'}
                            onClick={() => toggleLoan()}
                        />
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title={t('button.download')}>
                        <FontIcon
                            icon={faDownload}
                            size={'2x'}
                            color={'#D8002C'}
                            onClick={e => onDownload(plan.image)}
                        />
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip
                        title={
                            copy ? t('label.copyOk') : t('label.copyHeader')
                        }>
                        <FontIcon
                            icon={faCopy}
                            size={'2x'}
                            color={'#D8002C'}
                            onClick={() => copyToClipboard()}
                        />
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title={t('button.call')}>
                        <FontIcon
                            icon={faPhone}
                            size={'2x'}
                            color={'green'}
                            onClick={() => callPhone()}
                        />
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title={t('label.mapView')}>
                        <FontIcon
                            icon={faLocationPin}
                            size={'2x'}
                            color={'#D8002C'}
                            onClick={() => toggleMap()}
                        />
                    </Tooltip>
                </Col>
            </Row>
        </div>
    )
}

export default PlanModalView
