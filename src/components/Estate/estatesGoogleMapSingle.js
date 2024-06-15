import React, { useState } from 'react'
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useJsApiLoader,
} from '@react-google-maps/api'
import nextConfig from '../../../next.config'
import AppImage from '@/components/common/Image/AppImage'
import { isMobile } from 'react-device-detect'

const libraries = ['drawing']

const EstatesGoogleMapSingle = props => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'redgroup-script',
        googleMapsApiKey: nextConfig.env.GOOGLE_MAPS_API_KEY,
        nonce: 'map',
        libraries: ['drawing'],
    })

    const [map, setMap] = useState(null)
    const centerInitial = {
        lat: 40.177628,
        lng: 44.512546,
    }

    const markerInitial = props.marker

    const markerChanged = [markerInitial].map(item => {
        return {
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
        }
    })

    const [marker, setMarker] = useState(markerChanged[0])

    const [selectedMarker, setSelectedMarker] = useState(markerChanged[0])

    const [center, setCenter] = useState(centerInitial)
    const mapContainerStyle = {
        height: '500px',
        width: isMobile ? '100%' : '1280px',
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

    const [markerOptions, setMarkerOptions] = useState({
        color: '#FFFFFF',
    })

    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={marker.position}
                    zoom={14}
                    onLoad={map => setMap(map)}>
                    <Marker
                        key={createKey(marker)}
                        position={marker.position}
                        onClick={() => handleMarkerClick(marker)}
                        icon={'/assets/img/svg/mapIcon.svg'}
                        label={{
                            text: marker.label,
                            color: '#FFFFFF', // set the color to white
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}
                    />

                    <InfoWindow
                        position={selectedMarker}
                        options={{ disableAutoPan: true, maxWidth: 350 }}
                        onCloseClick={handleCloseClick}>
                        <div>
                            <div className={'flex flex-row items-start'}>
                                <div className={'mr-4'}>
                                    <AppImage
                                        preview={false}
                                        src={selectedMarker.image}
                                        height={100}
                                        alt={selectedMarker.title}
                                    />
                                </div>
                                <div className={'flex flex-col items-start'}>
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
                        </div>
                    </InfoWindow>
                </GoogleMap>
            )}
        </>
    )
}

export default EstatesGoogleMapSingle
