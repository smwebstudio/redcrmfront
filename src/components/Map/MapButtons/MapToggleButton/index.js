'use client'
import React, { useContext } from 'react'
import StyledMapToggleButton from '@/components/Map/MapButtons/MapToggleButton/style'
import { MapContext } from '@/providers/MapProvider'
import FontIcon from '@/components/common/Icons/FontIcon'
import { faArrowRightLong, faClose } from '@fortawesome/free-solid-svg-icons'

export function MapToggleButton({ ...props }) {
    const { openMap, toggleMapContainer } = useContext(MapContext)
    return (
        <StyledMapToggleButton onClick={toggleMapContainer}>
            {openMap ? (
                <FontIcon icon={faClose} color={'#959595'} size={'2x'} />
            ) : (
                <FontIcon
                    icon={faArrowRightLong}
                    color={'#959595'}
                    size={'2x'}
                />
            )}
        </StyledMapToggleButton>
    )
}

export default MapToggleButton
