'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Row, Table } from 'antd'
import { apiURL } from '@/constants'
import api from '@/hooks/api'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'
import { CheckOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import RedText from '@/components/Typography/text/RedText'
import AppImage from '@/components/common/Image/AppImage'

export async function EstateCompareCarousel(props) {
    const router = useRouter()
    const { locale } = router
    const { t } = useTranslation(props.lng, 'common')

    const [estatesData, setEstatesData] = useState([])
    const [columns, setColumns] = useState([])
    const [dataSource, setDataSource] = useState([])
    const [compareCount, setCompareCount] = useState(0)

    useEffect(() => {
        const compareIds = JSON.parse(
            localStorage.getItem('compareEstates') || [],
        )
        setCompareCount(compareIds.length)
        const params = {
            'filter[id]': compareIds.join('|'),
        }

        const data = api(locale).get(apiURL + 'api/estates/compare/estates', {
            params,
        })

        const estatesDataFromApi = data.data

        const dataHeaders = {
            id: 1,
            price: t('label.price'),
            full_address: t('label.address'),
            room_count: t('label.roomCount'),
            area_total: t('label.area'),
            floor: t('label.floor'),
            ceilingHeight: t('label.ceilingHeight'),
            estate_facilities: t('common:label.utility.facilities'),
        }

        estatesDataFromApi.unshift(dataHeaders)
        setEstatesData(estatesDataFromApi)

        let columnsFromApi = [
            ...estatesDataFromApi.map(item => ({
                dataIndex: item.id.toString(),
                key: item.id.toString(),
                width: 200,
                style: { padding: '0px 8px' },
                fixed: item.id === estatesDataFromApi[0].id ? 'left' : null,
            })),
        ]

        let dataSourceFromApi = [
            {
                key: '1',
                attribute: 'image',
                ...Object.fromEntries(
                    estatesDataFromApi.map(item => [
                        item.id.toString(),
                        item.image ? (
                            <AppImage
                                alt={'Red Group'}
                                preview={false}
                                src={item.image}
                                width={'175px'}
                                height={'150px'}
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        ) : (
                            ''
                        ),
                    ]),
                ),
            },
            {
                key: '2',
                attribute: 'price',
                ...Object.fromEntries(
                    estatesDataFromApi.map(item => [
                        item.id.toString(),
                        item.price,
                    ]),
                ),
            },
            {
                key: '3',
                attribute: 'full_address',
                ...Object.fromEntries(
                    estatesDataFromApi.map(item => [
                        item.id.toString(),
                        item.full_address,
                    ]),
                ),
            },
            {
                key: '4',
                attribute: 'area_total',
                ...Object.fromEntries(
                    estatesDataFromApi.map(item => [
                        item.id.toString(),
                        item.area_total,
                    ]),
                ),
            },
            {
                key: '5',
                attribute: 'floor',
                ...Object.fromEntries(
                    estatesDataFromApi.map(item => [
                        item.id.toString(),
                        item.floor,
                    ]),
                ),
            },
            {
                key: '6',
                attribute: 'ceilingHeight',
                ...Object.fromEntries(
                    estatesDataFromApi.map(item => [
                        item.id.toString(),
                        item.ceilingHeight || '-',
                    ]),
                ),
            },
            {
                key: '7',
                attribute: 'room_count',
                ...Object.fromEntries(
                    estatesDataFromApi.map(item => [
                        item.id.toString(),
                        item.room_count,
                    ]),
                ),
            },
            {
                key: '7',
                attribute: 'estate_facilities',
                ...Object.fromEntries(
                    estatesDataFromApi.map(item => [
                        item.id.toString(),
                        item.estate_facilities
                            ? estateFacilitiesToString(item.estate_facilities)
                            : '',
                    ]),
                ),
            },
        ]

        function estateFacilitiesToString(estate_facilities) {
            return (
                <>
                    {Object.entries(estate_facilities).map(
                        ([facilityKey, facility]) => (
                            <div key={facilityKey}>
                                {facility.value === true && (
                                    <div
                                        className={
                                            'flex flex-row justify-between'
                                        }>
                                        <label className={'mr-2'}>
                                            {facility.label}
                                        </label>
                                        <CheckOutlined />
                                    </div>
                                )}
                            </div>
                        ),
                    )}
                </>
            )
        }

        setColumns(columnsFromApi)
        setDataSource(dataSourceFromApi)
    }, [])

    const tableRef = useRef(null)

    const handleScrollRight = () => {
        const tableBody = document.querySelector('.ant-table-content')
        const tableFixedColumn = document.querySelector(
            '.ant-table-cell-fix-left',
        )
        if (tableBody) {
            const fixedColumnWidth = tableFixedColumn.clientWidth
            tableBody.scrollTo({
                left: tableBody.scrollLeft + fixedColumnWidth,
                behavior: 'smooth',
            })
        }
    }

    const handleScrollLeft = () => {
        const tableBody = document.querySelector('.ant-table-content')
        const tableFixedColumn = document.querySelector(
            '.ant-table-cell-fix-left',
        )
        if (tableBody) {
            console.log(12)
            const fixedColumnWidth = tableFixedColumn.clientWidth
            tableBody.scrollTo({
                left: tableBody.scrollLeft - fixedColumnWidth,
                behavior: 'smooth',
            })
        }
    }

    return (
        <div className={'container pt-10 pb-20'}>
            <Row>
                <Col xs={24}>
                    <h1 className={'mb-6'}>
                        {t('label.compare')} /{' '}
                        <RedText className={'text-2xl'}>{compareCount}</RedText>
                    </h1>
                </Col>
                <Col xs={24}>
                    {estatesData.length > 0 && (
                        <div className={'relative'}>
                            <Button
                                shape="circle"
                                onClick={handleScrollLeft}
                                className={
                                    'flex justify-center items-center absolute z-40 left-60 top-20 bg-opacity-70 bg-gray-600'
                                }>
                                <LeftOutlined style={{ color: '#FFFFFF' }} />
                            </Button>
                            <Button
                                shape="circle"
                                onClick={handleScrollRight}
                                className={
                                    'flex justify-center items-center absolute z-40 right-3.5 top-20 bg-opacity-70 bg-gray-600'
                                }>
                                <RightOutlined style={{ color: '#FFFFFF' }} />
                            </Button>
                            <Table
                                showHeader={false}
                                dataSource={dataSource}
                                columns={columns}
                                pagination={false}
                                scroll={{ x: 1300 }}
                                ref={tableRef}
                            />
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    )
}

export default EstateCompareCarousel
