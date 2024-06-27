'use client'
import { Col, Form, Row, Select } from 'antd'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { objectToQueryParams } from '@/lib/helper'
import { RedButton } from '@/components/common/Buttons/RedButton'

export default function MainFilter(props) {
    const [form] = Form.useForm()
    const router = useRouter()
    const filtersData = props.filtersData
    const contract_type = props.contractType

    let initialProvince = filtersData.locations.find(x => x.id === 1)
    const [loading, setLoading] = useState(false)
    const [estateType, setEstateType] = useState(1)
    const [locationProvince, setLocationProvince] = useState(initialProvince)
    const [cities, setCities] = useState(initialProvince.cities)
    const [estateTypes, setEstateTypes] = useState(
        filtersData.estate_types.map(value => ({
            value: value.id,
            label: value.label,
        })),
    )
    const [prices, setPrices] = useState(
        contract_type === 1
            ? filtersData.prices.sale.AMD
            : filtersData.prices.rent.AMD,
    )
    const [communities, setCommunities] = useState(
        filtersData.location_community,
    )

    console.log('filtersData')
    console.log(filtersData)
    const { t } = useTranslation(props.lng, 'common')

    const estateTypeOptions = filtersData.estate_types.map(value => ({
        value: value.value,
        label: value.label,
    }))

    const provinces = filtersData.locations.map(value => ({
        value: value.id,
        label: value.label,
    }))

    const roomOptions = filtersData.rooms.map(value => ({
        value: value.value,
        label: value.label,
    }))

    const currencyOptions = [
        { value: 3, label: 'AMD' },
        { value: 1, label: 'USD' },
        { value: 2, label: 'RUR' },
    ]

    const priceOptions =
        contract_type === 1
            ? [
                  { value: 1, from: 0, to: 15000000 },
                  { value: 2, from: 15000000, to: 20000000 },
                  { value: 3, from: 20000000, to: 30000000 },
                  { value: 4, from: 30000000, to: 40000000 },
                  { value: 5, from: 40000000, to: 50000000 },
                  { value: 6, from: 50000000, to: 60000000 },
                  { value: 7, from: 60000000, to: 75000000 },
                  { value: 8, from: 75000000, to: 90000000 },
                  { value: 9, from: 90000000, to: 100000000 },
                  { value: 10, from: 100000000, to: Infinity },
              ]
            : [
                  { value: 1, from: 0, to: 50000 },
                  { value: 2, from: 50000, to: 75000 },
                  { value: 3, from: 75000, to: 100000 },
                  { value: 4, from: 100000, to: 125000 },
                  { value: 5, from: 125000, to: 150000 },
                  { value: 6, from: 150000, to: 200000 },
                  { value: 7, from: 200000, to: 30000 },
                  { value: 8, from: 300000, to: 400000 },
                  { value: 9, from: 400000, to: 100000000 },
              ]

    const handleProvinceChange = value => {
        let province = filtersData.locations.find(x => x.id === value)
        setLocationProvince(province)
        setCities(province.cities)
    }

    const onFinish = values => {
        setLoading(true)
        const queryData = Object.entries(values)
        let query = {}
        queryData.forEach(function (param) {
            console.log('param')
            console.log(param)

            if (param[0] === 'prices') {
                query['price_from'] = priceOptions.find(
                    option => option.value === param[1],
                )?.from
                query['price_to'] = priceOptions.find(
                    option => option.value === param[1],
                )?.to
            } else {
                query[param[0]] = param[1]
            }
        })

        const queryString = objectToQueryParams(query)

        console.log(queryString)

        const updateLink =
            '/estates?contract_type_id=' + contract_type + '&' + queryString
        router.push(updateLink)
    }

    console.log('rerend')

    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
                className="bg-white text-gray-50 ">
                <Row className={'pt-10 pb-10 pl-2'} justify={'space-between'}>
                    <Col xs={24} md={16}>
                        <Row className={'w-full'}>
                            <Col
                                xs={12}
                                sm={5}
                                className="field-item  flex-column">
                                <SmallParagraph className="pl-2">
                                    {t('label.type')}
                                </SmallParagraph>
                                <Form.Item name="estate_type_id">
                                    <Select
                                        placeholder={t('label.type')}
                                        variant="borderless"
                                        options={estateTypeOptions}
                                    />
                                </Form.Item>
                            </Col>
                            <Col
                                xs={12}
                                sm={4}
                                className="field-item  flex-column">
                                <SmallParagraph className="pl-2">
                                    {t('label.locationProvince')}
                                </SmallParagraph>
                                <Form.Item name="location_province_id">
                                    <Select
                                        showSearch
                                        placeholder={t(
                                            'label.locationProvince',
                                        )}
                                        variant="borderless"
                                        optionFilterProp="children"
                                        options={provinces}
                                        style={{ width: '100%' }}
                                        popupMatchSelectWidth={false}
                                        onChange={handleProvinceChange}
                                    />
                                </Form.Item>
                            </Col>

                            {locationProvince.id !== 1 ? (
                                <Col
                                    xs={12}
                                    sm={5}
                                    className="field-item  flex-column">
                                    <SmallParagraph className="pl-2">
                                        {t('label.locationCommunity')}
                                    </SmallParagraph>
                                    <Form.Item name="location_city_id">
                                        <Select
                                            showSearch
                                            placeholder={t('button.pick')}
                                            variant="borderless"
                                            optionFilterProp="children"
                                            style={{ width: '100%' }}
                                            popupMatchSelectWidth={false}
                                            options={cities}
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>
                            ) : (
                                <Col
                                    xs={12}
                                    sm={5}
                                    className="field-item  flex-column">
                                    <SmallParagraph className="pl-2">
                                        {t('label.locationCommunity')}
                                    </SmallParagraph>
                                    <Form.Item name="location_community_id">
                                        <Select
                                            showSearch
                                            placeholder={t('button.pick')}
                                            variant="borderless"
                                            optionFilterProp="children"
                                            style={{ width: '100%' }}
                                            popupMatchSelectWidth={false}
                                            options={communities}
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>
                            )}
                            <Col
                                xs={12}
                                sm={4}
                                className="field-item  flex-column">
                                <SmallParagraph className="pl-2">
                                    {t('label.price.Additional')}{' '}
                                </SmallParagraph>
                                <Form.Item name="prices">
                                    <Select
                                        showSearch
                                        placeholder={t('button.pick')}
                                        variant="borderless"
                                        options={prices}
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>

                            <Col
                                xs={12}
                                sm={4}
                                className="field-item  flex-column">
                                <SmallParagraph className="pl-2">
                                    {t('common:label.roomCount')}
                                </SmallParagraph>
                                <Form.Item name="room_count">
                                    <Select
                                        showSearch
                                        placeholder={t('button.pick')}
                                        variant="borderless"
                                        options={roomOptions}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} md={5}>
                        <RedButton htmlType="submit" loading={loading}>
                            {t('button.search')}
                        </RedButton>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
