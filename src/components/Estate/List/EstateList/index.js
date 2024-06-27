'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Affix, Button, Col, Drawer, Pagination, Row } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import { FullListSkeleton } from '@/components/common/Skeletons/FullListSkeleton'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import EstateFilters from '@/components/Estate/List/EstateFilters'
import { IconButton } from '@/components/common/Buttons/IconButton'
import gridTypeIcon from '@/assets/img/svg/gridType.svg'
import NextImage from '@/components/common/Image/NextImage'
import EstateItemGrid from '@/components/Estate/List/EstateItemGrid'
import EstateItemList from '@/components/Estate/List/EstateItemList'
import api from '@/hooks/api'
import EstateMapSearch from '@/components/Estate/EstateMap'
import { MapContext } from '@/providers/MapProvider'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import EstateItemMapList from '@/components/Estate/List/EstateItemMapList'
import { FilterContext } from '@/providers/FilterProvider'
import { AdditionalButtonMobile } from '@/components/common/Buttons/AdditionalButtonMobile'
import StyledEstateList from '@/components/Estate/List/EstateList/style'
import AppTabs from '@/components/common/Tabs/AppTabs'
import { BrowserView, MobileView } from 'react-device-detect'
import MobileEstateList from '@/components/Estate/List/EstateList/MobileEstateList'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const EstateList = ({
    estatesData,
    filtersData,
    queryDataParams,
    lng,
    pageDataURLData,
}) => {
    const { t } = useTranslation(lng, 'common')
    const { filteredEstates } = useContext(FilterContext)
    const { openMap } = useContext(MapContext)

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const page = searchParams.get('page')

    const [estates, setEstates] = useState(estatesData)
    const [gridList, setGridList] = useState(true)
    const [totalCount, setTotalCount] = useState(estates.meta.total)
    const [loading, setLoading] = useState(false)
    const [sortType, setSortType] = useState('created_on')
    const [pageSize, setPageSize] = useState(estates.meta.per_page)
    const [pageDataURL, setPageDataURL] = useState('')
    const [openMobileFilters, setOpenMobileFilters] = useState(false)
    const [activeTabKey, setActiveTabKey] = useState('listview')
    const [current, setCurrent] = useState(page ? Number(page) : 1)
    const [queryParam, setQueryParam] = useState(searchParams.toString())

    useEffect(() => {
        if (filteredEstates) {
            setEstates(filteredEstates)
            setTotalCount(filteredEstates.meta.total)
        }
    }, [filteredEstates])

    useEffect(() => {
        const fetchList = async () => {
            try {
                const params = new URLSearchParams(searchParams)

                const response = await api(lng).get(
                    'api/estates/filter/estates',
                    {
                        params: params,
                    },
                )

                setEstates(response.data)

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

    const toggleGrid = () => {
        setGridList(prevState => !prevState)
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

    const changeTab = activeKey => {
        if (activeKey === 'additional') {
            setOpenMobileFilters(true)
            setActiveTabKey('listview')
        } else {
            setActiveTabKey(activeKey)
        }
    }

    const mobileTabItems = [
        {
            key: '1',
            label: t('label.map'),
            children: (
                <EstateMapSearch
                    lng={lng}
                    estatesData={estates}
                    updateFilteredEstates={setEstates}
                />
            ),
        },
        {
            key: 'listview',
            label: t('label.listView'),
            children: <MobileEstateList lng={lng} estatesData={estates} />,
        },
        {
            key: 'additional',
            label: <AdditionalButtonMobile />,
            children: '',
        },
    ]

    const showDrawer = () => {
        setOpenMobileFilters(true)
    }

    const onClose = () => {
        setOpenMobileFilters(false)
    }

    return (
        <StyledEstateList>
            <ContainerFluid>
                <MobileView>
                    <Row
                        className={'mobile_switchers'}
                        justify={'space-between'}>
                        <Col xs={24}>
                            <AppTabs
                                onChange={changeTab}
                                items={mobileTabItems}
                                defaultActiveKey={activeTabKey}
                                activeKey={activeTabKey}
                            />
                        </Col>
                    </Row>
                    <Drawer
                        title={t('label.additional')}
                        placement={'right'}
                        onClose={onClose}
                        open={openMobileFilters}>
                        <EstateFilters
                            filtersData={filtersData}
                            queryDataParams={queryDataParams}
                            setLoading={setLoading}
                            setPageDataURL={setPageDataURL}
                            lng={lng}
                            openMap={openMap}
                            openAdditionalFilters={openMobileFilters}
                            setOpenMobileFilters={setOpenMobileFilters}
                        />
                    </Drawer>
                </MobileView>

                <BrowserView>
                    <Row gutter={40} className={'pr-4'}>
                        <Col
                            xs={openMap ? 24 : 0}
                            sm={openMap ? 16 : 4}
                            style={{ overflow: 'hidden' }}>
                            {estates && (
                                <Affix offsetTop={100}>
                                    <EstateMapSearch
                                        lng={lng}
                                        estatesData={estates}
                                        updateFilteredEstates={setEstates}
                                    />
                                </Affix>
                            )}
                        </Col>

                        <Col xs={openMap ? 24 : 0} sm={openMap ? 8 : 20}>
                            <Row>
                                <Col
                                    xs={{
                                        span: openMap ? 24 : 10,
                                        offset: openMap ? 0 : 14,
                                    }}
                                    className={'mb-4'}>
                                    <EstateFilters
                                        filtersData={filtersData}
                                        queryDataParams={queryDataParams}
                                        setLoading={setLoading}
                                        setPageDataURL={setPageDataURL}
                                        lng={lng}
                                        openMap={openMap}
                                    />
                                </Col>
                                <Col xs={24}>
                                    <Row>
                                        <Col xs={24}>
                                            <Row justify={'space-between'}>
                                                <Col
                                                    xs={24}
                                                    md={openMap ? 24 : 12}>
                                                    <DarkHeading2
                                                        className={'mb-5'}>
                                                        {t(
                                                            'label.searchResults',
                                                        )}{' '}
                                                        /
                                                        <strong
                                                            className={
                                                                'text-dark font-size-13 ml-2'
                                                            }>
                                                            {totalCount}
                                                        </strong>
                                                    </DarkHeading2>
                                                </Col>
                                                {!openMap && (
                                                    <Col
                                                        xs={24}
                                                        md={12}
                                                        className={
                                                            'text-right'
                                                        }>
                                                        <IconButton
                                                            onClick={
                                                                toggleGrid
                                                            }>
                                                            <NextImage
                                                                src={
                                                                    gridTypeIcon
                                                                }
                                                            />
                                                        </IconButton>
                                                    </Col>
                                                )}
                                            </Row>
                                            {!openMap && (
                                                <Row className={'mb-5'}>
                                                    <Col
                                                        xs={24}
                                                        className={
                                                            'sortButtonsWrapper'
                                                        }>
                                                        <Button
                                                            className={
                                                                'sortButton'
                                                            }
                                                            onClick={() =>
                                                                sortEstates('')
                                                            }>
                                                            {t(
                                                                'common:label.all',
                                                            )}
                                                        </Button>
                                                        <Button
                                                            className={
                                                                'sortButton'
                                                            }
                                                            onClick={() =>
                                                                sortEstates(
                                                                    'created_on',
                                                                )
                                                            }>
                                                            Նոր ավելացված
                                                        </Button>
                                                        <Button
                                                            className={
                                                                'sortButton'
                                                            }
                                                            onClick={() =>
                                                                sortEstates(
                                                                    '-visits_count',
                                                                )
                                                            }>
                                                            Ամենադիտված
                                                        </Button>
                                                        <Button
                                                            className={
                                                                'sortButton'
                                                            }
                                                            onClick={() =>
                                                                sortEstates(
                                                                    '-room_count',
                                                                )
                                                            }>
                                                            Շտապ
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            )}
                                            <Row gutter={[24, 8]}>
                                                {!loading &&
                                                    estates.data?.map(
                                                        (estate, index) => (
                                                            <Col
                                                                xs={24}
                                                                md={
                                                                    gridList &&
                                                                    !openMap
                                                                        ? 6
                                                                        : 24
                                                                }
                                                                key={
                                                                    index +
                                                                    '-col'
                                                                }>
                                                                {gridList &&
                                                                    !openMap && (
                                                                        <EstateItemGrid
                                                                            key={
                                                                                index
                                                                            }
                                                                            estate={
                                                                                estate
                                                                            }
                                                                        />
                                                                    )}

                                                                {!gridList &&
                                                                    !openMap && (
                                                                        <EstateItemList
                                                                            key={
                                                                                index
                                                                            }
                                                                            estate={
                                                                                estate
                                                                            }
                                                                        />
                                                                    )}

                                                                {openMap && (
                                                                    <EstateItemMapList
                                                                        key={
                                                                            index
                                                                        }
                                                                        estate={
                                                                            estate
                                                                        }
                                                                    />
                                                                )}
                                                            </Col>
                                                        ),
                                                    )}
                                            </Row>
                                            {loading && <FullListSkeleton />}
                                            <Row justify={'center'}>
                                                <Col
                                                    xs={24}
                                                    md={24}
                                                    className={
                                                        'flex flex-row justify-center p-4'
                                                    }>
                                                    <Pagination
                                                        pageSize={pageSize}
                                                        defaultCurrent={1}
                                                        total={
                                                            estates.meta.total
                                                        }
                                                        pageSizeOptions={[
                                                            6,
                                                            9,
                                                            12,
                                                            24,
                                                        ]}
                                                        onChange={onPageChange}
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </BrowserView>
            </ContainerFluid>
        </StyledEstateList>
    )
}

export default EstateList
