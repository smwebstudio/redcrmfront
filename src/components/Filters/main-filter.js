'use client'
import { Button, Col, Form, Row, Select } from 'antd'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'

const filter = (inputValue, path) =>
    path.some(
        option =>
            option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    )

export default function MainFilter(props) {
    const [form] = Form.useForm()
    const router = useRouter()
    const filtersData = props.filtersData
    let initialProvince = filtersData.locations.find(x => x.id === 1)
    const [loading, setLoading] = useState(false)
    const [estateType, setEstateType] = useState(1)
    const [locationProvince, setLocationProvince] = useState(initialProvince)
    const [price, setPrice] = useState(null)
    const [currency, setCurrency] = useState('AMD')
    const [roomCount, setRoomCount] = useState(null)
    const [cities, setCities] = useState(initialProvince.cities)
    const [prices, setPrices] = useState(filtersData.prices.USD)

    const { t } = useTranslation(props.lng, 'common')

    let estateTypeOptions = []
    let provinces = []
    let rooms = []
    let currencies = [
        { value: 3, label: 'AMD' },
        { value: 1, label: 'USD' },
        { value: 2, label: 'RUR' },
    ]

    filtersData.estate_types.forEach(value => {
        estateTypeOptions.push({
            value: value.id,
            label: value.label,
        })
    })

    filtersData.locations.forEach(value => {
        provinces.push({
            value: value.id,
            label: value.label,
        })
    })

    // filtersData.prices.USD.forEach((value) => {
    //     prices.push({
    //         value: value.value,
    //         label: value.label
    //     });
    // });

    filtersData.rooms.forEach(value => {
        rooms.push({
            value: value.id,
            label: value.label,
        })
    })

    form.setFieldsValue({
        estate_type_id: 1,
        province: 1,
        location_province_id: 1,
        currency_id: 1,
    })

    const handleProvinceChange = value => {
        let province = filtersData.locations.find(x => x.id === value)
        setCities([])
        setCities(province.cities)
        setLocationProvince(province)
    }

    const handleCurrencyChange = (value, option) => {
        setPrices(filtersData.prices[option.label])
        form.setFieldValue('prices', null)
    }

    function objectToQueryParams(obj) {
        return Object.keys(obj)
            .map(key => {
                const trimmedKey = encodeURIComponent(key.replace(/\s+/g, ''))
                const trimmedValue =
                    obj[key] !== undefined
                        ? encodeURIComponent(
                              String(obj[key]).replace(/\s+/g, ''),
                          )
                        : undefined
                return trimmedValue !== undefined
                    ? trimmedKey + '=' + trimmedValue
                    : ''
            })
            .filter(param => param !== '') // Filter out empty parameters
            .join('&')
    }

    const onFinish = values => {
        setLoading(true)
        const queryData = Object.entries(values)
        let query = {}
        queryData.forEach(function (param) {
            query[param[0]] = param[1]
        })
        const queryString = objectToQueryParams(query)
        const updateLink = '/estates?' + queryString
        console.log(updateLink)
        router.push(updateLink)
    }

    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
                action="/search"
                method="get"
                className="bg-white text-gray-50 ">
                <Row>
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
                                options={currencies}
                                onChange={handleCurrencyChange}
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        xs={12}
                        sm={2}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">
                            {t('label.design.room')}
                        </SmallParagraph>
                        <Form.Item name="room_count">
                            <Select
                                showSearch
                                placeholder={t('button.pick')}
                                variant="borderless"
                                optionFilterProp="children"
                                options={rooms}
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
                            className="btn btn-main w-100"
                            size="large">
                            {t('button.search')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
