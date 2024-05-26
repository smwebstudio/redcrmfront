import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import nextConfig from '../../../../../next.config'
import ContactBlockWrapper from '@/components/common/Wrappers/ContactBlockWrapper'
import FontIcon from '@/components/common/Icons/FontIcon'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

const Marker = ({ children }) => {
    return (
        <>
            <FontIcon icon={faLocationPin} size={'4x'} color={'#D8002C'} />
        </>
    )
}

const ContactMap = ({ lng, estatesData, changeCoords }) => {
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
    const defaultCenter = {
        lat: 40.178265,
        lng: 44.511021,
    }
    const defaultZoom = 11

    const onGoogleApiLoaded = map => {
        setMapLoaded(true)
    }

    const mapContainerStyle = {
        height: '400px',
        width: '100%',
    }

    return (
        <ContactBlockWrapper>
            <div style={mapContainerStyle}>
                <GoogleMapReact
                    bootstrapURLKeys={mapBootstrap}
                    options={mapOptions}
                    defaultCenter={defaultCenter}
                    defaultZoom={defaultZoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) =>
                        onGoogleApiLoaded(map, maps)
                    }>
                    <Marker
                        key={1}
                        lat={defaultCenter.lat}
                        lng={defaultCenter.lng}
                    />
                </GoogleMapReact>
            </div>
        </ContactBlockWrapper>
    )
}

export default ContactMap
