'use client'
import React, { createContext, useState } from 'react'

const defaultMapContext = {
    openMap: false,
    coords: [],
    toggleMapContainer: async () => {},
    updateCoords: async () => {},
}

export const MapContext = createContext(defaultMapContext)

export const MapProvider = ({ children }) => {
    const YerevanBoundCoords = [
        [40.49689723302987, 44.25162070703122],
        [40.511515937692565, 44.25436728906247],
        [40.4927198750805, 44.25436728906247],
        [40.49063109857814, 44.34225791406247],
        [40.46765026606622, 44.43289512109372],
        [40.3610000064599, 44.62240928124997],
        [40.26466070367161, 44.70755332421872],
        [40.208049724217936, 44.70755332421872],
        [40.157689126665865, 44.68558066796872],
        [40.12409462847527, 44.61416953515622],
        [40.126194771247576, 44.50155967187497],
        [40.14929205942324, 44.44937461328122],
        [40.302375059329144, 44.33127158593747],
        [40.49689723302987, 44.25162070703122],
    ]

    const [openMap, setOpenMap] = useState(true)
    const [coords, setCoords] = useState(YerevanBoundCoords)
    const toggleMapContainer = () => {
        setOpenMap(prevState => !prevState)
    }

    const updateCoords = coords => {
        setCoords(coords)
    }

    return (
        <MapContext.Provider
            value={{
                openMap,
                coords,
                toggleMapContainer,
                updateCoords,
            }}>
            {children}
        </MapContext.Provider>
    )
}
