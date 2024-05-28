import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import MapDrawShapeManager from '@/lib/MapDrawShape/MapDrawShapeManager'
import nextConfig from '../../../next.config'
import api from '@/hooks/api'
import { apiURL } from '@/constants'
import { Button } from 'antd'
import useSupercluster from 'use-supercluster'
import EstateMarker from '@/components/Map/EstateMarker'

const Marker = ({ children }) => children

const EstatesGoogleMapNew = ({ lng, estatesData, changeCoords }) => {
    const [mapLoaded, setMapLoaded] = useState(false)
    const [drawingMode, setDrawingMode] = useState(false)
    const [drawFreeHandMode, setDrawFreeHandMode] = useState(true)
    const [estates, setEstates] = useState(estatesData)
    const mapDrawShapeManagerRef = useRef(null)
    const [coords, setCoords] = useState([])
    const [shape, setShape] = useState([])

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
    const defaultZoom = 7
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
    const [zoom, setZoom] = useState(10)

    const points = estates
        .map(estate => {
            const coords = [
                parseFloat(estate.native_coords[1]),
                parseFloat(estate.native_coords[0]),
            ]

            // Check if both coordinates are greater than 0
            if (coords[0] > 0 && coords[1] > 0) {
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
                        coordinates: coords,
                    },
                }
            }

            return null
        })
        .filter(point => point !== null) // Filter out the null values

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 50, maxZoom: 20 },
    })

    const [searchInfoBoxHidden, setSearchInfoBoxHidden] = useState(true)
    const [markers, setMarkers] = useState([])

    const fetchData = async () => {
        try {
            const startTime = new Date()
            let coordsToSend = encodeURIComponent(JSON.stringify(coords))
            const response = await api(lng).get(
                endpoint + '?fromMap=1&filter[coordinates]=' + coordsToSend,
            )
            const endTime = new Date()
            const responseTimeMs = endTime - startTime // Calculate response time in milliseconds
            const responseTimeSec = responseTimeMs / 1000 // Convert milliseconds to seconds

            console.log('mapresult in ' + responseTimeSec)

            setEstates(response.data.data)

            setSearchInfoBoxHidden(true)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
        // create an async function to fetch the data
        let coordsToSend = encodeURIComponent(JSON.stringify(coords))

        changeCoords(coordsToSend)

        // set a timeout to avoid sending too many requests in a short time
        const timeoutId = setTimeout(() => {
            fetchData()
        }, 2000)

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

    const handleDrawFreeHandMode = () => {
        setDrawFreeHandMode(!drawFreeHandMode)
        mapDrawShapeManagerRef.current.setDrawFreeHandMode(!drawFreeHandMode)
    }

    const resetDrawnShape = () => {
        setShape([])
        setEstates([])
        mapDrawShapeManagerRef.current.resetDrawnShape()
    }

    const mapContainerStyle = {
        height: '800px',
        width: 'calc(100vw - 35%)',
    }

    console.log('mapLoaded')
    console.log(mapLoaded)
    const mapRef = useRef()
    return (
        <>
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
                                            width: `${
                                                10 +
                                                (pointCount / points.length) *
                                                    20
                                            }px`,
                                            height: `${
                                                10 +
                                                (pointCount / points.length) *
                                                    20
                                            }px`,
                                            background: 'orange',
                                            padding: '15px',
                                            color: '#fff',
                                            fontSize: '16',
                                            borderRadius: '50%',
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
                <div
                    className={
                        'controls-container absolute z-30 left-50 top-0'
                    }>
                    <div className="center">
                        <Button
                            className="btn-control"
                            onClick={handleDrawingMode}>
                            {!drawingMode ? 'Start Draw' : 'Cancel Draw'}
                        </Button>
                        <Button
                            className="btn-control"
                            disabled={!shape.length > 0 || drawingMode}
                            onClick={resetDrawnShape}>
                            Clear Shape
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}

export default EstatesGoogleMapNew
