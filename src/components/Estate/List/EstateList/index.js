'use client'
import React, { useState } from 'react'
import { Button, Col, Divider, Pagination, Row } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { FullListSkeleton } from '@/components/common/Skeletons/FullListSkeleton'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import EstateFilters from '@/components/Estate/List/EstateFilters'
import { IconButton } from '@/components/common/Buttons/IconButton'
import gridTypeIcon from '@/assets/img/svg/gridType.svg'
import NextImage from '@/components/common/Image/NextImage'
import EstateItemGrid from '@/components/Estate/List/EstateItemGrid'
import EstateItemList from '@/components/Estate/List/EstateItemList'
import api from '@/hooks/api'

const EstateList = ({
    estatesData,
    filtersData,
    queryData,
    queryDataParams,
    lng,
    pageDataURLData,
}) => {
    const [estates, setEstates] = useState(estatesData)
    const [gridList, setGridList] = useState(true)
    const [totalCount, setTotalCount] = useState(estates.meta.total)
    const [estatesCount, setEstatesCount] = useState([])

    const { t } = useTranslation(lng, 'common')

    const [loading, setLoading] = useState(false)

    const [sortType, setSortType] = useState('created_on')
    const [pageSize, setPageSize] = useState(estates.meta.per_page)
    const [pageDataURL, setPageDataURL] = useState('')

    const handlePageChange = async (page, pageSize) => {
        setLoading(true)
        const exactPageUrl =
            pageDataURL +
            'page=' +
            page +
            '&page_size=' +
            pageSize +
            '&sort=' +
            sortType

        const estatesSortedResponse = await api(lng).get(exactPageUrl)

        const sortedEstates = estatesSortedResponse.data
        setEstates(sortedEstates)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    const toggleGrid = () => {
        setGridList(prevState => !prevState)
    }

    const sortEstates = async sortBy => {
        setLoading(true)
        const exactPageUrl = pageDataURL + '&sort=' + sortBy

        console.log('exactPageUrl')
        console.log(exactPageUrl)

        const estatesSortedResponse = await api(lng).get(exactPageUrl)

        const sortedEstates = estatesSortedResponse.data
        setEstates(sortedEstates)
        setSortType(sortBy)
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }

    return (
        <ContainerBoxed>
            <Row>
                <Col xs={24}>
                    <EstateFilters
                        filtersData={filtersData}
                        queryData={queryData}
                        queryDataParams={queryDataParams}
                        changeEstatesData={setEstates}
                        setLoading={setLoading}
                        setPageDataURL={setPageDataURL}
                        lng={lng}
                    />
                </Col>

                <Divider />
            </Row>
            <Row justify={'space-between'}>
                <Col xs={24} md={12}>
                    <DarkHeading2 className={'mb-5'}>
                        {t('label.saleRent')}
                        <small className={'text-secondary ml-3 font-size-13'}>
                            / {t('label.searchResults')}
                        </small>
                        <strong className={'text-dark font-size-13 ml-2'}>
                            {estates.meta.total}
                        </strong>
                    </DarkHeading2>
                </Col>
                <Col xs={24} md={12} className={'text-right'}>
                    <IconButton onClick={toggleGrid}>
                        <NextImage src={gridTypeIcon} />
                    </IconButton>
                </Col>
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

            <Row gutter={24}>
                {!loading &&
                    estates.data?.map((estate, index) => (
                        <Col
                            xs={24}
                            md={gridList ? 6 : 24}
                            key={index + '-col'}>
                            {gridList ? (
                                <EstateItemGrid key={index} estate={estate} />
                            ) : (
                                <EstateItemList key={index} estate={estate} />
                            )}
                        </Col>
                    ))}
            </Row>
            {loading && <FullListSkeleton />}
            <Row justify={'center'}>
                <Col
                    xs={24}
                    md={24}
                    className={'flex flex-row justify-center p-4'}>
                    <Pagination
                        pageSize={pageSize}
                        defaultCurrent={1}
                        total={estates.meta.total}
                        pageSizeOptions={[6, 9, 12, 24]}
                        locale={{ items_per_page: '' }}
                        onChange={handlePageChange}
                    />
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default EstateList
