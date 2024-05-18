import React, { useState } from 'react'
import EstateItem from '@/components/Estate/estate-item'
import { Button, Col, Divider, Pagination, Row, Skeleton } from 'antd'
import axios from 'axios'
import EstateSearch from '@/components/Filters/estate-search'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

const onChange = key => {
    console.log(key)
}

export function EstatesSection(props) {
    const { t } = useTranslation('common')

    const [loading, setLoading] = useState(false)
    const changeEstatesFoundCount = props.changeEstatesFoundCount
    const [estatesData, setEstatesData] = useState(props.estatesData)
    // const [filtersData, setFiltersData] = useState(props.filtersData);
    const filtersData = props.filtersData
    const queryData = props.queryData
    const queryDataParams = props.queryDataParams

    const [sortType, setSortType] = useState('created_on')
    const [pageDataURL, setPageDataURL] = useState(props.pageDataURL + '?')

    const pageSize = estatesData.meta.per_page
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
            setEstatesData(response.data)
            setTimeout(() => {
                setLoading(false)
            }, 500)
        })
    }

    const sortEstates = sortBy => {
        setLoading(true)
        const exactPageUrl = pageDataURL + 'sort=' + sortBy
        axios.get(exactPageUrl).then(response => {
            setEstatesData(response.data)
            setSortType(sortBy)
            setTimeout(() => {
                setLoading(false)
            }, 300)
        })
    }

    return (
        <>
            <ContainerBoxed>
                <div className="container property-area min-vh-100">
                    <Row>
                        <Col xs={24}>
                            <EstateSearch
                                filtersData={filtersData}
                                queryData={queryData}
                                queryDataParams={queryDataParams}
                                changeEstatesData={setEstatesData}
                                setLoading={setLoading}
                                setPageDataURL={setPageDataURL}
                            />
                        </Col>

                        <Divider />
                    </Row>
                    <Row>
                        <h4 className={'mb-5'}>
                            Բնակարաններ Երևանում
                            <small
                                className={'text-secondary ml-3 font-size-13'}>
                                / Որոնման արդյունքներ{' '}
                            </small>
                            <strong className={'text-dark font-size-13'}>
                                {' '}
                                {estatesData.meta.total}
                            </strong>
                        </h4>
                    </Row>
                    <Row className={'mb-5'}>
                        <Col xs={24} className={'sortButtonsWrapper'}>
                            <Button
                                className={'sortButton'}
                                onClick={() => sortEstates('')}>
                                {t('common:label.all')}
                            </Button>
                            <Button
                                className={'sortButton'}
                                onClick={() => sortEstates('created_on')}>
                                Նոր ավելացված
                            </Button>
                            <Button
                                className={'sortButton'}
                                onClick={() => sortEstates('-visits_count')}>
                                Ամենադիտված
                            </Button>
                            <Button
                                className={'sortButton'}
                                onClick={() => sortEstates('-room_count')}>
                                Շտապ
                            </Button>
                        </Col>
                    </Row>

                    <Row className="">
                        {!loading &&
                            estatesData.data?.map((item, index) => (
                                <Col
                                    xs={24}
                                    sm={12}
                                    md={8}
                                    xl={6}
                                    className={'pr-3 pl-3'}>
                                    <EstateItem key={index} item={item} />
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
                            total={estatesData.meta.total}
                            pageSizeOptions={[6, 9, 12, 24]}
                            locale={{ items_per_page: '' }}
                            onChange={handlePageChange}
                        />
                    </Row>
                </div>
            </ContainerBoxed>
        </>
    )
}

export default EstatesSection
