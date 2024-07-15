'use client'
import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import nextConfig from '../../../../../next.config'
import StyledBuildingListMap from '@/components/Buildings/List/BuildingListMap/style'
import BuildingMarker from '@/components/Buildings/BuildingMarker'

const BuildingListMap = ({ buildingsData }) => {
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
    const defaultZoom = 11

    const onGoogleApiLoaded = map => {
        setMapLoaded(true)
    }

    const defaultCenter = {
        lat: 40.178265,
        lng: 44.511021,
    }

    return (
        <StyledBuildingListMap>
            <GoogleMapReact
                bootstrapURLKeys={mapBootstrap}
                options={mapOptions}
                defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                    onGoogleApiLoaded(map, maps)
                }>
                {buildingsData?.map((building, index) => {
                    if (!building?.coordinates) {
                        return null
                    }

                    const [lat, lng] = building.coordinates
                        .split(',')
                        .map(Number)

                    const coords = {
                        lat: lat,
                        lng: lng,
                    }

                    return (
                        <BuildingMarker
                            key={index}
                            lat={coords.lat}
                            lng={coords.lng}
                            building={building}
                        />
                    )
                })}
            </GoogleMapReact>
        </StyledBuildingListMap>
    )
}

export default BuildingListMap
