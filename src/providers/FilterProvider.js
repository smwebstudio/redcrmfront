'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import api from '@/hooks/api'
import { MapContext } from '@/providers/MapProvider'

const defaultFilterContext = {
    filteredEstates: null,
    filteredMapEstates: null,
    filters: null,
    openFilter: false,
    toggleFilterContainer: async () => {},
    filterEstates: async () => {},
    filterMapEstates: async () => {},
}

export const FilterContext = createContext(defaultFilterContext)

export const FilterProvider = ({ children }) => {
    const { coords } = useContext(MapContext)

    const [filteredEstates, setFilteredEstates] = useState(null)
    const [filteredMapEstates, setFilteredMapEstates] = useState(null)
    const [filters, setFilters] = useState(null)
    const [filterCoords, setFilterCoords] = useState(coords)
    const [filterQueryLink, setFilterQueryLink] = useState(null)
    const [openFilter, setOpenFilter] = useState(true)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        setFilterCoords(coords)
    }, [coords])

    // Define the toggleFilterContainer function
    const toggleFilterContainer = () => {
        setOpenFilter(prevState => !prevState)
    }

    const filterEstates = async (lng, queryLink) => {
        try {
            setFilterQueryLink(queryLink)
            const response = await api(lng).get(
                'api/estates/filter/estates?' + queryLink,
            )
            await filterMapEstates(lng, queryLink)
            setFilteredEstates(response.data)
        } catch (error) {
            console.error('Error fetching filtered estates:', error)
        }
    }

    const filterMapEstates = async (lng, queryLink = filterQueryLink) => {
        try {
            let queryCoords = encodeURIComponent(JSON.stringify(filterCoords))
            const response = await api(lng).get(
                'api/estates/geoFilter/estates?' +
                    '&filter[coordinates]=' +
                    queryCoords +
                    (queryLink ? '&' + queryLink : ''),
            )

            setFilteredMapEstates(response.data.data)
        } catch (error) {
            console.error('Error fetching filtered estates:', error)
        }
    }

    useEffect(() => {}, [pathname])

    return (
        <FilterContext.Provider
            value={{
                filteredEstates,
                filteredMapEstates,
                filters,
                openFilter,
                toggleFilterContainer,
                filterEstates,
                filterMapEstates,
            }}>
            {children}
        </FilterContext.Provider>
    )
}
