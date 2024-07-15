'use client'
import React, { useState } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Checkbox, Col, Divider, Row, Select } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import PlanView from '@/components/Buildings/Plan/PlanView'
import { RedButton } from '@/components/common/Buttons/RedButton'
import StyledPlansList from '@/components/Buildings/BuildingView/PlanList/style'

const { Option } = Select

export const PlanList = ({ lng, building }) => {
    const { t } = useTranslation(lng, 'common')
    const [visibleCount, setVisibleCount] = useState(9)

    const plans = building.products

    const [sortOption, setSortOption] = useState('price-asc')
    const [filterArea, setFilterArea] = useState('')
    const [filterRoomCount, setFilterRoomCount] = useState('')
    const [hideSaled, setHideSaled] = useState(false)

    const handleSortChange = value => {
        setSortOption(value)
    }

    const sortedPlans = [...plans].sort((a, b) => {
        const [property, order] = sortOption.split('-')
        const valA = parseInt(a[property])
        const valB = parseInt(b[property])

        if (order === 'asc') {
            return valA - valB
        } else if (order === 'desc') {
            return valB - valA
        }
        return 0
    })

    const handleHideSaledChange = e => {
        setHideSaled(e.target.checked)
    }

    const handleAreaChange = value => {
        setFilterArea(value)
    }

    const handleRoomCountChange = value => {
        setFilterRoomCount(value)
    }

    const areaOptions = [...new Set(sortedPlans.map(item => item.area))]
    const roomCountOptions = [...new Set(sortedPlans.map(item => item.rooms))]

    const filteredPlans = sortedPlans.filter(item => {
        const areaMatch = filterArea ? item.area === parseInt(filterArea) : true
        const roomCountMatch = filterRoomCount
            ? item.rooms === parseInt(filterRoomCount)
            : true
        const saledMatch = hideSaled ? item.status !== 'sold' : true
        return areaMatch && roomCountMatch && saledMatch
    })

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 9)
    }

    const visiblePlans = filteredPlans.slice(0, visibleCount)

    return (
        <StyledPlansList>
            <ContainerBoxed>
                <Row>
                    <Divider />
                    <Col xs={24}>
                        <DarkHeading2 className={'mb-10'}>
                            Հատակագծեր
                        </DarkHeading2>
                    </Col>
                    <Col xs={24} className={'mb-6'}>
                        <Row gutter={[8, 16]} justify={'space-between'}>
                            <Col>
                                <Row align={'middle'} gutter={[8, 16]}>
                                    <Col flex={1}>
                                        <Checkbox
                                            checked={hideSaled}
                                            onChange={handleHideSaledChange}>
                                            <SmallParagraph>
                                                Թաքցնել վաճառվածները
                                            </SmallParagraph>
                                        </Checkbox>
                                    </Col>
                                    <Col xs={12} md={{ flex: 1 }}>
                                        <Select
                                            defaultValue=""
                                            onChange={handleAreaChange}
                                            style={{
                                                maxWidth: 250,
                                            }}>
                                            <Option value="">Մակերես</Option>
                                            {areaOptions.map((area, index) => (
                                                <Option
                                                    key={index}
                                                    value={area}>
                                                    {area}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Col>
                                    <Col xs={12} md={{ flex: 1 }}>
                                        <Select
                                            defaultValue=""
                                            onChange={handleRoomCountChange}
                                            style={{
                                                maxWidth: 250,
                                            }}>
                                            <Option value="">Սենյակներ</Option>
                                            {roomCountOptions.map(
                                                (roomCount, index) => (
                                                    <Option
                                                        key={index}
                                                        value={roomCount}>
                                                        {roomCount} սենյակ
                                                    </Option>
                                                ),
                                            )}
                                        </Select>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <div
                                    className={
                                        'flex flex-row justify-end items-center'
                                    }>
                                    <SmallParagraph className={'mr-4 mb-0'}>
                                        Դասավորել ըստ։{' '}
                                    </SmallParagraph>
                                    <Select
                                        defaultValue="price-asc"
                                        onChange={handleSortChange}
                                        style={{ width: 200 }}>
                                        <Option value="price-asc">
                                            Գնի աճման
                                        </Option>
                                        <Option value="price-desc">
                                            Գնի նվազման
                                        </Option>
                                        <Option value="area_total-asc">
                                            Մակերեսի աճման
                                        </Option>
                                        <Option value="area_total-desc">
                                            Մակերեսի նվազման
                                        </Option>
                                    </Select>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24}>
                        <Row gutter={32}>
                            {visiblePlans.map((plan, index) => (
                                <Col xs={24} md={8} key={'col-' + index}>
                                    <PlanView key={index} plan={plan} />
                                </Col>
                            ))}
                            <Col xs={24} className={'text-center'}>
                                {visibleCount < filteredPlans.length && (
                                    <RedButton onClick={loadMore}>
                                        {t('label.loadMore')}
                                    </RedButton>
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContainerBoxed>
        </StyledPlansList>
    )
}

export default PlanList
