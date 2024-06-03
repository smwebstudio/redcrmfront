import React, { useEffect, useMemo, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import MapDrawShapeManager from '@/lib/MapDrawShape/MapDrawShapeManager'
import api from '@/hooks/api'
import { apiURL } from '@/constants'
import useSupercluster from 'use-supercluster'
import EstateMarker from '@/components/Map/EstateMarker'
import MapToggleButton from '@/components/Map/MapButtons/MapToggleButton'
import MapDraw from '@/components/Map/MapButtons/MapDraw'
import { Spin } from 'antd'
import nextConfig from '../../../../next.config'
import StyledEstateMap from '@/components/Estate/EstateMap/style'

const Marker = ({ children }) => children

const EstateMapSearch = ({ lng, estatesData, updateFilteredEstates }) => {
    const [mapLoaded, setMapLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [drawingMode, setDrawingMode] = useState(false)
    const [drawFreeHandMode, setDrawFreeHandMode] = useState(true)
    const [estates, setEstates] = useState(estatesData.data)
    const mapDrawShapeManagerRef = useRef(null)
    const [coords, setCoords] = useState([])
    const [shape, setShape] = useState([])
    const [radius, setRadius] = useState(50)

    const mapBootstrap = {
        key: nextConfig.env.GOOGLE_MAPS_API_KEY,
        libraries: ['drawing'],
    }
    const mapOptions = {
        mapTypeId: 'roadmap',
        minZoom: 5,
        maxZoom: 20,
        gestureHandling: 'greedy',
        disableDefaultUI: true,
        scrollwheel: true,
        clickableIcons: false,
        rotateControl: false,
        tilt: 0,
    }
    const defaultCenter = {
        lat: 40.177628,
        lng: 44.512546,
    }
    const defaultZoom = 10
    const polygonOptions = {
        clickable: false,
        fillColor: '#303030',
        fillOpacity: 0.1,
        strokeColor: '#000000',
        strokeWeight: 4,
        strokeOpacity: 1,
    }
    const initialPointInnerHtml = `<button class="btn-initial-point" title="Initial Point"></button>`
    const deletePointInnerHtml = `<button class="btn-delete-point" title="Delete">X</button></div>`

    const endpoint = apiURL + 'api/estates/geoFilter/estates'
    const onGoogleApiLoaded = map => {
        mapRef.current = map
        mapDrawShapeManagerRef.current = new MapDrawShapeManager(
            map,
            onDrawCallback,
            drawingMode,
            true,
            polygonOptions,
            initialPointInnerHtml,
            deletePointInnerHtml,
        )
        mapRef.current = map
        setMapLoaded(true)
    }

    const [bounds, setBounds] = useState(null)
    const [zoom, setZoom] = useState(18)
    useEffect(() => {}, [])
    const points = useMemo(() => {
        return estates
            .map(estate => {
                const estateCoords = [
                    parseFloat(estate.native_coords[1]),
                    parseFloat(estate.native_coords[0]),
                ]

                const minIncrement = -0.0001 // Adjust as needed
                const maxIncrement = 0.001 // Adjust as needed

                // Generate random increments for each coordinate
                const randomIncrement1 =
                    Math.random() * (maxIncrement - minIncrement) + minIncrement

                // Apply the random increments to the coordinates

                // Check if both coordinates are greater than 0
                if (estateCoords[0] > 0 && estateCoords[1] > 0) {
                    estateCoords[0] += randomIncrement1
                    return {
                        type: 'Feature',
                        properties: {
                            cluster: false,
                            estateId: estate.id,
                            category: 'estate',
                            estate: estate,
                        },
                        geometry: {
                            type: 'Point',
                            coordinates: estateCoords,
                        },
                    }
                }

                return null
            })
            .filter(point => point !== null)
    }, [estates])
    // Filter out the null values

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: radius, maxZoom: 30 },
    })

    const [searchInfoBoxHidden, setSearchInfoBoxHidden] = useState(true)
    const [markers, setMarkers] = useState([])

    const fetchData = async () => {
        try {
            setLoading(true)
            let coordsToSend = encodeURIComponent(JSON.stringify(coords))
            const response = await api(lng).get(
                endpoint + '?fromMap=1&filter[coordinates]=' + coordsToSend,
            )

            setEstates(response.data.data)
            updateFilteredEstates(response.data)

            setSearchInfoBoxHidden(true)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        // set a timeout to avoid sending too many requests in a short time
        const timeoutId = setTimeout(() => {
            fetchData()
        }, 200)

        // return a cleanup function to clear the timeout
        return () => {
            clearTimeout(timeoutId)
        }
    }, [coords])

    const onDrawCallback = shape => {
        let newCoords = shape.map(({ lat, lng }) => [lat, lng])
        setCoords(newCoords)
        setShape(shape)
        setDrawingMode(false)
    }

    const handleDrawingMode = () => {
        setDrawingMode(!drawingMode)
        mapDrawShapeManagerRef.current.setDrawingMode(!drawingMode)
    }

    const resetDrawnShape = () => {
        setShape([])
        setEstates([])
        mapDrawShapeManagerRef.current.resetDrawnShape()
    }

    const mapContainerStyle = {
        height: '850px',
        width: '100%',
    }

    const mapRef = useRef()

    return (
        <StyledEstateMap>
            <div className="map-container " style={mapContainerStyle}>
                <GoogleMapReact
                    bootstrapURLKeys={mapBootstrap}
                    options={mapOptions}
                    defaultCenter={defaultCenter}
                    defaultZoom={defaultZoom}
                    yesIWantToUseGoogleMapApiInternals
                    onChange={({ zoom, bounds }) => {
                        setZoom(zoom)
                        setBounds([
                            bounds.nw.lng,
                            bounds.se.lat,
                            bounds.se.lng,
                            bounds.nw.lat,
                        ])
                    }}
                    onGoogleApiLoaded={({ map, maps }) =>
                        onGoogleApiLoaded(map, maps)
                    }>
                    {clusters.map(cluster => {
                        const [
                            longitude,
                            latitude,
                        ] = cluster.geometry.coordinates
                        const {
                            cluster: isCluster,
                            point_count: pointCount,
                        } = cluster.properties

                        if (isCluster) {
                            return (
                                <Marker
                                    key={`cluster-${cluster.id}`}
                                    lat={latitude}
                                    lng={longitude}>
                                    <div
                                        className="cluster-marker"
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                            background: 'orange',
                                            padding: ' 5px',
                                            color: '#fff',
                                            fontSize: '12px',
                                            borderRadius: '50%',
                                            textAlign: 'center',
                                        }}
                                        onClick={() => {
                                            const expansionZoom = Math.min(
                                                supercluster.getClusterExpansionZoom(
                                                    cluster.id,
                                                ),
                                                20,
                                            )
                                            mapRef.current.setZoom(
                                                expansionZoom,
                                            )
                                            mapRef.current.panTo({
                                                lat: latitude,
                                                lng: longitude,
                                            })
                                        }}>
                                        {pointCount}
                                    </div>
                                </Marker>
                            )
                        }

                        return (
                            <EstateMarker
                                key={cluster.properties.estateId}
                                lat={latitude}
                                lng={longitude}
                                estate={cluster.properties.estate}
                            />
                        )
                    })}
                </GoogleMapReact>
            </div>
            {mapLoaded && (
                <>
                    <MapDraw
                        handleDrawingMode={handleDrawingMode}
                        resetDrawnShape={resetDrawnShape}
                        drawingMode={drawingMode}
                        readyDelete={shape.length > 0}
                    />
                    <MapToggleButton />
                    <Spin
                        size="large"
                        className={'map-loading'}
                        spinning={loading}
                    />
                </>
            )}
        </StyledEstateMap>
    )
}

export default EstateMapSearch
