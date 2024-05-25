'use client'
import { Button, Col, Form, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { objectToQueryParams } from '@/lib/helper'

export default function MainFilter(props) {
    const [form] = Form.useForm()
    const router = useRouter()
    const filtersData = props.filtersData
    const contract_type = props.contractType
    console.log('filtersData')
    console.log(filtersData)
    let initialProvince = filtersData.locations.find(x => x.id === 1)
    const [loading, setLoading] = useState(false)
    const [estateType, setEstateType] = useState(1)
    const [locationProvince, setLocationProvince] = useState(initialProvince)
    const [price, setPrice] = useState(null)
    const [currency, setCurrency] = useState('AMD')
    const [roomCount, setRoomCount] = useState(null)
    const [cities, setCities] = useState(initialProvince.cities)
    const [prices, setPrices] = useState(filtersData.prices.USD)
    const [communities, setCommunities] = useState(
        filtersData.location_community,
    )

    const { t } = useTranslation(props.lng, 'common')

    const estateTypeOptions = filtersData.estate_types.map(value => ({
        value: value.id,
        label: value.label,
    }))

    const provinces = filtersData.locations.map(value => ({
        value: value.id,
        label: value.label,
    }))

    const roomOptions = filtersData.rooms.map(value => ({
        value: value.id,
        label: value.label,
    }))

    const currencyOptions = [
        { value: 3, label: 'AMD' },
        { value: 1, label: 'USD' },
        { value: 2, label: 'RUR' },
    ]

    useEffect(() => {
        // form.setFieldsValue({
        //     estate_type_id: 1,
        //     province: 1,
        //     location_community_id: 1,
        //     location_province_id: 1,
        //     currency_id: 3,
        // })
    }, [filtersData])

    const handleProvinceChange = value => {
        let province = filtersData.locations.find(x => x.id === value)
        setLocationProvince(province)
        setCities(province.cities)
    }

    const handleCurrencyChange = (value, option) => {
        setPrices(filtersData.prices[option.label])
        form.setFieldValue('prices', null)
    }

    const onFinish = values => {
        setLoading(true)
        const queryData = Object.entries(values)
        let query = {}
        queryData.forEach(function (param) {
            query[param[0]] = param[1]
        })
        const queryString = objectToQueryParams(query)
        const updateLink =
            '/estates?contract_type_id=' + contract_type + '&' + queryString
        router.push(updateLink)
    }

    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
                method="get"
                className="bg-white text-gray-50 ">
                <Row className={'pt-10 pb-10 pl-2'}>
                    <Col
                        xs={12}
                        sm={3}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">
                            {t('label.type')}
                        </SmallParagraph>
                        <Form.Item name="estate_type_id">
                            <Select
                                showSearch
                                placeholder={t('label.type')}
                                variant="borderless"
                                optionFilterProp="children"
                                options={estateTypeOptions}
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        xs={12}
                        sm={3}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">
                            {t('label.locationProvince')}
                        </SmallParagraph>
                        <Form.Item name="location_province_id">
                            <Select
                                showSearch
                                placeholder={t('label.locationProvince')}
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
                            sm={3}
                            className="field-item d-flex flex-column">
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
                            sm={3}
                            className="field-item d-flex flex-column">
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
                        sm={3}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">
                            {t('label.price.Additional')}{' '}
                        </SmallParagraph>
                        <Form.Item name="prices">
                            <Select
                                showSearch
                                placeholder={t('button.pick')}
                                variant="borderless"
                                optionFilterProp="children"
                                options={prices}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        xs={12}
                        sm={2}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">
                            {t('label.currency')}
                        </SmallParagraph>
                        <Form.Item name="currency_id">
                            <Select
                                showSearch
                                placeholder={t('button.pick')}
                                variant="borderless"
                                optionFilterProp="children"
                                options={currencyOptions}
                                onChange={handleCurrencyChange}
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        xs={12}
                        sm={2}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">
                            {t('common:label.roomCount')}
                        </SmallParagraph>
                        <Form.Item name="room_count">
                            <Select
                                showSearch
                                placeholder={t('button.pick')}
                                variant="borderless"
                                optionFilterProp="children"
                                options={roomOptions}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={4} className="field-item pl-3 pr-3">
                        <Button
                            className="btn  bg-white hover-primary w-100"
                            size="large">
                            {t('label.additional')}
                        </Button>
                    </Col>
                    <Col xs={12} sm={4} className="field-item   ">
                        <Button
                            htmlType="submit"
                            loading={loading}
                            type={'primary'}
                            size="large">
                            {t('button.search')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
