import React, { useState } from 'react'
import { Col, Pagination, Row, Skeleton } from 'antd'
import axios from 'axios'
import { useTranslation } from '@/app/i18n/client'
import BuildingItem from '@/components/Buildings/BuildingItem'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

const onChange = key => {
    console.log(key)
}

export function BuildingList(props) {
    const { t } = useTranslation('common')

    const [loading, setLoading] = useState(false)
    const changeEstatesFoundCount = props.changeEstatesFoundCount
    const [buildings, setBuildings] = useState(props.buildings)
    // const [filtersData, setFiltersData] = useState(props.filtersData);
    const filtersData = props.filtersData
    const queryData = props.queryData
    const queryDataParams = props.queryDataParams

    const [sortType, setSortType] = useState('created_on')
    const [pageDataURL, setPageDataURL] = useState(props.pageDataURL + '?')

    const pageSize = buildings.meta.per_page
    const handlePageChange = (page, pageSize) => {
        setLoading(true)
        const exactPageUrl =
            pageDataURL +
            'page=' +
            page +
            '&page_size=' +
            pageSize +
            '&sort=' +
            sortType
        axios.get(exactPageUrl).then(response => {
            console.error('response')
            console.error(response.data)
            setBuildings(response.data)
            setTimeout(() => {
                setLoading(false)
            }, 500)
        })
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
            <ContainerBoxed className="property-area min-vh-100">
                <Row className={'mt-20'}>
                    {!loading &&
                        buildings.data?.map((item, index) => (
                            <Col
                                xs={24}
                                sm={12}
                                md={8}
                                xl={8}
                                className={'pr-3 pl-3 flex items-stretch'}>
                                <BuildingItem key={index} item={item} />
                            </Col>
                        ))}
                </Row>
                {loading && (
                    <Row className={'mt-5 mb-5'}>
                        <Col
                            lg={8}
                            md={12}
                            sm={24}
                            xs={24}
                            className={'pr-3 pl-3'}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Col>

                        <Col
                            lg={8}
                            md={12}
                            sm={24}
                            xs={24}
                            className={'pr-3 pl-3'}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Col>

                        <Col
                            lg={8}
                            md={12}
                            sm={24}
                            xs={24}
                            className={'pr-3 pl-3'}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Col>
                        <Col
                            lg={8}
                            md={12}
                            sm={24}
                            xs={24}
                            className={'pr-3 pl-3'}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Col>
                        <Col
                            lg={8}
                            md={12}
                            sm={24}
                            xs={24}
                            className={'pr-3 pl-3'}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Col>
                        <Col
                            lg={8}
                            md={12}
                            sm={24}
                            xs={24}
                            className={'pr-3 pl-3'}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Col>
                    </Row>
                )}
                <Row
                    className={
                        'mb-5 d-flex align-items-center justify-content-center'
                    }>
                    <Pagination
                        pageSize={pageSize}
                        defaultCurrent={1}
                        total={buildings.meta.total}
                        pageSizeOptions={[6, 9, 12, 24]}
                        locale={{ items_per_page: '' }}
                        onChange={handlePageChange}
                    />
                </Row>
            </ContainerBoxed>
        </>
    )
}

export default BuildingList
