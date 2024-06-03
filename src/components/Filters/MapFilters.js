'use client'
import { Button, Col, Form, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { apiURL } from '@/constants'
import api from '@/hooks/api'
import { useTranslation } from '@/app/i18n/client'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'

export default function MapFilters(props) {
    const [form] = Form.useForm()
    const router = useRouter()
    const { locale } = router
    const filtersData = props.filtersData
    const coords = props.coords
    const queryData = props.queryData
    const queryDataParams = props.queryDataParams
    const changeEstatesData = props.changeEstatesData
    const setLoading = props.setLoading
    const setPageDataURL = props.setPageDataURL
    const { t } = useTranslation(props.lng, 'common')

    let initialProvince = filtersData.data.locations.find(x => x.id === 1)

    let contract_type_id = []
    let estate_type_id = []
    let provinces = []
    let rooms = []
    let currencies = [
        { value: 3, label: 'AMD' },
        { value: 1, label: 'USD' },
        { value: 2, label: 'RUR' },
    ]

    let currentCurrency = 'USD'
    let currentContractType = 'sale'

    const [cities, setCities] = useState(initialProvince.cities)
    const [prices, setPrices] = useState(
        filtersData.data.prices[currentContractType][currentCurrency],
    )
    const [showYerevanCommunities, setShowYerevanCommunities] = useState(true)
    const [showAdditionalFilters, setShowAdditionalFilters] = useState(false)

    filtersData.data.estate_types.forEach(value => {
        estate_type_id.push({
            value: value.id,
            label: value.label,
        })
    })

    filtersData.data.locations.forEach(value => {
        provinces.push({
            value: value.id,
            label: value.label,
        })
    })

    filtersData.data.contract_types.forEach(value => {
        contract_type_id.push({
            value: value.id,
            label: value.label,
        })
    })

    // filtersData.data.prices.forEach((value) => {
    //     prices.push({
    //         value: value.value,
    //         label: value.label
    //     });
    // });

    filtersData.data.rooms.forEach(value => {
        rooms.push({
            value: value.id,
            label: value.name_arm,
        })
    })

    useEffect(() => {
        form.setFieldsValue(queryDataParams)
    }, [queryDataParams])

    const handleProvinceChange = value => {
        if (value === 1) {
            setShowYerevanCommunities(true)
            form.setFieldValue('location_city_id', null)
            setCities(filtersData.data.location_community)
        } else {
            setShowYerevanCommunities(false)
            form.setFieldValue('location_community_id', null)
            let province = filtersData.data.locations.find(x => x.id === value)
            setCities([])
            setCities(province.cities)
        }
    }

    const handleAdditionalFilters = () => {
        setShowAdditionalFilters(!showAdditionalFilters)
    }

    const onFinish = async values => {
        setLoading(true)
        const queryData = Object.entries(values)

        let queryURL = ''
        let queryURLNext = {}
        queryData.forEach(function (param) {
            if (param[0] === 'prices' && param[1]) {
                let priceId = param[1] - 1

                let pricesRangeData = prices[priceId]

                let pricesRange = pricesRangeData.label.split('-')

                queryURL +=
                    'filter[price_from]=' +
                    pricesRange[0] +
                    '&' +
                    'filter[price_to]=' +
                    pricesRange[1] +
                    '&'
                queryURLNext[param[0]] = param[1]
            } else if (param[1]) {
                queryURL += 'filter[' + param[0] + ']' + '=' + param[1] + '&'
                queryURLNext[param[0]] = param[1]
            }
        })

        router.push(
            {
                pathname: '/estates/map',
                query: queryURLNext,
            },
            undefined,
            { shallow: true },
        )

        setPageDataURL(
            apiURL + 'api/estates/filter/estates?fromMap=1&' + queryURL,
        )

        const estatesFilteredResponse = await api(locale).get(
            apiURL +
                'api/estates/filter/estates?fromMap=1&' +
                queryURL +
                'filter[coordinates]=' +
                coords,
        )
        const estatesData = estatesFilteredResponse.data

        changeEstatesData(estatesData)
        setLoading(false)
    }

    const handleButtonMapClick = () => {
        router.push(
            {
                pathname: '/estates',
            },
            undefined,
            { shallow: true },
        )
    }

    const handleCurrencyChange = (value, option) => {
        setPrices(filtersData.data.prices[option.label])
        form.setFieldValue('prices', null)
    }
    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
                className="bg-white text-gray-50 mt-10">
                <Row gutter={32}>
                    <Col
                        xs={12}
                        sm={12}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">
                            {t('label.contract')}
                        </SmallParagraph>
                        <Form.Item name="contract_type_id">
                            <Select
                                showSearch
                                placeholder={t('label.contract')}
                                bordered={false}
                                optionFilterProp="children"
                                options={contract_type_id}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">Տեսակ</SmallParagraph>
                        <Form.Item name="estate_type_id">
                            <Select
                                showSearch
                                placeholder="Տեսակ"
                                bordered={false}
                                optionFilterProp="children"
                                options={estate_type_id}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">Մարզ</SmallParagraph>
                        <Form.Item name="location_province_id">
                            <Select
                                showSearch
                                placeholder="Մարզ"
                                bordered={false}
                                optionFilterProp="children"
                                options={provinces}
                                style={{ width: '100%' }}
                                dropdownMatchSelectWidth={false}
                                onChange={handleProvinceChange}
                            />
                        </Form.Item>
                    </Col>
                    {!showYerevanCommunities && (
                        <Col
                            xs={12}
                            sm={12}
                            className="field-item d-flex flex-column">
                            <SmallParagraph className="pl-2">
                                Համայնք
                            </SmallParagraph>
                            <Form.Item name="location_city_id">
                                <Select
                                    showSearch
                                    placeholder="Ընտրել"
                                    bordered={false}
                                    optionFilterProp="children"
                                    style={{ width: '100%' }}
                                    dropdownMatchSelectWidth={false}
                                    options={cities}
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                    )}
                    {showYerevanCommunities && (
                        <Col
                            xs={12}
                            sm={12}
                            className="field-item d-flex flex-column">
                            <SmallParagraph className="pl-2">
                                Համայնք
                            </SmallParagraph>
                            <Form.Item name="location_community_id">
                                <Select
                                    showSearch
                                    placeholder="Ընտրել"
                                    bordered={false}
                                    optionFilterProp="children"
                                    style={{ width: '100%' }}
                                    dropdownMatchSelectWidth={false}
                                    options={
                                        filtersData.data.location_community
                                    }
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                    )}
                    <Col
                        xs={12}
                        sm={12}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">Գին</SmallParagraph>
                        <Form.Item name="prices">
                            <Select
                                showSearch
                                placeholder="Ընտրել"
                                bordered={false}
                                optionFilterProp="children"
                                options={prices}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        className="field-item d-flex flex-column">
                        <SmallParagraph className="pl-2">
                            Արժույթ
                        </SmallParagraph>
                        <Form.Item name="currency_id">
                            <Select
                                showSearch
                                placeholder="Ընտրել"
                                bordered={false}
                                optionFilterProp="children"
                                options={currencies}
                                onChange={handleCurrencyChange}
                            />
                        </Form.Item>
                    </Col>

                    {showAdditionalFilters && (
                        <Col
                            xs={12}
                            sm={12}
                            className="field-item d-flex flex-column">
                            <SmallParagraph className="pl-2">
                                Սենյակ
                            </SmallParagraph>
                            <Form.Item name="room_count">
                                <Select
                                    showSearch
                                    placeholder="Ընտրել"
                                    bordered={false}
                                    optionFilterProp="children"
                                    options={rooms}
                                />
                            </Form.Item>
                        </Col>
                    )}

                    {showAdditionalFilters && (
                        <Col
                            xs={12}
                            sm={12}
                            className="field-item d-flex flex-column">
                            <SmallParagraph className="pl-2">
                                {t('label.area')}
                            </SmallParagraph>
                            <Form.Item name="area_total">
                                <Select
                                    showSearch
                                    placeholder="Ընտրել"
                                    bordered={false}
                                    optionFilterProp="children"
                                    options={filtersData.data.area_total}
                                />
                            </Form.Item>
                        </Col>
                    )}

                    {showAdditionalFilters && (
                        <Col
                            xs={12}
                            sm={12}
                            className="field-item d-flex flex-column">
                            <SmallParagraph className="pl-2">
                                {t('label.pricePerQwdMeter')}
                            </SmallParagraph>
                            <Form.Item name="prece_per_qwd">
                                <Select
                                    showSearch
                                    placeholder="Ընտրել"
                                    bordered={false}
                                    optionFilterProp="children"
                                    options={filtersData.data.prece_per_qwd}
                                />
                            </Form.Item>
                        </Col>
                    )}

                    {showAdditionalFilters && (
                        <Col
                            xs={12}
                            sm={12}
                            className="field-item d-flex flex-column">
                            <SmallParagraph className="pl-2">
                                {t('label.buildingProjectType')}
                            </SmallParagraph>
                            <Form.Item name="building_project_type">
                                <Select
                                    showSearch
                                    placeholder="Ընտրել"
                                    bordered={false}
                                    optionFilterProp="children"
                                    options={
                                        filtersData.data.building_project_type
                                    }
                                />
                            </Form.Item>
                        </Col>
                    )}

                    {showAdditionalFilters && (
                        <Col
                            xs={12}
                            sm={12}
                            className="field-item d-flex flex-column">
                            <SmallParagraph className="pl-2">
                                {t('label.buildingType')}
                            </SmallParagraph>
                            <Form.Item name="building_type">
                                <Select
                                    showSearch
                                    placeholder="Ընտրել"
                                    bordered={false}
                                    optionFilterProp="children"
                                    options={filtersData.data.building_type}
                                />
                            </Form.Item>
                        </Col>
                    )}

                    {showAdditionalFilters && (
                        <Col
                            xs={12}
                            sm={12}
                            className="field-item d-flex flex-column">
                            <SmallParagraph className="pl-2">
                                {t('label.repairingType')}
                            </SmallParagraph>
                            <Form.Item name="repairing_type">
                                <Select
                                    showSearch
                                    placeholder="Ընտրել"
                                    bordered={false}
                                    optionFilterProp="children"
                                    options={filtersData.data.repairing_type}
                                />
                            </Form.Item>
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col xs={12} sm={12} className="field-item pl-3 pr-3">
                        <Button
                            className="btn  bg-white hover-primary w-100"
                            size="large"
                            onClick={handleAdditionalFilters}>
                            {t('label.additional')}
                        </Button>
                    </Col>
                    <Col xs={12} sm={12} className="field-item   ">
                        <Button
                            htmlType="submit"
                            className="btn btn-main w-100"
                            size="large">
                            Փնտրել
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
