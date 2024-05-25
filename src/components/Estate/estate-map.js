'use client'
import React, { useState } from 'react'
import { Col, Divider, Row } from 'antd'
import MapFilters from '@/components/Filters/MapFilters'
import EstatesGoogleMapNew from '@/components/Estate/estatesGoogleMapNew'

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

    return (
        <>
            <Row gutter={48}>
                <Col
                    xs={20}
                    sm={18}
                    className={''}
                    style={{ overflow: 'hidden' }}>
                    {/*<EstatesMap style={{ overflow: "hidden" }} toggleMap={onToggleMapClicked} />*/}

                    {/*<EstatesGoogleMap*/}
                    {/*    lng={lng}*/}
                    {/*    estatesData={estates}*/}
                    {/*    changeCoords={setCoords}*/}
                    {/*/>*/}
                    <EstatesGoogleMapNew
                        lng={lng}
                        estatesData={estates}
                        changeCoords={setCoords}
                    />
                </Col>

                <Col xs={5}>
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

                <Divider />
            </Row>
        </>
    )
}

export default EstateMap
