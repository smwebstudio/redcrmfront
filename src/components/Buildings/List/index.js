'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Col, Pagination, Row } from 'antd'
import axios from 'axios'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import BuildingItem from '@/components/Buildings/List/BuildingItem'
import { FullListSkeleton } from '@/components/common/Skeletons/FullListSkeleton'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import developersApi from '@/hooks/developersApi'
import Link from 'next/link'

export function BuildingList({ lng, buildingsData }) {
    const { t } = useTranslation(lng, 'common')

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const page = searchParams.get('page')
    const [loading, setLoading] = useState(false)
    const [buildings, setBuildings] = useState(buildingsData)
    // const [filtersData, setFiltersData] = useState(props.filtersData);

    const [queryParam, setQueryParam] = useState(searchParams.toString())
    const [sortType, setSortType] = useState('created_on')
    const [current, setCurrent] = useState(page ? Number(page) : 1)

    const pageSize = buildingsData.per_page

    useEffect(() => {
        const fetchList = async () => {
            try {
                const params = new URLSearchParams(searchParams)

                const response = await developersApi(lng).get('api/projects', {
                    params: params,
                })

                setBuildings(response.data)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        if (searchParams.toString() !== queryParam) {
            setQueryParam(searchParams.toString())
            setLoading(true)
            if (!page) {
                setCurrent(1)
            }
            fetchList()
        }
    }, [searchParams, page, queryParam])

    const onPageChange = async page => {
        const params = new URLSearchParams(searchParams)
        params.set('page', `${page}`)

        router.push(`${pathname}?${params.toString()}`)
        window.scrollTo({ top: 400, behavior: 'smooth' })
        setCurrent(page)
    }

    const sortEstates = sortBy => {
        setLoading(true)
        const exactPageUrl = pageDataURL + 'sort=' + sortBy
        axios.get(exactPageUrl).then(response => {
            setBuildings(response.data)
            setSortType(sortBy)
            setTimeout(() => {
                setLoading(false)
            }, 300)
        })
    }

    return (
        <>
            <Suspense>
                <ContainerBoxed className="property-area min-vh-100">
                    <Row gutter={[24, 24]} className={'mt-20'}>
                        {!loading &&
                            buildings.data.map((building, index) => (
                                <Col
                                    xs={24}
                                    sm={12}
                                    md={8}
                                    xl={8}
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
                            <Pagination
                                pageSize={pageSize}
                                defaultCurrent={1}
                                total={buildings.meta.total}
                                pageSizeOptions={[6, 9, 12, 24]}
                                onChange={onPageChange}
                            />
                        </Col>
                    </Row>
                </ContainerBoxed>
            </Suspense>
        </>
    )
}

export default BuildingList
