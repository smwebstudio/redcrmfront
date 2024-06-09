'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Pagination, Row } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import { FullListSkeleton } from '@/components/common/Skeletons/FullListSkeleton'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import api from '@/hooks/api'
import { MapContext } from '@/providers/MapProvider'
import EstateItemMapList from '@/components/Estate/List/EstateItemMapList'
import { FilterContext } from '@/providers/FilterProvider'
import StyledMobileEstateList from '@/components/Estate/List/EstateList/MobileEstateList/style'

const MobileEstateList = ({ estatesData, lng }) => {
    const { t } = useTranslation(lng, 'common')
    const { filteredEstates } = useContext(FilterContext)
    const { openMap } = useContext(MapContext)

    const [estates, setEstates] = useState(estatesData)
    const [gridList, setGridList] = useState(true)
    const [totalCount, setTotalCount] = useState(estates.meta.total)
    const [loading, setLoading] = useState(false)
    const [sortType, setSortType] = useState('created_on')
    const [pageSize, setPageSize] = useState(estates.meta.per_page)
    const [pageDataURL, setPageDataURL] = useState('')

    useEffect(() => {
        if (filteredEstates) {
            setEstates(filteredEstates)
            setTotalCount(filteredEstates.meta.total)
        }
    }, [filteredEstates])

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

    const sortEstates = async sortBy => {
        setLoading(true)
        const exactPageUrl = pageDataURL + '&sort=' + sortBy

        const estatesSortedResponse = await api(lng).get(exactPageUrl)

        const sortedEstates = estatesSortedResponse.data
        setEstates(sortedEstates)
        setSortType(sortBy)
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }

    return (
        <StyledMobileEstateList>
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <DarkHeading2>
                        {t('label.searchResults')} /
                        <strong className={'text-dark font-size-13 ml-2'}>
                            {totalCount}
                        </strong>
                    </DarkHeading2>
                </Col>
                <Col xs={24}>
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
                                onClick={() => sortEstates('-room_count')}>
                                Շտապ
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24}>
                    <Row gutter={[0, 8]}>
                        {!loading &&
                            estates.data?.map((estate, index) => (
                                <Col xs={24} key={index}>
                                    <EstateItemMapList
                                        key={index}
                                        estate={estate}
                                    />
                                </Col>
                            ))}
                    </Row>
                    {loading && <FullListSkeleton />}
                </Col>
                <Col xs={24}>
                    <Pagination
                        pageSize={pageSize}
                        defaultCurrent={1}
                        total={estates.meta.total}
                        pageSizeOptions={[6, 9, 12, 24]}
                        onChange={handlePageChange}
                    />
                </Col>
            </Row>
        </StyledMobileEstateList>
    )
}

export default MobileEstateList
