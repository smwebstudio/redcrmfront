'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import BuildingItem from '@/components/Buildings/List/BuildingItem'
import { FullListSkeleton } from '@/components/common/Skeletons/FullListSkeleton'
import { useSearchParams } from 'next/navigation'
import developersApi from '@/hooks/developersApi'
import Link from 'next/link'
import { RedButton } from '@/components/common/Buttons/RedButton'

export function BuildingList({ lng, buildingsData }) {
    const { t } = useTranslation(lng, 'common')
    const searchParams = useSearchParams()
    const page = searchParams.get('page')
    const [loading, setLoading] = useState(false)
    const [buildings, setBuildings] = useState(buildingsData)
    const [buildingsList, setBuildingsList] = useState(buildingsData.data)

    console.log('buildings')
    console.log(buildings)
    const [visibleCount, setVisibleCount] = useState(9)
    const [queryParam, setQueryParam] = useState(searchParams.toString())

    useEffect(() => {
        const fetchList = async () => {
            try {
                const params = new URLSearchParams(searchParams)

                const response = await developersApi(lng).get('api/projects', {
                    params: params,
                })

                setBuildings(response.data)
                setBuildingsList(response.data.data)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        if (searchParams.toString() !== queryParam) {
            setQueryParam(searchParams.toString())
            setLoading(true)
            fetchList()
        }
    }, [searchParams, page, queryParam])

    const visibleBuildings = buildingsList.slice(0, visibleCount)
    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 9)
    }

    return (
        <>
            <Suspense>
                <ContainerBoxed className="property-area min-vh-100">
                    <Row gutter={[24, 24]} className={'mt-20'}>
                        {!loading &&
                            visibleBuildings.map((building, index) => (
                                <Col
                                    xs={24}
                                    sm={12}
                                    md={8}
                                    className={'pr-3 pl-3 flex items-stretch'}
                                    key={'col-' + index}>
                                    <Link
                                        href={'developers/' + building.id}
                                        style={{ width: '100%' }}>
                                        <BuildingItem
                                            key={index}
                                            building={building}
                                            lng={lng}
                                        />
                                    </Link>
                                </Col>
                            ))}
                    </Row>
                    {loading && <FullListSkeleton />}
                    <Row
                        className={'mb-5 flex items-center justify-center p-4'}>
                        <Col xs={24} className={'text-center'}>
                            {visibleCount < buildingsList.length ? (
                                <RedButton onClick={loadMore}>
                                    {t('label.loadMore')}
                                </RedButton>
                            ) : (
                                <RedButton onClick={loadMore} disabled={true}>
                                    {t('label.loadMore')}
                                </RedButton>
                            )}
                        </Col>
                    </Row>
                </ContainerBoxed>
            </Suspense>
        </>
    )
}

export default BuildingList
