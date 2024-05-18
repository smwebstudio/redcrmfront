import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import MapDrawShapeManager from '@/lib/MapDrawShape/MapDrawShapeManager'
import nextConfig from '../../../next.config'
import api from '@/hooks/api'
import { useRouter } from 'next/navigation'
import { apiURL } from '@/constants'

const EstatesGoogleMapNew = props => {
    const [mapLoaded, setMapLoaded] = useState(false)
    const [drawingMode, setDrawingMode] = useState(false)
    const [drawFreeHandMode, setDrawFreeHandMode] = useState(true)
    const [shape, setShape] = useState([])
    const mapDrawShapeManagerRef = useRef(null)

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

    const router = useRouter()
    const { locale } = router
    const endpoint = apiURL + 'api/estates/filter/estates'
    const onGoogleApiLoaded = map => {
        const { drawingMode, drawFreeHandMode } = {
            drawingMode,
            drawFreeHandMode,
        }

        mapDrawShapeManagerRef.current = new MapDrawShapeManager(
            map,
            onDrawCallback,
            drawingMode,
            true,
            polygonOptions,
            initialPointInnerHtml,
            deletePointInnerHtml,
        )

        setMapLoaded(true)
    }
    const estatesData = props.estatesData
    const changeCoords = props.changeCoords

    const [coords, setCoords] = useState([
        [41.33864326945792, 47.69020142773721],
        [41.33864326945792, 42.97157349804971],
        [38.47399202518743, 42.97157349804971],
        [38.47399202518743, 47.69020142773721],
    ])
    const [searchInfoBoxHidden, setSearchInfoBoxHidden] = useState(true)
    const [markers, setMarkers] = useState([])

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

    const onDrawCallback = shape => {
        console.log('shapasdasdasde')
        console.log(shape)

        let newCoords = shape.map(({ lat, lng }) => [lat, lng])

        console.log('newCoords')
        console.log(newCoords)

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
        mapDrawShapeManagerRef.current.resetDrawnShape()
    }

    const mapContainerStyle = {
        height: 'calc(100vh - 200px)',
        width: 'calc(100vw - 35%)',
    }

    console.log('mapLoaded')
    console.log(mapLoaded)

    return (
        <>
            <div className="header-container">
                <div className="center">
                    <h2>Google Maps Draw Shape</h2>
                </div>
            </div>
            <div className="map-container " style={mapContainerStyle}>
                <GoogleMapReact
                    bootstrapURLKeys={mapBootstrap}
                    options={mapOptions}
                    defaultCenter={defaultCenter}
                    defaultZoom={defaultZoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) =>
                        onGoogleApiLoaded(map, maps)
                    }
                />
            </div>
            {mapLoaded && (
                <div
                    className={
                        'controls-container absolute z-30 left-50 top-0'
                    }>
                    <div className="center">
                        <button
                            className="btn-control"
                            onClick={handleDrawingMode}>
                            {!drawingMode ? 'Start Draw' : 'Cancel Draw'}
                        </button>
                        <button
                            className="btn-control"
                            disabled={!shape.length > 0 || drawingMode}
                            onClick={resetDrawnShape}>
                            Clear Shape
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default EstatesGoogleMapNew
