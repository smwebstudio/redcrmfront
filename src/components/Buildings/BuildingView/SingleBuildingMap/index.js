import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import nextConfig from '../../../../../next.config'
import FontIcon from '@/components/common/Icons/FontIcon'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import StyledSingleBuildingMap from '@/components/Buildings/BuildingView/SingleBuildingMap/style'

const Marker = ({ children }) => {
    return (
        <>
            <FontIcon icon={faLocationPin} size={'4x'} color={'#D8002C'} />
        </>
    )
}

const SingleBuildingMap = ({ building }) => {
    const [mapLoaded, setMapLoaded] = useState(false)

    const mapBootstrap = {
        key: nextConfig.env.GOOGLE_MAPS_API_KEY,
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
    // Split the coordinates string into an array
    const [lat, lng] = building.project.coordinates.split(',').map(Number)

    // Create the coords object
    const coords = {
        lat: lat,
        lng: lng,
    }
    const defaultZoom = 11

    const onGoogleApiLoaded = map => {
        setMapLoaded(true)
    }

    return (
        <StyledSingleBuildingMap>
            <GoogleMapReact
                bootstrapURLKeys={mapBootstrap}
                options={mapOptions}
                defaultCenter={coords}
                defaultZoom={defaultZoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                    onGoogleApiLoaded(map, maps)
                }>
                <Marker key={1} lat={coords.lat} lng={coords.lng} />
            </GoogleMapReact>
        </StyledSingleBuildingMap>
    )
}

export default SingleBuildingMap
