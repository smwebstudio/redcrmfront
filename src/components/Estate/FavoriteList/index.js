'use client'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import RedText from '@/components/Typography/text/RedText'
import api from '@/hooks/api'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import EstateItemGrid from '@/components/Estate/List/EstateItemGrid'

export function FavoriteList({ lng }) {
    const { t } = useTranslation(lng, 'common')

    const [estatesData, setEstatesData] = useState([])
    const [columns, setColumns] = useState([])
    const [dataSource, setDataSource] = useState([])
    const [compareCount, setCompareCount] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const fetchData = async () => {
        try {
            const compareIds = JSON.parse(
                localStorage.getItem('favEstates') || [],
            )
            setCompareCount(compareIds.length)
            const params = {
                'filter[id]': compareIds.join('|'),
            }
            const estatesDataFromApi = await api(lng).get(
                'api/estates/compare/estates',
                {
                    params,
                },
            )

            const estates = estatesDataFromApi.data.data

            console.log('estates')
            console.log(estates)
            setEstatesData(estates)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ContainerBoxed className={'container pt-10 pb-20'}>
            <Row>
                <Col xs={24}>
                    <h1 className={'mb-6'}>
                        {t('label.favorites')} /{' '}
                        <RedText className={'text-2xl'}>{compareCount}</RedText>
                    </h1>
                </Col>
                <Col xs={24}>
                    <Row gutter={[16, 16]}>
                        {!loaded &&
                            estatesData.map((estate, index) => (
                                <Col xs={24} md={6} key={index}>
                                    <EstateItemGrid
                                        key={index}
                                        estate={estate}
                                    />
                                </Col>
                            ))}
                    </Row>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default FavoriteList
