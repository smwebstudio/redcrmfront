'use client'
import React, { createContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import api from '@/hooks/api'

const defaultMapContext = {
    filteredEstates: null,
    filters: null,
    openMap: false,
    toggleMapContainer: async () => {},
}

export const MapContext = createContext(defaultMapContext)

export const MapProvider = ({ children }) => {
    const [filteredEstates, setFilteredEstates] = useState(null)
    const [filters, setFilters] = useState(null)
    const [openMap, setOpenMap] = useState(true)
    const router = useRouter()
    const pathname = usePathname()

    // Define the toggleMapContainer function
    const toggleMapContainer = () => {
        setOpenMap(prevState => !prevState)
    }

    const fetchFilteredEstates = async (coords, lng, endpoint) => {
        try {
            let coordsToSend = encodeURIComponent(JSON.stringify(coords))
            const response = await api(lng).get(
                endpoint + '?fromMap=1&filter[coordinates]=' + coordsToSend,
            )
            setFilteredEstates(response.data.data)
        } catch (error) {
            console.error('Error fetching filtered estates:', error)
        }
    }

    useEffect(() => {}, [pathname])

    return (
        <MapContext.Provider
            value={{
                filteredEstates,
                filters,
                openMap,
                toggleMapContainer,
            }}>
            {children}
        </MapContext.Provider>
    )
}
