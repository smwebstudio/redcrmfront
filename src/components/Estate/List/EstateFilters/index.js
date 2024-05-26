'use client'
import { Col, Form, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import api from '@/hooks/api'
import { useTranslation } from '@/app/i18n/client'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { objectToQueryParams } from '@/lib/helper'
import { RedButton } from '@/components/common/Buttons/RedButton'
import { AdditionalButton } from '@/components/common/Buttons/AdditionalButton'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

const EstateFilters = ({
    filtersData,
    queryData,
    queryDataParams,
    changeEstatesData,
    setPageDataURL,
    setLoading,
    lng,
}) => {
    const [form] = Form.useForm()
    const { t } = useTranslation(lng, 'common')

    let initialProvince = filtersData.locations.find(x => x.id === 1)

    const provinces = filtersData.locations.map(value => ({
        value: value.id,
        label: value.label,
    }))

    let currentCurrency = 'USD'
    let currentContractType = 'sale'

    const [currentProvince, setCurrentProvince] = useState(initialProvince)
    const [cities, setCities] = useState(initialProvince.cities)
    const [streets, setStreets] = useState([])
    const [prices, setPrices] = useState(
        filtersData.prices[currentContractType][currentCurrency],
    )
    const [showYerevanCommunities, setShowYerevanCommunities] = useState(true)
    const [showAdditionalFilters, setShowAdditionalFilters] = useState(false)

    const transformedLocations = filtersData.locations.reduce(
        (acc, location) => {
            const transformedCities = location.cities.reduce(
                (cityAcc, city) => {
                    cityAcc[city.id] = city.streets
                    return cityAcc
                },
                {},
            )
            acc[location.id] = transformedCities
            return acc
        },
        {},
    )

    useEffect(() => {
        form.setFieldsValue(queryDataParams)
    }, [queryDataParams])

    const handleProvinceChange = value => {
        if (value === 1) {
            setShowYerevanCommunities(true)
            form.setFieldValue('location_city_id', null)
            setCities(filtersData.location_community)
        } else {
            setShowYerevanCommunities(false)
            form.setFieldValue('location_community_id', null)
            let province = filtersData.locations.find(
                province => province.id === value,
            )
            setCities([])
            setCities(province.cities)
        }

        setCurrentProvince(
            filtersData.locations.find(province => province.id === value),
        )
    }

    const handleCityChange = cityId => {
        setStreets(transformedLocations[currentProvince.id][cityId])
    }

    const handleAdditionalFilters = () => {
        setShowAdditionalFilters(!showAdditionalFilters)
    }

    const onFinish = async values => {
        setLoading(true)
        const queryData = Object.entries(values)

        let query = {}
        queryData.forEach(function (param) {
            query[param[0]] = param[1]
        })
        const queryString = objectToQueryParams(query)
        const updateLink = '/estates?' + queryString

        let queryURL = ''
        queryData.forEach(function (param) {
            console.log('param')
            console.log(param)
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
            } else if (param[1]) {
                queryURL += 'filter[' + param[0] + ']' + '=' + param[1] + '&'
            }
        })

        setPageDataURL('api/estates/filter/estates?' + queryURL)

        const estatesFilteredResponse = await api(lng).get(
            'api/estates/filter/estates?' + queryURL,
        )
        const estatesData = estatesFilteredResponse.data

        changeEstatesData(estatesData)
        setLoading(false)

        history.replaceState(null, '', updateLink)
    }

    return (
        <ContainerBoxed className={'pt-10'}>
            <Form
                form={form}
                onFinish={onFinish}
                className="bg-white text-gray-50 ">
                <Row justify={'space-between'}>
                    <Col xs={24} sm={15}>
                        <Row>
                            <Col
                                xs={12}
                                sm={4}
                                className="field-item d-flex flex-column">
                                <SmallParagraph className="pl-2">
                                    {t('label.contract')}
                                </SmallParagraph>
                                <Form.Item name="contract_type_id">
                                    <Select
                                        placeholder={t('label.contract')}
                                        variant={'borderless'}
                                        options={filtersData.contract_types}
                                    />
                                </Form.Item>
                            </Col>
                            <Col
                                xs={12}
                                sm={4}
                                className="field-item d-flex flex-column">
                                <SmallParagraph className="pl-2">
                                    Տեսակ
                                </SmallParagraph>
                                <Form.Item name="estate_type_id">
                                    <Select
                                        showSearch
                                        placeholder="Տեսակ"
                                        variant={'borderless'}
                                        optionFilterProp="children"
                                        options={filtersData.estate_types}
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>
                            <Col
                                xs={12}
                                sm={4}
                                className="field-item d-flex flex-column">
                                <SmallParagraph className="pl-2">
                                    Մարզ
                                </SmallParagraph>
                                <Form.Item name="location_province_id">
                                    <Select
                                        showSearch
                                        placeholder="Մարզ"
                                        variant={'borderless'}
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
                                sm={4}
                                className="field-item d-flex flex-column">
                                <SmallParagraph className="pl-2">
                                    Համայնք
                                </SmallParagraph>
                                <Form.Item
                                    name="location_city_id"
                                    hidden={showYerevanCommunities}>
                                    <Select
                                        showSearch
                                        placeholder="Ընտրել"
                                        variant={'borderless'}
                                        onChange={handleCityChange}
                                        optionFilterProp="children"
                                        style={{ width: '100%' }}
                                        popupMatchSelectWidth={false}
                                        options={cities}
                                        allowClear
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="location_community_id"
                                    hidden={!showYerevanCommunities}>
                                    <Select
                                        showSearch
                                        placeholder="Ընտրել"
                                        variant={'borderless'}
                                        onChange={handleCityChange}
                                        style={{ width: '100%' }}
                                        popupMatchSelectWidth={false}
                                        options={filtersData.location_community}
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>

                            <Col
                                xs={12}
                                sm={4}
                                className="field-item d-flex flex-column">
                                <SmallParagraph className="pl-2">
                                    Գին
                                </SmallParagraph>
                                <Form.Item name="prices">
                                    <Select
                                        showSearch
                                        placeholder="Ընտրել"
                                        variant={'borderless'}
                                        optionFilterProp="children"
                                        options={prices}
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>

                            <Col
                                xs={12}
                                sm={4}
                                className="field-item d-flex flex-column">
                                <SmallParagraph className="pl-2">
                                    Սենյակ
                                </SmallParagraph>
                                <Form.Item name="room_count">
                                    <Select
                                        showSearch
                                        placeholder="Ընտրել"
                                        variant={'borderless'}
                                        optionFilterProp="children"
                                        options={filtersData.rooms}
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>
                            {showAdditionalFilters && (
                                <>
                                    <Col
                                        xs={12}
                                        sm={4}
                                        className="field-item d-flex flex-column">
                                        <SmallParagraph className="pl-2">
                                            {t('label.area')}
                                        </SmallParagraph>
                                        <Form.Item name="area_total">
                                            <Select
                                                showSearch
                                                placeholder="Ընտրել"
                                                variant={'borderless'}
                                                optionFilterProp="children"
                                                options={filtersData.area_total}
                                                allowClear
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col
                                        xs={12}
                                        sm={4}
                                        className="field-item d-flex flex-column">
                                        <SmallParagraph className="pl-2">
                                            {t('label.pricePerQwdMeter')}
                                        </SmallParagraph>
                                        <Form.Item name="prece_per_qwd">
                                            <Select
                                                showSearch
                                                placeholder="Ընտրել"
                                                variant={'borderless'}
                                                optionFilterProp="children"
                                                options={
                                                    filtersData.prece_per_qwd
                                                }
                                                allowClear
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col
                                        xs={12}
                                        sm={4}
                                        className="field-item d-flex flex-column">
                                        <SmallParagraph className="pl-2">
                                            {t('label.locationStreet')}
                                        </SmallParagraph>
                                        <Form.Item name="location_street_id">
                                            <Select
                                                showSearch
                                                placeholder="Ընտրել"
                                                variant={'borderless'}
                                                style={{ width: '100%' }}
                                                popupMatchSelectWidth={false}
                                                options={streets}
                                                allowClear
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col
                                        xs={12}
                                        sm={4}
                                        className="field-item d-flex flex-column">
                                        <SmallParagraph className="pl-2">
                                            {t('label.buildingProjectType')}
                                        </SmallParagraph>
                                        <Form.Item name="building_project_type_id">
                                            <Select
                                                showSearch
                                                placeholder="Ընտրել"
                                                variant={'borderless'}
                                                optionFilterProp="children"
                                                options={
                                                    filtersData.building_project_type
                                                }
                                                allowClear
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col
                                        xs={12}
                                        sm={4}
                                        className="field-item d-flex flex-column">
                                        <SmallParagraph className="pl-2">
                                            {t('label.buildingType')}
                                        </SmallParagraph>
                                        <Form.Item name="building_type_id">
                                            <Select
                                                showSearch
                                                placeholder="Ընտրել"
                                                variant={'borderless'}
                                                optionFilterProp="children"
                                                options={
                                                    filtersData.building_type
                                                }
                                                allowClear
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col
                                        xs={12}
                                        sm={4}
                                        className="field-item d-flex flex-column">
                                        <SmallParagraph className="pl-2">
                                            {t('label.repairingType')}
                                        </SmallParagraph>
                                        <Form.Item name="repairing_type_id">
                                            <Select
                                                showSearch
                                                placeholder="Ընտրել"
                                                variant={'borderless'}
                                                optionFilterProp="children"
                                                options={
                                                    filtersData.repairing_type
                                                }
                                                allowClear
                                            />
                                        </Form.Item>
                                    </Col>
                                </>
                            )}
                        </Row>
                    </Col>

                    <Col xs={24} sm={8}>
                        <Row gutter={[32, 8]} justify={'end'}>
                            <Col xs={24} md={8} className="">
                                <AdditionalButton
                                    onClick={handleAdditionalFilters}>
                                    {t('label.additional')}
                                </AdditionalButton>
                            </Col>
                            <Col xs={24} md={6}>
                                <RedButton htmlType="submit">
                                    {t('label.search')}
                                </RedButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </ContainerBoxed>
    )
}

export default EstateFilters
