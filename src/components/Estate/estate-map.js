'use client'
import React, { useContext, useState } from 'react'
import { Col, Row } from 'antd'
import MapFilters from '@/components/Filters/MapFilters'
import { MapContext } from '@/providers/MapProvider'
import EstateMapSearch from '@/components/Estate/EstateMap'

function EstateMap({
    lng,
    estatesData,
    pageDataURL,
    filtersData,
    queryData,
    queryDataParams,
}) {
    const [estates, setEstates] = useState(estatesData)
    const [coords, setCoords] = useState([])
    const [sortType, setSortType] = useState('created_on')
    const [pageDataURLLink, setPageDataURLLink] = useState(pageDataURL + '?')

    const [loading, setLoading] = useState(false)
    const { openMap, toggleMapContainer } = useContext(MapContext)
    return (
        <Row gutter={48}>
            <Col xs={24} sm={openMap ? 16 : 4} style={{ overflow: 'hidden' }}>
                <EstateMapSearch lng={lng} estatesData={estates} />
            </Col>

            <Col xs={24} sm={openMap ? 8 : 20}>
                <MapFilters
                    filtersData={filtersData}
                    queryData={queryData}
                    queryDataParams={queryDataParams}
                    changeEstatesData={setEstates}
                    coords={coords}
                    setLoading={setLoading}
                    setPageDataURL={setPageDataURLLink}
                />
            </Col>
        </Row>
    )
}

export default EstateMap
