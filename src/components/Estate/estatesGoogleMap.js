import React, { useEffect, useState } from 'react'
import {
    DrawingManager,
    GoogleMap,
    InfoWindow,
    Marker,
    MarkerClusterer,
    useJsApiLoader,
} from '@react-google-maps/api'
import { apiURL } from '@/constants'
import { useRouter } from 'next/navigation'
import api from '@/hooks/api'
import Link from 'next/link'
import { MagnifyingGlass } from 'react-loader-spinner'
import nextConfig from '../../../next.config'
import MapDrawShapeManager from '@/lib/MapDrawShape/MapDrawShapeManager'
import AppImage from '@/components/common/Image/AppImage'

const libraries = ['drawing']

const EstatesGoogleMap = ({ lng, estatesData, changeCoords }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'redgroup-script',
        googleMapsApiKey: nextConfig.env.GOOGLE_MAPS_API_KEY,
        nonce: 'map',
        libraries: ['drawing'],
    })

    const [drawingMode, setDrawingMode] = useState(null)
    const [searchInfoBoxHidden, setSearchInfoBoxHidden] = useState(true)
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState(null)
    const [coords, setCoords] = useState([
        [41.33864326945792, 47.69020142773721],
        [41.33864326945792, 42.97157349804971],
        [38.47399202518743, 42.97157349804971],
        [38.47399202518743, 47.69020142773721],
    ])
    const centerInitial = {
        lat: 40.177628,
        lng: 44.512546,
    }

    console.log(estatesData)

    const [fetchedData, setFetchedData] = useState([])
    useEffect(() => {
        const initialMarkers = estatesData.map(item => ({
            id: item.id,
            position: {
                lat: parseFloat(item.native_coords[0]),
                lng: parseFloat(item.native_coords[1]),
            },
            lat: parseFloat(item.native_coords[0]),
            lng: parseFloat(item.native_coords[1]),
            label: item.price,
            price: item.price,
            title: item.full_address,
            code: item.code,
            image: item.image,
            optimized: false,
        }))

        setMarkers(initialMarkers)

        console.log(99999)
    }, [estatesData])

    useEffect(() => {
        // create an async function to fetch the data
        let coordsToSend = encodeURIComponent(JSON.stringify(coords))

        changeCoords(coordsToSend)

        const fetchData = async () => {
            try {
                const response = await api(locale).get(
                    endpoint + '?fromMap=1&filter[coordinates]=' + coordsToSend,
                )
                const newMarkers = response.data.data.map(item => ({
                    id: item.id,
                    position: {
                        lat: parseFloat(item.native_coords[0]),
                        lng: parseFloat(item.native_coords[1]),
                    },
                    lat: parseFloat(item.native_coords[0]),
                    lng: parseFloat(item.native_coords[1]),
                    label: item.price,
                    price: item.price,
                    title: item.full_address,
                    code: item.code,
                    image: item.image,
                    optimized: false,
                }))

                setSearchInfoBoxHidden(true)
                setMarkers(newMarkers)
            } catch (error) {
                console.error(error)
            }
        }

        // set a timeout to avoid sending too many requests in a short time
        const timeoutId = setTimeout(() => {
            fetchData()
        }, 2000)

        // return a cleanup function to clear the timeout
        return () => {
            clearTimeout(timeoutId)
        }
    }, [coords])

    // set the markers to the fetched data

    const [selectedMarker, setSelectedMarker] = useState(null)
    const [center, setCenter] = useState(centerInitial)
    const router = useRouter()
    const { locale } = router
    const mapContainerStyle = {
        height: 'calc(100vh - 200px)',
        width: 'calc(100vw - 35%)',
    }

    const options = {
        styles: [
            {
                url: '/assets/img/svg/mapIcon.svg',
                height: 100,
                width: 100,
                textColor: 'white',
                textSize: 16,
                backgroundPosition: '0 35',
            },
        ],
        clusterClass: 'custom-clustericon',
        calculator: (markers, numStyles) => {
            return {
                text: markers.length,
                index: 0,
                title: markers.map(marker => marker.title).join('\n'),
            }
        },
        gridSize: 30,
        maxZoom: 22,
        minimumClusterSize: 3,
    }

    const onLoad = drawingManager => {
        console.log(drawingManager)
    }

    const endpoint = apiURL + 'api/estates/filter/estates'

    const [rectangle, setRectangle] = useState(null)

    const [buttonText, setButtonText] = useState('Շրջագծել')
    const handleStartDrawing = () => {
        setButtonText('Ջնջել')
        rectangle?.setOptions({ map: null })
        setDrawingMode('polyline')
    }

    const handleMapClick = () => {
        if (selectedMarker) {
            setSelectedMarker(null)
        }
    }

    const handleMapZoomChanged = () => {
        setSearchInfoBoxHidden(false)

        if (map) {
            setTimeout(() => {
                const bounds = map.getBounds()
                const ne = bounds.getNorthEast()
                const sw = bounds.getSouthWest()
                const newCoords = [
                    [ne.lat(), ne.lng()],
                    [ne.lat(), sw.lng()],
                    [sw.lat(), sw.lng()],
                    [sw.lat(), ne.lng()],
                ]

                const boundsRec = rectangle.getBounds()

                const outerPolygonCoords = [
                    {
                        lat: boundsRec.getNorthEast().lat(),
                        lng: boundsRec.getNorthEast().lng(),
                    },
                    {
                        lat: boundsRec.getNorthEast().lat(),
                        lng: boundsRec.getSouthWest().lng(),
                    },
                    {
                        lat: boundsRec.getSouthWest().lat(),
                        lng: boundsRec.getSouthWest().lng(),
                    },
                    {
                        lat: boundsRec.getSouthWest().lat(),
                        lng: boundsRec.getNorthEast().lng(),
                    },
                ]

                const outerPolygon = new google.maps.Polygon({
                    paths: outerPolygonCoords,
                })

                let isInside = true
                for (let i = 0; i < newCoords.length; i++) {
                    const vertex = new google.maps.LatLng(
                        newCoords[i][0],
                        newCoords[i][1],
                    )
                    if (
                        !google.maps.geometry.poly.containsLocation(
                            vertex,
                            outerPolygon,
                        )
                    ) {
                        isInside = false
                        break
                    }
                }

                if (isInside) {
                    setCoords(newCoords)
                    console.log('Inner polygon is inside the outer polygon')
                } else {
                    setSearchInfoBoxHidden(true)
                    console.log('Inner polygon is not inside the outer polygon')
                }
            }, 2000)
        }
    }

    const onRectangleComplete = rectangle => {
        setSearchInfoBoxHidden(false)
        setButtonText('Շրջագծել')
        setDrawingMode(null)
        setRectangle(rectangle)
        const rectangleCoords = rectangle.getBounds()
        const ne = rectangleCoords.getNorthEast()
        const sw = rectangleCoords.getSouthWest()

        const coordsRectangle = [
            [ne.lat(), ne.lng()],
            [ne.lat(), sw.lng()],
            [sw.lat(), sw.lng()],
            [sw.lat(), ne.lng()],
        ]

        setCoords(coordsRectangle)
    }

    const handleMarkerClick = marker => {
        setCenter(marker.position)
        setSelectedMarker(marker)
    }

    const handleCloseClick = () => {
        setSelectedMarker(null)
    }

    function createKey(location) {
        return location.lat + location.lng + location.id
    }

    const [rectangleOptions, setRectangleOptions] = useState({
        fillColor: '#D8002C', // green background color
        fillOpacity: 0.2,
        strokeWeight: 2,
        strokeColor: '#D8002C',
        clickable: false,
        editable: true,
        zIndex: 1,
    })

    const [markerOptions, setMarkerOptions] = useState({
        color: '#FFFFFF',
    })

    /*DrawingShapeManager*/

    if (isLoaded) {
        const onDrawCallback = shape => console.log(shape)
        // Flag indicating whether it should set Drawing Mode enabled
        const drawingModeManager = false
        // Flag indicating whether it should set Draw Free Hand Mode enabled
        const drawFreeHandMode = false
        // Object containing the google polygon options to be used when drawing
        const polygonOptions = {
            clickable: false,
            fillColor: '#303030',
            fillOpacity: 0.1,
            strokeColor: '#000000',
            strokeWeight: 4,
            strokeOpacity: 1,
        }
        // String with the inner HTML of the draw initial point overlay
        const initialPointInnerHtml = `<button class="your-custom-initial-point-class" title="Initial Point"></button>`
        // String with the inner HTML of the draw delete point overlay
        const deletePointInnerHtml = `<button class="your-custom-delete-point-class" title="Delete">X</button></div>`

        const initalShape = [
            { lat: 40.71755745031312, lng: 44.34395756832437 },
            { lat: 40.780999209652855, lng: 44.82210698238687 },
            { lat: 40.91016617157451, lng: 44.82259526363687 },
            { lat: 40.71755745031312, lng: 44.34395756832437 },
        ]

        const manager = new MapDrawShapeManager(
            map,
            onDrawCallback,
            drawingModeManager,
            drawFreeHandMode,
            polygonOptions,
            initialPointInnerHtml,
            deletePointInnerHtml,
        )
        manager.initDrawnShape(initalShape)

        manager.setDrawFreeHandMode(true)
    }

    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={13}
                    onLoad={map => setMap(map)}
                    onClick={handleMapClick}
                    onZoomChanged={handleMapZoomChanged}
                    onResize={handleMapZoomChanged}
                    options={{
                        gestureHandling: 'greedy',
                    }}
                    gestureHandling={'greedy'}>
                    {!searchInfoBoxHidden && (
                        <div
                            style={{
                                backgroundColor: 'transparent',
                                opacity: 1,
                                width: '160px',
                            }}>
                            <MagnifyingGlass
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="MagnifyingGlass-loading"
                                wrapperStyle={{
                                    zIndex: '999999',
                                    width: '80px',
                                    height: '80px',
                                    position: 'absolute',
                                    left: '45%',
                                    top: '42%',
                                }}
                                wrapperClass="MagnifyingGlass-wrapper"
                                glassColor="#FFFFFF"
                                color="#777777"
                            />
                        </div>
                    )}
                    <button
                        onClick={handleStartDrawing}
                        className="btn btn-main-transparent map-pencil"
                        id="start_drawing"
                        drawable="false">
                        <span className="drawing-icon mr-2 flex">
                            <AppImage
                                alt={'Red Group'}
                                src={'/assets/img/svg/pencil.svg'}
                                width={'25px'}
                            />
                        </span>{' '}
                        <span className="drawing-title">{buttonText}</span>
                    </button>
                    <DrawingManager
                        onLoad={onLoad}
                        onRectangleComplete={onRectangleComplete}
                        drawingMode={drawingMode}
                        options={{
                            rectangleOptions: rectangleOptions,
                            markerOptions: markerOptions,
                            drawingControlOptions: {
                                position: -5,
                                drawingModes: [
                                    google.maps.drawing.OverlayType.RECTANGLE,
                                ],
                            },
                        }}
                    />

                    <MarkerClusterer options={options}>
                        {clusterer =>
                            markers.map(marker => (
                                <Marker
                                    key={createKey(marker)}
                                    position={marker}
                                    clusterer={clusterer}
                                    onClick={() => handleMarkerClick(marker)}
                                    icon={'/assets/img/svg/mapIcon.svg'}
                                    label={{
                                        text: marker.label,
                                        color: '#FFFFFF', // set the color to white
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                    }}
                                />
                            ))
                        }
                    </MarkerClusterer>
                    {selectedMarker && (
                        <InfoWindow
                            position={selectedMarker}
                            options={{ disableAutoPan: true, maxWidth: 350 }}
                            anchor={selectedMarker}
                            onCloseClick={handleCloseClick}
                            content={selectedMarker.id}>
                            <div>
                                <Link
                                    href={'/estates/' + selectedMarker.id}
                                    legacyBehavior>
                                    <div
                                        className={'flex flex-row items-start'}>
                                        <div className={'mr-4'}>
                                            <AppImage
                                                preview={false}
                                                src={selectedMarker.image}
                                                height={100}
                                                alt={selectedMarker.title}
                                            />
                                        </div>
                                        <div
                                            className={
                                                'flex flex-col items-start'
                                            }>
                                            <h3>
                                                <span
                                                    className={
                                                        'text-main font-bold  font-size-16'
                                                    }>
                                                    {selectedMarker.price}
                                                </span>{' '}
                                                | {selectedMarker.code}
                                            </h3>
                                            <h3>{selectedMarker.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            )}
        </>
    )
}

export default EstatesGoogleMap
