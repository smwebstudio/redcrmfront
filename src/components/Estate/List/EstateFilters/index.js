'use client'
import { Affix, Button, Col, Form, Radio, Row, Select } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from '@/app/i18n/client'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import {
    getApiQueryURL,
    objectToQueryParams,
    transformLocations,
} from '@/lib/helper'
import { RedButton } from '@/components/common/Buttons/RedButton'
import { AdditionalButton } from '@/components/common/Buttons/AdditionalButton'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import AppImage from '@/components/common/Image/AppImage'
import { FilterContext } from '@/providers/FilterProvider'
import { FilterSelect } from '@/components/common/Selects/FilterSelect'
import { GreyButton } from '@/components/common/Buttons/GreyButton'

const EstateFilters = ({
    filtersData,
    queryDataParams,
    setPageDataURL,
    setLoading,
    lng,
    openMap,
}) => {
    const [form] = Form.useForm()
    const { t } = useTranslation(lng, 'common')

    const { filterEstates, filteredEstates } = useContext(FilterContext)

    let initialProvince = filtersData.locations.find(x => x.id === 1)

    const provinces = filtersData.locations.map(value => ({
        value: value.id,
        label: value.label,
    }))

    let currentCurrency = 'USD'
    let currentContractType = 'sale'

    const [showMap, setShowMap] = useState(openMap)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [currentProvince, setCurrentProvince] = useState(initialProvince)
    const [cities, setCities] = useState(initialProvince.cities)
    const [streets, setStreets] = useState([])
    const [prices, setPrices] = useState(
        filtersData.prices[currentContractType][currentCurrency],
    )
    const [showYerevanCommunities, setShowYerevanCommunities] = useState(true)
    const [showAdditionalFilters, setShowAdditionalFilters] = useState(false)

    const transformedLocations = transformLocations(filtersData)

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
        setButtonLoading(true)
        setLoading(true)
        setPageDataURL('api/estates/filter/estates?' + getApiQueryURL(values))
        await filterEstates(lng, getApiQueryURL(values))

        const updateLink = '/estates?' + objectToQueryParams(values)
        history.replaceState(null, '', updateLink)

        setLoading(false)
        setButtonLoading(false)
    }

    return (
        <ContainerBoxed className={'pt-4'}>
            <Form
                form={form}
                onFinish={onFinish}
                // onValuesChange={onValuesChanged}
                className="bg-white text-gray-50 ">
                {!showAdditionalFilters && (
                    <Row justify={'space-between'} gutter={8}>
                        <Col>
                            <Form.Item name="contract_type_id">
                                <FilterSelect
                                    placeholder={t('label.contract')}
                                    options={filtersData.contract_types}
                                    popupMatchSelectWidth={false}
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="estate_type_id">
                                <FilterSelect
                                    placeholder="Տեսակ"
                                    options={filtersData.estate_types}
                                    popupMatchSelectWidth={false}
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="location_province_id">
                                <FilterSelect
                                    placeholder="Մարզ"
                                    optionFilterProp="children"
                                    options={provinces}
                                    popupMatchSelectWidth={false}
                                    onChange={handleProvinceChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col>
                            <AdditionalButton onClick={handleAdditionalFilters}>
                                <span>{t('label.additional')}</span>
                            </AdditionalButton>
                        </Col>
                    </Row>
                )}

                {showAdditionalFilters && (
                    <Row justify={'space-between'}>
                        <Col xs={24}>
                            <Row justify={'space-between'} className={'mb-4'}>
                                <Col>
                                    <AdditionalButton
                                        onClick={handleAdditionalFilters}>
                                        <span className={'font-bold'}>
                                            {t('label.additional')}
                                        </span>
                                    </AdditionalButton>
                                </Col>
                                <Col>
                                    <Button
                                        onClick={handleAdditionalFilters}
                                        type={'text'}>
                                        <AppImage
                                            alt={'Red Group'}
                                            src={
                                                '/assets/img/svg/close-filter.svg'
                                            }
                                        />
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={24}>
                            <Row gutter={8}>
                                <Col xs={24}>
                                    <Form.Item name="contract_type_id">
                                        <Radio.Group
                                            buttonStyle={'outline'}
                                            className={
                                                'flex w-full justify-around'
                                            }>
                                            {filtersData.contract_types.map(
                                                option => {
                                                    return (
                                                        <Radio.Button
                                                            key={option.value}
                                                            style={{
                                                                width: '33%',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                            value={
                                                                option.value
                                                            }>
                                                            {option.label}
                                                        </Radio.Button>
                                                    )
                                                },
                                            )}
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24}>
                                    <Form.Item name={'estate_type_id'}>
                                        <Radio.Group
                                            buttonStyle="solid"
                                            style={{ width: '100%' }}>
                                            {filtersData.estate_types.map(
                                                option => {
                                                    return (
                                                        <Radio.Button
                                                            key={option.value}
                                                            style={{
                                                                width: '25%',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                            value={
                                                                option.value
                                                            }>
                                                            {option.label}
                                                        </Radio.Button>
                                                    )
                                                },
                                            )}
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} className="field-item">
                                    <Form.Item
                                        name="location_province_id"
                                        labelCol={{ span: 24 }}
                                        label={t('label.locationProvince')}>
                                        <Select
                                            showSearch
                                            placeholder="Մարզ"
                                            optionFilterProp="children"
                                            options={provinces}
                                            popupMatchSelectWidth={false}
                                            onChange={handleProvinceChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={12}>
                                    <Form.Item
                                        name="location_city_id"
                                        labelCol={{ span: 24 }}
                                        label={t('label.locationCity')}
                                        hidden={showYerevanCommunities}>
                                        <Select
                                            showSearch
                                            placeholder={t('label.selectOne')}
                                            onChange={handleCityChange}
                                            optionFilterProp="children"
                                            popupMatchSelectWidth={false}
                                            options={cities}
                                            allowClear
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="location_community_id"
                                        labelCol={{ span: 24 }}
                                        label={t('label.locationCommunity')}
                                        hidden={!showYerevanCommunities}>
                                        <Select
                                            showSearch
                                            placeholder={t('label.selectOne')}
                                            onChange={handleCityChange}
                                            popupMatchSelectWidth={false}
                                            options={
                                                filtersData.location_community
                                            }
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={24}>
                                    <Form.Item
                                        name="prices"
                                        labelCol={{ span: 24 }}
                                        label={t('label.price.Additional')}>
                                        <Select
                                            placeholder={t('label.selectOne')}
                                            options={prices}
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={24}>
                                    <Form.Item
                                        name="room_count"
                                        labelCol={{ span: 24 }}
                                        label={t('label.rooms')}>
                                        <Radio.Group
                                            buttonStyle="solid"
                                            style={{ width: '100%' }}>
                                            {filtersData.rooms.map(option => {
                                                return (
                                                    <Radio.Button
                                                        key={option.value}
                                                        style={{
                                                            width: '20%',
                                                            textAlign: 'center',
                                                        }}
                                                        value={option.value}>
                                                        {option.label}
                                                    </Radio.Button>
                                                )
                                            })}
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <SmallParagraph className="pl-2">
                                        {t('label.pricePerQwdMeter')}
                                    </SmallParagraph>
                                    <Form.Item name="prece_per_qwd">
                                        <Select
                                            showSearch
                                            placeholder={t('label.selectOne')}
                                            variant={'borderless'}
                                            optionFilterProp="children"
                                            options={filtersData.prece_per_qwd}
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <SmallParagraph className="pl-2">
                                        {t('label.locationStreet')}
                                    </SmallParagraph>
                                    <Form.Item name="location_street_id">
                                        <Select
                                            showSearch
                                            placeholder={t('label.selectOne')}
                                            variant={'borderless'}
                                            style={{ width: '100%' }}
                                            popupMatchSelectWidth={false}
                                            options={streets}
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <Form.Item
                                        name={'area_total'}
                                        labelCol={{ span: 24 }}
                                        label={t('label.area')}>
                                        <Select
                                            placeholder={t('label.selectOne')}
                                            options={filtersData.area_total}
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <Form.Item
                                        name={'repairing_type_id'}
                                        labelCol={{ span: 24 }}
                                        label={t('label.repairingType')}>
                                        <Select
                                            placeholder={t('label.selectOne')}
                                            options={filtersData.repairing_type}
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <Form.Item
                                        name={'building_project_type_id'}
                                        labelCol={{ span: 24 }}
                                        label={t('label.buildingProjectType')}>
                                        <Select
                                            placeholder={t('label.selectOne')}
                                            options={
                                                filtersData.building_project_type
                                            }
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <Form.Item
                                        name={'building_type_id'}
                                        labelCol={{ span: 24 }}
                                        label={t('label.buildingType')}>
                                        <Select
                                            placeholder={t('label.selectOne')}
                                            options={filtersData.building_type}
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={24} sm={24}>
                            <Affix offsetBottom={8}>
                                <Row
                                    gutter={[32, 8]}
                                    justify={'space-between'}
                                    className={'mb-2 bg-white'}>
                                    <Col xs={24} md={8} className="">
                                        <GreyButton
                                            onClick={() => form.resetFields()}>
                                            {t('button.cancel')}
                                        </GreyButton>
                                    </Col>
                                    <Col xs={24} md={6}>
                                        <RedButton
                                            htmlType="submit"
                                            className={'md:ml-2'}
                                            loading={buttonLoading}>
                                            {t('label.search')}
                                        </RedButton>
                                    </Col>
                                </Row>
                            </Affix>
                        </Col>
                    </Row>
                )}
            </Form>
        </ContainerBoxed>
    )
}

export default EstateFilters
